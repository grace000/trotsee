import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components'
import {
  Button,
  Container,
  Divider,
  Grid,
  Icon,
  Menu,
  Input,
  Header
} from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const searchBoxStyle ={
  'webkitBoxShadow':'0px 3px 3px 0px rgba(0, 0, 0, 0.2)',  
  'mozBoxShadow':'0px 3px 3px 0px rgba(0, 0, 0, 0.2)', 
   'boxShadow':'0px 3px 3px 0px rgba(0, 0, 0, 0.2)'
}


export default class Homepage extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home' 
              active={activeItem === 'home'} 
              onClick={this.handleItemClick} 
              as={ Link } 
              to='/'/>
          <Menu.Menu position='right'>
            <Menu.Item name='login' 
              active={activeItem === 'login'} 
              onClick={this.handleItemClick} 
              as={ Link } 
              to='/login'/>
            <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>

        
          <Container text>
          
            <Header
              as='h1'
              content='TrotSee'
              style={{ fontSize: '8em', marginBottom: 0, marginTop: '1em', fontFamily: 'Josefin Sans'}}
            />

            <Divider hidden />

            <Grid>
              <Grid.Column>
                <Input fluid action={{ icon: 'search' }} 
                       size='massive' 
                       placeholder='where do you want to go?'
                       style={searchBoxStyle}/>
              </Grid.Column>
            </Grid>
        
          </Container>
        
      </div>
    )
  }
}