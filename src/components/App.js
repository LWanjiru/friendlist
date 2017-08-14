import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentList from './DocumentList.js'

import { FetchDocuments } from '../actions/DocumentActions';
@connect((Store)  => {
    // console.log('ins store',Store.documents);

  return {
    documents: Store.reducer
  }
})

export default class App extends Component {

  componentWillMount() {
    this.props.dispatch(FetchDocuments());
  }

  render() {
    // console.log(this.props.documents);
    return (
      <div>
        <h1>Hello, world.</h1>
        <DocumentList documents ={this.props.documents} />
      </div>
    );
  }
}
