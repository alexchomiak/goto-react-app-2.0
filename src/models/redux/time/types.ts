import { Action } from 'redux'
import { TimeObject } from '@interfaces/TimeObject'

export const SET_TIME = 'UPDATE_TIME'

interface UpdateTimeAction extends Action {
  type: typeof SET_TIME
  payload: TimeObject
}

export type TimeActionTypes = | UpdateTimeAction

// * Add more actions here as such
// export type TimeActionTypes = 
//     | UpdateTimeAction
//     | UpdateTimeAction


