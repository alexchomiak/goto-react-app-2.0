/*
 * File: /src/models/actions/time.ts
 * File Created: Thursday, 12th December 2019 12:39:37 am
 * Author: Alex Chomiak
 *
 * Last Modified: Sunday, 5th January 2020 4:36:48 pm
 * Modified By: Alex Chomiak 
 *
 * Author Github: https://github.com/alexchomiak
 */

import { Action, ThunkActionCreator } from './action'

export const updateTime: ThunkActionCreator = async dispatch => {
    console.log('Updating time')
    // * Retrieve Time data
    const timeData = await (await fetch('https://worldtimeapi.org/api/ip')).json()
    console.log('Dispatching', timeData)
    // * Create action object
    const action: Action = {
        type: 'UPDATE_TIME',
        payload: timeData
    }

    // * Dispatch action to store
    dispatch(action)
}
