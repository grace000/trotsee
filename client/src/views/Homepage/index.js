import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Card,
  Segment
} from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const LandpageImage = styled(Image)`
 {
    width:  100%;
    height: 60vw;
    background-image: url('https://static.pexels.com/photos/190339/pexels-photo-190339.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
`
const FixedMenu = () => (
  <Segment inverted>
    
      <Menu inverted pointing secondary>
        <Menu.Item className='item' position="right">
          {/*<Button as={ Link } to="/login" inverted>Log in</Button>*/}
          <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
        </Menu.Item>
      </Menu>
  
  </Segment>
)

export default class Homepage extends Component {
 

  render() {
    return (
   
      <div>
          <Segment
            inverted
            textAlign='center'
            style={{ padding: 0 }}
            // style={{ minHeight: 700, padding: 0}}
            vertical
          >

          
          	<LandpageImage>
            <Container text>
              
              <Header
                as='h1'
                content='TrotSee'
                inverted
                style={{ fontSize: '8em', marginBottom: 0, marginTop: '1em', fontFamily: 'Josefin Sans'}}
              />

             <Divider hidden />
           
              <Button 
                size='medium' 
                color='teal'>
                <a href="#" style={{color:'#ffffff'}}>Get Started</a>
                <Icon name='right arrow' />
              </Button>

              <Button 
              	size='medium' 
              	color='teal'
                as={Link}
                to='/login'
              	>
                Login/Sign Up
              </Button>
             
            </Container>
            </LandpageImage>
          </Segment>

        
       <Container id='gettingStarted' style={{ padding: '2em 0em' }}>
       <Header as='h3' style={{ fontSize: '2em', textAlign:'center', padding: '1em 1em'}}>Community-sourced travel videos</Header>
        <Grid>
    		<Grid.Row columns={3}>

     		 <Grid.Column>
        		<Header as="h2" style={{ fontSize: '1.2em', textAlign:'center', paddingBottom:'1em', fontWeight:'normal'}}>Post Short Travel Videos</Header>
      		</Grid.Column>
      		<Grid.Column>
        		<Header as="h2" style={{ fontSize: '1.2em', textAlign:'center', paddingBottom:'1em', fontWeight:'normal'}}>Search for Videos By City</Header>
      		</Grid.Column>
      		<Grid.Column>
        		<Header as="h2" style={{ fontSize: '1.2em', textAlign:'center', paddingBottom:'1em', fontWeight:'normal'}}>Make Collections</Header>
      		</Grid.Column>

    		</Grid.Row>

        <Grid.Row container columns={3}>

          <Grid.Column width='centered three'>
            <Icon name='record' size='huge'/>
          </Grid.Column>
          <Grid.Column width='centered three'>
            <Icon name='search' size='huge'/>
          </Grid.Column>
          <Grid.Column width='centered three'>
            <Icon name='save' size='huge'/>
          </Grid.Column>

        </Grid.Row>


    	</Grid>
    	</Container>

    	<Container style={{ paddingBottom: '3em' }}>
    	<Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '2em 0em', fontWeight:'normal', fontSize:'2em', color:'#5e9cc7'}}
            >
              <p>Featured Cities</p>
        </Divider>

    	<Grid>
    	  <Grid.Row style={{ paddingLeft: '5em'}}>
      		   <Grid.Column width={5}>
	        <Card raised style={{ borderRadius:'0'}}>
			    <Image src='https://static.pexels.com/photos/62348/pexels-photo-62348.jpeg' />
			    <Card.Content>
			      <Card.Header style={{ color: '#808080', textAlign:'left' }}>New Delhi</Card.Header>
			    </Card.Content>
			    <Card.Content extra>
			      <a>
			        <Icon name='film' />
			        10 videos
			      </a>
			    </Card.Content>
  			</Card>
	      </Grid.Column>
	      <Grid.Column width={5}>
	        <Card raised style={{ borderRadius:'0'}}>
			    <Image src='https://static.pexels.com/photos/356844/pexels-photo-356844.jpeg' />
			    <Card.Content>
			      <Card.Header style={{ color: '#808080', textAlign:'left' }}>New York City</Card.Header>
			    </Card.Content>
			    <Card.Content extra>
			      <a>
			        <Icon name='film' />
			        10 videos
			      </a>
			    </Card.Content>
  			</Card>
	      </Grid.Column>
	      <Grid.Column width={5}>
  			 <Card raised style={{ borderRadius:'0'}}>
			    <Image src='https://static.pexels.com/photos/432361/pexels-photo-432361.jpeg' />
			    <Card.Content>
			      <Card.Header style={{ color: '#808080', textAlign:'left' }}>Portland</Card.Header>
			    </Card.Content>
			    <Card.Content extra>
			      <a>
			        <Icon name='film' />
			        10 videos
			      </a>
			    </Card.Content>
  			</Card>
	      </Grid.Column>
    		</Grid.Row>

	     <Grid.Row style={{ paddingLeft: '5em'}}>
	      <Grid.Column width={5}>
	        <Card raised style={{ borderRadius:'0'}}>
			    <Image src='https://static.pexels.com/photos/600622/pexels-photo-600622.jpeg' />
			    <Card.Content>
			      <Card.Header style={{ color: '#808080', textAlign:'left' }}>Amsterdam</Card.Header>
			    </Card.Content>
			    <Card.Content extra>
			      <a>
			        <Icon name='film' />
			        10 videos
			      </a>
			    </Card.Content>
  			</Card>
	      </Grid.Column>
	      <Grid.Column width={5}>
	        <Card raised style={{ borderRadius:'0'}}>
			    <Image src='https://static.pexels.com/photos/10922/pexels-photo-10922.jpeg' />
			    <Card.Content>
			      <Card.Header style={{ color: '#808080', textAlign:'left' }}>Rome</Card.Header>
			    </Card.Content>
			    <Card.Content extra>
			      <a>
			        <Icon name='film' />
			        10 videos
			      </a>
			    </Card.Content>
  			</Card>
	      </Grid.Column>
	      <Grid.Column width={5}>
  			 <Card raised style={{ borderRadius:'0'}}>
			    <Image src='https://static.pexels.com/photos/213407/pexels-photo-213407.jpeg' />
			    <Card.Content>
			      <Card.Header style={{ color: '#808080', textAlign:'left' }}>San Francisco</Card.Header>
			    </Card.Content>
			    <Card.Content extra>
			      <a>
			        <Icon name='film' />
			        10 videos
			      </a>
			    </Card.Content>
  			</Card>
	      </Grid.Column>
	     
	     </Grid.Row>
	  </Grid>
      </Container>

        <Segment inverted vertical style={{ padding: '2em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={16}>
                  <Header inverted as='h4' content='© 2017 TrotSeePost. All Rights Reserved.' />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>

      </div>
      
    )
  }
}