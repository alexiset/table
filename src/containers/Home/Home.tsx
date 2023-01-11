import React from 'react';

import { ProductTable } from '@components/ProductTable';
import s from './Home.scss';

export const Home = () => {
    return (
        <div>
            <h2 className={s.header}>
                Главная
            </h2>

            <ProductTable />
        </div>
    );
}
