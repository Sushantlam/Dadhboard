import React from 'react'
import styles from "../../styles/Header.module.scss"
import { BiMessageDetail } from 'react-icons/bi'
import { MdNotificationsActive } from 'react-icons/md'

const Header = () => {
    return (
        <>
            <div className={styles.header}>
               
                <div className={styles.Container}>
                    <div className={styles.wrapper}>
                        <h2>Hello, <span>Dev</span></h2>
                        <p>Welcome to Dashboard</p>
                    </div>
                    <div className={styles.logo}>
                        <div className={styles.logoConatiner}>
                        <BiMessageDetail style={{ color: "black",  marginRight:"1rem"}} size={20} />
                        </div>  
                        <div className={styles.logoConatiner1}>
                           <MdNotificationsActive style={{ color: "black",  marginRight:"1rem"}} size={20} />

                       </div> 

                       <div className={styles.logoPhoto}></div>
                      <button>Log out</button>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Header