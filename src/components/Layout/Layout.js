import React from "react"; // Import the React library

import Sidebar from "../Sidebar/Sidebar"; // Import the Sidebar component

import { SLayout, SMain } from "./styles"; // Import the styled components

// Define the Layout component
const Layout = ({ children }) => {
    return (
        <SLayout> {/* Render the SLayout styled component */}
            <Sidebar /> {/* Render the Sidebar component */}
            <SMain>{children}</SMain> {/* Render the SMain styled component and any child components passed in */}
        </SLayout>
    );
};

export default Layout; // Export the Layout component to be used elsewhere
