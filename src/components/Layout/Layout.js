import React from 'react';
import './Layout.css';
import Dashboard from '../../containers/Dashboard/Dashboard';
import SideBar from '../Sidebar/Sidebar';
import Order from '../../containers/Pages/Order/Order';
import Transaction from '../../containers/Pages/Transaction/Transaction';
import UserManagement from '../../containers/Pages/UserManagement/Management';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


function layout() {
    return (
            <>
                <SideBar />
                <Route component={Dashboard} />
            </>
    )


}

export default layout;