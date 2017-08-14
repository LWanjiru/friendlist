import React from 'react';
import ReactDOM from 'react-dom';
import Document from './Document.js';

export default class DocumentList extends React.Component{
  render(){
    console.log(this.props);
    // if(Object.getOwnPropertyNames(this.props.documents).length === 0){
    //   return (<div></div>)
    // }
    let documentNodes = this.props.documents.map(function(document){
      console.log(this.props.documents);
      return (
        <Document title={document.title} content={document.content}
        key={document.id}>
        {/* {console.log(document.title)} */}
        {document.title}
        </Document>
      )
    })

    return (
      <div>
        <center>
        <h1 className="document-profile">{document.title}</h1>
        {documentNodes}
      </center>
      </div>
    )
  }
}