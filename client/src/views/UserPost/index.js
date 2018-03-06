import { Grid, Header, Card, Embed, Input } from 'semantic-ui-react'
import React, { Component } from 'react'
import AddVideo from '../AddVideo'
import axios from 'axios'

const GridStyle = {
	margin:'0',
	padding:'1em'	
}


export default class UserPost extends Component {
 

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

    	
    	<Grid style={GridStyle}>

    	  <Grid.Row columns={2} style={{ display:'block', width:'100%'}}>
    	  	<Grid.Column>
				<Header
				    content='My Shared Trots'
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
		  
		  <Grid.Row style={{padding:'0 1em', display:'block', width:'100%'}}>
		  	<AddVideo />
		  </Grid.Row>

	    <Grid style={GridStyle}>
			{this.state.history.map((hist, index) => (
				<Card raised style={{borderRadius:'0', margin: '0.5em 0.3em', width:'250px'}}>
					<Embed
				    id='O6Xo21L0ybE'
				    placeholder='https://static.pexels.com/photos/356844/pexels-photo-356844.jpeg'
				    source='youtube'
					/>
    				<Card.Content>
    					<Card.Header>
			        		<p>{hist.title}</p>
			        		<p>{hist.author}!</p>
			        	</Card.Header>
    				</Card.Content>
    			</Card>
			  ))}
		</Grid>	  

	  </Grid>
     	</div>
    )
  }
}