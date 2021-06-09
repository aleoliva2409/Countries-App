import axios from 'axios'

// constants

const GET_ACTIVITIES = 'GET_ACTIVITIES'


//reducer

const inicialState = {
  activities: []
}

export default function reducer (state = inicialState , action) {
  switch (action.type) {
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload
      }
    default:
      return state
  }
}

// actions

export function getActivities (){
  return async function (dispatch) {
    const res = await axios.get(`http://localhost:3001/activity`);

    return dispatch({
      type: GET_ACTIVITIES,
      payload: res.data,
    });
  }
}