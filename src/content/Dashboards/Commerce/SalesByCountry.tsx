import {
  Card,
  Box,
  ListItemAvatar,
  CardHeader,
  ListItemText,
  Typography,
  Divider,
  List,
  ListItem,
  LinearProgress,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import deFlag from 'country-flag-icons/3x2/DE.svg';
import usFlag from 'country-flag-icons/3x2/US.svg';
import esFlag from 'country-flag-icons/3x2/ES.svg';

const ImageWrapper = styled('img')(
  ({ theme }) => `
        width: 36px;
        margin-right: ${theme.spacing(1)};
`
);

const LinearProgressWrapper = styled(LinearProgress)(
  () => `
        flex-grow: 1;
`
);

function SalesByCountry() {
  const { t }: { t: any } = useTranslation();

  return (
    <Card>
      <CardHeader title={t('Sales by Country')} />
      <Divider />
      <List disablePadding component="div">
        <ListItem
          component="div"
          sx={{
            py: 2,
            flexDirection: 'column'
          }}
        >
          <Box display="flex" alignItems="center" width="100%">
            <ListItemAvatar
              sx={{
                minWidth: '36px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <ImageWrapper alt="USA" src={usFlag} />
            </ListItemAvatar>
            <ListItemText
              primary="USA"
              primaryTypographyProps={{
                variant: 'h5',
                color: 'textPrimary',
                noWrap: true
              }}
            />

            <Box display="flex" alignItems="center">
              <Box
                sx={{
                  mr: 3
                }}
              >
                <Typography
                  align="right"
                  variant="subtitle2"
                  noWrap
                  gutterBottom
                >
                  {t('Orders')}
                </Typography>
                <Typography align="right" variant="h5">
                  8
                </Typography>
              </Box>
              <Box>
                <Typography
                  align="right"
                  variant="subtitle2"
                  noWrap
                  gutterBottom
                >
                  {t('Total')}
                </Typography>
                <Typography align="right" variant="h5">
                  $5,493.22
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            display="block"
            width="100%"
            sx={{
              mt: 2
            }}
          >
            <LinearProgressWrapper
              value={57}
              color="primary"
              variant="determinate"
            />
          </Box>
        </ListItem>
        <Divider />
        <ListItem
          component="div"
          sx={{
            py: 2,
            flexDirection: 'column'
          }}
        >
          <Box display="flex" alignItems="center" width="100%">
            <ListItemAvatar
              sx={{
                minWidth: '36px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <ImageWrapper alt="ES" src={esFlag} />
            </ListItemAvatar>
            <ListItemText
              primary="Spain"
              primaryTypographyProps={{
                variant: 'h5',
                color: 'textPrimary',
                noWrap: true
              }}
            />

            <Box display="flex" alignItems="center">
              <Box
                sx={{
                  mr: 3
                }}
              >
                <Typography
                  align="right"
                  variant="subtitle2"
                  noWrap
                  gutterBottom
                >
                  {t('Orders')}
                </Typography>
                <Typography align="right" variant="h5">
                  41
                </Typography>
              </Box>
              <Box>
                <Typography
                  align="right"
                  variant="subtitle2"
                  noWrap
                  gutterBottom
                >
                  {t('Total')}
                </Typography>
                <Typography align="right" variant="h5">
                  $7,489.00
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            display="block"
            width="100%"
            sx={{
              mt: 2
            }}
          >
            <LinearProgressWrapper
              value={23}
              color="primary"
              variant="determinate"
            />
          </Box>
        </ListItem>
        <Divider />
        <ListItem
          component="div"
          sx={{
            py: 2,
            flexDirection: 'column'
          }}
        >
          <Box display="flex" alignItems="center" width="100%">
            <ListItemAvatar
              sx={{
                minWidth: '36px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <ImageWrapper alt="DE" src={deFlag} />
            </ListItemAvatar>
            <ListItemText
              primary="Germany"
              primaryTypographyProps={{
                variant: 'h5',
                color: 'textPrimary',
                noWrap: true
              }}
            />

            <Box display="flex" alignItems="center">
              <Box
                sx={{
                  mr: 3
                }}
              >
                <Typography
                  align="right"
                  variant="subtitle2"
                  noWrap
                  gutterBottom
                >
                  {t('Orders')}
                </Typography>
                <Typography align="right" variant="h5">
                  12
                </Typography>
              </Box>
              <Box>
                <Typography
                  align="right"
                  variant="subtitle2"
                  noWrap
                  gutterBottom
                >
                  {t('Total')}
                </Typography>
                <Typography align="right" variant="h5">
                  $3,589.33
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            display="block"
            width="100%"
            sx={{
              mt: 2
            }}
          >
            <LinearProgressWrapper
              value={34}
              color="primary"
              variant="determinate"
            />
          </Box>
        </ListItem>
        <Divider />
      </List>
    </Card>
  );
}

export default SalesByCountry;
