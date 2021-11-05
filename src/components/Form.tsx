import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { AddProduct, UpdateProduct, DeleteProduct } from "../feature/productSlice";
import type { Product } from "../product";

import "./form.css";

function Form() {
    const id = useLocation().search.split('=')[1];
    const productsSelector = useSelector(
      (state: RootState) => state.products.item.find((item: Product)=>{
        return item.id === parseInt(id)
    
      })
    );
  
      const inputRef = useRef<any>(null);
      useEffect(() => {
        inputRef.current.focus();
      }, [])

    const testSelector = useSelector(
      (state: RootState) => state.products.item.find((item: Product)=>{
        return item.id === parseInt(id)
    
      })
    );

    console.log("testSelector:", testSelector)

    const initialData: Product = {
      id: '',
      image: "",
      price: '',
      title: "",
      category: "",
      description: ""
    }
    
    let uuid = () => {
      return (crypto.getRandomValues(new Uint8Array(8))).toString().replace(/,/g, '').substr(1,16);
    
    }

    const {save, edit} = useSelector(
      (state: RootState) => state.buttonReducer.toggle
    );

    const [ errorMessage, setErrorMessage ] = useState('');

    const [ data, setData ] = useState(productsSelector || initialData);
    const dispatch = useDispatch();
    const handleInputChange = (e: any) => {
      const { name, value } = e.target
      setData({
          ...data,
          [name]: value
      })
    }
    
    const onSubmit = async (e: React.FormEvent<EventTarget>, tag: number = 0) => {
        e.preventDefault()
        if(!data.image || !data.title || !data.category || !data.price) {
          setErrorMessage("All Fields except description field are required");
          setTimeout(()=>{setErrorMessage("");}, 2000)
          return;
        } 
        
       if (tag === 1) {
        data["id"] = parseInt(uuid())
        console.log("data:", data, data.id)
        setData(data)

         handeleAdd(data)
         setData(initialData);
       } else if (tag === 2) {
        setData(data);
        if (!data.id) return;
        handeleUpdate(data)
       } else if (tag === 3) {
        if (data.id === 0 || !data.id) return;
        handeleDelete(data)
       }
        //history.push("/");
    }

    const handeleAdd = (data: Product) => {
      dispatch(
        AddProduct(data)
      );
    }

    const handeleUpdate = (data: Product) => {
      dispatch(
        UpdateProduct(data)
      );
    }

    const handeleDelete = (data: Product) => {
      dispatch(
        DeleteProduct(data)
      );
    }
   
  return (
    <main>
    <form className="main-container" onSubmit={onSubmit}>
      <div className="form-box">
        <label data-tooltip="required field" htmlFor="image" >Image</label>
        <input ref={inputRef as any} id="image" name="image" type="text" value={data.image} onChange={(e)=>handleInputChange(e)}/>
      </div>
      <div className="form-box">
        <label data-tooltip="required field" htmlFor="price">Price</label>
        <input id="price" name="price" type="text" value={data.price} onChange={(e)=>handleInputChange(e)}/>
      </div>
      <div className="form-box">
        <label data-tooltip="required field" htmlFor="title">Title</label>
        <input id="title" name="title" type="text" value={data.title} onChange={(e)=>handleInputChange(e)}/>
      </div>
      <div className="form-box">
        <label data-tooltip="required field" htmlFor="category">Category</label>
        <input id="category" name="category" type="text" value={data.category} onChange={(e)=>handleInputChange(e)}/>
      </div>
      <div className="form-box">
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" value={data.description} onChange={(e)=>handleInputChange(e)} ></textarea>
      </div>
      {errorMessage&&<p className="error">{errorMessage}</p>}
      <div className="flex-container"> 
      <button  disabled={save} className="btn" style={{ display: save ? "none" : "block"}} type="submit" onClick={(e)=>onSubmit(e, 1)}>Save</button>
      <button disabled={edit} className="btn" style={{ display: edit ? "none" : "block"}} type="submit" onClick={(e)=>onSubmit(e, 2)}>Update</button>
      {/* <button className="btn" type="submit" onClick={(e)=>onSubmit(e, 3)}>Delete</button> */}
      </div>
    </form>
    </main>
  );
}
export default Form;