import axios from 'axios'

// constants

const GET_ACTIVITIES = 'GET_ACTIVITIES'
const POST_ACTIVITY = 'POST_ACTIVITY'


//reducer

const inicialState = {
  activities: [],
  postActivity: []
}

export default function reducer (state = inicialState , action) {
  switch (action.type) {
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload
      }

    case POST_ACTIVITY:
      return {
        ...state,
        postActivity: action.payload
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

export async function postActivity(payload) {
  await axios.post("http://localhost:3001/activity" , payload);

  return {
    type: POST_ACTIVITY,
    payload
  }
}