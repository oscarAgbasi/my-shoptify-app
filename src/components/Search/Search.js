import React, { Fragment } from 'react'
import styles from './Search.css';
import * as BaIcons from "react-icons/bs";


const Searchbar = ({keyword,setKeyword}) => {
    const search = "search"
    return(
        <div className={styles.barStyling}>
            <input 
            key="random1"
            value={keyword}
            placeholder={
                    "Search"
            }
            onChange={(e) => setKeyword(e.target.value)}
            />
        </div>
    )
}

export default Searchbar;