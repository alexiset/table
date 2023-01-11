import React from 'react';
import cn from 'classnames';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

import { useProductRow } from './hooks/useProductRow';
import { IProductRowProps } from './types';

import s from './ProductRow.scss';

export const ProductRow = ({ product }: IProductRowProps) => {
    const {
        isCollapsed,
        handleToggleClick,
        handleBuyClick,
        handleChoiceClick,
    } = useProductRow();

    return (
        <TableRow onClick={handleToggleClick} className={s.row}>
            <TableCell>
                <Checkbox onClick={handleChoiceClick} />
            </TableCell>

            <TableCell>
                <div className={cn({ [s.collapsed]: !isCollapsed })}>
                    { product.description }
                    <div className={cn({ [s.gradient]: !isCollapsed })}></div>
                </div>
            </TableCell>

            <TableCell>
                <span className={s.price}>{ (product.price).toLocaleString() } ₽</span>
            </TableCell>

            <TableCell>
                <img src={ product.image } className={s.image} />
            </TableCell>

            <TableCell>
                <Button variant="contained" onClick={handleBuyClick}>Купить</Button>
            </TableCell>
        </TableRow>
    );
}
