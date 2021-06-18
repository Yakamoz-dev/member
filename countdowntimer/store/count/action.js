export const countActionTypes = {
  NAME: 'NAME',
  BEFORTIMER: 'BEFORTIMER',
  AFTERTIMER: 'AFTERTIMER',
  BUTTONVALUE: 'BUTTONVALUE',
  ACTIONURL: 'ACTIONURL',
  ICONACTIVE: 'ICONACTIVE',
  BUTIONACTIVE: 'BUTIONACTIVE',
  TIMERADR: 'TIMERADR',
  BASETIME: 'BASETIME',
  PAGEADR: 'PAGEADR',
  TIMERBARBACKGROUND: 'TIMERBARBACKGROUND',
  TIMERBARFONT: 'TIMERBARFONT',
  BUTTONBACKGROUND: 'BUTTONBACKGROUND',
  BUTTONFONT: 'BUTTONFONT',
  TIMEBACKGROUND: 'TIMEBACKGROUND',
  TIMEFONT: 'TIMEFONT',
  ID:'ID'
}
export const changeId = (id) => (dispatch) => {
  return dispatch({ type: countActionTypes.ID, payload: id })
}
export const changeName = (name) => (dispatch) => {
  return dispatch({ type: countActionTypes.NAME, payload: name })
}

export const changeBeforTimer = (beforTimer) => (dispatch) => {
  return dispatch({ type: countActionTypes.BEFORTIMER, payload: beforTimer })
}

export const changeAfterTimer = (afterTimer) => (dispatch) => {
  return dispatch({ type: countActionTypes.AFTERTIMER, payload: afterTimer })
}

export const changeButtonValue = (buttonValue) => (dispatch) => {
  return dispatch({ type: countActionTypes.BUTTONVALUE, payload: buttonValue })
}
export const changeActionUrl = (actionUrl) => (dispatch) => {
  return dispatch({ type: countActionTypes.ACTIONURL, payload: actionUrl })
}
export const changeIconActive = (iconActive) => (dispatch) => {
  return dispatch({ type: countActionTypes.ICONACTIVE, payload: iconActive })
}
export const changeButionActive = (butionActive) => (dispatch) => {
  return dispatch({ type: countActionTypes.BUTIONACTIVE, payload: butionActive })
}
export const changeTimerAdr = (timerAdr) => (dispatch) => {
  return dispatch({ type: countActionTypes.TIMERADR, payload: timerAdr })
}
export const changeBaseTime = (baseTime) => (dispatch) => {
  return dispatch({ type: countActionTypes.BASETIME, payload: baseTime })
}
export const changePageAdr = (pageAdr) => (dispatch) => {
  return dispatch({ type: countActionTypes.PAGEADR, payload: pageAdr })
}
export const changeTimerBarBackground = (timerBarBackground) => (dispatch) => {
  return dispatch({ type: countActionTypes.TIMERBARBACKGROUND, payload: timerBarBackground })
}
export const changeTimerBarFont = (timerBarFont) => (dispatch) => {
  return dispatch({ type: countActionTypes.TIMERBARFONT, payload: timerBarFont })
}
export const changeTimeBackground = (timeBackground) => (dispatch) => {
  return dispatch({ type: countActionTypes.TIMEBACKGROUND, payload: timeBackground })
}
export const changeTimeFont = (timeFont) => (dispatch) => {
  return dispatch({ type: countActionTypes.TIMEFONT, payload: timeFont })
}
export const changeButtonBackground = (buttonBackground) => (dispatch) => {
  return dispatch({ type: countActionTypes.BUTTONBACKGROUND, payload: buttonBackground })
}
export const changeButtonFont = (buttonFont) => (dispatch) => {
  return dispatch({ type: countActionTypes.BUTTONFONT, payload: buttonFont })
}