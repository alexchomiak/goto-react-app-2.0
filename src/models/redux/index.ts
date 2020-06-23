// ? This file configures the redux store within an application
import { createStore, applyMiddleware, combineReducers, Action } from 'redux'
import thunk, { ThunkAction } from 'redux-thunk' // * Redux-Thunk middleware, used for asynchronous events that effect state (api calls)
import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
    useDispatch as useReduxDispatch
} from 'react-redux'

// * Bind reducers into single object
import { TimeReducer } from './time/reducer'

const reducers = combineReducers({
    // ! Add more reducers in this object
    time: TimeReducer
})

// * Configure store
export const store = createStore(reducers, {}, applyMiddleware(thunk))
console.log('Configured Store', store.getState())


// * Typed useSelector hook to access (read) strongly typed state
export const useSelector: TypedUseSelectorHook<ReturnType<typeof reducers>> = useReduxSelector

// * Thunk Action type that matches out reducers (less bloated code)
export type AppThunk = ThunkAction<void, ReturnType<typeof reducers>, unknown, Action<string>>

export const useDispatch = useReduxDispatch