import React from 'react';
import { Search, Mail, Bell, Settings, Menu } from 'lucide-react';
import './Header.css';
import profileIcon from '../assets/profile_icon.png';
import amrutamLogo from '../assets/amrutam_logo.png';

const Header = ({ onMenuClick }) => {
    return (
        <header className="header">
            <div className="header-left">
                <div className="logo-container">
                    <img src={amrutamLogo} alt="Amrutam Logo" className="logo-img" />
                    <span className="brand-name">A M R U T A M</span>
                </div>
                <Menu className="menu-icon" size={24} onClick={onMenuClick} />
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
                    <span className="badge"></span>
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
