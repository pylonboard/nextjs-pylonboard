import { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { wait } from 'src/utils/wait';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

import {
  styled,
  Grid,
  Dialog,
  DialogTitle,
  Chip,
  DialogContent,
  Box,
  Zoom,
  Typography,
  TextField,
  CircularProgress,
  Avatar,
  Autocomplete,
  Button,
  useTheme
} from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';
import { useSnackbar } from 'notistack';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

const EditorWrapper = styled(Box)(
  ({ theme }) => `

    .ql-editor {
      min-height: 100px;
    }

    .ql-toolbar.ql-snow {
      border-top-left-radius: ${theme.general.borderRadius};
      border-top-right-radius: ${theme.general.borderRadius};
    }

    .ql-toolbar.ql-snow,
    .ql-container.ql-snow {
      border-color: ${theme.colors.alpha.black[30]};
    }

    .ql-container.ql-snow {
      border-bottom-left-radius: ${theme.general.borderRadius};
      border-bottom-right-radius: ${theme.general.borderRadius};
    }

    &:hover {
      .ql-toolbar.ql-snow,
      .ql-container.ql-snow {
        border-color: ${theme.colors.alpha.black[50]};
      }
    }
`
);

const projectTags = [
  { title: 'Development' },
  { title: 'Design Project' },
  { title: 'Marketing Research' },
  { title: 'Software' }
];

function PageHeader() {

  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();

  const members = [
    {
      avatar: '/static/images/avatars/1.jpg',
      name: 'Maren Lipshutz'
    },
    {
      avatar: '/static/images/avatars/2.jpg',
      name: 'Zain Vetrovs'
    },
    {
      avatar: '/static/images/avatars/3.jpg',
      name: 'Hanna Siphron'
    },
    {
      avatar: '/static/images/avatars/4.jpg',
      name: 'Cristofer Aminoff'
    },
    {
      avatar: '/static/images/avatars/5.jpg',
      name: 'Maria Calzoni'
    }
  ];


  const [value, setValue] = useState<Date | null>(null);

  const handleCreateProjectOpen = () => {
    setOpen(true);
  };

  const handleCreateProjectClose = () => {
    setOpen(false);
  };

  const handleCreateProjectSuccess = () => {
    enqueueSnackbar('A new project has been created successfully', {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      TransitionComponent: Zoom
    });

    setOpen(false);
  };

  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h3" gutterBottom>
            {'Projects'}
          </Typography>
          <Typography variant="subtitle2">
            {'These are your active projects'}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            sx={{
              mt: { xs: 2, sm: 0 }
            }}
            onClick={handleCreateProjectOpen}
            variant="contained"
            startIcon={<AddTwoToneIcon fontSize="small" />}
          >
            {'Create new project'}
          </Button>
        </Grid>
      </Grid>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleCreateProjectClose}
      >
        <DialogTitle
          sx={{
            p: 3
          }}
        >
          <Typography variant="h4" gutterBottom>
            {'Create new project'}
          </Typography>
          <Typography variant="subtitle2">
            {'Use this dialog window to add a new project'}
          </Typography>
        </DialogTitle>
        <Formik
          initialValues={{
            title: '',
            submit: null
          }}
          validationSchema={Yup.object().shape({
            title: Yup.string()
              .max(255)
              .required('The title field is required')
          })}
          onSubmit={async (
            _values,
            { resetForm, setErrors, setStatus, setSubmitting }
          ) => {
            try {
              await wait(1000);
              resetForm();
              setStatus({ success: true });
              setSubmitting(false);
              handleCreateProjectSuccess();
            } catch (err) {
              console.error(err);
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values
          }) => (
            <form onSubmit={handleSubmit}>
              <DialogContent
                dividers
                sx={{
                  p: 3
                }}
              >
                <Grid container spacing={0}>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={3}
                    justifyContent="flex-end"
                    textAlign={{ sm: 'right' }}
                  >
                    <Box
                      pr={3}
                      sx={{
                        pt: `${theme.spacing(2)}`,
                        pb: { xs: 1, md: 0 }
                      }}
                      alignSelf="center"
                    >
                      <b>{'Project title'}:</b>
                    </Box>
                  </Grid>
                  <Grid
                    sx={{
                      mb: `${theme.spacing(3)}`
                    }}
                    item
                    xs={12}
                    sm={8}
                    md={9}
                  >
                    <TextField
                      error={Boolean(touched.title && errors.title)}
                      fullWidth
                      helperText={touched.title && errors.title}
                      name="title"
                      placeholder={'Project title here...'}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.title}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                    <Box
                      pr={3}
                      sx={{
                        pb: { xs: 1, md: 0 }
                      }}
                    >
                      <b>{'Description'}:</b>
                    </Box>
                  </Grid>
                  <Grid
                    sx={{
                      mb: `${theme.spacing(3)}`
                    }}
                    item
                    xs={12}
                    sm={8}
                    md={9}
                  >
                    <EditorWrapper>
                      <ReactQuill />
                    </EditorWrapper>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={3}
                    justifyContent="flex-end"
                    textAlign={{ sm: 'right' }}
                  >
                    <Box
                      pr={3}
                      sx={{
                        pt: `${theme.spacing(2)}`,
                        pb: { xs: 1, md: 0 }
                      }}
                      alignSelf="center"
                    >
                      <b>{'Tags'}:</b>
                    </Box>
                  </Grid>
                  <Grid
                    sx={{
                      mb: `${theme.spacing(3)}`
                    }}
                    item
                    xs={12}
                    sm={8}
                    md={9}
                  >
                    <Autocomplete
                      multiple
                      sx={{
                        m: 0
                      }}
                      limitTags={2}
                      options={projectTags}
                      getOptionLabel={(option) => option.title}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          variant="outlined"
                          placeholder={'Select project tags...'}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                    <Box
                      pr={3}
                      sx={{
                        pb: { xs: 1, md: 0 }
                      }}
                    >
                      <b>{'Upload files'}:</b>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={3}
                    justifyContent="flex-end"
                    textAlign={{ sm: 'right' }}
                  >
                    <Box
                      pr={3}
                      sx={{
                        pt: `${theme.spacing(2)}`,
                        pb: { xs: 1, md: 0 }
                      }}
                      alignSelf="center"
                    >
                      <b>{'Members'}:</b>
                    </Box>
                  </Grid>
                  <Grid
                    sx={{
                      mb: `${theme.spacing(3)}`
                    }}
                    item
                    xs={12}
                    sm={8}
                    md={9}
                  >
                    <Autocomplete
                      multiple
                      sx={{
                        m: 0
                      }}
                      limitTags={2}
                      options={members}
                      renderOption={(props, option) => (
                        <li {...props}>
                          <Avatar
                            sx={{
                              mr: 1
                            }}
                            src={option.avatar}
                          />
                          {option.name}
                        </li>
                      )}
                      getOptionLabel={(option) => option.name}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          fullWidth
                          InputLabelProps={{
                            shrink: true
                          }}
                          placeholder={'Select project members...'}
                        />
                      )}
                      renderTags={(members, getTagProps) =>
                        members.map((ev, index: number) => (
                          <Chip
                            key={ev.name}
                            label={ev.name}
                            {...getTagProps({ index })}
                            avatar={<Avatar src={ev.avatar} />}
                          />
                        ))
                      }
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={3}
                    justifyContent="flex-end"
                    textAlign={{ sm: 'right' }}
                  >
                    <Box
                      pr={3}
                      sx={{
                        pt: `${theme.spacing(2)}`,
                        pb: { xs: 1, md: 0 }
                      }}
                      alignSelf="center"
                    >
                      <b>{'Due Date'}:</b>
                    </Box>
                  </Grid>
                  <Grid
                    sx={{
                      mb: `${theme.spacing(3)}`
                    }}
                    item
                    xs={12}
                    sm={8}
                    md={9}
                  >
                    <DatePicker
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          placeholder={'Select due date...'}
                          {...params}
                        />
                      )}
                    />
                  </Grid>
                  <Grid
                    sx={{
                      mb: `${theme.spacing(3)}`
                    }}
                    item
                    xs={12}
                    sm={8}
                    md={9}
                  >
                    <Button
                      sx={{
                        mr: 2
                      }}
                      type="submit"
                      startIcon={
                        isSubmitting ? <CircularProgress size="1rem" /> : null
                      }
                      disabled={Boolean(errors.submit) || isSubmitting}
                      variant="contained"
                      size="large"
                    >
                      {'Create project'}
                    </Button>
                    <Button
                      color="secondary"
                      size="large"
                      variant="outlined"
                      onClick={handleCreateProjectClose}
                    >
                      {'Cancel'}
                    </Button>
                  </Grid>
                </Grid>
              </DialogContent>
            </form>
          )}
        </Formik>
      </Dialog>
    </>
  );
}

export default PageHeader;
