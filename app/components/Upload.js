import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/RaisedButton';


export default class Upload extends Component {
  constructor(props){
    super(props);
    console.log('props in upload',props)
    console.log('this.props in upload',this.props)
  }

  render() {
    return (
      <div>
        <TextField hintText="Title"></TextField>
        <br/>
        <TextField hintText="Description"></TextField>
        <br/>
        <br/>
        <button label="Upload" className="uploadButton btn btnGroup">Upload</button>
      </div>
    )
  }
}
