 import {useState,useEffect} from 'react'
 
 
 function UsersTable(){


    const [users , setUsers] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null)

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(
            data =>{setUsers(data);
                setLoading(false);
            }
        ).catch(error =>{ setError(error.message);setLoading(false)})
            
        
    },[]);

    if (loading) return <p>loading userss...</p>
    if(error) return <p>{}</p>
    return (

        <>

        <ul>
            {users.map(user =>(
                <li key ={user.id}>{user.name}</li>
            ))}
        </ul>

        </>
    )
 }

 export default UsersTable;