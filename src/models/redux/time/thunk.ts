import { AppThunk } from '..';
import { setTime } from './actions';
import { TimeObject } from '@interfaces/TimeObject';

export const updateTime = (): AppThunk => async (dispatch, getState) => {
  console.log("Updating Time")

  // * Retrieve Time data
  const response = await (await fetch('https://worldtimeapi.org/api/ip')).json()

  const data: TimeObject = {
    timezone: response.timezone,
    unixtime: response.unixtime,
    datetime: response.utc_datetime
  }

  dispatch(setTime(data))
}