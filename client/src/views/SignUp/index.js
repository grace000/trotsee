import React, { Component } from 'react'
import { Button, Form, Checkbox, Grid, Header, Image, Message, Segment, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class SignUp extends Component {
 

  render() {
    return (
    <div className='signup-form'>
   
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    
    <Modal
              trigger={<p>Sign Up!</p>}
              closeIcon>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Let's get started
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Username'
              type='string'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='First Name'
              type='string'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Last Name'
              type='string'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='E-mail Address'
              type='string'
            />

            <Button 
            	color='teal' 
            	fluid size='large'
            	as={Link}
            	to="/profile">
            		Sign Up
            </Button>
          </Segment>
        </Form>
        <Message>
          Already a member? <a href='../Login'>Login</a>
        </Message>
      </Grid.Column>
    </Grid>
    </Modal>
  </div>



    )
  }
}

