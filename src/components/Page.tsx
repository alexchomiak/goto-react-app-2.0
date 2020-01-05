/*
 * File: /src/components/Page.tsx
 * File Created: Monday, 23rd December 2019 12:55:54 pm
 * Author: Alex Chomiak
 *
 * Last Modified: Sunday, 5th January 2020 12:53:21 am
 * Modified By: Alex Chomiak 
 *
 * Author Github: https://github.com/alexchomiak
 */

import React, { FC } from 'react'
import { PageProps } from '@interfaces/Page'

export const Page: FC<PageProps> = props => {
    const { className } = props
    return <div className={`page ${className}`}> {props.children}</div>
}
