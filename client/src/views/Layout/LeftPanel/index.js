import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Card,
  Segment
} from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import UserSave from '../../UserSave'
import UserPost from '../../UserPost'
import SearchHome from '../../SearchHome'
import MainHeader from '../MainHeader'
import MapHeader from '../../SearchHome/MapHeader'


const { Column, Row } = Grid

const MenuStyle = {
	minHeight: '100%',
	backgroundColor:'#bbf0f0',
	zIndex: '10',
	position: 'fixed',
	display: 'inline-block',
	top: '0',
	left:'0',
	width: '15%'

}

const ContainerStyle = {
	width:'85%',
	left:'15%',
	position:'relative',
	overflow:'hidden',
	right:'0'

}

const routes = [
  { path: '/searchhome',
    exact: true,
    main: () => <SearchHome/>
  },
  { path: '/userpost',
    main: () => <UserPost/>
  },
  { path: '/usersave',
    main: () => <UserSave/>
  }
]



export default class LeftPanel extends Component{

	state = { activeItem: 'trotSee' }

  	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  	render() {
    	const { activeItem } = this.state

    	return (
    		<Router>

    		<div>
    		
    			<div><MapHeader /></div>
    			<div style={ContainerStyle}>


			      	<Menu style={MenuStyle} pointing secondary vertical>
			        
				        <Menu.Item name='trotSee' 
				        		   active={activeItem === 'trotSee'} 
				        		   onClick={this.handleItemClick} 
				        		   as={ Link } 
				        		   to='/searchhome'
				        		   style={{fontSize:'2em', padding:'15px', color: '#fff', fontFamily: 'Josefin Sans'}}/>
				        <Menu.Item name='posted trots' 
				        		   active={activeItem === 'posted trots'} 
				        		   onClick={this.handleItemClick}
				        		   as={ Link } 
				        		   to='/userpost'/>
				        <Menu.Item name='collected trots' 
				        		   active={activeItem === 'collected trots'} 
				        		   onClick={this.handleItemClick}
				        		   as={ Link } 
				        		   to='/usersave'/>
			      	</Menu>
		     
			       <div style={{ flex: 1}}>
			   		
			        {routes.map((route, index) => (
			          <Route
			            key={index}
			            path={route.path}
			            exact={route.exact}
			            component={route.main}
			          />
	        		))}
	      			</div>
      			</div>
      		</div>
		    </Router>
		)
	}
}

