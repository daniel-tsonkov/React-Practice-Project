import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DehazeIcon from '@mui/icons-material/Dehaze';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import DashboardIcon from '@mui/icons-material/Dashboard';

const SideDrawer = () => {
  const [state, setState] = useState(false); //false sidebar start close

  return (
    <>
      <DehazeIcon className="drawer_btn" onClick={() => setState(true)} />

      <Drawer
        anchor={'right'}
        open={state}
        onClose={() => setState(false)}
      ></Drawer>
    </>
  );
};

export default SideDrawer;
