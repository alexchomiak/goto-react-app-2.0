/*
 * File: /src/components/NavBar.tsx
 * File Created: Monday, 23rd December 2019 11:06:27 am
 * Author: Alex Chomiak
 *
 * Last Modified: Sunday, 5th January 2020 12:58:29 am
 * Modified By: Alex Chomiak 
 * Last Modified: Sunday, 5th January 2020 12:58:29 am
 * Modified By: Alex Chomiak 
 */

import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { PageRoute } from '@interfaces/AnimatedSwitch'

// * Simple navbar component that takes in an array of page routes and displays them
export const NavBar: FC<{ pages: PageRoute[] }> = ({ pages }: { pages: PageRoute[] }) => {
    return (
        <nav className="nav-bar">
            {pages.map(({ navpath, path, name }) => (
                <NavLink key={path} exact className="nav-bar-link" activeClassName="nav-bar-link--active" to={navpath ? navpath : path}>
                    {name}
                </NavLink>
            ))}
        </nav>
    )
}
