import React from 'react';
import './SecondSec.css';
import data from '../../data.json';

class FirstSec extends React.Component{
    render(){
        return(
        <div className={`fullpage ${this.props.className || ''}`}>

        <h3>
          {data.sections[0].title}
        </h3>
         <p>
          {data.sections[0].items[0].title}
        </p>
        </div>
        )
    }
}

export default FirstSec