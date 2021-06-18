import gql from "graphql-tag";
import { gql, useQuery,useMutation } from '@apollo/client';
//获取用户列表
const GIFT_CARD_CREATE = gql`
    query{
    shop {
        id
    }
}
`;



const GiftList = () => {
  //页面进入即获取礼品卡列表
  const { data, loading, error, networkStatus } = useQuery(GIFT_CARD_CREATE);
  
  console.log('networkStatus', networkStatus);
  console.log('loading', loading);
  console.log('error', error);
  console.log('data', data);
  return (
    <>
      {data&&<p>get  ok</p>}
    </>
  )
}

export default GiftList
