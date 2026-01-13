import React from 'react';
import { Search, Mail, Bell, Settings, Menu } from 'lucide-react';
import './Header.css';
import profileIcon from '../assets/profile_icon.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <div className="logo-container">
                    {/* Placeholder for Logo - In reality this would be an image */}
                    <div className="logo-circle">
                        <img src="https://amrutam.co.in/cdn/shop/files/amrutam_logo.png?v=1614342238&width=200" alt="Amrutam Logo" className="logo-img" onError={(e) => { e.target.style.display = 'none'; }} />
                    </div>
                    <span className="brand-name">A M R U T A M</span>
                </div>
                <Menu className="menu-icon" size={24} />
            </div>

            <div className="header-search">
                <div className="search-wrapper">
                    <Search className="search-icon" size={18} />
                    <input type="text" placeholder="Search here" className="search-input" />
                </div>
            </div>

            <div className="header-right">
                <div className="icon-btn">
                    <Mail size={20} />
                    <span className="badge"></span>
                </div>
                <div className="icon-btn">
                    <Bell size={20} />
                    <span className="badge red"></span>
                </div>

                <div className="user-profile">
                    <div className="user-info">
                        <span className="user-name">Liam Michael</span>
                        <span className="user-role">Admin</span>
                    </div>
                    <img
                        src={profileIcon}
                        alt="Profile"
                        className="user-avatar"
                    />
                </div>

                <div className="icon-btn">
                    <Settings size={20} />
                </div>
            </div>
        </header>
    );
};

export default Header;
