import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p style= {{textAlign:'center'}}> Developer info : limminjeong98@naver.com
               {/* <Icon type="smile" /> */}
               <br />
           Download source : https://github.com/MJ980818/Shopping-Website-Travel
             </p>
        </div>
    )
}

export default Footer
