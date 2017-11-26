import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import '../css/skills.css';
import FaAngellist from 'react-icons/lib/fa/angellist';
import { Line } from 'rc-progress';

class Skills extends Component {
  render() {
    return (
      <div className="skills">
          <img src={process.env.PUBLIC_URL + '/imgs/1.png'} />
          <div>
              <Button.Group centered>
                  <Button href="/#/">Home</Button>
                  <Button active href="/#/skills">Skills</Button>
                  <Button href="/#/contact">Contact</Button>
              </Button.Group>
          </div>
        <p className="paragraph">
            This is my progress on programming and it will increase more and more
             <FaAngellist />
        </p>
        <LanguageAndRate img={process.env.PUBLIC_URL + '/imgs/java.png'}
                         percent = "80"
        />
        <LineBetweenComponents />
        <LanguageAndRate img={process.env.PUBLIC_URL + '/imgs/html.png'}
                           percent = "90"
          />
        <LineBetweenComponents />
        <LanguageAndRate img={process.env.PUBLIC_URL + '/imgs/css.png'}
                           percent = "91"
          />
        <LineBetweenComponents />
        <LanguageAndRate img={process.env.PUBLIC_URL + '/imgs/js.png'}
                           percent = "70"
          />
        <LineBetweenComponents />
        <LanguageAndRate img={process.env.PUBLIC_URL + '/imgs/spring.png'}
                           percent = "40"
          />
        <LineBetweenComponents />
        <LanguageAndRate img={process.env.PUBLIC_URL + '/imgs/Python.png'}
                           percent = "30"
          />

         <div className="copyright">
             Copyright 2017 © Brot
         </div>
      </div>
    );
  }
}

export default Skills;

class LanguageAndRate extends Component {
    render(){
        return (
            <div className="container-language" >
                <div>
                    {<img src={this.props.img} alt=""/>}
                </div>
                <div className="progress-bar">
                    <Line percent={this.props.percent}
                          strokeWidth="3"
                          strokeColor="gray"
                          trailWidth="3"
                          trailColor="black"/>
                </div>
                <div><h5>{this.props.percent}%</h5></div>
            </div>
        );
    }
}

const LineBetweenComponents = () => (
    <div className="line">
        <Line percent="50"
              strokeWidth="0.5"
              strokeColor= "#33ccff"
              trailWidth= "0.5"
              trailColor= "black"
        />
    </div>
);
