import { ReactElement } from 'react';
import { ListItem, ListItemIcon } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface MenuItemProps {
  children: ReactElement
  text: string
  link: string
}

function MenuItem(props: MenuItemProps) {
  return (
    <ListItem>
      <ListItemIcon>
        {props.children}
      </ListItemIcon>
      <Link to={props.link}>{props.text}</Link>
    </ListItem>
  );
}

export default MenuItem;