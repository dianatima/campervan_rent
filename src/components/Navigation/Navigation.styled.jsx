import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavItem = styled(NavLink)`
text-decoration: none;
color: white;
margin-right: 40px;
&.active {   
    color: var(--button-hover-color);
}
:hover:not(.active),
:focus-visible:not(.active) {
    color: #e0e0e0;
}
`;
