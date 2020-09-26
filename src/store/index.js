import { createStore, applyMiddleware ,compose} from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers/index";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk)),
  )
  return store;
}
