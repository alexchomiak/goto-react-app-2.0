/*
 * File: /src/components/Header.tsx
 * File Created: Wednesday, 11th December 2019 11:44:52 pm
 * Author: Alex Chomiak
 *
 * Last Modified: Sunday, 5th January 2020 12:49:16 am
 * Modified By: Alex Chomiak 
 *
 * Author Github: https://github.com/alexchomiak
 */

import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { State } from '@redux/store'
import { updateTime } from '@actions/time'
import Logo from '@assets/Logo.png'
import { TimeObject } from '@interfaces/TimeObject'
import { NavBar } from './NavBar'
import { PageRoute } from '@interfaces/AnimatedSwitch'
export const Header: FC<{ pages: PageRoute[] }> = ({ pages }: { pages: PageRoute[] }) => {
    // * Retrieve Current Time From Redux Store
    const time: TimeObject = useSelector((state: State) => state.time.currentTime)
    const dispatch = useDispatch()

    useEffect(() => {
        // ! Note: useEffect emulates componentDidMount, componentDidUpdate, and componentWillUnmount
        if (time.unixtime == 0) {
            dispatch(updateTime)
        } else {
            // * Dispatch Update for time every 5 seconds
            setTimeout(() => {
                // * This is just an example of how to integrate a redux store / use api requests
                // * Look through the redux code in the models directory and see the setup and how to
                // * Link data to your react components.
                dispatch(updateTime)
            }, 5000)
        }

        // ! Note: Return from useEffect emulates componentWillUnmount
        return () => {
            // * Unmount logic (unsubscriptions, cleanup)
        }
    }, [time]) // * Second argument to useEffect is the filter
    // * That way, useEffect will only be called when time is changed

    return (
        <div className="header">
            <img className="goto-logo" src={Logo} />
            <div className="header-text">
                <div className="header-title">
                    <h1>GoTo React App</h1>
                    <p>
                        {time.timezone} - {time.datetime}
                    </p>
                </div>
            </div>
            <NavBar pages={pages} />
        </div>
    )
}

export default Header
