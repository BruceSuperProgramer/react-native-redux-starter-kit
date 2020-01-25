import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
	const middleware = [ thunk ];
	const store = createStore(rootReducer, applyMiddleware(...middleware));
	return { store };
}
