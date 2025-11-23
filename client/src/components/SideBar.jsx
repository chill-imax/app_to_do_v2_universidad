import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      navigate("/");
      console.log("You're logged out");
    } catch (error) {
      console.error(error);
    }
  };
  return (

    <div>
      
<nav className="bg-white border-gray-200 dark:bg-menta dark:border-gray-700">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">😎 SMART STUDY</span>
    </a>
    
    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      
    </div>
  </div>
</nav>
    </div>


  )}
export default SideBar;


/**
 * 


 */
