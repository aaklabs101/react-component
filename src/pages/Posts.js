import React from 'react';
import { Link } from "react-router-dom";
const data=[
    {
        id:1,
        name:"hello",
        desc:"Hi this is hello"
    },
    {
        id:2,
        name:"hello",
        desc:"Hi this is hello"
    },
    {
        id:3,
        name:"hello",
        desc:"Hi this is hello"
    },
]
const Posts = () => {
    return (
        <div>
           {
            data.map(item=>{
                return(
                    <div style={{border:"1px solid red",margin:"10px"}}>

                        <h3>{item.id}</h3>
                        <h3>{item.name}</h3>
                        <h3>{item.desc}</h3>

                      <Link to={`/post/${item.id}`}>  <button >Details</button></Link>
                    </div>
                )
            })
           }
        </div>
    );
};

export default Posts;