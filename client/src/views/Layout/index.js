import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components'
import {
  Button,
  Container,
  Grid,
} from 'semantic-ui-react'
import MainHeader from './MainHeader'
import LeftPanel from './LeftPanel'
import Footer from './Footer'

const { Column, Row } = Grid

const Style = {
	backgroundColor:'#FAFAFA'
}

export default class Layout extends Component{
	render(){
		return(
			<div>
	        	<Row style={Style}>
	      			<LeftPanel />
	        	</Row>
        	</div>

		)
	}
}