import React from 'react';
import { SideMenuItems } from "./SideMenuItems"
import styles from'./Sidebar.css';
import * as HiIcons from "react-icons/hi";
import { Link, BrowserRouter as Router } from 'react-router-dom';


function Sidebar() {

    function doRoute () {
        console.log('Hello');
    }
    return(
        <nav className={styles.navMenu}>
            <h2 className= {styles.navMenuLogo}>React</h2>
            <ul className= {styles.navMenuItems}>
                {SideMenuItems.map((item, index) => {
                    return (
                        <li key={index} className={styles.navText}>
                            <Link to={item.path} onClick={doRoute}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}


export default Sidebar