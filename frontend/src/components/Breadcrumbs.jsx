import { ChevronRight } from "lucide-react";
import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
    const location = useLocation()
    const segments = location.pathname.split('/').filter(Boolean)
    const lastItem = segments.length - 1
    return (
        <nav className="text-sm text-gray-600 mb-4">
            <ol className="flex items-center space-x-1">
                {segments.map((segment, index) => {
                    const path = '/' + segments.slice(0, index + 1).join('/');
                    const label = segment.charAt(0).toUpperCase() + segment.slice(1);
                    return (
                        <>
                        <ChevronRight className="w-4 h-4 mx-1" />
                        {/* <li key={path} className="flex items-center space-x-1 bg-gray-400
                         text-white py-2 px-4 rounded hover:bg-gray-600 transition ">
                            
                            <Link to={path} className="hover:underline-offset-1">
                                {decodeURIComponent(label.replace(/_/g, ' '))}
                            </Link>
                        </li> */}

                        <li key={path} className={`flex items-center space-x-1 bg-gray-400
                         text-white py-2 px-4 rounded hover:bg-gray-600 transition ${index === lastItem ? 'bg-gray-600': ''}`}>
                            
                            <Link to={path} className="hover:underline-offset-1">
                                {decodeURIComponent(label.replace(/_/g, ' '))}
                            </Link>
                        </li>
                        
                        </>
                    );
                })}
            </ol>
        </nav>
    )
}

export default Breadcrumbs