import styled from 'styled-components';
import { Box, Typography, CircularProgress } from '@mui/material';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';

export const StyledBox = styled(Box)`
  padding: 20px;
  background-color: #f2f2f2;
`;

export const CastCard = styled(Box)`
  text-align: center;
  margin: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const CastImage = styled.img`
  width: 185px;
  border-radius: 8px;
`;

export const NoAccountsImage = styled(NoAccountsIcon)`
  width: 220px;
  height: 220px;
  color: #757575;
`;

export const CastName = styled(Typography)`
  font-weight: bold;
  margin-top: 8px;
  color: #333;
`;

export const CastPopularity = styled(Typography)`
  margin-top: 4px;
  color: #555;
`;

export const LoadingSpinner = styled(CircularProgress)`
  margin: auto;
  display: block;
  color: #2196f3;
`;
