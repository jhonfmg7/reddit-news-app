import React, { useReducer } from 'react';
import Context from './context';
import Reducer from './reducer';

// Axios
import axiosClient from '../config/AxiosClient';

// Types
import { GET_REDDIT_POST_START, GET_REDDIT_POST_SUCCESS, GET_REDDIT_POST_ERROR, ORDER_REDDIT_POST_START, ORDER_REDDIT_POST_SUCCESS } from './types';
import useOrderPosts from '../hooks/useOrderPosts';

const State = ({ children }) => {
    const initialState = {
        posts: [],
        orderedPosts: [],
        loading: false,
        error: null
    }

    const [state, dispatch] = useReducer(Reducer, initialState);

    const getRedditPost = async() => {
        // Start
        dispatch({
            type: GET_REDDIT_POST_START,
        });
    
        try {
            // Query
            const response = await axiosClient.get("");
            const arr = response.data.data.children.map( item => ({
                ...item,
                data: {
                    ...item.data,
                    created: item.data.created * 1000
                }
            }) )
            // Dispatch
            dispatch({
                type: GET_REDDIT_POST_SUCCESS,
                payload: arr,
            });
        } catch (error) {
            dispatch({
                type: GET_REDDIT_POST_ERROR,
                payload: error,
            });
        }
    }

    const filterRedditNews = (posts, key) => {
        // Start
        dispatch({
            type: ORDER_REDDIT_POST_START,
        });

        // Order
        const newPosts = useOrderPosts(posts, key);
        dispatch({
            type: ORDER_REDDIT_POST_SUCCESS,
            payload: newPosts
        });
    }

    return (
        <Context.Provider value={{
            posts: state.posts,
            orderedPosts: state.orderedPosts,
            loading: state.loading,
            error: state.error,
            getRedditPost,
            filterRedditNews
        }}>
            { children }
        </Context.Provider>
    )
}

State.propTypes = {
    
}

export default State;