import './setting.css';
import Sidebar from '../../components/sidebar/Sidebar';

const Setting = () => {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <button className="settingTitleUpdate">Update Your Account</button>
          <button className="settingTitleDelete">Delete Account</button>
        </div>
        <form className="settingForm">
          <label>Profile Picture</label>
          <div className="settingpp">
            <img
              className="settingppImg"
              src="https://images.unsplash.com/photo-1659598086265-4728c6fbce19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
            <label htmlFor="settingInput">
              <i class="settingIcon fa-solid fa-user-plus"></i>
            </label>
            <input type="file" id="settingInput" style={{ display: 'none' }} />
          </div>
          <div className="inputForm">
            <label>Username</label>
            <input
              className="settingInput"
              type="text"
              placeholder="avinash"
              autoFocus={true}
            />
            <label>Email</label>
            <input
              className="settingInput"
              type="text"
              placeholder="avinash@gmail.com"
            />
            <label>Password</label>
            <input
              className="settingInput"
              type="password"
              placeholder="avinash"
            />
            <button className="settingButton">Update</button>
          </div>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Setting;
