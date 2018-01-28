import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import {
  Grid,
  Header
} from 'semantic-ui-react'

const HeaderStyle = {
  backgroundColor:'#a6d1d2',
  paddingTop:'1em',
  margin: 'auto'
}
export default class Footer extends Component {
  render() {
    return(
      <Grid.Row>
        <Header style={HeaderStyle} />
      </Grid.Row>
    )
  }
}