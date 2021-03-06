import React, { Component } from 'react'

const Style = {
  zIndex: '10',
  position:'relative',
  overflow:'hidden',
  paddingBottom:'0'
}

 export default class MapPanel extends Component {

  constructor(){
  	super();
  	this.name ='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380513.7159859942!2d-88.01214778988322!3d41.83339250495681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C+IL!5e0!3m2!1sen!2sus!4v1513054359507';
  }
  render() {
    return (
      
        <div style={Style}>
        	<iframe src={this.name} allowFullScreen style={{width:'100%', height:'55vw', frameBorder:'0', border:'0', paddingBottom:'1em'}}></iframe>
        </div>
     
      
    );
  }
};


