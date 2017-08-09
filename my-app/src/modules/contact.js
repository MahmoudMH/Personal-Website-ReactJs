import React, { Component } from 'react';
import '../css/contact.css';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import FaPhoneSquare from 'react-icons/lib/fa/phone-square';
import { Line } from 'rc-progress';
import { Select } from 'semantic-ui-react'

class Contact extends Component {
  render() {
    return (
      <div className="contact">
          <img src={process.env.PUBLIC_URL + '/imgs/1.png'} />
          <div>
              <Button.Group centered>
                  <Button href="/#/">Home</Button>
                  <Button href="/#/skills">Skills</Button>
                  <Button active href="/#/contact">Contact</Button>
              </Button.Group>
          </div>
          <div className="header" >Talk to Servies <FaPhoneSquare /> </div>
          <div className="line2">
              <Line percent="100"
                    strokeWidth="0.5"
                    strokeColor= "#69F0AE"
                    trailWidth= "0.5"
                    trailColor= "#69F0AE"
              />
          </div>
          <FormExampleFieldControlId />
      </div>
    );
  }
}

export default Contact;


const FormExampleFieldControlId = () => (
    <Form>
        <Form.Group widths='equal'>
            <Form.Field id='form-input-control-first-name' control={Input} label='First name' placeholder='First name' />
            <Form.Field id='form-input-control-last-name' control={Input} label='Last name' placeholder='Last name' />
        </Form.Group>
        <Form.Group widths='equal'>
            <Form.Field id='form-input-control-first-name' control={Input} label='Email' placeholder='Your Email' />
            <Form.Field id='form-input-control-last-name' control={Select} label='Country' placeholder='Select your country' />
        </Form.Group>
        <Form.Field id='form-textarea-control-opinion' control={TextArea} label='Massage' placeholder='Please Enter Here your massage' />
        <Button positive>S u b m i t </Button>
    </Form>
)
