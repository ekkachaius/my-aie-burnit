import _ from 'lodash';
import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers';
import * as wares from './middleware';

const defaultState = {
	instances: [],
	selected: null,
	traffic: {
		enabled: false,
		active: false,
		config: {
			hitCount: 0,
			statusCode: 0,
			delayMs: 0
		},
		hits: [],
		completed: 0,
		completed_pct: 0.0
	}
};

export default function storeFactory(...middlewares) {
	return createStore(reducer, defaultState, applyMiddleware(...middlewares));
}
