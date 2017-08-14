import React from 'react';
import ReactDOM from 'react-dom';

export default class Document extends React.Component{
  render(){
    // console.log('userprops',this.props);
    return (
      <div>
        <div className="document-details">
          {this.props.title} {this.props.content}
        </div>
      </div>
    )
  }
}