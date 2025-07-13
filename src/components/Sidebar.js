import React from "react";


const Sidebar = ({ setShowSidebar, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowSidebar(false);
  };

  return (
    <div className="sidebar">
      <button className="close-btn" onClick={() => setShowSidebar(false)}>✖</button>
      <ul>
        <li>Your Orders</li>
        <li>Rewards</li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
