import { ReactElement } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

interface MenuItemProps {
  children: ReactElement
  text: string
}

function MenuItem(props: MenuItemProps) {
  return (
    <ListItem button onClick={() => alert('Not implemented yet')}>
      <ListItemIcon>
        {props.children}
      </ListItemIcon>
      <ListItemText primary={props.text} />
    </ListItem>
  );
}

export default MenuItem;