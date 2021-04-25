import axios from 'axios'
 import { CHANGE_STATUS} from './actionType'
 
//  export const initListAction = (data)=>({
//      type: INIT_LIST_ACTION,
//      data
//  })
 
//  export const deleteItem =(value)=>({
//      type:DELETE_ITEM,
//      value
//  })
//  export const additem =(value)=>({
//      type:ADD_ITEM,
//      value
//  })
 
//  export const changeValue =(value)=>({
//      type:CHANGE_INPUT_VALUE,
//      value
//  })

 export const changeStatus = (value) => ({
     type:CHANGE_STATUS,
     value
 })


 
//  export const getTodoList=()=>{
//      return(dispatch)=>{
//          axios.get('./list.json').then((res)=>{
//              const data=res.data
//              const action =initListAction(data)
//              dispatch(action);
//          })
//      }
//  }