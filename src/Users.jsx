import { use } from "react";

 export default function Users({fetchUsers}) {

    const users = use(fetchUsers); //use is a hook that allows us to fetch data from an API
    console.log(users);

    return (
        <div className="card">
            <h1>Users: {users.length} </h1>
        </div>
    )
 } 