import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components'


import ActiveSearch from '../../ActiveSearch'
import MapPanel from '../../SearchHome/MapPanel'


const VideoPanelStyle = {
	position:'relative',
	right:'-11px'

}

export default class VideoPanel extends Component{


  	render() {
    	

    	return (
    		

    		<div>
    			<div style={VideoPanelStyle}>
				    <ActiveSearch />
      		</div>
      	</div>
		    
		)
	}
}

