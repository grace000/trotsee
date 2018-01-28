import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Menu } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class MainHeader extends Component {
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
      </div>
    )
  }
}