import { TimeActionTypes, SET_TIME } from './types'
import { TimeObject } from '@interfaces/TimeObject'

export const setTime = (timedata: TimeObject): TimeActionTypes => ({
  type: SET_TIME,
  payload: timedata
})