import axios from "axios";
import { GET_PROFILE, PROFILE_ERROR } from "./types";
import { setAlert } from "./alert";

//Get user profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/profile/me");
    dispatch({
      type: GET_PROFILE,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//Create or update a profile
export const createProfile = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const response = await axios.post("/api/profile", formData, config);
    dispatch({
      type: GET_PROFILE,
      payload: response.data,
    });
    dispatch(
      setAlert(edit ? "Profile updated" : " Profile created", "success")
    );
    if (!edit) {
      history.push("/dashboard");
    }
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
