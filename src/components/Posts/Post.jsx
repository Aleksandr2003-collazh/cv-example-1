import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";

export default function Post() {
  const {id} = useParams();
  const [post, setPost] = useState(null);
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((json) => setPost(json))
  }, [id])
  return (
    <>
    {!post && <Skeleton />}
    {post && <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>}
    </>
    )
}