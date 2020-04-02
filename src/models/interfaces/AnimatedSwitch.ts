/*
 * File: /src/models/interfaces/RouteInterface.ts
 * File Created: Monday, 23rd December 2019 1:34:34 pm
 * Author: Alex Chomiak
 *
 * Last Modified: Friday, 3rd January 2020 12:35:46 pm
 * Modified By: Alex Chomiak
 *
 * Author Github: https://github.com/alexchomiak
 */
import { ReactType } from 'react'

export interface AnimatedSwitchProps {
    routes: PageRoute[]
    children?: ReactType
    className?: string
}

export interface PageRoute {
    path: string
    navpath?: string
    Component: ReactType
    name: string
}
