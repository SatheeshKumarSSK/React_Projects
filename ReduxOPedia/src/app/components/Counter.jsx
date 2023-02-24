import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, customIncrement, customDecrement } from '../../redux/slice/counterSlice';

function Counter() {
    const count = useSelector((state) => state.counterStore.count);
    const dispatch = useDispatch();

    const [state, setState] = useState(() => {
        return 0;
    })

    return (
        <div className=" mt-2 pt-3 pl-2 text-center" style={{ borderTop: "1px solid #999" }}>
            <div className="pb-2 h4">Counter : {count}</div>
            <div className="row">
                <div className=" p-4 col-12 col-md-6">
                    <div className="border p-4">
                        <h4 className="text-success pb-2">Basic Counter</h4>
                        <button className="btn btn-primary" onClick={() => dispatch(increment())}>
                            Add
                        </button>
                        &nbsp;
                        <button className="btn btn-danger" onClick={() => dispatch(decrement())}>
                            Remove
                        </button>
                    </div>
                </div>
                <div className=" p-4 col-12 col-md-6">
                    <div className="border p-4">
                        <h4 className="text-success pb-2">Custom Counter</h4>
                        <div className="row">
                            <div className="col-4 p-1">
                                <input type="number" className="form-control" placeholder='Value...'
                                    value={state} onChange={(e) => { setState(e.target.value); }} />
                            </div>
                            <div className="col-4 p-1">
                                <button className="btn btn-primary form-control" onClick={() => dispatch(customIncrement(state))}>
                                    Add
                                </button></div>
                            <div className="col-4 p-1">
                                <button className="btn btn-danger form-control" onClick={() => dispatch(customDecrement(state))}>
                                    Remove
                                </button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter;