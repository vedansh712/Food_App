import React, { useState } from "react";
import { useDispatchCart , useCart } from "./Contextreducer";

export default function Cards(props) {

  let data = useCart();
  let dispatch = useDispatchCart(); 
  let options = props.options;
  let poption = Object.keys(options);

  const [qty , setQty] = useState(1)
  const [size , setSize] = useState("")

  let foodItem = props.foodItems
  const handleAddToCart = async()=>{

    await dispatch({
          type:"ADD", 
          id:foodItem._id,
          name :foodItem.name,
          price :props.finalPrice,
          qty :qty,
          size :size})
console.log(data)
  }


  return (
    <div>
      <div>
        <div className="card m-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
          <img src={foodItem.img} className="card-img-top" alt="..." style={{height:"170px" , objectFit:"fill"}} />
          <div className="card-body">
            <h5 className="card-title">{foodItem.name}</h5>
            {/* <p className="card-text">{props.description}</p> */}
            <div className="container w-100">
              <select className="m-2 h-100 w-30 bg-success rounded" onChange={(e)=>{setQty(e.target.value)}}>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 w-30 bg-success rounded" onChange={(e)=>{setSize(e.target.value)}}>
                {poption.map((data)=>{
                  return(<option key = {data} value={data}> {data}</option>)
                })}
              </select>
              <div className="d-inline h-100 fs-5">total price</div>
            </div>
            <hr></hr>
            <button className="btn btn-success " onClick={handleAddToCart}>
                  Add To Cart
                </button>
          </div>
        </div>
      </div>
    </div>
  );
}
