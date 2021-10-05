import axios from "axios"
import React from "react";
import StyledHeader from "./HeaderCommon";

export default function Users() {

    const [users, setUsers] = React.useState([]);
    const getUsers = async () => {
        const data = await axios.get("https://gethziyaljoyce.herokuapp.com/users");
        setUsers(data);
    }

    React.useEffect(() => getUsers());
    return (
        <>
            <div>
                <StyledHeader>Users</StyledHeader>
                {users.map((element, index) => {
                    return (
                        <>
                            <div key={index} className="comment">
                                <p>Name :{element.name}</p>
                                <p>Email:{element.email}</p>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
}