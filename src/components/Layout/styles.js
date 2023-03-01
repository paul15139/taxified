// Importing styled-components library
import styled from "styled-components";

// Importing variables from a separate file
import { v } from "../../styles/variables";

// Creating a styled component for a layout container
export const SLayout = styled.div`
  display: flex;
`;

// Creating a styled component for the main content container
export const SMain = styled.main`
  padding: calc(${v.smSpacing} * 2);

  /* Setting the font size for h1 elements inside this container */
  h1 {
    font-size: 14px;
  }
`;
