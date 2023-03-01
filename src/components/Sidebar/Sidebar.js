import React, { useContext, useEffect, useRef, useState } from "react";
import {
  AiOutlineApartment,
  AiOutlineBorder,
  AiOutlineHome,
  AiOutlineLeft,
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { MdLogout, MdOutlineAnalytics } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { SDivider, SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLinkNotification, SLogo, SSearch, SSearchIcon, SSidebar, SSidebarButton, STheme, SThemeLabel, SThemeToggler, SToggleThumb,} from "./styles";
import { logoSVG } from "../../assets";
import { ThemeContext } from "./../../App";

// linksArray contains objects that represent the main links of the sidebar
// each object contains a label, an icon, a "to" path and an optional notification number
const linksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
    
  },
  {
    label: "Categories",
    icon: <AiOutlineBorder />,
    to: "/categories",
  },
  {
    label: "Mock Tests",
    icon: <BsPeople />,
    to: "/mock-tests",
    
  },
  {
    label: "Learn Theory",
    icon: <AiOutlineApartment />,
    to: "/learn-theory",
    
  },
  {
    label: "Statistics",
    icon: <MdOutlineAnalytics />,
    to: "/statistics",
    
  },
];

// secondaryLinksArray contains objects that represent the secondary links below the main ones
// each object contains a label and an icon
const secondaryLinksArray = [
  {
    label: "Settings",
    icon: <AiOutlineSetting />,
  },
  {
    label: "Logout",
    icon: <MdLogout />,
  },
];

const Sidebar = () => {
  // useContext hook is used to access the current theme, and the function to set it
  const { setTheme, theme } = useContext(ThemeContext);
  // useLocation hook is used to get the current path
  const { pathname } = useLocation();
  // useRef hook is used to get the input element for search
  const searchRef = useRef(null);
  // useState hook is used to keep track of the state of the sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // searchHandler function is called when the search icon is clicked
  // it opens the sidebar if it's not already open, and sets focus on the search input
  const searchHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      searchRef.current.focus();
    } else {
      // search functionality
    }
  };

  // useEffect hook is used to listen for clicks on the document
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarOpen && !event.target.closest("#sidebar")) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <SSidebar id="sidebar" isOpen={sidebarOpen}>
      <>
        {/* SSidebarButton is a button that toggles the state of the sidebar */}
        <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((prev) => !prev)}>
          <AiOutlineLeft />
        </SSidebarButton>
      </>
      <SLogo>
        <img src={logoSVG} alt="logo" />
      </SLogo>
      {/* SSearch is the container for the search bar */}
      {/* onClick calls searchHandler function */}
      {/* style is adjusted based on whether sidebar is open or not */}
      <SSearch
        onClick={searchHandler}
        style={!sidebarOpen ? { width: `fit-content` } : {}}
      >
        <SSearchIcon>
          <AiOutlineSearch />
        </SSearchIcon>
        {/* input element for search */}
        {/* ref is set to the searchRef obtained with useRef */}
        {/* style is adjusted based on whether sidebar is open or not */}
        <input
          ref={searchRef}
          placeholder="Search"
          style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
        />
      </SSearch>
      <SDivider />
      {/* mapping over linksArray and creating SLinkContainer and SLink components */}
      {/* isActive prop is true if the current path matches the "to" path of the link */}
      {/* style is adjusted based on whether sidebar is open or not */}
      {linksArray.map(({ icon, label, notification, to }) => (
        <SLinkContainer key={label} isActive={pathname === to}>
          <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && (
              <>
                <SLinkLabel>{label}</SLinkLabel>
                {!!notification && (
                  <SLinkNotification>{notification}</SLinkNotification>
                )}
              </>
            )}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      {/* mapping over secondaryLinksArray and creating SLinkContainer and SLink components */}
      {/* style is adjusted based on whether sidebar is open or not */}
      {secondaryLinksArray.map(({ icon, label }) => (
        <SLinkContainer key={label}>
          <SLink to="/" style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      <STheme>
        {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
        {/* SToggleThumb is the switcher thumb */}
        {/* isActive prop is true if the current theme is dark */}
        {/* onClick calls setTheme function to toggle between themes */}
        <SThemeToggler
          isActive={theme === "dark"}
          onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
        >
          <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
        </SThemeToggler>
      </STheme>
    </SSidebar>
  );
};

export default Sidebar;
