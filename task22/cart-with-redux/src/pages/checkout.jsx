import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios"
export default function Checkout() {
  const globalState = useSelector((state) => state);
  const [cartData, setCartData] = useState({});
  const [formData, setFormData] = useState({});
  const calculatePriceByQuantity = (key) => {
    return globalState?.cart[key]?.qty * globalState?.cart[key]?.price;
  };

  const calculateTotalPrice = (total, current) => {
    return total + current;
  };

  const totalAmount = Object.keys(globalState.cart)
    .map(calculatePriceByQuantity)
    .reduce(calculateTotalPrice);

    const submitHandler = async(e) => {
     e.preventDefault();
    console.log(cartData);
    console.log(formData);
      try {
        const response=await axios.post("http://localhost:8000/cartData",{cart:{...globalState.cart,totalAmount},formData});
        // const response=await axios.get("http://localhost:8000/");
        console.log(response);
      } catch (error) {
        console.log(error);
      }
  };
  const handleInputs=(e)=>{
    const key=e.target.name;
    const value=e.target.value;
    setFormData({...formData,[key]:value});
  }

  return (
    <div className="flex justify-center gap-11">
      <hr />
      <div className="w-[45rem] flex flex-col">
        <h2 className="text-xl font-bold">
          Total Price : {JSON.stringify(totalAmount)}{" "}
        </h2>
        <div className="flex justify-between py-5 px-5 border-b">
          <span className="w-[35%]">Name</span>
          <span>qty</span>
          <span>unit Price</span>
          <span>net Price</span>
        </div>
        {Object.keys(globalState.cart).map((item, index) => {
          return (
            <div
              className=" border-b border-gray-200 py-2 flex justify-between px-2"
              key={index}
            >
              <span className="w-[35%] ">{globalState?.cart[item]?.name}</span>
              <span>{globalState?.cart[item]?.qty}</span>
              <span>{globalState?.cart[item]?.price}</span>
              <span>
                {globalState?.cart[item]?.qty * globalState?.cart[item]?.price}
              </span>
            </div>
          );
        })}
      </div>
      <form
        className="w-[45%] flex flex-col gap-5 rounded-md bg-gray-200 shadow-lg p-5 mx-5"
        onSubmit={submitHandler}
      >
        <h4>Pay with cart </h4>

        <input
          type="email"
          className=" w-100 h-100 border-2 border-blue-400 rounded-md px-5"
          placeholder="Email..."
          name="email"
          onChange={handleInputs}
          required
          />
        <input
          type="text"
          className=" w-100 h-100 border-2 border-blue-400 rounded-md px-5"
          placeholder="Home Address..."
          name="address"
          onChange={handleInputs}
          required
        />
        <input
          type="text"
          className=" w-100 h-100 border-2 border-blue-400 rounded-md px-5"
          placeholder="your card number... 65654-7877-860-95"
          name="cardNumber"
          onChange={handleInputs}
          required
        />
        <div className="flex gap-2 w-100">
          <input
            type="date"
            className=" w-100 h-100 border-2 border-blue-400 rounded-md px-5"
            name="date"
            onChange={handleInputs}
            required
          />
          <input
            type="text"
            className=" w-100 h-100 border-2 border-blue-400 rounded-md px-5"
            placeholder="CSV"
            min={5}
            max={5}
            name="csv"
            onChange={handleInputs}
            required
          />
        </div>
        <div className="flex gap-2 w-100">
          <input
            type="text"
            className=" w-100 h-100 border-2 border-blue-400 rounded-md px-5"
            placeholder={"city"}
            name="city"
            onChange={handleInputs}
            required
          />
          <input
            type="text"
            className=" w-100 h-100 border-2 border-blue-400 rounded-md px-5"
            placeholder={"PIN"}
            min={5}
            max={5}
            name="pin"
            onChange={handleInputs}
            required
          />
        </div>
        <select
          id=""
          className="px-5 py-3  border-2 border-blue-400 rounded-lg"
          name="country"
          onChange={handleInputs}
          required
        >
          <option value="PAKISTAN">PAKISTAN</option>
          <option value="INDIA">INDIA</option>
          <option value="US">US</option>
          <option value="UAE">UAE</option>
        </select>
        <button type="submit" className="bg-blue-500 rounded-md text-gray-100 w-fit px-5 py-3 hover:bg-green-400">
          payment{" "}
        </button>
      </form>
    </div>
  );
}
