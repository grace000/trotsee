import { Grid, Card, Embed, Header, Input, Container } from 'semantic-ui-react'
import React, { Component } from 'react'
import axios from 'axios'




const GridStyle = {
	margin:'0'	
}


export default class UserSave extends Component {

	constructor() {
    		super();
  		this.state = {data:{title:[]}, history:[]};
    	this.runVideoQuery = this.runVideoQuery.bind(this);
  	}
	
	componentDidMount() {
    // Get the latest history.
    return axios.get("/videos")
    .then(function(response) {
      console.log(response);
      if (response !== this.state.history) {
        console.log("History bruh", response.data);
        this.setState({ history: response.data });
	    }
	  }.bind(this));
	}

	
	runVideoQuery(ev){
		return axios.get("/videos")
      	.then(function(response) {
      		ev.setState({data:response.data});
        	console.log('video query ran');
      });
  	}


  render() {

  	
    return (
    	<div>
    		<Grid style={GridStyle}>
	    		<Grid.Row columns={2} style={{ display:'block', width:'100%'}}>
	    	  	<Grid.Column>
					<Header
					    content='Collected Trots'
					    style={{fontSize:'2em', margin: 'auto'}}
					    />
				</Grid.Column>
				<Grid.Column>
					<Input 
					    action={{ icon: 'search' }}
					    actionPosition='right'
					    placeholder='Search...'
					    defaultValue=''
					    style={{float:'right', margin: 'auto'}}
		  			/>
				</Grid.Column>
			  </Grid.Row>
		  	

	      	<Grid style={GridStyle}>
				
				<Card raised style={{borderRadius:'0', margin: '0.5em 0.3em', width:'280px'}}>
					<Embed
				    id='O6Xo21L0ybE'
				    placeholder='https://static.pexels.com/photos/356844/pexels-photo-356844.jpeg'
				    source='youtube'
					/>
    				<Card.Content>
    					<Card.Header>
			        		<p>Collected</p>
			        		<p>Collected!</p>
			        	</Card.Header>
    				</Card.Content>
    			</Card>
    		</Grid>
			
			</Grid>	
    	</div>
    )
  }
}


