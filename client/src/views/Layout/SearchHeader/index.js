import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Menu } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import UserSave from '../../UserSave'
import UserPost from '../../UserPost'
import ActiveSearch from '../../ActiveSearch'


const routes = [
  { path: '/userpost',
    exact: true,
    main: () => <UserPost/>
  },
  { path: '/usersave',
    main: () => <UserSave/>
  },
  { path: '/activesearch',
    main: () => <ActiveSearch/>
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

    			<div style={{overflow:'scroll', height:'100vh',width:'100%', overflowX:'hidden'}}>


			      	<Menu pointing secondary>
			        
				        
				        <Menu.Item name='trots' 
				        		   active={activeItem === 'trots'} 
				        		   onClick={this.handleItemClick}
				        		   as={ Link } 
				        		   to='/activesearch'/>
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

