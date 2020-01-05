/*
 * File: /src/components/Footer.tsx
 * File Created: Wednesday, 11th December 2019 11:45:11 pm
 * Author: Alex Chomiak
 *
 * Last Modified: Sunday, 5th January 2020 3:49:01 pm
 * Modified By: Alex Chomiak 
 *
 * Author Github: https://github.com/alexchomiak
 */

/*
 * File: /src/components/Header.tsx
 * File Created: Wednesday, 11th December 2019 11:44:52 pm
 * Author: Alex Chomiak
 *
 * Last Modified: Thursday, 12th December 2019 8:16:46 pm
 * Modified By: Alex Chomiak
 *
 * Author Github: https://github.com/alexchomiak
 */

import React, { FC } from 'react'

export const Footer: FC = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <h1>
                    {`<>`} Made with <i className="fa fa-heart" aria-hidden="true"></i> by Alex Chomiak {`</>`}
                </h1>
            </div>
        </div>
    )
}
