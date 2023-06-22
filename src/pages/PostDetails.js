import React from 'react';
import { useParams } from 'react-router-dom';

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

const PostDetails = () => {
    const params=useParams()
    console.log(params,"params")
    return (
        <div>
            
        </div>
    );
};

export default PostDetails;