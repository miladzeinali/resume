import React from 'react';
import './ThirdSec.css';
import data from '../../data.json';

class ThirdSec extends React.Component{
    render(){
        return(
        <div>
          <h2 className="skill">Skills</h2>
          <div className={`fullpage1 ${this.props.className || ''}`}>
                 
                 {
                   Object.keys(data.sections[1].items).map(key=>{
                     return(
                       <div>
                         
                           <div className="all">
                               <i id='title' className={data.sections[1].items[key].content.imageclass}></i>
                           <p >
                             {data.sections[1].items[key].content.title}
                           </p>
                           </div>
                       </div>
                     
                     )
                   })
                 }
               </div>
        </div>
        )
    }
}

export default ThirdSec