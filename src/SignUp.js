import styled from "styled-components";
import React from "react";
import axios from "axios";

const Container = styled.div`
border:1px solid #444;
margin: 10rem 35rem;
background-color: #444;
padding-left: 5rem;
padding-right: 5rem;
padding-top: 2rem;
padding-bottom: 2rem;
text-align: center;
border-radius: 10px;
color:#fff;
`;


function SignUp() {

    const [users, setUsers] = React.useState([]);
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const createUser = async () => {
        window.alert("Registration successful!");
        try {
            const { data } = await axios.post("https://gethziyaljoyce.herokuapp.com/users/signup", {
                name: name,
                email: email,
                password: password
            });
            users.push(data);
            let tempPosts = [...users];
            console.log(data);
            setUsers(tempPosts);
            setName("");
            setEmail("");
            setPassword("");

        } catch (err) {
            console.log("Error :", err);
        }

    };

    let handleChange = ({ target: { name, value } }) => {
        if (name === "name") setName(value);
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
        console.log(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser();
    }
    return (
        <>
            <Container>
                <form>
                    <label>Name </label><br></br><br></br>
                    <input type="text" name="name" value={name} onChange={handleChange} /><br></br><br></br>
                    <label>Email  </label><br></br><br></br>
                    <input type="email" name="email" value={email} onChange={handleChange} /><br></br><br></br>
                    <label>PassWord  </label><br></br><br></br>
                    <input type="password" name="password" value={password} onChange={handleChange} /><br></br><br></br>
                    <button onClick={handleSubmit}>Sign Up</button><br></br><br></br>
                </form>
            </Container>
        </>
    );
}

export default SignUp;