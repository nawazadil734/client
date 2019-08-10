import axios from 'axios';
import { FETCH_USER } from './types'
import { LOGIN_USER } from './types';
import { SIGNUP_USER } from './types';
import { FETCH_COMMUNITIES, FETCH_COMMUNITY } from './types';
import { CREATE_POST, FETCH_POSTS, FETCH_POST, DELETE_POST, EDIT_POST } from './types';
import { PHOTO_UPLOAD } from './types';
import history from '../history';

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data});
};

export const loginUser = (values) => async (dispatch) => {
    const res = await axios.post('/api/loginUser', values);
    dispatch({ type: LOGIN_USER, payload: res.data});
};

export const signupUser = (values) => async (dispatch) => {
    const res = await axios.patch('/api/signupUser', values);
    dispatch({ type: SIGNUP_USER, payload: res.data});
};

export const createPost = (values) => async (dispatch, getState) => {
    const { email } = getState().auth;
    const res = await axios.post('/api/createPost', {...values, email });
    dispatch({ type: CREATE_POST, payload: res.data});
    history.push('/');
};

export const fetchCommunities = () => async (dispatch) => {
    const res = await axios.get('/api/fetchCommunites');
    dispatch({ type: FETCH_COMMUNITIES, payload: res.data});
};

export const fetchCommunity = () => async (dispatch) => {
    const res = await axios.get('/api/fetchCommunity');
    dispatch({ type : FETCH_COMMUNITY, payload: res.data});
}

export const fetchPosts = () => async (dispatch) => {
    const res = await axios.get('/api/posts');

    dispatch({ type: FETCH_POSTS, payload: res.data});
};

export const fetchPost = (id) => async (dispatch) => {
    const res = await axios.get(`/api/posts/${id}`);
    dispatch({ type: FETCH_POST, payload: res.data});
};

export const editPost = (id, values) => async (dispatch) => {
    const res = await axios.patch(`/api/posts/${id}`, values);
    dispatch({ type: EDIT_POST, payload: res.data});
};

export const deletePost = (id) => async (dispatch) => {
    await axios.delete(`/api/posts/${id}`);
    dispatch({ type: DELETE_POST, payload: id});
};

export const photoUpload = (values) => async (dispatch) => {
    const res = await axios.post('/api/photoUpload', values);
    dispatch({ type: PHOTO_UPLOAD, payload: res.data});
}



