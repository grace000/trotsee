import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components'
import {
  Button,
  Container,
  Grid,
} from 'semantic-ui-react'
import MainHeader from './MainHeader'
import SearchHeader from './SearchHeader'
import VideoPanel from './VideoPanel'
import MapPanel from '../SearchHome/MapPanel'
import Footer from './Footer'

const { Column, Row } = Grid


export default class Layout extends Component{
	render(){
		return(
			<div>
	        	<Row>

	        		<MainHeader />
	        		<SearchHeader />
        			<Grid columns={2} padded>
				      <Grid.Column>
				        <VideoPanel />
				      </Grid.Column>
				      <Grid.Column>
				        <MapPanel />
				      </Grid.Column>
				    </Grid>
	        	
	        	</Row>
        	</div>

		)
	}
}