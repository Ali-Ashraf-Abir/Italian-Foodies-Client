// import React from 'react';

import { Outlet } from "react-router-dom";
import Credits from "../Footer/Footer";
import Header from "../Header/Header";

const Routes = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Credits></Credits>
        </div>
    );
};

export default Routes;