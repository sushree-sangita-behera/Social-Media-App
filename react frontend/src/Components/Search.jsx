import { useState } from "react";

function Search() {

const users = [
"Sushree",
"Riya",
"Ankit",
"Rahul",
"Priya"
];

const [search, setSearch] = useState("");

const filteredUsers = users.filter(user =>
user.toLowerCase().includes(search.toLowerCase())
);

return (

<div>

<h2>Search Users</h2>

<input
type="text"
placeholder="Search user..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<ul>

{filteredUsers.map((user,index)=>(
<li key={index}>{user}</li>
))}

</ul>

</div>

);

}

export default Search;