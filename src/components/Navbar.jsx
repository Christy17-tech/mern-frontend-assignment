import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold tracking-wider">
              EmpDash
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/employee-form" 
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition-colors"
            >
              Employee Form
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
