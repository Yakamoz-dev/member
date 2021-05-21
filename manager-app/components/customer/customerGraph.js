import gql from "graphql-tag";
//获取用户列表
const GIFT_CARD_CREATE = gql`
    query getCustomer($first:Int){
    customers(first: $first) {
        edges {
        node {
            id
            displayName
        }
        }
    }
    }
`;