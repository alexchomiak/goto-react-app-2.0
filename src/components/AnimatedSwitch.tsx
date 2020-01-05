/*
 * File: /src/components/AnimatedSwitch.tsx
 * File Created: Monday, 23rd December 2019 1:33:52 pm
 * Author: Alex Chomiak
 *
 * Last Modified: Friday, 3rd January 2020 2:11:09 pm
 * Modified By: Alex Chomiak 
 *
 * Author Github: https://github.com/alexchomiak
 */

import React, { FC } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { AnimatedSwitchProps } from '@interfaces/AnimatedSwitch'

export const AnimatedSwitch: FC<AnimatedSwitchProps> = ({ routes }: AnimatedSwitchProps) => {
    const location = useLocation()
    return (
        <TransitionGroup className="transition-group">
            <CSSTransition
                onEntering={() => {
                    // * Reset Scroll on animation
                    window.scrollTo(0, 0)
                }}
                key={location.key}
                timeout={{ enter: 350, exit: 350 }}
                classNames="page-fade"
            >
                <section className="route-section">
                    <Switch location={location}>
                        {routes.map(({ Component, path }) => (
                            <Route exact key={path} component={() => <Component />} path={path} />
                        ))}
                    </Switch>
                </section>
            </CSSTransition>
        </TransitionGroup>
    )
}
