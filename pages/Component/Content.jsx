import React from 'react'
import styles from "../../styles/Content.module.scss"
import { AiFillProject } from 'react-icons/ai'
import { MdNotificationsActive } from 'react-icons/md'
import { AiFillLike } from 'react-icons/ai'
import { FaCommentDots } from 'react-icons/fa'



const Content = () => {
  return (
   <>
   <div className={styles.contentHeading}>
   <div className={styles.container}>
                    <div>
                        <h2>Quick <span>Stats</span></h2>
                    </div>
                  

                </div>
    <div className={styles.contentWrapper}>
        <div className={styles.wrapper}>
        <AiFillProject  className={styles.icon} style={{ color: "black",  marginRight:"1rem"}} size={30} />
                  
        <h3>2,20,999</h3>
        <p>Projects</p>

        </div>
        <div className={styles.wrapper}>
        <AiFillLike className={styles.icon} style={{ color: "black",  marginRight:"1rem"}} size={30} />
                  
        <h3>2,20,999</h3>
        <p>Likes</p>


        </div>
        <div className={styles.wrapper}>
        <FaCommentDots  className={styles.icon} style={{ color: "black",  marginRight:"1rem"}} size={30} />
                  
        <h3>2,20,999</h3>
        <p>Comments</p>

        </div>

       
    </div>
   </div>
   </>
  )
}

export default Content