import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from '../containers/Home';
import { NotFound } from '../containers/NotFound';

import s from './App.scss';

export const App = () => {

    return (
        <div className={s.layout}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}
