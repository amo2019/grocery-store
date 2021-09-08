import { Link } from "react-router-dom";
import "./Header.css";

export const Header: React.FunctionComponent<{
    search: string;
    onSetSearch: (search: string) => void;
    }> = ({ search, onSetSearch }) => {
    

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
        value={search}
        onChange={(evt) => onSetSearch(evt.target.value)}
        className="input p-2 text-xl  rounded-lg"
        />
    </div>
    <div>
        Cart
    </div>
    </div>
);
};