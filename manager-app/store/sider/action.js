export const chooseSiderItem = {
    CHOOSESIDER: 'CHOOSESIDER',
  }
  
  export const chooseSider = (ckey) => (dispatch) => {
    return dispatch({ type: chooseSiderItem.CHOOSESIDER,payload:ckey })
  }
  