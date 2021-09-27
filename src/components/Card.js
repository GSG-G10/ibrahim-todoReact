import {  Typography  } from 'antd';
import {  SmileOutlined, SmileFilled, DeleteTwoTone , RadiusBottomrightOutlined} from '@ant-design/icons';

function Card({taskT, i, editTask, removeTask}) {
    const { Paragraph } = Typography;
    return (
        <div className="task" key={i}>
            <Paragraph className='input_edit' editable={{ onChange: e => editTask(e, i+1)  }}
                copyable={{ tooltips: false,
                icon: [<SmileOutlined key="copy-icon" />,
                <SmileFilled key="copied-icon" />],
                tooltips: ['click here', 'you clicked!!'] }} 
            >
                <span className='text_task'>{taskT.text}</span>
            </Paragraph>
            <DeleteTwoTone className="removeTask"  onClick={()=> removeTask(taskT.id)} type="primary" />

        </div>
    )
}

export default Card