import { FaHome } from 'react-icons/fa'
import { GrAppsRounded } from 'react-icons/gr'
import { IoIosPeople } from 'react-icons/io'
import { BiStats } from 'react-icons/bi'
import { AiTwotoneSetting } from 'react-icons/ai'
import { MdHelpCenter } from 'react-icons/md'
import { ImSwitch } from 'react-icons/im'
import React from 'react'
import  styles from "../../styles/Home.module.scss"

const LeftNav = () => {
  return (
   <>
   <div className={styles.heading}>
    <div className={styles.logo}>
        <h2>Lama-Dash</h2>
    </div>

<div className={styles.wrapper}>
    <div  className={styles.wrapperSection} >
    <ul  className={styles.wrapperSection} >
  
        <li><FaHome style={{ color: "black",  marginRight:"1rem" }} size={20} /><a>Dashboard</a></li>
        <li><GrAppsRounded style={{ color: "black",  marginRight:"1rem" }} size={20} /><a href="">Apps</a></li>
        <li><IoIosPeople style={{ color: "black",  marginRight:"1rem" }} size={20} /><a href="">Member</a></li>
        <li><BiStats style={{ color: "black",  marginRight:"1rem" }} size={20} /><a href="">Analysis</a></li>
        <li><AiTwotoneSetting style={{ color: "black",  marginRight:"0.5rem" }} size={20} /><a href="">Setting</a></li>
        <li><MdHelpCenter style={{ color: "black",  marginRight:"0.5rem" }} size={20} /><a href="">Support</a></li> </ul>
    </div>

    <div className={styles.logOutSection}>
        <ul className={styles.logOutUlSection} >
       
        <li><ImSwitch style={{ color: "black",  marginRight:"0.5rem" }} size={20} /><a href=""></a></li>
        </ul>
    </div>
    </div>
   </div>
   </>
  )
}

export default LeftNav