import axios from 'axios';
import {useEffect,useState} from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import './singlepost.css';

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState({});
  const location = useLocation()
  const path = location.pathname.split('/')[2]


  useEffect(() => {
   const getPost = async ()=>{
    const res = await axios.get(`http://localhost:8000/api/posts/${path}`)
    setSinglePost(res.data)
   }
   getPost()
  }, [singlePost]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {
          singlePost.photo && 

        <img
          src={singlePost.photo}
          alt=""
          className="singlePostImg"
        />
        }
        <h1 className="singlePostTitle">
          {singlePost.title}
        <div className="singlePostEdit">
          <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
          <i className="singlePostIcon fa-solid fa-trash"></i>
        </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:<b>{singlePost.username}</b>
          </span>
          <span className="singlePostDate">{new Date(singlePost.createdAt).toDateString()}</span>
        </div>
        <p className='singlePostDesc'>
            {
              singlePost.desc
            }
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
