require('isomorphic-fetch');
const dotenv = require('dotenv');
const Koa = require('koa');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const { default: Shopify, ApiVersion } = require('@shopify/shopify-api');
const Router = require('koa-router');
const body =  require('koa-bodyparser');

// const getSubscriptionUrl = require("./server/getSubscriptionUrl");

const fs = require('fs')


dotenv.config();

Shopify.Context.initialize({
  API_KEY: process.env.SHOPIFY_API_KEY,
  API_SECRET_KEY: process.env.SHOPIFY_API_SECRET,
  SCOPES: process.env.SHOPIFY_API_SCOPES.split(","),
  HOST_NAME: process.env.SHOPIFY_APP_URL.replace(/https:\/\//, ""),
  API_VERSION: ApiVersion.April21,
  IS_EMBEDDED_APP: true,
  SESSION_STORAGE: new Shopify.Session.MemorySessionStorage(),
});

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const ACTIVE_SHOPIFY_SHOPS = {};



app.prepare().then(() => {
    const server = new Koa();
    const router = new Router();
    server.keys = [Shopify.Context.API_SECRET_KEY];

    server.use(
        createShopifyAuth({
          async afterAuth(ctx) {
            const { shop, scope,accessToken } = ctx.state.shopify;
            ACTIVE_SHOPIFY_SHOPS[shop] = scope;

            const registration = await Shopify.Webhooks.Registry.register({
            shop,
            accessToken,
            path: '/webhooks',
            topic: 'APP_UNINSTALLED',
            apiVersion: ApiVersion.April21,
            webhookHandler: (_topic, shop, _body) => {
              console.log('App uninstalled');
              delete ACTIVE_SHOPIFY_SHOPS[shop];
            },
          });

          const registration2 = await Shopify.Webhooks.Registry.register({
            shop,
            accessToken,
            path: '/webhooks/orders/create',
            topic: 'ORDERS_CREATE',
            apiVersion: ApiVersion.April21,
            webhookHandler: (_topic, shop, _body) => {
              console.log('App unORDERS_CREATE');
              console.log(_body);
              delete ACTIVE_SHOPIFY_SHOPS[shop];
            },
          });


          if (registration2.success) {
            console.log('Successfully registered webhook!');
          } else {
            console.log('Failed to register webhook', registration2.result);
          }
          


          if (registration.success) {
            console.log('Successfully registered webhook!');
          } else {
            console.log('Failed to register webhook', registration.result);
          }

          //  const returnUrl = `https://${Shopify.Context.HOST_NAME}?shop=${shop}`;
          //   const subscriptionUrl = await getSubscriptionUrl(
          //     accessToken,
          //     shop,
          //     returnUrl
          //   );
            // ctx.redirect(`https://${Shopify.Context.HOST_NAME}?shop=${shop}`);
            ctx.redirect(`/?shop=${shop}`);
          },
        }),
      );

    router.post("/graphql", verifyRequest(), async (ctx, next) => {
      await Shopify.Utils.graphqlProxy(ctx.req, ctx.res);
    });

  
    const handleRequest = async (ctx) => {
        await handle(ctx.req, ctx.res);
        ctx.respond = false;
        ctx.res.statusCode = 200;
    };

    // router.get('/scriptTag', async (ctx, next) => {
    //   // const cb = await fs.readFileSync('./scriptTag.js')
    //   ctx.response.body = fs.createReadStream('./lib/scriptTag.html')

    //   // console.log(cb)
    // })

    
    

    
    router.get('/orderdeta', async (ctx, next) => {
      console.log('221');
      let url = ctx.url;
      let request = ctx.request;
      let req_query = request.query;
      let req_queryString = request.queryString;
  
      ctx.body={
          url,
          req_query,
          req_queryString
      }
    })
    router.get('/orderaction', async (ctx, next) => {
      console.log('113');
      let url = ctx.url;
      let request = ctx.request;
      let req_query = request.query;
      let req_queryString = request.queryString;
  
      ctx.body={
          url,
          req_query,
          req_queryString
      }
    })
    router.get('/orderdraft', async (ctx, next) => {
      console.log('331');
      let url = ctx.url;
      let request = ctx.request;
      let req_query = request.query;
      let req_queryString = request.queryString;
  
      ctx.body={
          url,
          req_query,
          req_queryString
      }
    })


    //webhook
    // router.post('/getorder', async (ctx, next) => {
    //   const rb =  ctx.request.body
    //   console.log(rb);
    // })

    router.get("/", async (ctx) => {
        const shop = ctx.query.shop;
    
        if (ACTIVE_SHOPIFY_SHOPS[shop] === undefined) {
          ctx.redirect(`/auth?shop=${shop}`);
        } else {
          await handleRequest(ctx);
        }
      });
    
    router.post('/webhooks', async (ctx) => {
      await Shopify.Webhooks.Registry.process(ctx.req, ctx.res);
      console.log(`Webhook processed with status code 200`);
    });

    router.post('/webhooks/orders/create', async (ctx) => {
      await Shopify.Webhooks.Registry.process(ctx.req, ctx.res);
      console.log(`Webhook processed with status code 200`);
    });

    router.get("(/_next/static/.*)", handleRequest);
    router.get("/_next/webpack-hmr", handleRequest);
    router.get("(.*)", verifyRequest(), handleRequest);

    // server.use(body());
    server.use(router.allowedMethods());
    server.use(router.routes());
    server.use(body());

    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
      });
});