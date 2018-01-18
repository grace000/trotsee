import { Button, Grid, Header, Icon, Image, Card, Embed, Modal, Form, TextArea } from 'semantic-ui-react'
import React, { Component } from 'react'

			

export default class AddTrotModal extends Component {
	render () {
		return(
			<Grid>

			<Modal trigger={<Button>Contact Us!</Button>}>
		    <Modal.Header>Contact Form</Modal.Header>
		    
		    <Modal.Content>
		    	<Modal.Description>
		        	<p>Get in touch and we'll get back to you as soon as we can.  We look forward to hearing from you!</p>
		        	<br/>
		    	</Modal.Description>
		      <Form>
			    <Form.Field>
			      <label>Name</label>
			      <input placeholder='Name' />
			    </Form.Field>
			    <Form.Field>
			      <label>Email</label>
			      <input placeholder='Email' />
			    </Form.Field>
		      	<Form.Field control={TextArea} label='Message' placeholder='Tell us more about you...' />
			    <Button type='submit'>Submit</Button>
			  </Form>
			</Modal.Content>
		    <Modal.Content image scrolling>
		      <Image wrapped size='medium' src='https://static.pexels.com/photos/33488/navigation-car-drive-road.jpg' />
		    <Modal.Content style={{paddingLeft: '1em'}}>
		    	<Header>Email</Header>
		    	<p>info@fivetonine.co</p>
		    	<Header>Address</Header>
		    	<p>1871</p>
				<p>222 W Merchandise Mart Plaza</p>
				<p>Chicago, IL 60654</p>
		    </Modal.Content>
		    </Modal.Content>
  			</Modal>

  			</Grid>
  		)
  	}	
}