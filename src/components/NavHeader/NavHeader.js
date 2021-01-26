import React, { Component } from 'react'
import styles from './NavHeader.css';
import Searchbar from '../Search/Search';

class NavHeader extends Component {

    render() {
        return(
            <div className={styles.containerheader}>
                <h1>Order</h1>
                <Searchbar/>
            </div>
        )
    }
}

export default NavHeader;