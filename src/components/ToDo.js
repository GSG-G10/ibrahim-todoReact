import React, { useEffect, useState } from 'react'
import { Button, Typography, Input ,notification, Divider, Space } from 'antd';


import Card from './Card';

function ToDO() {
    const [entary, setEntary] = useState('')
    const [ line, setLine ] = useState([
        {id:1, text: 'this my first task'},
        {id:2, text: 'this my second task'},
        {id:3, text: 'this my third task '},
    ])
    const listenEntary  = e =>{
        setEntary(e.target.value)
    }
    const addTask =() =>{
        setLine(line => [...line, { id: (line.length+1), text: entary }]);
        notifiAdded()
        setEntary(null)
    }
    const removeTask = value=>{
        setLine(line.filter(item => item.id !== Number(value)));
        notifiDelete()
    }
    const editTask = (e, i) =>{
        setLine(
            line.map(item => 
                item.id === i 
                ? {...item, text : e} 
                : item 
        ))
    }

    const notifiDelete = () => {
        notification.info({
          message: 'Remove Task',
          description: 'Delete Task Done.',
        });
      };

      const notifiAdded = () => {
        notification.info({
          message: 'Add Task',
          description:  entary,
        });
      };
      


    return (
        <div className='todo'>
            <div className="add_task">
                <Input placeholder="enter your Task.." allowClear onChange={listenEntary}  value={entary}/>
                <button className="btn_added"  onClick={addTask}>
                    <Button type="primary" classNam='' loading={0} >
                        Add
                    </Button>
                </button>
            </div>
            <div className="wrapper_tasks">
                {line.map((taskT, i) => {
                    return <Card taskT={taskT} i={i} editTask={editTask} removeTask={removeTask} />
                })}
            </div>




        </div>
    )
}

export default ToDO