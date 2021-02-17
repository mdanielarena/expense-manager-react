import { combineReducers } from "redux";

import auth from "./auth";
import errors from "./errors";
import users from "./users";

export default combineReducers({ auth, errors, users });
