import styled from 'emotion/react';
import Toolbar from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import theme from 'theme';

export const SecondaryAppBar = styled(AppBar)`
  position: static;
`;

export const SecondaryToolbar = styled(Toolbar)`
  background-color: ${theme.palette.primary[500]};
  min-height: 5rem;
  color: ${theme.palette.getContrastText(theme.palette.primary[800])};
`;
