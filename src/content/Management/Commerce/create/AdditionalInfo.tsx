import { useState, ChangeEvent } from 'react';

import {
  TextField,
  Grid,
  CardHeader,
  Tab,
  Box,
  Tabs,
  Typography,
  Divider,
  FormControl,
  Checkbox,
  Tooltip,
  InputAdornment,
  FormControlLabel,
  IconButton,
  InputLabel,
  Select,
  Card,
  styled
} from '@mui/material';

import HelpOutlineTwoToneIcon from '@mui/icons-material/HelpOutlineTwoTone';

const TabsContainerWrapper = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.colors.alpha.black[5]};
    padding: ${theme.spacing(2)};
  `
);

function AdditionalInfo() {


  const [currentTab, setCurrentTab] = useState<string>('general');

  const tabs = [
    { value: 'general', label: 'General' },
    { value: 'inventory', label: 'Inventory' },
    { value: 'shipping', label: 'Shipping' }
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  return (
    <Card>
      <CardHeader title={'Additional Informations'}></CardHeader>
      <Divider />
      <TabsContainerWrapper>
        <Tabs
          onChange={handleTabsChange}
          value={currentTab}
          variant="scrollable"
          scrollButtons="auto"
          textColor="primary"
          indicatorColor="primary"
        >
          {tabs.map((tab) => (
            <Tab key={tab.value} label={tab.label} value={tab.value} />
          ))}
        </Tabs>
      </TabsContainerWrapper>
      <Divider />
      <Box p={3}>
        {currentTab === 'general' && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                name="regular_price"
                variant="outlined"
                label={'Regular price'}
                placeholder={'Regular price here ...'}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                name="sale_price"
                variant="outlined"
                label={'Sale price'}
                placeholder={'Sale price here ...'}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="tax_status">{'Tax Status'}</InputLabel>
                <Select
                  native
                  label={'Tax Status'}
                  inputProps={{
                    name: 'tax_status'
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={1}>{'Taxable'}</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="tax_class">{'Tax Class'}</InputLabel>
                <Select
                  native
                  label={'Tax Class'}
                  inputProps={{
                    name: 'tax_status'
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={1}>{'Standard'}</option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        )}
        {currentTab === 'inventory' && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center">
                <TextField
                  fullWidth
                  name="sku"
                  variant="outlined"
                  label={'SKU'}
                  placeholder={'Stock quantity here ...'}
                />
                <Tooltip
                  arrow
                  placement="top"
                  title={
                    'This field helps identify the current product stocks'
                  }
                >
                  <IconButton
                    size="small"
                    sx={{
                      ml: 1
                    }}
                    color="primary"
                  >
                    <HelpOutlineTwoToneIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="stock_status">
                  {'Stock Status'}
                </InputLabel>
                <Select
                  native
                  label={'Stock Status'}
                  inputProps={{
                    name: 'stock_status'
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={1}>{'In stock'}</option>
                  <option value={1}>{'Out of stock'}</option>
                  <option value={1}>{'Back in stock soon'}</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={'Sold individually'}
              />
              <Typography variant="h6" color="text.secondary">
                {
                  'Enable this to only allow one of this item to be bought in a single order'
                }
              </Typography>
            </Grid>
          </Grid>
        )}
        {currentTab === 'shipping' && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box display="flex" alignItems="center">
                <TextField
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">Kg</InputAdornment>
                    )
                  }}
                  fullWidth
                  name="weight"
                  value={12}
                  variant="outlined"
                  label={'Weight'}
                  placeholder={'Write weight ...'}
                />
                <Tooltip
                  arrow
                  placement="top"
                  title={
                    'Your have the weight units set to kilograms in your app settings'
                  }
                >
                  <IconButton
                    size="small"
                    sx={{
                      ml: 1
                    }}
                    color="primary"
                  >
                    <HelpOutlineTwoToneIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">CM</InputAdornment>
                  )
                }}
                fullWidth
                name="length"
                variant="outlined"
                label={'Length'}
                placeholder={'Write length ...'}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">CM</InputAdornment>
                  )
                }}
                fullWidth
                name="width"
                variant="outlined"
                label={'Width'}
                placeholder={'Write width ...'}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="shipping_class">
                  {'Shipping class'}
                </InputLabel>
                <Select
                  native
                  label={'Shipping class'}
                  inputProps={{
                    name: 'shipping_class'
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={1}>{'No shipping class'}</option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        )}
      </Box>
    </Card>
  );
}

export default AdditionalInfo;
