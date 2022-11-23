import React from 'react'
import styles from "../../styles/Table.module.scss"


const Table = () => {
    const tableRow=[{
        name: "Alfreds",
        position: "Dev",
        Time: "9:00 pm"
    },{
        name: "Alfreds",
        position: "Dev",
        Time: "9:00 pm"
    },{
        name: "Alfreds",
        position: "Dev",
        Time: "9:00 pm"
    },{
        name: "Alfreds",
        position: "Dev",
        Time: "9:00 pm"
    },{
        name: "Alfreds",
        position: "Dev",
        Time: "9:00 pm"
    },{
        name: "Alfreds",
        position: "Dev",
        Time: "9:00 pm"
    },{
        name: "Alfreds",
        position: "Dev",
        Time: "9:00 pm"
    },{
        name: "Alfreds",
        position: "Dev",
        Time: "9:00 pm"
    },{
        name: "Alfreds",
        position: "Dev",
        Time: "9:00 pm"
    },{
        name: "Alfreds",
        position: "Dev",
        Time: "9:00 pm"
    },{
        name: "Alfreds",
        position: "Dev",
        Time: "9:00 pm"
    },{
        name: "Alfreds",
        position: "Dev",
        Time: "9:00 pm"
    },]
  return (
    <>
    <div className={styles.tableHeading} >
    <table className={styles.tableWrapper}>
  <tr>
    <th>Name</th>
    <th>Position</th>
    <th>Time</th>
    <th>Action</th>

  </tr>
  <hr />
 {
    tableRow.map((e)=>
    {
        return (
            <tr>
                <td>{e.name}</td>
                <td>{e.position}</td>
                <td>{e.Time}</td>
                <td><button>Delete</button></td>
            </tr>
        )
    })
 }
</table>


</div></>
  )
}

export default Table