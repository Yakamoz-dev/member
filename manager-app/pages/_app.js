import 'antd/dist/antd.css'
import '../styles/vars.css'
import '../styles/global.css'

import { wrapper } from '../store/store'


import React from "react";
import App from "next/app";
import Head from "next/head";
import { AppProvider } from "@shopify/polaris";
import { Provider, Context,Toast,Loading,Modal,TitleBar,ResourcePicker } from "@shopify/app-bridge-react";
import { authenticatedFetch } from "@shopify/app-bridge-utils";
import "@shopify/polaris/dist/styles.css";
import translations from "@shopify/polaris/locales/en.json";
import ClientRouter from "../components/ClientRouter";
// import ApolloClient from "apollo-boost";
// import { ApolloProvider } from "react-apollo";
import {ApolloClient,  InMemoryCache,  createHttpLink,ApolloProvider } from '@apollo/client';

function userLoggedInFetch(app) {
  const fetchFunction = authenticatedFetch(app);

  return async (uri, options) => {
    const response = await fetchFunction(uri, options);

    if (response.headers.get('X-Shopify-API-Request-Failure-Reauthorize') === '1') {
      const authUrlHeader = response.headers.get('X-Shopify-API-Request-Failure-Reauthorize-Url');

      const redirect = Redirect.create(app);
      redirect.dispatch(Redirect.Action.APP, authUrlHeader || `/auth`);
      return null;
    }

    return response;
  };
}

class MyProvider extends React.Component {
  static contextType = Context;

  render() {
    const app = this.context;

    // const client = new ApolloClient({
    //   fetch: authenticatedFetch(app),
    //   fetchOptions: {
    //     credentials: "include",
    //   },
    // });

    const client = new ApolloClient({    
      link: new createHttpLink({
        fetch: userLoggedInFetch(app),
        credentials: "include",
        headers: {
          "Content-Type": "application/graphql",
        },
      }),
      cache: new InMemoryCache(),
    });

    return (
      <ApolloProvider client={client}>{this.props.children}</ApolloProvider>
    );
  }
}

class MyApp extends App {
  state = {
    showToast: false,
    open:false
  }

  dismissToast = () => {
    this.setState({showToast: false});
  };

  render() {
    const { Component, pageProps, shopOrigin } = this.props;

    const config = { apiKey: API_KEY, shopOrigin, forceRedirect: true };

    const modalPrimaryAction = {content:'yes',disabled:false,onAction:()=>{console.log('1111')}}
    
    const modalSecondaryActions = [{content:'no',disabled:false,onAction:()=>{console.log('22222')}}]

    const primaryAction = {content:'Toast',onAction:()=>{this.setState({showToast: true})}}
    const secondaryActions = [{content:'picker',onAction:()=>{this.setState({open: true})}}]

    return (
      <React.Fragment>
        <Head>
          <title>Sample App</title>
          <meta charSet="utf-8" />
        </Head>
        <Provider config={config}>
          <ClientRouter />
          <AppProvider i18n={translations}>
            <MyProvider>
              <Component {...pageProps} />
              {this.state.showToast ? (
                <Toast content="Hello world!" onDismiss={this.dismissToast} />
              ) : null}
              <Loading />
              <Modal title="My modal" message="Hello world!" open size="Small"  onClose={()=>console.log(123)} primaryAction={modalPrimaryAction} secondaryActions={modalSecondaryActions} />
              <TitleBar
                title="showToast"
                primaryAction={primaryAction}
                secondaryActions={secondaryActions}
              />
              <ResourcePicker resourceType="Product" open={this.state.open} />
            </MyProvider>
          </AppProvider>
        </Provider>
      </React.Fragment>
    );
  }
}

MyApp.getInitialProps = async ({ ctx }) => {
  return {
    shopOrigin: ctx.query.shop,
  };
};





export default wrapper.withRedux(MyApp)
