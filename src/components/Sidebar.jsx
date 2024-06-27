import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-900 text-white flex flex-col">
      <Link to="/" className="p-4 hover:bg-gray-700">Overview</Link>
      <div className="p-4">
        <p className="font-bold">Society</p>
        <Link to="/excos" className="pl-4 hover:bg-gray-700">EXCOs</Link>
        <Link to="/beat-cheers" className="pl-4 hover:bg-gray-700">Beat/Cheers</Link>
      </div>
      <div className="p-4">
        <p className="font-bold">Content</p>
        <Link to="/groups" className="pl-4 hover:bg-gray-700">Groups</Link>
        <Link to="/rundown" className="pl-4 hover:bg-gray-700">Rundown</Link>
        <Link to="/campfire-steps" className="pl-4 hover:bg-gray-700">Campfire Steps</Link>
        <Link to="/sponsorship" className="pl-4 hover:bg-gray-700">Sponsorship</Link>
      </div>
      <div className="p-4">
        <p className="font-bold">Reminder</p>
        <Link to="/needs" className="pl-4 hover:bg-gray-700">Needs</Link>
        <Link to="/precaution" className="pl-4 hover:bg-gray-700">Precaution</Link>
      </div>
      <div className="p-4">
        <p className="font-bold">Management</p>
        <Link to="/user-groups" className="pl-4 hover:bg-gray-700">User Groups</Link>
        <Link to="/users" className="pl-8 hover:bg-gray-700">Users</Link>
        <Link to="/roles" className="pl-8 hover:bg-gray-700">Roles</Link>
        <Link to="/groups" className="pl-8 hover:bg-gray-700">Groups</Link>
        <Link to="/settings" className="pl-4 hover:bg-gray-700">Settings</Link>
      </div>
    </div>
  );
};

export default Sidebar;