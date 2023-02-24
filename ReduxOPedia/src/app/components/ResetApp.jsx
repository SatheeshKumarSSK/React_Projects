import React from 'react';
import { useDispatch } from 'react-redux';
import { resetReduxOPedia } from '../../redux/actions/action';

function ResetApp() {
    const dispatch = useDispatch();

    const resetCounterandDestination = () => {
        dispatch(resetReduxOPedia());
    }

    return (
        <div className='text-center mt-2'>
            <button className='btn btn-warning' onClick={resetCounterandDestination}>ResetApp</button>
        </div>
    )
}

export default ResetApp;