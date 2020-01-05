/*
 * File: /src/pages/Fork.tsx
 * File Created: Friday, 3rd January 2020 9:58:51 am
 * Author: Alex Chomiak
 *
 * Last Modified: Sunday, 5th January 2020 4:43:03 pm
 * Modified By: Alex Chomiak 
 *
 * Author Github: https://github.com/alexchomiak
 */

import React, { FC } from 'react'
import { Page } from '@components/Page'
import Git from '@assets/Git.png'
export const Fork: FC = () => {
    return (
        <Page className="fork">
            <section>
                <h1>
                    <a href="https://github.com/alexchomiak">
                        <img className="git" src={Git} />
                    </a>
                    Fork this Project on Github!
                </h1>
                <p>Branch off and create a better GoTo React application for the community!</p>
                <p className="star">
                    <a href="https://github.com/alexchomiak/goto-react-app-2.0"> Please leave a star on the repo! :) </a>
                </p>
            </section>
        </Page>
    )
}
