import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
	<div>
  	<nav style={{ display: "flex", justifyContent: "space-around" }}>
    	<Link to="/">Home</Link>
    	<Link to="/todolist/ABC"><h1>ABC's To Do List</h1></Link>
    	<Link to="/todolist/DEF"><h1>DEF's To Do List</h1></Link>
  	</nav>
	</div>
  );
};