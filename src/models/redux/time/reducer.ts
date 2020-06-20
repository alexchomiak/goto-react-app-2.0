import { TimeObject } from '@interfaces/TimeObject'
import { TimeActionTypes, SET_TIME } from './types'

// * Type for the TimeState
export interface TimeState {
  currentTime: TimeObject
}

// * Default values for the Time reducer
let initialState: TimeState = {
  currentTime: {
    timezone: '',
    unixtime: 0,
    datetime: ''
  }
}

export const TimeReducer = (state = initialState, action: TimeActionTypes) => {
  switch (action.type) {
    case SET_TIME:
      // * Update state
      return { ...state, currentTime: action.payload }
    default:
      return state
  }
}