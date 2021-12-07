import { FC, useContext, useEffect, useRef, MouseEvent, useState } from 'react';
import {
  Popover,
  styled,
  Button,
  MenuItem,
  Menu,
  Typography,
  Stack,
  Divider,
  Box,
  Tooltip
} from '@mui/material';
import { ThemeContext } from 'src/theme/ThemeProvider';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import Fab from '@mui/material/Fab';
import { useTranslation } from 'react-i18next';
import UnfoldMoreTwoToneIcon from '@mui/icons-material/UnfoldMoreTwoTone';
import Link from 'src/components/Link';

const ThemeSettingsButton = styled(Box)(
  ({ theme }) => `
          position: fixed;
          z-index: 9999;
          right: ${theme.spacing(4)};
          bottom: ${theme.spacing(4)};
          
          &::before {
              width: 30px;
              height: 30px;
              content: ' ';
              position: absolute;
              border-radius: 100px;
              left: 13px;
              top: 13px;
              background: ${theme.colors.primary.main};
              animation: ripple 1s infinite;
              transition: ${theme.transitions.create(['all'])};
          }

          .MuiSvgIcon-root {
            animation: pulse 1s infinite;
            transition: ${theme.transitions.create(['all'])};
          }
  `
);

const ThemeToggleWrapper = styled(Box)(
  ({ theme }) => `
          padding: ${theme.spacing(2)};
          min-width: 220px;
  `
);

const ButtonWrapper = styled(Box)(
  ({ theme }) => `
        cursor: pointer;
        position: relative;
        border-radius: ${theme.general.borderRadiusXl};
        padding: ${theme.spacing(0.8)};
        display: flex;
        flex-direction: row;
        align-items: stretch;
        min-width: 80px;
        box-shadow: 0 0 0 2px ${theme.colors.primary.lighter};

        &:hover {
            box-shadow: 0 0 0 2px ${theme.colors.primary.light};
        }

        &.active {
            box-shadow: 0 0 0 2px ${theme.palette.primary.main};

            .colorSchemeWrapper {
                opacity: .6;
            }
        }
  `
);

const ColorSchemeWrapper = styled(Box)(
  ({ theme }) => `

    position: relative;

    border-radius: ${theme.general.borderRadiusXl};
    height: 28px;
    
    &.colorSchemeWrapper {
        display: flex;
        align-items: stretch;
        width: 100%;

        .primary {
            border-top-left-radius: ${theme.general.borderRadiusXl};
            border-bottom-left-radius: ${theme.general.borderRadiusXl};
        }

        .secondary {
            border-top-right-radius: ${theme.general.borderRadiusXl};
            border-bottom-right-radius: ${theme.general.borderRadiusXl};
        }

        .primary,
        .secondary,
        .alternate {
            flex: 1;
        }
    }

    &.pureLight {
        .primary {
            background: #5569ff;
        }
    
        .secondary {
            background: #f2f5f9;
        }
    }

    &.greyGoose {
        .primary {
            background: #2442AF;
        }
    
        .secondary {
            background: #F8F8F8;
        }
    }
    
    &.purpleFlow {
        .primary {
            background: #9b52e1;
        }
    
        .secondary {
            background: #00b795;
        }
    }
    
    &.nebulaFighter {
        .primary {
            background: #8C7CF0;
        }
    
        .secondary {
            background: #070C27;
        }
    }

    &.greenFields {
        .primary {
            background: #44a574;
        }
    
        .secondary {
            background: #141c23;
        }
    }

    &.darkSpaces {
        .primary {
            background: #CB3C1D;
        }
    
        .secondary {
            background: #1C1C1C;
        }
    }

  `
);

const CheckSelected = styled(Box)(
  ({ theme }) => `
    background: ${theme.palette.success.main};
    border-radius: 50px;
    height: 26px;
    width: 26px;
    color: ${theme.palette.success.contrastText};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -13px 0 0 -13px;
    z-index: 5;

    .MuiSvgIcon-root {
        height: 16px;
        width: 16px;
    }

  `
);

