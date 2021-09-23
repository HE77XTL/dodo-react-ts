import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch } from '../../reducer/hooks';
import { RootState } from '../../reducer/store';

import { decrement, increment } from '../../reducer/counter/counterSlice';

const About: React.FunctionComponent = () => {
    // 待理解
    const dispatch = useAppDispatch();
    const dispatchA = useDispatch();
    const count = useSelector((state: RootState) => state.counter.value);

    return (
        <div>
            this is about page
            <div>
                <button
                    onClick={() => {
                        dispatch(increment());
                    }}
                >
                    add
                </button>
                <button
                    onClick={() => {
                        dispatchA(decrement());
                    }}
                >
                    decrement
                </button>
            </div>
            <div>count: {count}</div>
        </div>
    );
};

export default About;
