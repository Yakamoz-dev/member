import { countActionTypes } from './action'

const countInitialState = {
  count: 0,
  name: '第一个倒计时',
  beforTimer: '',
  afterTimer: '',
  buttonValue: '',
  actionUrl: '',
  iconActive: false,
  butionActive: '',
  timerAdr: '',
  baseTime: '',
  pageAdr: '',
  timerBarBackground: '',
  timerBarFont: '',
  buttonBackground: '',
  buttonFont: '',
  timeBackground: '',
  timeFont: '',
  id:''
}

export default function reducer(state = countInitialState, action) {
  switch (action.type) {
    case countActionTypes.ID:
      return Object.assign({}, state, {
        id: action.payload,
      })
    case countActionTypes.NAME:
      return Object.assign({}, state, {
        name: action.payload,
      })
    case countActionTypes.BEFORTIMER:
      return Object.assign({}, state, {
        beforTimer: action.payload,
      })
    case countActionTypes.AFTERTIMER:
      return Object.assign({}, state, {
        afterTimer: action.payload,
      })
    case countActionTypes.BUTTONVALUE:
      return Object.assign({}, state, {
        buttonValue: action.payload,
      })
    case countActionTypes.ACTIONURL:
      return Object.assign({}, state, {
        actionUrl: action.payload,
      })
    case countActionTypes.ICONACTIVE:
      return Object.assign({}, state, {
        iconActive: action.payload,
      })
    case countActionTypes.BUTIONACTIVE:
      return Object.assign({}, state, {
        butionActive: action.payload,
      })
    case countActionTypes.TIMERADR:
      return Object.assign({}, state, {
        timerAdr: action.payload,
      })
    case countActionTypes.BASETIME:
      return Object.assign({}, state, {
        baseTime: action.payload,
      })
    case countActionTypes.PAGEADR:
      return Object.assign({}, state, {
        pageAdr: action.payload,
      })
    case countActionTypes.TIMERBARBACKGROUND:
      return Object.assign({}, state, {
        timerBarBackground: action.payload,
      })
    case countActionTypes.TIMERBARFONT:
      return Object.assign({}, state, {
        timerBarFont: action.payload,
      })
    case countActionTypes.TIMEBACKGROUND:
      return Object.assign({}, state, {
        timeBackground: action.payload,
      })
    case countActionTypes.TIMEFONT:
      return Object.assign({}, state, {
        timeFont: action.payload,
      })
    case countActionTypes.BUTTONBACKGROUND:
      return Object.assign({}, state, {
        buttonBackground: action.payload,
      })
    case countActionTypes.BUTTONFONT:
      return Object.assign({}, state, {
        buttonFont: action.payload,
      })
    default:
      return state
  }
}
