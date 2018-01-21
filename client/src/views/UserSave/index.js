import { Button, Grid, Header, Icon, Image, Card, Embed, Input } from 'semantic-ui-react'
import React, { Component } from 'react'
import SearchHome from '../SearchHome'
import axios from 'axios'
import AddVideo from '../AddVideo'



const GridStyle = {
	margin:'0',
	float: 'right',
	padding:'0 1em'

}


export default class UserSave extends Component {

	constructor() {
    		super();
  		this.state = {data:[], history:[]};
    	this.runVideoQuery = this.runVideoQuery.bind(this);
  	}
	
	componentDidMount() {
    // Get the latest history.
    return axios.get("/videos")
    .then(function(response) {
      console.log(response);
      if (response !== this.state.history) {
        console.log("History", response.data);
        this.setState({ history: response.data });
	    }
	  }.bind(this));
	}
	
	runVideoQuery(){
		return axios.get("/videos")
      	.then(function(response) {
      		this.setState({data:response.data});
        	console.log('video query ran');
      });
  	}
 
  	 //  	componentWillReceiveProps(nextProps) {
 //    	console.log('props received');
 //  	}
  render() {
    return (
    	<div>
    	
	    	<AddVideo />

	    	<Grid style={GridStyle}>


	    	<Grid.Row style={{padding:'0 1em', display:'block', width:'100%'}}>

	    		<Header 
				    content='Collected Trots'
				    style={{fontSize:'2em', margin: 'auto'}}
				    />

				<Input 
				    action={{ color: 'teal', icon: 'search' }}
				    actionPosition='right'
				    placeholder='Search...'
				    defaultValue='Search Here'
				    style={{width: '30em', float:'right', margin: 'auto'}}
	  			/>
	  				
	  		</Grid.Row>

	  		<Grid.Row style={{ paddingLeft: '5em'}}> 
	            <Card raised style={{borderRadius:'0'}}>
	            	{
	              		this.state.data.map(function(video){ 
	              			return 
	              			<div>
	              				<Card.Header style={{ color: '#808080', textAlign:'left' }} content={video.title}></Card.Header>
				      			<Card.Header style={{ color: '#808080', textAlign:'left' }} content={video.author}></Card.Header>
	             	 		</div>
	             	 	})
	            	}
	  		 	</Card>
	  		 <Grid.Column width={5}>
		        <Card raised style={{ borderRadius:'0'}}>
				    <Embed
					    id='iKk6_2-AAGc'
					    placeholder='https://static.pexels.com/photos/356844/pexels-photo-356844.jpeg'
					    source='youtube'
					  />
				    {/*<Card.Content>
				      <Card.Header style={{ color: '#808080', textAlign:'left' }} content={this.state.title}></Card.Header>
				      <Card.Header style={{ color: '#808080', textAlign:'left' }} content={this.state.author}></Card.Header>
				    </Card.Content>*/}
	  			</Card>
		      </Grid.Column>

		      <Grid.Column width={5}>
	  			 <Card raised style={{ borderRadius:'0'}}>
				    <Embed
					    id='O6Xo21L0ybE'
					    placeholder='https://static.pexels.com/photos/356844/pexels-photo-356844.jpeg'
					    source='youtube'
					  />
				    <Card.Content>
				      <Card.Header style={{ color: '#808080', textAlign:'left' }}>Portland</Card.Header>
				    </Card.Content>
	  			</Card>
		      </Grid.Column>
	  		
	  		</Grid.Row>

		  	<Grid.Row style={{ paddingLeft: '5em'}}>
	  		   	<Grid.Column width={5}>
		        	<Card raised style={{ borderRadius:'0'}}>
				    <Embed
					    id='O6Xo21L0ybE'
					    placeholder='https://static.pexels.com/photos/356844/pexels-photo-356844.jpeg'
					    source='youtube'
					  />
				    <Card.Content>
				      <Card.Header style={{ color: '#808080', textAlign:'left' }}>New Delhi</Card.Header>
				    </Card.Content>
					</Card>
	      		</Grid.Column>
	      		<Grid.Column width={5}>
		        	<Card raised style={{ borderRadius:'0'}}>
				    <Embed
					    id='iKk6_2-AAGc'
					    placeholder='https://static.pexels.com/photos/356844/pexels-photo-356844.jpeg'
					    source='youtube'
					  />
				    <Card.Content>
				      <Card.Header style={{ color: '#808080', textAlign:'left' }}>New York City</Card.Header>
				    </Card.Content>
					</Card>
	      		</Grid.Column>
	      		<Grid.Column width={5}>
					 <Card raised style={{ borderRadius:'0'}}>
				    <Embed
					    id='O6Xo21L0ybE'
					    placeholder='https://static.pexels.com/photos/356844/pexels-photo-356844.jpeg'
					    source='youtube'
					  />
				    <Card.Content>
				      <Card.Header style={{ color: '#808080', textAlign:'left' }}>Portland</Card.Header>
				    </Card.Content>
					</Card>
	      		</Grid.Column>
			</Grid.Row>
	    	
	    	</Grid>
    	</div>
    )
  }
}

