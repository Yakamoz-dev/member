import gql from "graphql-tag";
//创建礼品卡的graphql语句
const GIFT_CARD_CREATE = gql`
    mutation giftCardCreate($input: GiftCardCreateInput!) {
    giftCardCreate(input: $input){
        giftCard{ 
        createdAt      
        }
        giftCardCode
        userErrors{
        code
        field
        }
    }
}
`;
//更新礼品卡的graphql语句
const GIFT_CARD_UPDATE = gql`
mutation giftCardUpdate($id: ID!, $input: GiftCardUpdateInput!) {
  giftCardUpdate(id: $id, input: $input){
    giftCard{
      id
      maskedCode
      createdAt  
      expiresOn
    }
    userErrors{
      field
    }
  }
}
`
//禁用礼品卡的graphql语句
const GIFT_CARD_DISABLE = gql`
mutation giftCardDisable($id: ID!) {
  giftCardDisable(id: $id){
    giftCard{
      id
      maskedCode
      createdAt  
      expiresOn
    }
    userErrors{
      field
    }
  }
}
`
//获取礼品卡列表的graphql语句
const GET_GIFT_LIST = gql`
query {
  giftCards(first: 5) {
    edges {
      node {
        id
      }
    }
  }
}
`;



export default {
    GIFT_CARD_CREATE,
    GET_GIFT_LIST,
    GIFT_CARD_UPDATE,
    GIFT_CARD_DISABLE
}