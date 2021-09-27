import React, { useEffect, useState } from 'react'
import { Button, Typography, Input ,notification, Modal, AutoComplete  } from 'antd';


import Card from './Card';

function ToDO() {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Do you want delete this task from list?');
  
    

    const [entary, setEntary] = useState('')
    const [idRemove, setIdRemove] = useState(0)
    const [ line, setLine ] = useState([
        {id:1, text: 'this my first task 1111'},
        {id:2, text: 'this my second task 222'},
        {id:3, text: 'this my third task 33333333'},
        {id:4, text: 'this my third task 444'},
        {id:5, text: 'this my third task 555555'},
    ])
    const listenEntary  = e =>{
        setEntary(e.target.value)
    }
    const addTask =() =>{
        setLine(line => [...line, { id: (line.length+1), text: entary }]);
        notifiAdded()
        setEntary(null)
    }
    const removeTask = ()=>{
        setLine(line.filter(item => item.id !== idRemove));
        setConfirmLoading(true);
        setTimeout(() => {
          setVisible(false);
          setConfirmLoading(false);
        notifiDelete()
    }, 1000);
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

        
    const showModal = () => {
        setVisible(true);
      };
    
      const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
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
                    return <Card taskT={taskT} i={i} editTask={editTask} removeTask={removeTask} setIdRemove={setIdRemove} showModal={showModal}/>
                })}
            </div>
            <Modal
                title="Note"
                visible={visible}
                onOk={removeTask}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}>
                <p>{modalText}</p>
            </Modal>


        </div>
    )
}

export default ToDO