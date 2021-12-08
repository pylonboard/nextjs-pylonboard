import { FC } from 'react';
import {
  Breadcrumbs,
  Box,
  Grid,
  Typography,
  Tooltip,
  Button,
  Container,
  IconButton
} from '@mui/material';

import Link from 'src/components/Link';

import type { Invoice } from 'src/models/invoice';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import PropTypes from 'prop-types';

interface PageHeaderProps {
  invoice: Invoice;
}

const PageHeader: FC<PageHeaderProps> = ({ invoice }) => {


  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Tooltip arrow placement="top" title={'Go back'}>
              <IconButton
                href="/management/invoices"
                color="primary"
                sx={{
                  p: 2,
                  mr: 2
                }}
              >
                <ArrowBackTwoToneIcon />
              </IconButton>
            </Tooltip>
            <Box>
              <Typography variant="h3" component="h3" gutterBottom>
                #{invoice.number}
              </Typography>
              <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                <Link color="inherit" href="#">
                  {'Home'}
                </Link>
                <Link color="inherit" href="#">
                  {'Management'}
                </Link>
                <Link color="inherit" href="#">
                  {'Commerce'}
                </Link>
                <Link color="inherit" href="#">
                  {'Invoices'}
                </Link>
                <Typography color="text.primary">
                  {'Invoice'} #{invoice.number}
                </Typography>
              </Breadcrumbs>
            </Box>
          </Box>
        </Grid>
        <Grid item>
          <Button
            sx={{
              mt: { xs: 2, sm: 0 }
            }}
            href="/management/invoices"
            variant="contained"
          >
            {'View all invoices'}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

PageHeader.propTypes = {
  // @ts-ignore
  invoice: PropTypes.object.isRequired
};

export default PageHeader;
