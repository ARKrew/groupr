import React from 'react';
import { Button, Dropdown, Image, Menu } from 'semantic-ui-react';
import Login from '../Login';

const trigger = (auth) => (
  <span>
    <Image src={auth.iconPhotoURL} avatar /> {auth.displayName}
  </span>
);

const renderLoggedInMenu = (auth) => {
  return (
    <Dropdown trigger={trigger(auth)} pointing style={{ padding: 0 }} item simple className="arimo icon">
      <Dropdown.Menu>
        <Dropdown.Item>Profile</Dropdown.Item>
        <Dropdown.Item>
          <a href="/auth/logout">
            <span style={{ color: 'black' }}>Log out</span>
          </a>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const renderAuth = (auth) => {
  switch (auth) {
    case null:
      return;
		case false:
			return <Login />
      // return <Button onClick={renderModal}>Log In</Button>
      // return <a href="/auth/google">Log In</a>;
    default:
      return renderLoggedInMenu(auth);
  }
};

export default renderAuth;
