import React, { useState } from 'react';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, removeItem, selectItem } from './features/itemSlice';
const App = () => {
  

  const dispatch = useDispatch();
  const item = useSelector(selectItem)

  return (
    <>
      <div className="container">
        
        {item.map((data) => (
          <div className="row g-0" key={data.id}>
           <div className="card mb-3">
              <div className="col-md-4" >
                <img src={data.image} className="img-fluid rounded-start" alt="image" />
              </div>
              <div className="col-md-8" >
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  <p className="card-text">
                    <small className="text-body-secondary">Price: ${data.price}</small>
                  </p>
                  <p>
                    <strong>Quantity:</strong>
                    <button className="qtyplus" onClick={()=>dispatch(increment(data.id))}>+</button>
                    {data.count}
                    <button className="qtyminus" onClick={()=>dispatch(decrement(data.id))}>-</button>
                  </p>
                  <button className="btn btn-primary" onClick={()=>dispatch(removeItem(data.id))}>
                    Remove
                  </button>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">SUBTOTAL: ${data.price} <br />SHIPPING: free</li>
                  <li className="list-group-item">TOTAL: ${data.price * data.count}</li>
                </ul>
              </div>
            
          </div>
          
        </div>
        ))}
      </div>
    </>
  );
};

export default App;
