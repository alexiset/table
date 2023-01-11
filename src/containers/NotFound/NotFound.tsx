import React from 'react';

import stars from './images/stars.jpeg';

import s from './NotFound.scss';

export const NotFound = () => {
    return (
        <React.Fragment>
            <h2 className={s.header}>
                404 Ресурс не найден
            </h2>
            <img src={stars} className={s.stars} />
        </React.Fragment>
    );
}
