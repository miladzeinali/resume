import React from 'react';
import './FirstSec.css';
import data from '../../data.json';
import { SocialIcon } from 'react-social-icons';
import { Link, Element } from "react-scroll";


class FirstSec extends React.Component{
    render(){
        return(
            <div className={`fullpage ${this.props.className || ''}`}>
                  <div>
                  <h2 style={{
                    justifyContent:"center",display:"flex",flexDirection:"column",justifyItems:"center",alignItems:"center"
                  }}>
                  {data.title2}
                  </h2>
                  <h3 style={{
                    justifyContent:"center",display:"flex",flexDirection:"column",justifyItems:"center",alignItems:"center"
                  }}>
                    {data.subtitle}
                  </h3>
                  <div style={{
                    transform:'translateY(-100px)'
                  }}>
                    <div className="icon">
                    {
                      Object.keys(data.links).map(key=><SocialIcon url={data.links[key]}/>)
                    }
                  </div>
                </div>
                  </div>
                  <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          delay={0}
        >
                  <p className="down">
                    Click me!
                  </p>
                  </Link>
                  <Element name="about" className="element" />
            </div>
        )
    }
}

export default FirstSec