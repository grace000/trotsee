import { Button, Grid, Header, Icon, Menu, Sticky } from 'semantic-ui-react'
import React, { Component } from 'react'



const GridStyle = {
	width:'100%',
	float: 'right',
	marginRight:'0',
	paddingTop:'1em'
	
}

const HeaderStyle = {
	width: '100%',
	float:'right',
	height:'15em'
}


 export default class MainHeader extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <Sticky>
       <Menu stackable inverted>
        <Menu.Item>
          <img src='/logo.png' />
        </Menu.Item>

        <Menu.Item
          name='features'
          active={activeItem === 'features'}
          onClick={this.handleItemClick}
        >
          Features
        </Menu.Item>

        <Menu.Item
          name='testimonials'
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}
        >
          Testimonials
        </Menu.Item>

        <Menu.Item
          name='sign-in'
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}
        >
          Sign-in
        </Menu.Item>
      </Menu>
      </Sticky>
    );
  }
};


