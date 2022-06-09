import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { AiOutlineHome } from "react-icons/ai";
import { RiTodoFill } from "react-icons/ri";
import { BsViewList } from "react-icons/bs";
import { VscCommentDiscussion } from "react-icons/vsc";
import { MdOutlinePublishedWithChanges } from "react-icons/md";

import { useListUsers } from "../../context/listUsersContext";
import { useUsuario } from '../../context/userContext';

import logoSinFondo from "../../resources/logoSinFondo.png";
import perfil from "../../resources/perfil.jpg";
import style from "./navbar.module.css";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const Navbar = () => {
  const [value, setValue] = React.useState(0);

  const { listUsers } = useListUsers();
  const { setUser } = useUsuario();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={style.navbar}>
      <Box className={style.navbar__contenedor__logo}>
        <img className={style.navbar__logo} src={logoSinFondo} />
      </Box>
      <Tabs className={style.navbar__tabs} value={value} onChange={handleChange} orientation="vertical" aria-label="nav tabs example">
        {/* <Tab component="a" className={style.navbar__tabs} icon={<AiOutlineHome></AiOutlineHome>} onClick={(event) => {event.preventDefault();}} href="#"/>
        <Tab component="a" className={style.navbar__tabs} icon={<RiTodoFill></RiTodoFill>} onClick={(event) => {event.preventDefault();}} href="#"/>
        <Tab component="a" className={style.navbar__tabs} icon={<BsViewList></BsViewList>} onClick={(event) => {event.preventDefault();}} href="#"/> */}
        <LinkTab className={style.navbar__tabs} icon={<AiOutlineHome className={style.navbar__tabs__icon}></AiOutlineHome>} href="/drafts" />
        <LinkTab className={style.navbar__tabs} icon={<RiTodoFill className={style.navbar__tabs__icon}></RiTodoFill>} href="/trash" />
        <LinkTab className={style.navbar__tabs} icon={<BsViewList className={style.navbar__tabs__icon}></BsViewList>} href="/spam" />
      </Tabs>
      <Box className={style.navbar__perfil}>
        <SpeedDial
          ariaLabel="Perfiles"
          sx={{ position: 'absolute', bottom: 0 }}
          icon={<Avatar alt="Perfil" src={perfil} />}
        >
          {listUsers.map((user) => (
            <SpeedDialAction
              key={user}
              icon={  <Avatar alt="Perfil" src={perfil} />  }
              tooltipTitle={user}
              onClick={() => {setUser(user)}}
            />
          ))}
        </SpeedDial>
      </Box>
    </Box>
  );
}

export default Navbar;