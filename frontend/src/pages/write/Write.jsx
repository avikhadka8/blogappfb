import Navbar from '../../components/navbar/Navbar';
import './write.css';

const Write = () => {
  return (
    <div className="write">
      <form className="writeForm">
        <img  className='writeImg' src="https://images.unsplash.com/photo-1646994354902-aca005ba7ab5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
        <div className="writeFormGroup">
          <label htmlFor="writeFile">
            <i class="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="writeFile" style={{ display: 'none' }} />
          <input
            type="text"
            className="writeInput"
            placeholder="your title"
            autoFocus="true"
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="tell me your story......"
          ></textarea>
        </div>
        <button className="writeButton">Publish</button>
      </form>
    </div>
  );
};

export default Write;
