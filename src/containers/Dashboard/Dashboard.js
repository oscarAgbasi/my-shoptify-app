import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Order from '../Pages/Order/Order';
import Transaction from '../Pages/Transaction/Transaction';
import UserManagement from '../Pages/UserManagement/Management';
import NavHeader from '../../components/NavHeader/NavHeader';
import styles from './Dashboard.css';

function dashboard( ) {
    return (
        <div className={styles.containerpanel}>
            <div className={styles.mainpanel}>
            <NavHeader />
            <div className={styles.pagePanel}>
            <Switch>
                    <Route path='/order' exact component={Order}/>
                    <Route path='/inquiry' component={Transaction}/>
                    <Route path='/team' component={UserManagement}/>
            </Switch>
            </div>
            </div>
        </div>
    )
}





export default dashboard;