import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "./Footer.css";




export default function NavigationBar() {
  const [activeTab, setActiveTab] = useState("Home");
  let { logout } = useAuth();
  let navigate = useNavigate();

  const handleLogoutCLick = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="nav-bar">
      <div className="nav-left">
        <IconButton
          id="menu-btn"
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <a href="https://jmaster.io/">
          <img
            src="https://jmaster.io/logo192.png"
            id="nav-logo"
            alt="Jmaster"
          ></img>
        </a>
      </div>

      <div
        className={`nav-item ${activeTab === "Home" ? "active" : ""}`}
        onClick={() => setActiveTab("Home")}
      >
        <HomeNav />
      </div>
      <div
        className={`nav-item ${activeTab === "About" ? "active" : ""}`}
        onClick={() => setActiveTab("About")}
      >
        About
      </div>
      <div
        className={`nav-item ${activeTab === "Contact" ? "active" : ""}`}
        onClick={() => setActiveTab("Contact")}
      >
        Contact
      </div>
      <div
        className={`nav-item ${activeTab === "Contact" ? "active" : ""}`}
        onClick={() => setActiveTab("Community")}
      >
        Community
      </div>
      <div
        className={`nav-item ${activeTab === "Contact" ? "active" : ""}`}
        onClick={() => setActiveTab("Documents")}
      >
        Document
      </div>

      <div
        className={`nav-item ${activeTab === "Logout" ? "active" : ""}`}
        onClick={() => setActiveTab("Logout")}
      >
        <LogoutNav />
      </div>
      <div
        className={`nav-item ${activeTab === "Sign Up" ? "active" : ""}`}
        onClick={() => setActiveTab("Sign Up")}
      >
        <SignUpNav />
      </div>
      <div
        id="notification-btn"
        className={`nav-item ${activeTab === "Contact" ? "active" : ""}`}
        onClick={() => setActiveTab("CircleNotificationsIcon")}
      >
        <CircleNotificationsIcon />
      </div>
    </div>
  );

  function LogoutNav() {
    return (
      <Link
        to="/login"
        className={`nav-link ${activeTab === "Logout" ? "active" : ""}`}
        onClick={handleLogoutCLick}
      >
        Logout
      </Link>
    );
  }

  function SignUpNav() {
    return (
      <Link
        to="/signup"
        className={`nav-link ${activeTab === "Sign Up" ? "active" : ""}`}
        onClick={() => setActiveTab("Sign Up")}
      >
        Sign Up
      </Link>
    );
  }

  function HomeNav() {
    return (
      <Link
        to="/main"
        id="home-btn"
        className={`nav-link ${activeTab === "Contact" ? "active" : ""}`}
        onClick={() => setActiveTab("Home")}
      >
        Home
      </Link>
    );
  }
}