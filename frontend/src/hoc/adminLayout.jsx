import { Link as RouterLink } from 'react-router-dom';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';

const AdminLayout = (props) => {
  const users = useSelector((state) => state.users);

  return <></>;
};

export default AdminLayout;
