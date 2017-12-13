import React from 'react'
import ReactDOM from 'react-dom'
import './css/Demo.css'

class Demo extends React.Component{


    render(){
        //checkTap={(e)=>this.checkTap(e)}
        return (<div className="Demo">
           Demo Component
           <img src="./assets/Demo/桌面.jpg" style={{width:190,height:190}}/>
        </div>)
    }
}
export default Demo