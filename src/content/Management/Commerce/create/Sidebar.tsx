import { ChangeEvent, useState } from 'react';

import {
  ListItemText,
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  Switch,
  Chip,
  Divider,
  Grid,
  ListItem,
  List,
  CardHeader,
  Card,
  styled,
  useTheme
} from '@mui/material';


import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';

const DotLegend = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);


interface ProductTags {
  key: number;
  label: string;
}

function Sidebar() {
  
  const theme = useTheme();

  const [checked, setChecked] = useState([true, false]);

  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  const [productTags, setProductTags] = useState<ProductTags[]>([
    { key: 0, label: 'new' },
    { key: 1, label: 'fresh' },
    { key: 2, label: 'electronics' },
    { key: 3, label: 'computer' },
    { key: 4, label: 'software' }
  ]);

  const handleDelete = (productTagToDelete: ProductTags) => () => {
    setProductTags((productTags) =>
      productTags.filter(
        (productTag) => productTag.key !== productTagToDelete.key
      )
    );
  };

  const children = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        ml: 3
      }}
    >
      <FormControlLabel
        label="Appliances"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Outdoor equipment"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );

  return (
    <Box>
      <Card
        sx={{
          m: 3
        }}
      >
        <CardHeader
          action={
            <Button
              size="small"
              variant="outlined"
              startIcon={<EditTwoToneIcon />}
            >
              {'Edit'}
            </Button>
          }
          title={'Publish'}
        />
        <Divider />
        <Box p={2}>
          <FormControlLabel
            control={<Switch color="primary" defaultChecked />}
            label={'Virtual Product'}
          />
        </Box>
        <Divider />
        <List
          dense
          sx={{
            p: 2
          }}
        >
          <ListItem disableGutters>
            <ListItemText
              sx={{
                width: 110,
                flex: 'initial'
              }}
              primary={'Status'}
            />
            <b>Draft</b>
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              sx={{
                width: 110,
                flex: 'initial'
              }}
              primary={'Visibility'}
            />
            <b>Visible</b>
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              sx={{
                width: 110,
                flex: 'initial'
              }}
              primary={
                <>
                  <Typography
                    variant="body1"
                    sx={{
                      pt: 0.5,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <DotLegend
                      style={{ background: theme.colors.success.main }}
                    />
                    {'SEO Score'}
                  </Typography>
                </>
              }
            />
            <b>{'Good'}</b>
          </ListItem>
        </List>
        <Divider />
        <Box p={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button fullWidth variant="outlined" size="small">
                {'Preview'}
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="outlined"
                size="small"
                color="secondary"
              >
                {'Save draft'}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="contained">
                {'Publish now'}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
      <Card
        sx={{
          m: 3
        }}
      >
        <CardHeader
          action={
            <Button size="small" variant="outlined">
              {'Add category'}
            </Button>
          }
          title={'Categories'}
        />
        <Divider />
        <Box p={2}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked[0] && checked[1]}
                indeterminate={checked[0] !== checked[1]}
                onChange={handleChange1}
              />
            }
            label="Electronics"
          />
          {children}

          <FormControlLabel control={<Checkbox />} label="Digital products" />
          <FormControlLabel
            control={<Checkbox />}
            label="Software memberships"
          />
        </Box>
      </Card>
      <Card
        sx={{
          m: 3
        }}
      >
        <CardHeader title={'Product Images'} />
        <Divider />
      </Card>
      <Card
        sx={{
          m: 3
        }}
      >
        <CardHeader title={'Product Tags'} />
        <Divider />
        <Box p={2}>
          {productTags.map((data) => {
            return (
              <Chip
                sx={{
                  m: 1
                }}
                key={data.key}
                variant="outlined"
                label={data.label}
                onDelete={handleDelete(data)}
              />
            );
          })}
          {productTags.length === 0 && (
            <Typography
              sx={{
                py: 2
              }}
              variant="subtitle2"
              textAlign="center"
            >
              {'There are no product tags'}
            </Typography>
          )}
        </Box>
      </Card>
    </Box>
  );
}

export default Sidebar;
