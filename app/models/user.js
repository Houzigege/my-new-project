
import { createAction } from '../utils'
import * as authService from '../services/auth'

export default {
    namespace: 'user',
    state: {
        userName: '蔡秋月'
    },
    reducers: {
        'updateState'(state, { data: name }) {
            return state.userName = name;
        },
    },
    effects: {
        *loadStorage(action, { call, put }) {
            const login = yield call(Storage.get, 'login', false);
            yield put(createAction('updateState')({ login, loading: false }));
        },
        *login({ payload }, { call, put }) {
            yield put(createAction('updateState')({ fetching: true }));
            const login = yield call(authService.login, payload);
            if (login) {
                yield put(NavigationActions.back());
            }
            yield put(createAction('updateState')({ login, fetching: false }));
            Storage.set('login', login);
        },
        *logout(action, { call, put }) {
            yield call(Storage.set, 'login', false);
            yield put(createAction('updateState')({ login: false }));
        },
    }
};
