import { Button, Grid, Card } from 'semantic-ui-react'
import React, { Component } from 'react'
import axios from 'axios'
import AddVideo from '../AddVideo'

const GridStyle = {
	margin:'0',
	float: 'right',
	padding:'1em'
}

export default class ActiveSearch extends Component {

	constructor(props) {
    		super(props);
  			
		  	const history = [];

		    for (let i = 0; i < 10; i++) {
		        history.push({
		            title: 'title',
		            author: ''
		        });
		    }

		    this.state = { history };
	}

	
	componentDidMount() {
    // Get the latest history.
    return axios.get("/videos")
    .then(function(response) {
      console.log(response);
      if (response !== this.state.history) {
        console.log("History bruh", response.data);
        this.setState({ history: response.data});
	    }
	  }.bind(this));
	}
	

  render() {
  	
    
    
    return (

    	<div>
    		<Grid>
			{this.state.history.map((hist, index) => (
				<Card>
    				<Card.Content>
    					<Card.Header>
			        		<p>Hello, {hist.title} from {hist.author}!</p>
			        	</Card.Header>
    				</Card.Content>
    			</Card>
			  ))}
			 </Grid>		
    	</div>
     
    );
  }
}