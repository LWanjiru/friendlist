export default function reducer (state = {
  documents:[],
  fetching: false,
  fetched: false,
  error: null
}, action) {
  switch (action.type) {
    case 'FETCH_DOCUMENTS': {
      return {...state, fetching: true}
    }
    case 'FETCH_DOCUMENTS_FULFILLED': {
      return {
              ...state,
              fetching: false,
              fetched: true,
              documents: action.payload
              }
    }
     case 'FETCH_DOCUMENTS_REJECTED': {
       return {
                ...state,
                fetching: false,
                error: action.payload
              }
     }
     default:
     return state;
  }
}