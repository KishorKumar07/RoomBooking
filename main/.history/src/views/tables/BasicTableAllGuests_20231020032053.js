import React from 'react';
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
  AvatarGroup,
  Chip,
  Paper,
  TableContainer,
  Stack,
} from '@mui/material';

import PageContainer from '../../components/container/PageContainer';
import { basicsTableData } from './tableData';

import ParentCard from '../../components/shared/ParentCard';
import Logo from 'src/layouts/full/shared/logo/Logo';
const basics = basicsTableData;


const BasicTableAllGuests = () => (
  <PageContainer title="All Guests" description="this is Basic Table page">
   

    <ParentCard title="All Guests">
      <Paper variant="outlined">
        <TableContainer >
          <Table
            aria-label="simple table"
            sx={{
              whiteSpace: 'nowrap',
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Users</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Room Name</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Date</Typography>
                </TableCell>
             
                <TableCell>
                  <Typography variant="h6">Money Earned</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {basics.map((basic) => (
                <TableRow key={basic.id}>
                  <TableCell>
                    <Stack direction="row" spacing={2}>
                      <Avatar src={basic.imgsrc} alt={basic.imgsrc} width="35" />
                      <Box>
                        <Typography variant="h6" fontWeight="600">
                          {basic.name}
                        </Typography>
                     
                      </Box>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography color="textSecondary" variant="h6" fontWeight="400">
                      {basic.pname}
                    </Typography>
                  </TableCell>
                 
                  <TableCell>
                  <Typography color="textSecondary" variant="h6" fontWeight="400">
                      24.02-20.03
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">${basic.budget}k</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </ParentCard>
  </PageContainer>
);

export default BasicTableAllGuests;
