import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import { Switch } from "@/components/ui/switch";

const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-xl font-bold">University Camp</Link>
      </div>
      <div className="flex items-center space-x-4">
        <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
        <button onClick={toggleLanguage}>
          {language === 'en' ? 'EN' : 'ZH'}
        </button>
        <Menu menuButton={<MenuButton>Avatar</MenuButton>}>
          <MenuItem><Link to="/account">Account</Link></MenuItem>
          <MenuItem><Link to="/signout">Sign Out</Link></MenuItem>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;