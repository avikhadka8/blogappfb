import axios from 'axios'
import React,{useState,useEffect} from 'react'
import './sidebar.css'

const Sidebar = () => {
  const [cat,setCat] = useState([])

  useEffect(()=>{
    const getCats = async () =>{
      const res = await axios.get("http://localhost:8000/api/cat")
      setCat(res.data)
    }
    getCats()

  },[])

  return (
    <div className='sidebar'>
       <div className="sidebarItem">
         <span className='sidebarTitle'>ABOUT ME</span>
         <img src="https://images.unsplash.com/photo-1667829186138-55120b70d731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laborum voluptatem voluptatum sed in illum necessitatibus nostrum voluptate distinctio inventore, reprehenderit, quis accusamus totam assumenda explicabo quidem recusandae numquam animi.</p>
       </div>
        <div className="sidebarItem">
         <span className='sidebarTitle'>CATEGORIES</span>
          <ul className="sidebarList">

            {
              cat.map((c)=>{
                return (
                  <li className="sidebarItemList">{c.name}</li>
                )
              })
            }
           
          </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-instagram"></i>
            <i className="sidebarIcon fa-brands fa-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-twitter"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar