import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">Library Management</h1>
        <ul className="flex space-x-4">
          <li><a href="/catalogue" className="hover:text-blue-400">Catalogue</a></li>
          <li><a href="/loans" className="hover:text-blue-400">Loans</a></li>
          <li><a href="/profile" className="hover:text-blue-400">Profile</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
