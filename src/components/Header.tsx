import { Link } from "react-router-dom";

export const Header = ()=>{

return (
    <div className="header">
    <div >
        <Link to="/">
        <i ></i>
        Simple Grocery Store
        </Link>
    </div>
    <div className="flex-grow">
        <input
        type="text"
        placeholder="Search.."
        />
    </div>
    <div>
        Cart
    </div>
    </div>
);
};