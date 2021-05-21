// import React from "react";
// import gql from "graphql-tag";
// import { useQuery} from "react-apollo";

// import { Context } from "@shopify/app-bridge-react";

// const GET_PRODUCTS_BY_ID = gql`
// query getOrder{
//   order(id:"gid://shopify/Order/3775374295232") {
//     id
//     alerts {
//       content
//       dismissibleHandle
//       icon
//       severity
//       title
//     }
//     billingAddress {
//       address1
//       address2
//       city
//       company
//       country
//       countryCode
//       countryCodeV2
//       firstName
//       formatted(withCompany: false, withName: false)
//       formattedArea
//       latitude
//       longitude
//       name
//       phone
//       province
//       provinceCode
//       zip
//     }
//     updatedAt
//     unpaid
//     totalWeight
//     totalTax
//     totalShippingPrice
//     totalRefunded
//     totalReceived
//     totalPrice
//     totalDiscounts
//     totalCapturable
//     test
//     taxesIncluded
//     tags
//     subtotalPrice
//     subtotalLineItemsQuantity
//     riskLevel
//     restockable
//     requiresShipping
//     refundable
//     referrerUrl
//     referrerDisplayText
//     referralCode
//     processedAt
//     phone
//     paymentGatewayNames
//     note
//     netPayment
//     name
//     merchantEditableErrors
//     merchantEditable
//     location
//   }
// }
// `;
// function GiftCards() {
//     const { loading, error, data } = useQuery(GET_PRODUCTS_BY_ID);
  
//     if (loading) return 'Loading...';
//     if (error) return `Error! ${error.message}`;
  
//     console.log(data);
//     return (
//         <div>123333</div>
//     );
//   }


// export default GiftCards;



// import { gql, useQuery } from '@apollo/client';

// const GET_PRODUCTS = gql`
// query {
//   giftCards(first: 5) {
//     edges {
//       node {
//         id
//       }
//     }
//   }
// }
// `;

// const ProductsList = () => {
//   const { data, loading, error, networkStatus } = useQuery(GET_PRODUCTS);

//   console.log('networkStatus', networkStatus);
//   console.log('loading', loading);
//   console.log('error', error);
//   console.log('data', data);
//   return (
//       <p>test</p>
//   )
// }


// export default ProductsList


import React from "react";
import { gql, useQuery,useMutation } from '@apollo/client';
import { Context } from "@shopify/app-bridge-react";

  const CREATE_TAG = gql`
    mutation scriptTagCreate($input: ScriptTagInput!) {
      scriptTagCreate(input: $input) {
        scriptTag {
          id
        }
        userErrors {
          field
          message
        }
      }
    }
  `;



  const TagCreate = () => {
      //新的
      const [TagCreate,{loading: mutationLoading, error: mutationError,data:mutationData}] = useMutation(CREATE_TAG)
      
      console.log('loading', mutationLoading);
      console.log('error', mutationError);
      console.log('data', mutationData);
      
      return (
        <>
          {/* 点击创建新scriptTag*/}
          <div onClick={()=>{TagCreate({variables:{

              "input": {
                "src":"https://12536f8e52a5.ngrok.io/sriptTag",   //远程脚本的URL
                "displayScope": "ALL", //在线商店中应包含脚本的页面
                "cache": false  //Shopify CDN是否可以缓存并提供脚本标签
              }

              }}) }}>
            
            TagCreate
          </div>
        </>
      )
    }
  
  
export default TagCreate