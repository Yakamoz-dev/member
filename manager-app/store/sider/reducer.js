import { chooseSiderItem } from './action'

const countInitialState = {
  key: '1',
}

export default function reducer(state = countInitialState, action) {
  switch (action.type) {
    case chooseSiderItem.CHOOSESIDER:
      return Object.assign({}, state, {
        key: action.payload,
      })
    default:
      return state
  }
}
