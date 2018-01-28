import { Button, Icon, Input, Modal, Form } from 'semantic-ui-react'
import React, { Component } from 'react'
import axios from 'axios'
const querystring = require('querystring');

export default class AddVideo extends React.Component {
	constructor(props) {
    super(props);
	this.state = {
	        title: '',
	        author: '',
	        messageFromServer: '',
	      }
	      this.handleTextChange = this.handleTextChange.bind(this);
	      this.insertNewVideo = this.insertNewVideo.bind(this);
	      this.onSubmit = this.onSubmit.bind(this);
	    }
	// openModal() {
	//       this.setState({
	//         modalIsOpen: true
	//       });
	//     }
	// closeModal() {
	//       this.setState({
	//         modalIsOpen: false,
	//         title: '',
	//         author: '',
	//         messageFromServer: ''
	//       });
	//     }
	onSubmit(e){
		e.preventDefault();
		this.setState ({
			title:[],
			author: []
		})
		this.insertNewVideo(this);
		}

	insertNewVideo(e) {
	      axios.post('/videos',
	        querystring.stringify({
	          author: e.state.author,
	          title: e.state.title,
	        }), {
	          headers: {
	            "Content-Type": "application/x-www-form-urlencoded"
	          }
	        }).then(function(response) {
	        e.setState({
	          messageFromServer: response.data,
	        });
	      });
	    }

	handleTextChange(e) {
	      if (e.target.name === "author") {
	        this.setState({
	          author: e.target.value
	        });
	      }
	if (e.target.name === "title") {
	        this.setState({
	          title: e.target.value
	        });
	      }
	    }



	render() {
	   
	      return (
	        <div>
	      
	        <Modal
	          	trigger={<Button color="teal" size="medium"><span><Icon name="plus" size='large'/></span></Button>}
	            closeIcon>
			
				<Modal.Content>
					<Form onSubmit={this.onSubmit}>
					    <Form.Field>
					      <label>Title</label>
					      <Input placeholder='Title' 
					      		 type='text' 
					      		 id='title' 
					      		 name='title'
					      		 value={this.state.title}
					      		 onChange={this.handleTextChange}  />
					    </Form.Field>
					    <Form.Field>
					      <label>Author</label>
					      <Input placeholder='Author'
					      		 type='text' 
					      		 id='author'
					      		 name='author' 
					      		 value={this.state.author}
					      		 onChange={this.handleTextChange} />
					    </Form.Field>
					    <Button type='submit' value='Submit' >Submit</Button>
					</Form>
				</Modal.Content>
	    	
	    	</Modal>
	    	
	    	</div>
	      
	   
	     )
	    }
	   
}