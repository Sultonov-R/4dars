import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counterReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { bookmarksReducer } from "./bookmarkReducer";

const rootReducer = combineReducers(
    {
        counter: counterReducer,
        bookmarks: bookmarksReducer
    }
);

export const store = createStore(rootReducer, composeWithDevTools());