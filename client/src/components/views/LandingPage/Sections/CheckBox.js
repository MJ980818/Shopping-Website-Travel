import React, { useState } from 'react'
import { Collapse, Checkbox } from 'antd';
const { Panel } = Collapse;
function CheckBox(props) {

    const [Checked, setChecked] = useState([])

    const handleToggle = (value) => {
        // 누른 것의 index를 구하고 전체 checked된 stats에서 현재 누른 checkbox가 이미 있다면 빼주고
        // 없다면 state에 넣어준다
        const currentIndex = Checked.indexOf(value)

        const newChecked = [...Checked]

        // state 넣어준다
        if(currentIndex === -1){
            newChecked.push(value)
        }else{
            // 빼준다.
            newChecked.splice(currentIndex, 1)
        }
        setChecked(newChecked)
        props.handleFilters(newChecked)
    }
    const renderCheckboxLists = () => props.list && props.list.map((value, index) => (
        <React.Fragment key={index} >
            <Checkbox onChange={() => handleToggle(value._id)} 
            checked={Checked.indexOf(value._id) === -1 ? false : true}/>
                <span style={{ padding: '0 8px'}} >{value.name}</span>
            
        </React.Fragment>
    ))
    return (
        <div>
            {/* defaultActivekey가 0이면 처음에 접혀있고 1이면 처음에 펼쳐져있음 */}
            <Collapse defaultActiveKey={['0']} >
                <Panel header="Continents" key="1">
                    {renderCheckboxLists()}
                    
                </Panel>
            </Collapse>
        </div>
    )
}

export default CheckBox
