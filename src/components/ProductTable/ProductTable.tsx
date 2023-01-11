import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import { ProductRow } from '@components/ProductRow';

import { useProductList } from '@components/ProductTable/hooks/useProductList';

export const ProductTable = () => {
    const { list, titles, handleAddClick } = useProductList();

    return (
        <React.Fragment>
            <TableContainer component={Paper}>
                <Table aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            {titles.map(title =>
                                <TableCell key={title}>{title}</TableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.map(item =>
                            <ProductRow key={item.id} product={item} />
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <br />
            <Button variant="outlined" onClick={handleAddClick}>Добавить</Button>
        </React.Fragment>
    );
}
