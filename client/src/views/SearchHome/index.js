import React, { Component } from 'react'
import { Input, Grid, Header } from 'semantic-ui-react'
import ActiveSearch from '../ActiveSearch'


const GridStyle = {
	margin:'0',
	float: 'right',
	padding:'0 1em'

}

export default class SearchHome extends Component {
	render() {
		return (
			<div>
				<Grid style={GridStyle}>

					<Grid.Row style={{padding:'0 1em', display:'block', width:'100%'}}>

					
					<Header 
					    content='Explore Chicago'
					    style={{fontSize:'2em', margin: 'auto'}}
					    />
					<Input 
					    action={{ color: 'teal', icon: 'search' }}
					    actionPosition='right'
					    placeholder='Search...'
					    defaultValue='Chicago'
					    style={{width: '30em', float:'right', margin: 'auto'}}
		  			/>
		  			

		  			</Grid.Row>
	  			
	  			</Grid>
	  			
  			</div>
		)
	}
}


