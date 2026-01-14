import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import "./Sidebar.css";

import dashboardIcon from "../assets/dashboard_icon.png";
import doctorsIcon from "../assets/doctors_icon.png";
import patientsIcon from "../assets/patients_icon.png";
import appointmentsIcon from "../assets/appointments_icon.png";
import specialityIcon from "../assets/speciality_icon.png";
import couponsIcon from "../assets/coupons_icon.png";
import concernsIcon from "../assets/concerns_icon.png";
import referralIcon from "../assets/referral_icon.png";
import customizationIcon from "../assets/customization_icon.png";

const Sidebar = ({ activeView, setActiveView, isOpen, onClose }) => {
  const [isCustomizationOpen, setIsCustomizationOpen] = useState(true);

  const handleItemClick = (view) => {
    setActiveView(view);
    onClose();
  };

  const menuItems = [
    { name: "Dashboard", icon: dashboardIcon, isImage: true },
    { name: "Doctors", icon: doctorsIcon, isImage: true },
    { name: "Patients", icon: patientsIcon, isImage: true },
    { name: "Appointments", icon: appointmentsIcon, isImage: true },
    { name: "Speciality", icon: specialityIcon, isImage: true },
    { name: "Coupons", icon: couponsIcon, isImage: true },
    { name: "Concerns", icon: concernsIcon, isImage: true },
    { name: "Referral", icon: referralIcon, isImage: true },
  ];

  return (
    <>
      {isOpen && <div className="sidebar-overlay show" onClick={onClose}></div>}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <h2 className="sidebar-title">Main</h2>

      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li key={item.name} className="sidebar-item">
            <div className="sidebar-link">
              {item.isImage ? (
                <img src={item.icon} alt={item.name} className="sidebar-icon-img" />
              ) : (
                <item.icon size={18} className="sidebar-icon" />
              )}
              <span>{item.name}</span>
              <ChevronRight size={16} className="arrow-right" />
            </div>
          </li>
        ))}

        {/* Customization */}
        <li className="sidebar-item active-parent">
          <div
            className="sidebar-link"
            onClick={() => setIsCustomizationOpen(!isCustomizationOpen)}
          >
            <img src={customizationIcon} alt="Customization" className="sidebar-icon-img" />
            <span className="customization-text">Customization</span>
            {isCustomizationOpen ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </div>

          {isCustomizationOpen && (
            <ul className="submenu">
              <li
                className={`submenu-item ${activeView === 'web' ? 'active' : ''}`}
                onClick={() => handleItemClick('web')}
              >
                {activeView === 'web' && <ChevronRight size={18} className="submenu-arrow" />}
                Web
              </li>

              <li
                className={`submenu-item ${activeView === 'app' ? 'active' : ''}`}
                onClick={() => handleItemClick('app')}
              >
                {activeView === 'app' && <ChevronRight size={18} className="submenu-arrow" />}
                App
              </li>
            </ul>
          )}
        </li>
      </ul>
    </aside>
    </>
  );
};

export default Sidebar;
