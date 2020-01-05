/*
 * File: /src/models/reducers/time.ts
 * File Created: Thursday, 12th December 2019 12:15:59 am
 * Author: Alex Chomiak
 *
 * Last Modified: Monday, 23rd December 2019 10:41:58 am
 * Modified By: Alex Chomiak 
 *
 * Author Github: https://github.com/alexchomiak
 */

import { Reducer } from './reducer'

import { TimeObject } from '@interfaces/TimeObject'

export interface timeState {
    currentTime: TimeObject
}

let initialState: timeState = {
    currentTime: {
        timezone: '',
        unixtime: 0,
        datetime: ''
    }
}

export const time: Reducer<timeState> = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_TIME':
            // * Construct new time from API data
            const newTime: TimeObject = {
                timezone: action.payload.timezone,
                unixtime: action.payload.unixtime,
                datetime: action.payload.utc_datetime
            }

            // * Set state
            return { ...state, currentTime: newTime }
        default:
            return state
    }
}
