/*
 * File: /src/App.tsx
 * File Created: Wednesday, 11th December 2019 11:29:00 pm
 * Author: Alex Chomiak
 *
 * Last Modified: Sunday, 5th January 2020 3:33:34 pm
 * Modified By: Alex Chomiak 
 *
 * Author Github: https://github.com/alexchomiak
 */

import React, { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { PageRoute } from '@interfaces/AnimatedSwitch'
import { AnimatedSwitch } from '@components/AnimatedSwitch'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { Home } from '@pages/Home'
import { Setup } from '@pages/Setup'
import { Fork } from '@pages/Fork'

export const App: FC = () => {
    const pages: PageRoute[] = [
        { name: 'Home', path: '/', Component: Home },
        { name: 'Setup', path: '/setup', Component: Setup },
        { name: 'Fork', path: '/fork', Component: Fork }
    ]

    return (
        <Router>
            <Header pages={pages} />
            <AnimatedSwitch routes={pages} />
            <Footer />
        </Router>
    )
}
