import React, {useContext, useEffect, useState} from "react"
import { PostContext } from "../providers/PostProvider"
import { useNavigate } from 'react-router-dom';


export const PostForm = () => {
    const {getAllPosts,addPost} = useContext(PostContext)

    const [post, setPost] = useState([]);

    useEffect(()=> {
        getAllPosts()
    }, []);

    const navigate = useNavigate();

    const handleControlledInputChange = (event)=> {
        const newPost = {...post}
        newPost[event.target.id] = event.target.value
        
        setPost(newPost)
    }

    const handleClockSavePost = (event) => {
        event.preventDefault()
        addPost(post)
        .then(() => navigate("/api/post"))
    }
    return(
        <form className="postForm">
            <h2>New Post</h2>
            <fieldset>
                <div className="formGroup">
                <label htmlFor="title">Post Title</label>
                <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="post title" value={post.title}/>
                </div>
            </fieldset>

        </form>
    )
}