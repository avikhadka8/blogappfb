import React from 'react';
import {Link} from 'react-router-dom'
import './post.css';
const Post = ({post}) => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          {
            post.categories.map((c)=>{
              return (<span className="postCat">{c.name}</span>)

            })
          }
          <span className="postCat">sport</span>
        </div>
        <Link to={`/post/${post._id}`} className='link'>
        <span className="postTitle">{post.title}</span>

        </Link>
        {/* <hr /> */}
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        <p className="postContent">
          {
            post.desc
          }
          </p>
      </div>
    </div>
  );
};

export default Post;
