import { GET_REDDIT_POST_START, GET_REDDIT_POST_SUCCESS, GET_REDDIT_POST_ERROR, ORDER_REDDIT_POST_SUCCESS, ORDER_REDDIT_POST_START } from './types';

export default (state, action) => {
    switch (action.type) {
        case GET_REDDIT_POST_START:
            return {
                ...state,
                posts: [],
                loading: true,
                error: null
            }
        case ORDER_REDDIT_POST_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_REDDIT_POST_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                // orderedPosts: action.payload,
                loading: false,
            }
        case ORDER_REDDIT_POST_SUCCESS:
            return {
                ...state,
                orderedPosts: action.payload,
                loading: false,
            }
        case GET_REDDIT_POST_ERROR:
            return {
                ...state,
                posts: [],
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}