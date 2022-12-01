import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleBg">BLOG</span>
      </div>
      <img  className='headerImg' src="https://images.unsplash.com/photo-1492052722242-2554d0e99e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
    </div>
  )
}

export default Header