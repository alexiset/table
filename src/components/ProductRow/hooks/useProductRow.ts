import React, { useState } from 'react';

export const useProductRow = () => {
    const [ isCollapsed, setCompressed ] = useState(false);

    const handleToggleClick = () => {
        setCompressed(!isCollapsed);
    };

    const handleBuyClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
    }

    const handleChoiceClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
    };

    return {
        isCollapsed,
        handleToggleClick,
        handleBuyClick,
        handleChoiceClick,
    };
}
