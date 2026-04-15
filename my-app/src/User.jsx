function User(){

    const userr ={
        name:"rishi",
        role: "backend",
        stack:"node.js"
    };
    return (<>
    <h1> {userr.name}</h1>

    <p>role:{userr.role}</p>
    </>
    )
}
export default User;