const ThemeSettings: FC = () => {
  const { t }: { t: any } = useTranslation();

  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const setThemeName = useContext(ThemeContext);

  useEffect(() => {
    const curThemeName =
      window.localStorage.getItem('appTheme') || 'NebulaFighterTheme';
    setTheme(curThemeName);
  }, []);

  const [theme, setTheme] = useState('NebulaFighterTheme');

  const changeTheme = (theme): void => {
    setTheme(theme);
    setThemeName(theme);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const openMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ThemeSettingsButton>
        <Tooltip arrow title={t('Theme Settings')}>
          <Fab ref={ref} onClick={handleOpen} color="primary" aria-label="add">
            <SettingsTwoToneIcon />
          </Fab>
        </Tooltip>
        <Popover
          disableScrollLock
          anchorEl={ref.current}
          onClose={handleClose}
          open={isOpen}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
        >
          <Box p={2}>
            <Typography
              sx={{
                mb: 2,
                textAlign: 'center',
                fontWeight: 'bold',
                textTransform: 'uppercase'
              }}
              variant="body1"
            >
              Layout Blueprints
            </Typography>
            <Button
              fullWidth
              size="large"
              variant="outlined"
              endIcon={<UnfoldMoreTwoToneIcon />}
              color="primary"
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={openMenu}
            >
              Choose layout
            </Button>
            <Menu
              disableScrollLock
              anchorEl={anchorEl}
              open={open}
              onClose={closeMenu}
              anchorOrigin={{
                vertical: 'center',
                horizontal: 'center'
              }}
              transformOrigin={{
                vertical: 'center',
                horizontal: 'center'
              }}
            >
              <MenuItem
                sx={{ fontWeight: 'bold' }}
                component={Link}
                href="/dashboards/reports"
              >
                Extended Sidebar
              </MenuItem>
              <MenuItem
                sx={{ fontWeight: 'bold' }}
                component={Link}
                href="/blueprints/accent-header/dashboards/reports"
              >
                Accent Header
              </MenuItem>
              <MenuItem
                sx={{ fontWeight: 'bold' }}
                component={Link}
                href="/blueprints/accent-sidebar/dashboards/reports"
              >
                Accent Sidebar
              </MenuItem>
              <MenuItem
                sx={{ fontWeight: 'bold' }}
                component={Link}
                href="/blueprints/boxed-sidebar/dashboards/reports"
              >
                Boxed Sidebar
              </MenuItem>
              <MenuItem
                sx={{ fontWeight: 'bold' }}
                component={Link}
                href="/blueprints/collapsed-sidebar/dashboards/reports"
              >
                Collapsed Sidebar
              </MenuItem>
              <MenuItem
                sx={{ fontWeight: 'bold' }}
                component={Link}
                href="/blueprints/bottom-navigation/dashboards/reports"
              >
                Bottom Navigation
              </MenuItem>
              <MenuItem
                sx={{ fontWeight: 'bold' }}
                component={Link}
                href="/blueprints/top-navigation/dashboards/reports"
              >
                Top Navigation
              </MenuItem>
            </Menu>
          </Box>
          <Divider />
          <ThemeToggleWrapper>
            <Typography
              sx={{
                mt: 1,
                mb: 3,
                textAlign: 'center',
                fontWeight: 'bold',
                textTransform: 'uppercase'
              }}
              variant="body1"
            >
              Dark color schemes
            </Typography>
            <Stack alignItems="center" spacing={2}>
              <Tooltip placement="left" title="Nebula Fighter" arrow>
                <ButtonWrapper
                  className={theme === 'NebulaFighterTheme' ? 'active' : ''}
                  onClick={() => {
                    changeTheme('NebulaFighterTheme');
                  }}
                >
                  {theme === 'NebulaFighterTheme' && (
                    <CheckSelected>
                      <CheckTwoToneIcon />
                    </CheckSelected>
                  )}
                  <ColorSchemeWrapper className="colorSchemeWrapper nebulaFighter">
                    <Box className="primary" />
                    <Box className="secondary" />
                  </ColorSchemeWrapper>
                </ButtonWrapper>
              </Tooltip>
              <Tooltip placement="left" title="Green Fields" arrow>
                <ButtonWrapper
                  className={theme === 'GreenFieldsTheme' ? 'active' : ''}
                  onClick={() => {
                    changeTheme('GreenFieldsTheme');
                  }}
                >
                  {theme === 'GreenFieldsTheme' && (
                    <CheckSelected>
                      <CheckTwoToneIcon />
                    </CheckSelected>
                  )}
                  <ColorSchemeWrapper className="colorSchemeWrapper greenFields">
                    <Box className="primary" />
                    <Box className="secondary" />
                  </ColorSchemeWrapper>
                </ButtonWrapper>
              </Tooltip>
              <Tooltip placement="left" title="Dark Spaces" arrow>
                <ButtonWrapper
                  className={theme === 'DarkSpacesTheme' ? 'active' : ''}
                  onClick={() => {
                    changeTheme('DarkSpacesTheme');
                  }}
                >
                  {theme === 'DarkSpacesTheme' && (
                    <CheckSelected>
                      <CheckTwoToneIcon />
                    </CheckSelected>
                  )}
                  <ColorSchemeWrapper className="colorSchemeWrapper darkSpaces">
                    <Box className="primary" />
                    <Box className="secondary" />
                  </ColorSchemeWrapper>
                </ButtonWrapper>
              </Tooltip>
            </Stack>
          </ThemeToggleWrapper>
        </Popover>
      </ThemeSettingsButton>
    </>
  );
};

export default ThemeSettings;
