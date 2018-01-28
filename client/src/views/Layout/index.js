import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Grid } from 'semantic-ui-react'
import MainHeader from './MainHeader'
import SearchHeader from './SearchHeader'
import MapPanel from '../SearchHome/MapPanel'


const { Row } = Grid


export default class Layout extends Component{
	render(){
		return(
			<div>
	        	<Row>

	        		<MainHeader />
	        		
        			
        			<Grid columns={2}>
				      <Grid.Column>
				        <MapPanel />
				      </Grid.Column>
				      <Grid.Column >
				        <SearchHeader />
				      </Grid.Column>
				    </Grid>

				    
	        	
	        	</Row>
        	</div>

		)
	}
}