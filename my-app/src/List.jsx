import { useState , useEffect} from "react";


function List(){
    const [loading , setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [userId , setId] = useState(null);
    const [list,postList] = useState([]);



    useEffect(()=>{
        const url = userId?`https://jsonplaceholder.typicode.com/posts?userId=${userId}`:
        'https://jsonplaceholder.typicode.com/posts';

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoading(true);
        setError(null);

        fetch(url).then((res) =>{
            if(!res.ok) throw new Error("failed to fetch");
            return res.json()
        }).then(
            (data)=>{
                postList(data.slice(0,10));
                setLoading(false);
            }
        ).catch(error =>{
            setError(error.message);
            setLoading(false);
        });
        },[userId]);

        if(loading)return <p>loading...</p>
        if(error) return <p>Error:{error}</p>

    return (
        <>
        <button onClick={()=>{setId(2)}}>load user 2 posts</button>

        <ul>
            {list.map((list)=>{
              return  <li key ={list.id} >{list.id}:{list.title}</li>
            })}
        </ul>
        </>
    )
}

export default List;