/*
 * File: /src/views/Help.tsx
 * File Created: Wednesday, 11th December 2019 11:43:28 pm
 * Author: Alex Chomiak
 *
 * Last Modified: Friday, 3rd January 2020 1:15:29 pm
 * Modified By: Alex Chomiak 
 *
 * Author Github: https://github.com/alexchomiak
 */

import React, { FC } from 'react'
import { Page } from '@components/Page'
import Hat from '@assets/ConstructionHat.png'
export const Setup: FC = () => {
    return (
        <Page className="setup">
            <h1>
                <img className="hat" src={Hat}></img>
                Setting up your GoTo React Application
            </h1>

            <section className="file-structure">
                <h2>Basic File Structure Conventions</h2>
                <p> This GoTo React Application is divided into a scalable file structure that can be used in much larger projects. Here are the directories you should try to organize aspects of your project into:</p>
                <ul>
                    <li>
                        <h3>Assets</h3>
                        <p>The Assets folder contains all of your media/assets used throughout the project like photos, audio files and videos.</p>
                    </li>
                    <li>
                        <h3>Components</h3>
                        <p>The Components folder contains all of your resuable React Components that you plan to use throughout your project.</p>
                    </li>
                    <li>
                        <h3>Models</h3>
                        <p>The models folder contains any data models/interfaces used for this project. This is a useful place to put all of your typescript interface files.</p>
                    </li>
                    <li>
                        <h3>Pages</h3>
                        <p>The Pages folder contains all of your views for the project, it contains the structure of each page.</p>
                    </li>
                    <li>
                        <h3>Styles</h3>
                        <p>Styles contains all of the .css/.scss files used in the project. It provides a separation of concerns between the style aspects of the project and the logic components.</p>
                    </li>
                    <li>
                        <h3>Utils</h3>
                        <p>Utils contains any utility functions and glovals that might be used throughout the project.</p>
                    </li>
                </ul>
            </section>
            <section className="app-setup">
                <h2>Application Root</h2>
                <p>The index.tsx file is the root of the entire application and the entry point for the webpack configuration. The App.tsx file also contains all the route/component pairs that are used in the project. </p>
            </section>
            <section className="config">
                <h2>Config</h2>
                <p>The config directory contains various files that can be used to tweak the compilation aspects of your project. It also contains the various webpack configs that are used. This allows for you to have the most control over your project! Become familiar with the structure of the config.</p>
            </section>

            <section className="commands">
                <h2>NPM Commands</h2>
                <ul>
                    <li>
                        <h3>npm run start</h3>
                        <p> Start the development environment.</p>
                    </li>

                    <li>
                        <h3>npm run build</h3>
                        <p> Compile a production build folder ready to be served to the world!</p>
                    </li>

                    <li>
                        <h3>npm run buildlib</h3>
                        <p> Build a minified library with access to the apis exposed in the src/library.ts folder</p>
                    </li>
                </ul>
            </section>
        </Page>
    )
}
