import "@babel/polyfill";
import dotenv from "dotenv";
import "isomorphic-fetch";
import createShopifyAuth, { verifyRequest } from "@shopify/koa-shopify-auth";
import Shopify, { ApiVersion } from "@shopify/shopify-api";
import Koa from "koa";
import next from "next";
import Router from "koa-router";
const body =  require('koa-bodyparser');
const axios = require('axios');
const fs = require('fs')

dotenv.config();
const port = parseInt(process.env.PORT, 10) || 8081;
const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
});
const handle = app.getRequestHandler();

Shopify.Context.initialize({
  API_KEY: process.env.SHOPIFY_API_KEY,
  API_SECRET_KEY: process.env.SHOPIFY_API_SECRET,
  SCOPES: process.env.SCOPES.split(","),
  HOST_NAME: process.env.HOST.replace(/https:\/\//, ""),
  API_VERSION: ApiVersion.April21,
  IS_EMBEDDED_APP: true,
  // This should be replaced with your preferred storage strategy
  SESSION_STORAGE: new Shopify.Session.MemorySessionStorage(),
});

// Storing the currently active shops in memory will force them to re-login when your server restarts. You should
// persist this object in your app.
const ACTIVE_SHOPIFY_SHOPS = {};

app.prepare().then(async () => {
  const server = new Koa();
  const router = new Router();
  server.keys = [Shopify.Context.API_SECRET_KEY];
  server.use(
    createShopifyAuth({
      async afterAuth(ctx) {
        // Access token and shop available in ctx.state.shopify
        const { shop, accessToken, scope } = ctx.state.shopify;
        const host = ctx.query.host;
        ACTIVE_SHOPIFY_SHOPS[shop] = scope;

            // ctx.cookies.set('shopOrigin', shop, {
            //   httpOnly: false,
            //   secure: true,
            //   sameSite: 'none',
            // });
            ctx.cookies.set('accessToken', accessToken, {
              httpOnly: false,
              secure: true,
              sameSite: 'none',
            });

        const response = await Shopify.Webhooks.Registry.register({
          shop,
          accessToken,
          path: "/webhooks",
          topic: "APP_UNINSTALLED",
          webhookHandler: async (topic, shop, body) =>
            delete ACTIVE_SHOPIFY_SHOPS[shop],
        });

        if (!response.success) {
          console.log(
            `Failed to register APP_UNINSTALLED webhook: ${response.result}`
          );
        }

        // Redirect to app with shop parameter upon auth
        ctx.redirect(`/?shop=${shop}&host=${host}`);
      },
    })
  );

  const handleRequest = async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
  };


  router.get('/api', async (ctx) => {
       
    // const shopOrigin = ctx.cookies.get('shopOrigin');
    // const accessToken = ctx.cookies.get('accessToken');
    const accessToken = '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';
    const request = ctx.query.use;
    
    // console.log(ctx.params)
    // console.log(ctx.query)
    const url = `https://try-mana.myshopify.com/admin/api/2021-04/${request}`;
    // console.log(url);
    // console.log(accessToken);

    try {
      const results = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Shopify-Access-Token': accessToken,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log('8890',JSON.stringify(json));
          return json;
        });

      ctx.body = results;
      ctx.res.statusCode = 200;
    } catch (err) {
      ctx.body = 'Fail to fetch data!';
      ctx.res.statusCode = 500;
      console.log(err);
    }
  });

  router.post('/api', async (ctx) => {
      
    const accessToken = ctx.cookies.get('accessToken');
    console.log('11111111',accessToken)
    // const accessToken = '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';
    const request = ctx.query.use;
    const url = `https://try-mana.myshopify.com/admin/api/2021-04/${request}`;
    console.log(ctx.query)
    if(ctx.query.type == 1){
      console.log('99999999999')
      var js =  await fs.readFileSync('./assets/flipdown.js','utf-8')
      var css = await fs.readFileSync('./assets/flipdown.css','utf-8')
      let dataBaseJs = {
        "asset": {
          "key": "assets/timerDown.js",
          "value": js
        }
      }
      let dataBaseCss = {
        "asset": {
          "key": "assets/timerDown.css",
          "value": css
        }
      }
      // const request_data = ctx.request.body
      // dataBase=JSON.stringify(dataBase)
      // console.log(dataBase)
      // console.log(ctx.query)
      
      const resultJs = await axios.put(url,dataBaseJs, {
          headers: {
              'Content-Type': 'application/json',
              'X-Shopify-Access-Token': accessToken
          }, 
          dataType:'json'     
      })      
      .then((res) => {
        console.log('response sdfsfdsfdsfdsfs',res.data.asset)
        return res.data.asset;
        
      })
      .catch((error) => {
        console.log('error sdfsfsddfsfsf',error.response)
  
      })
      const resultCss = await axios.put(url,dataBaseCss, {
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': accessToken
        }, 
        dataType:'json'     
    })      
    .then((res) => {
      console.log('response ccccccccccc',res.data.asset)
      return res.data.asset;
      
    })
    .catch((error) => {
      console.log('error ccccccccc',error.response)
  
    })
  
        ctx.body = [resultJs,resultCss];
        ctx.res.statusCode = 200;
  
    }else{
      console.log('777777777777')
      const request_data = ctx.request.body
      const result = await axios.put(url,request_data, {
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': accessToken
        }, 
        dataType:'json'     
    })      
    .then((res) => {
      console.log('response',res.data.asset)
      return res.data.asset;
      
    })
    .catch((error) => {
      console.log('error',error.response)
  
    })
  
        ctx.body = result;
        ctx.res.statusCode = 200;
    }
    
  });

  router.get("/", async (ctx) => {
    const shop = ctx.query.shop;
    // This shop hasn't been seen yet, go through OAuth to create a session
    if (ACTIVE_SHOPIFY_SHOPS[shop] === undefined) {
      ctx.redirect(`/auth?shop=${shop}`);
    } else {
      await handleRequest(ctx);
    }
  });

  router.post("/webhooks", async (ctx) => {
    try {
      await Shopify.Webhooks.Registry.process(ctx.req, ctx.res);
      console.log(`Webhook processed, returned status code 200`);
    } catch (error) {
      console.log(`Failed to process webhook: ${error}`);
    }
  });

  router.post(
    "/graphql",
    verifyRequest({ returnHeader: true }),
    async (ctx, next) => {
      await Shopify.Utils.graphqlProxy(ctx.req, ctx.res);
    }
  );

  router.get("(/_next/static/.*)", handleRequest); // Static content is clear
  router.get("/_next/webpack-hmr", handleRequest); // Webpack content is clear
  router.get("(.*)", verifyRequest(), handleRequest); // Everything else must have sessions

  server.use(body())
  server.use(router.allowedMethods());
  server.use(router.routes());
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
