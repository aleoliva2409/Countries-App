import axios from "axios";

// constants

const GET_ACTIVITIES = "GET_ACTIVITIES";
const POST_ACTIVITY = "POST_ACTIVITY";

//reducer

const inicialState = {
  activities: [],
  postActivity: [],
};

export default function reducer(state = inicialState, action) {
  switch (action.type) {
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };

    case POST_ACTIVITY:
      return {
        ...state,
        postActivity: action.payload,
      };
    default:
      return state;
  }
}

// actions

export function getActivities() {
  return async function (dispatch) {
    const res = await axios.get(`http://localhost:3001/activity`);

    return dispatch({
      type: GET_ACTIVITIES,
      payload: res.data,
    });
  };
}

export function postActivity(payload) {
  return async function (dispatch) {
    try {

      const {name,difficulty,duration,season,countries} = payload;

      const data = {
        name: name.toLowerCase(),
        difficulty: parseInt(difficulty),
        duration: duration.toLowerCase(),
        season,
        countries
      }

      console.log(data)

      const res = await axios.post("http://localhost:3001/activity", data);
      return dispatch({
        type: POST_ACTIVITY,
        payload: {
          resp: res.data,
          data: data,
        },
      });
    } catch (error) {
      console.log(error)
    }

  }
}
