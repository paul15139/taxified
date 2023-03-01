import { Link } from "react-router-dom"; // Imports the Link component from the react-router-dom library
import styled from "styled-components"; // Imports the styled function from the styled-components library
import { btnReset, v } from "../../styles/variables"; // Imports the btnReset and v variables from an external file located in the ../../styles/variables directory

export const SSidebar = styled.div`
  /* Defines a styled component for a div element with the name SSidebar */
  width: ${({ isOpen }) => (!isOpen ? `auto` : v.sidebarWidth)};
  background: ${({ theme }) => theme.bg};
  height: 100vh;
  padding: ${v.lgSpacing};
  position: relative;
`;

export const SSidebarButton = styled.button`
  /* Defines a styled component for a button element with the name SSidebarButton */
  ${btnReset};
  position: absolute;
  top: ${v.xxlSpacing};
  right: ${({ isOpen }) => (isOpen ? `-16px` : `-40px`)};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.bg};
  box-shadow: 0 0 4px ${({ theme }) => theme.bg3}, 0 0 7px ${({ theme }) => theme.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
`;

export const SLogo = styled.div`
  /* Defines a styled component for a div element with the name SLogo */
  width: 52px;
  img {
    max-width: 100%;
    height: auto;
  }
  cursor: pointer;
  margin-bottom: ${v.lgSpacing};
`;

export const SSearch = styled.div`
  /* Defines a styled component for a div element with the name SSearch */
  background: ${({ theme }) => theme.bgAlpha};
  border: 1px solid ${({ theme }) => theme.bg3};
  border-radius: ${v.borderRadius};
  input {
    padding: 0 ${v.smSpacing};
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 16px;
    width: 100%;
    outline: none;
    border: none;
    color: inherit;
    background: transparent;
  }
  display: flex;
`;

export const SSearchIcon = styled.button`
  /* Defines a styled component for a button element with the name SSearchIcon */
  ${btnReset};
  padding: calc(${v.mdSpacing} - 2px) ${v.mdSpacing};
  display: flex;
  cursor: pointer;
  svg {
    font-size: 20px;
  }
`;

export const SDivider = styled.div`
  /* Defines a styled component for a div element with the name SDivider */
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.bg3};
  margin: ${v.lgSpacing} 0;
`;

export const SLinkContainer = styled.div`
  /* Defines a styled component for a div element with the name SLinkContainer */
  background: ${({ theme, isActive }) => (!isActive ? `transparent` : theme.bg3)};
  border-radius: ${v.borderRadius};
  margin: 8px 0;
  :hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
  }
`;

export const SLink = styled(Link)`
  /* Defines a styled component for a Link element with the name SLink */
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(${v.smSpacing} - 2px) 0;
`;

export const SLinkIcon = styled.div`
  /* Defines a styled component for a div element with the name SLinkIcon */
  padding: ${v.smSpacing} ${v.mdSpacing};
  display: flex;
  svg {
    font-size: 20px;
  }
`;

export const SLinkLabel = styled.span`
  /* Defines a styled component for a span element with the name SLinkLabel */
  display: block;
  flex: 1;
  margin-left: ${v.smSpacing};
`;

export const SLinkNotification = styled.div`
  /* Defines a styled component for a div element with the name SLinkNotification */
  font-size: 14px;
  padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
  border-radius: calc(${v.borderRadius} / 2);
  background: ${({ theme }) => theme.primary};
  color: white;
  margin-right: ${v.mdSpacing};
`;

export const STheme = styled.div`
  /* Defines a styled component for a div element with the name STheme */
  display: flex;
  align-items: center;
  font-size: 16px;
`;
export const SThemeLabel = styled.span`
  /* Defines a styled component for a span element with the name SThemeLabel */
  display: block;
  flex: 1;
`;
export const SThemeToggler = styled.button`
  /* Defines a styled component for a button element with the name SThemeToggler */
  ${btnReset};
  margin: 0 auto;
  cursor: pointer;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background: ${({ theme, isActive }) => (!isActive ? theme.bg3 : theme.primary)};
  position: relative;
`;

export const SToggleThumb = styled.div`
  /* Defines a styled component for a div element with the name SToggleThumb */
  height: 18px;
  width: 18px;
  position: absolute;
  top: 1px;
  bottom: 1px;
  transition: 0.2s ease right;
  right: calc(100% - 18px - 1px);
  border-radius: 50%;
  background: ${({ theme }) => theme.bg};
`;
