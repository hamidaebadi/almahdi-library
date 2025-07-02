import { NavLink } from "react-router-dom";

const Sidebar = ({ menuObj, title }) => {

  return (
    <div className="fixed top-0 left-0 h-screen flex flex-col p-4 mt-20">
      {/* Logo Section */}
      <div className="flex justify-center p-10">
        <h4 className="font-extrabold uppercase">
          {title}
        </h4>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col">
        {menuObj.map((item) =>
        <>
        
              <NavLink
                key={item.id}
                to={item.url}
                className={({ isActive }) =>
                  `flex gap-5 p-4 rounded text-gray-800 hover:bg-green-800 hover:text-white 
                            ${isActive ? 'bg-gray-200 text-gray-800 font-semibold rounded-lg' : ''
                  }`
                }
              >
                {item.icon}
                {item.text}
              </NavLink>
        </>   
        )}
        {/* Overview Section */}

      </nav>
    </div>

  )
}

export default Sidebar