/*
 * File: /src/views/Home.tsx
 * File Created: Wednesday, 11th December 2019 11:28:51 pm
 * Author: Alex Chomiak
 *
 * Last Modified: Sunday, 5th January 2020 4:43:03 pm
 * Modified By: Alex Chomiak 
 *
 * Author Github: https://github.com/alexchomiak
 */

import React, { FC } from 'react'
import { Page } from '@components/Page'
import Atom from '@assets/Atom.gif'
export const Home: FC = () => {
    return (
        <Page className="home">
            <img className="atom" src={Atom}></img>
            <h1>GoTo React App 2.0</h1>
            <p>
                <a href="https://github.com/alexchomiak/goto-react-app-2.0">https://github.com/alexchomiak/goto-react-app-2.0</a>
            </p>
        </Page>
    )
}
