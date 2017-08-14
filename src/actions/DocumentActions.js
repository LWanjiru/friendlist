import Request from 'superagent';

export function FetchDocuments() {
  return function(dispatch) {
    Request.get('http://localhost:8000/documents/public')
        .then((response) => {
          dispatch({type:'FETCH_DOCUMENTS_FULFILLED', payload:response.body});
        })
        .catch((err) => {
          console.log(err);
          dispatch({type:'FETCH_DOCUMENTS_REJECTED', payload:err});
        })
  }
}