import React from "react";
import { gql, useQuery,useMutation } from '@apollo/client';
import { Context } from "@shopify/app-bridge-react";

import {default as giftCard} from './giftCardGraph'



const GiftList = () => {
    //页面进入即获取礼品卡列表
    const { data, loading, error, networkStatus } = useQuery(giftCard.GET_GIFT_LIST);
    //新的礼品卡
    const [giftCreate,{loading: mutationLoading, error: mutationError,data:mutationData}] = useMutation(giftCard.GIFT_CARD_CREATE)
    console.log('networkStatus', networkStatus);
    console.log('loading', loading);
    console.log('error', error);
    console.log('data', data);
    return (
      <>
        {data&&<p>get giftlist ok</p>}
        {/* 点击创建新的礼品卡，价值为当前店铺币值标准10 */}
        <div onClick={()=>{giftCreate({variables:{"input": {"initialValue" : 10}}}) }}>
           
            giftCardCreate
        </div>
      </>
    )
  }
  
  
export default GiftList

// function giftCardCreate(){
//     const [giftCreate,{data}] = useMutation(GIFT_CARD_CREATE)

//     return (
//         <div onClick={giftCreate({variables:{"input": {
//             "initialValue" : 100
//           } }   })}>
//             {data && <div>123321123321 : {data}</div>}
//             giftCardCreate
//         </div>
//     )
// }


// export default giftCardCreate;
