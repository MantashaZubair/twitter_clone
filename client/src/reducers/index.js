import { combineReducers } from "redux";

import authReducer from "./AuthReducer";
import tweetReducer  from "./TweetReducer";
import timeLineReducer from "./TimeLineReducer"

export const reducers = combineReducers({authReducer, tweetReducer,timeLineReducer})

