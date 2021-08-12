import { ReactElement } from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";

interface MenuItemProps {
  children: ReactElement
  text: string
  link: string
}

function MenuItem({ children, text, link }: MenuItemProps) {
  return (
    <ListItem component={Link} to={link}>
      <ListItemIcon>
        {children}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}

export default MenuItem;