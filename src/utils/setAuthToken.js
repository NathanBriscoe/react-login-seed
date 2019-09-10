import axios from "axios";
// We’ll use this to set and delete the Authorization header for our axios requests depending on whether a user is logged in or not

const setAuthToken = token => {
  if (token) {
    // Apply authorization token to every request if logged in
    // ToDo: "Unresolved variable common"
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    // ToDo: "Unresolved variable common"
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
