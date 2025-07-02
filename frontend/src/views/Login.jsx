const Login = () => {
    return(
         <div className="flex flex-col justify-center items-center mt-40 w-full gap-2">
                <h2 className="text-3xl font-semibold mb-4
                tracking-tighte
                font-stretch-extra-condensed">AL-MAHDI Library</h2>
                <input
                    className="w-2xl py-4 px-10 text-lg bg-gray-200 rounded-lg shadow-2xs
                    focus:border-l-2 focus:border-r-2 focus:outline-0 focus:border-green-500
                    focus:bg-gray-50 transition
                    "
                    placeholder="password" 
                    type="text"
                    />
                    <input
                    className="w-2xl py-4 px-10 text-lg bg-gray-200 rounded-lg shadow-2xs
                    focus:border-l-2 focus:border-r-2 focus:outline-0 focus:border-green-500
                    focus:bg-gray-50 transition
                    "
                    placeholder="password" 
                    type="password"
                    />

                <button
                    type="submit"
                    className="bg-green-900 text-white px-16 py-2 rounded hover:bg-green-700 
                    focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-2xl"
                >
                     Login
                </button>

            </div>
    )
}

export default Login