import React, { useEffect, useContext, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { PostContext } from "../providers/PostProvider";
import { useParams } from "react-router-dom";
import Post from "./Post";

const PostDetails = () => {
  const [post, setPost] = useState();
  const { GetPostByIdWithComments } = useContext(PostContext);
  const { id } = useParams();

  useEffect(() => {
    GetPostByIdWithComments(id).then(setPost);
  }, []);

  if (!post) {
    return null;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6">
          <Post post={post} />
          {/* <ListGroup>
            {post.comments.map((c) => (
              <ListGroupItem>{c.message}</ListGroupItem>
            ))}
          </ListGroup> */}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;