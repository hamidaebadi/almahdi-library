const Navbar = () => {
    return(
        <nav className=" fixed w-full
             border-b-1 border-gray-300 p-5 top-0">
                {/* Right: Inline Login Form */}
                <form className="flex items-center space-x-3">
                    <input
                        type="text"
                        placeholder="Username"
                        className="border border-gray-300 rounded px-3 py-1 
                        text-sm focus:outline-none focus:border-l-2 focus:border-r-2 focus:outline-0 focus:border-green-500
                    focus:bg-gray-50 transition"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border border-gray-300 
                        rounded px-3 py-1 text-sm focus:border-l-2 focus:border-r-2 focus:outline-0 focus:border-green-500
                    focus:bg-gray-50 transition"
                    />
                    <button
                        type="submit"
                        className="bg-green-900 text-white px-4 py-1.5 
                        rounded text-sm hover:bg-green-700 focus:outline-none 
                        focus:ring-2 focus:ring-blue-400"
                    >
                        Login
                    </button>
                </form>
            </nav>
    )
}

export default Navbar