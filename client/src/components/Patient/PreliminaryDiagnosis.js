import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActions,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  Radio,
  RadioGroup,
  TableRow,
  TableCell,
  TableContainer,
  TableHead,
  Table,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import Symptoms from './Symptoms';
import React, { useState, useEffect, Fragment } from 'react';
import { makeStyles } from '@mui/styles';
import RiskFactors from './RiskFactors';
import { inferSearch } from '../../utils/infermedicaApi/infermedicaApi';
const useStyles = makeStyles({
  landingCard: {
    justifyContent: 'center',
  },
  cardcontent: {
    marginLeft: 20,
    marginRight: 20,
  },
  screenConatiner: {
    display: 'inline-block',
    position: 'relative',
    top: 0,
    left: 0,
    width: '100%',
  },
  screen: {
    'padding-top': '50px',
    'padding-right': '30px',
    'padding-bottom': '50px',
    'padding-left': '30px',
  },
  split: {
    'min-height': '100%',
    display: 'flex',
    'flex-wrap': 'wrap',
  },
  screenContent: {
    'min-height': '425px',
  },
  screenTextHeader: {
    order: '1',
    width: '59%',
    'align-self': 'flex-end',
    'padding-top': '40px',
    'padding-right': '0px',
    'padding-bottom': '40px',
    'padding-left': '30px',
  },
  actionArea: {
    display: 'flex',
    'justify-content': 'flex-end',
  },
  riskFactor: {
    display: 'flex',
    'justify-content': 'center',
    'flex-direction': 'column',
    'padding-top': '50px',
    'padding-right': '30px',
    'padding-bottom': '50px',
    'padding-left': '30px',
  },
  textCenter: {
    'text-align': 'center',
  },
  symptoms: {
    display: 'flex',
    'justify-content': 'center',
    'flex-direction': 'column',
    'padding-top': '50px',
    'padding-right': '30px',
    'padding-bottom': '50px',
    'padding-left': '30px',
  },
  symptomsContent: {},
});
const initialRiskFactors = [
  {
    id: 'p_7',
    name: 'High BMI',
    common_name: 'Obesity',
    choice_id: '',
  },
  {
    id: 'p_9',
    name: 'Hypertension',
    common_name: 'Hypertension',
    choice_id: '',
  },
  {
    id: 'p_28',
    name: 'Smoking cigarettes',
    common_name: 'Smoking cigarettes',
    choice_id: '',
  },
  {
    id: 'p_264',
    name: 'Recent physical injury',
    common_name: 'Recent physical injury',
    choice_id: '',
  },
  {
    id: 'p_10',
    name: 'High cholesterol',
    common_name: 'High cholesterol',
    choice_id: '',
  },
];
const initialAppointmnet = [
  {
    PatientId: '',
    DoctorId: {
      _id: new Object(),
      Name: '',
    },
    BookingDate: '',
    AppointmentDate: '',
    TimeSlot: {
      startTime: '',
      endTime: '',
      status: '',
      _id: '',
    },
    FirstName: '',
    LastName: '',
    Email: '',
    Phone: '',
    Recipt: '',
    AppointmentMode: 0,
    Symptoms: '',
    Age: '',
    Sex: '',
    _id: new Object(''),
  },
];
const PreliminaryDiagnosis = (props) => {
  const [step, setStep] = useState(4);
  const classes = useStyles();
  const [interviewId, setInterviewId] = useState('');
  const [read, setRead] = useState(false);
  const [error2, setError2] = useState(false);
  const [riskFactors, setRiskFactors] = useState(initialRiskFactors);
  const [next3, setNext3] = useState(5);
  const [symptomFilter, setSymptonFilter] = useState('');
  const [appointment, setAppointment] = useState(initialAppointmnet);
  const [symptoms, setSymptoms] = useState([
    {
      id: '',
      label: '',
    },
  ]);
  const [filteredSymptom, setFilteredSymptom] = useState([
    { id: '', label: '' },
  ]);
  const [evidence, setEvidence] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([
    // {
    //   id: '',
    //   label: '',
    // },
  ]);
  const searchItems = (symptomFilter) => {
    const filterData = symptoms.filter((item) => {
      return Object.values(item)
        .join('')
        .toLowerCase()
        .includes(symptomFilter.toLowerCase());
    });
    // console.log(filterData);
    setFilteredSymptom(filterData);
    // console.log(filteredSymptom);
  };

  const handleRiskFactors = (riskFactor) => {
    setRiskFactors(riskFactor);
  };
  const handleStepChange = (steps) => {
    setStep(steps);
  };
  const handleFilterChange = (temp) => {
    setSymptonFilter(temp);
    if (temp.length < 2) {
      setSymptoms([]);
      setFilteredSymptom([]);
    }
    if (temp.length == 2) {
      console.log(temp);
      inferSearch(
        temp,
        appointment.Age,
        appointment.Sex,
        2000,
        interviewId
      ).then((tempSympt) => {
        // console.log(tempSympt);
        setSymptoms(tempSympt);
      });
    }
    if (temp.length >= 2) {
      searchItems(temp);
    }
  };
  useEffect(() => {
    setInterviewId(Math.random().toString(36).slice(2));
    // setNext3(5);
    setAppointment(props.appointment);
  }, []);
  switch (step) {
    case 1:
      return (
        <Container>
          <div className={classes.screenConatiner}>
            <div className={classes.screen}>
              <div className={classes.screenContent}>
                <div className={classes.spilt}>
                  <Card sx={{ display: 'flex' }}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        'align-self': 'flex-end',
                      }}
                      component='div'
                    >
                      <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component='h2' variant='h5'>
                          Hello!
                        </Typography>
                        <Typography
                          variant='subtitle1'
                          color='text.secondary'
                          component='p'
                        >
                          You’re about to use a short (3 min), safe and
                          anonymous health checkup. Your answers will be
                          carefully analyzed and you’ll learn about possible
                          causes of your symptoms.
                        </Typography>
                        <Typography
                          variant='subtitle1'
                          color='text.secondary'
                          component='p'
                        >
                          InterviewId: {interviewId}
                        </Typography>
                      </CardContent>
                    </Box>
                    <CardMedia
                      component='img'
                      sx={{ width: 300 }}
                      src={
                        process.env.PUBLIC_URL + '/static/images/helpdesk.jpg'
                      }
                      alt='Intro'
                    />
                  </Card>
                  <div className={classes.actionArea}>
                    <Button
                      variant='contained'
                      onClick={(e) => setStep(step + 1)}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      );
      break;
    case 2:
      return (
        <Container>
          <div className={classes.screenConatiner}>
            <div className={classes.screen}>
              <div className={classes.screenContent}>
                <div className={classes.spilt}>
                  <Card sx={{ display: 'flex' }}>
                    <div className={classes.screen}>
                      <h3>Terms of Service</h3>
                      <p>
                        Before using the checkup, please read Terms of Service.
                        Remember that:
                      </p>
                      <ul>
                        <li>
                          <strong>Checkup is not a diagnosis.</strong> Checkup
                          is for informational purposes and is not a qualified
                          medical opinion.
                        </li>
                        <li>
                          <strong>Do not use in emergencies.</strong> In case of
                          health emergency, call your local emergency number
                          immediately.
                        </li>
                        <li>
                          <strong>Your data is safe.</strong> Information that
                          you provide is anonymous and not shared with anyone.
                        </li>
                      </ul>

                      <FormControlLabel
                        label='I read and accept Terms of Service and Privacy Policy.'
                        control={
                          <Checkbox
                            checked={read}
                            onChange={(e) => {
                              console.log(!read);
                              setRead(!read);
                            }}
                            inputProps={{ 'aria-label': 'controlled' }}
                          />
                        }
                      />
                    </div>

                    <CardMedia
                      component='img'
                      sx={{ width: 300 }}
                      src={
                        process.env.PUBLIC_URL +
                        '/static/images/instruction.svg'
                      }
                      alt='Intro'
                    />
                  </Card>
                  <div className={classes.actionArea}>
                    <Button
                      variant='contained'
                      onClick={(e) => setStep(step - 1)}
                    >
                      Back
                    </Button>
                    {read && (
                      <Button
                        variant='contained'
                        onClick={(e) => {
                          setStep(step + 1);
                        }}
                      >
                        Next
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      );
      break;
    case 3:
      return (
        <Container>
          <div className={classes.screenConatiner}>
            <div className={classes.screen}>
              <div className={classes.screenContent}>
                <div className={classes.spilt}>
                  {/* <RiskFactors
                    riskFactors={riskFactors}
                    handleRiskFactors={handleRiskFactors}
                    step={step}
                    handleStepChange={handleStepChange}
                    classes={classes}
                  /> */}
                  <Card>
                    <div className={classes.riskFactor}>
                      <h3 className={classes.textCenter}>
                        Please check all the statements below that apply to you.
                      </h3>
                      <p className={classes.textCenter}>
                        Select one answer in each row.
                      </p>
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                          <TableHead>
                            {riskFactors.map((riskFactor) => {
                              return (
                                <TableRow>
                                  <TableCell>
                                    {riskFactor.common_name}
                                  </TableCell>
                                  <TableCell align='right'>
                                    <FormControl component='fieldset'>
                                      <RadioGroup
                                        row
                                        name='row-radio-buttons-group'
                                        defaultValue={riskFactor.choice_id}
                                        onChange={(e) => {
                                          if (riskFactor.choice_id == '')
                                            setNext3(next3 - 1);
                                          riskFactor.choice_id = e.target.value;
                                          // console.log(riskFactor);
                                        }}
                                      >
                                        <FormControlLabel
                                          value='present'
                                          control={<Radio />}
                                          label='Yes'
                                        />
                                        <FormControlLabel
                                          value='absent'
                                          control={<Radio />}
                                          label='No'
                                        />
                                        <FormControlLabel
                                          value='unknown'
                                          control={<Radio />}
                                          label="Don't Know"
                                        />
                                      </RadioGroup>
                                    </FormControl>
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                          </TableHead>
                        </Table>
                      </TableContainer>
                    </div>
                  </Card>
                  <div className={classes.actionArea}>
                    <Button
                      variant='contained'
                      onClick={(e) => setStep(step - 1)}
                    >
                      Back
                    </Button>
                    {next3 == 0 && (
                      <Button
                        variant='contained'
                        onClick={(e) => {
                          setStep(step + 1);
                        }}
                      >
                        Next
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      );
      break;
    case 4:
      return (
        <Container>
          <div className={classes.screenConatiner}>
            <div className={classes.screen}>
              <div className={classes.screenContent}>
                <div className={classes.spilt}>
                  {/* <Symptoms /> */}
                  <Card>
                    <div className={classes.symptoms}>
                      <h3 className={classes.textCenter}>Add Symptoms</h3>
                      <p className={classes.textCenter}>
                        Search and add Symptoms ( Add atleast 2 symptoms for
                        best result )
                      </p>
                      <div className={classes.symptomsContent}>
                        <input
                          value={symptomFilter}
                          onChange={(e) => handleFilterChange(e.target.value)}
                        />
                        <List
                          sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: 'background.paper',
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 300,
                            '& ul': { padding: 0 },
                          }}
                        >
                          {filteredSymptom.map((item) => {
                            return (
                              <ListItemButton
                                key={item.id}
                                onClick={(e) => {
                                  setSelectedSymptoms((selectedSymptoms) => [
                                    ...selectedSymptoms,
                                    item,
                                  ]);
                                  setSymptonFilter('');
                                  setFilteredSymptom([
                                    {
                                      id: '',
                                      label: '',
                                    },
                                  ]);
                                  // console.log(selectedSymptoms);
                                }}
                              >
                                <ListItemText primary={item.label} />
                              </ListItemButton>
                            );
                          })}
                        </List>
                        <List
                          sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: 'background.paper',
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 300,
                            '& ul': { padding: 0 },
                          }}
                        >
                          {selectedSymptoms.map((item) => {
                            return (
                              <ListItem
                                key={item.id}
                                secondaryAction={
                                  <IconButton
                                    onClick={(e) => {
                                      console.log('hello');
                                    }}
                                  >
                                    <DeleteIcon />
                                  </IconButton>
                                }
                              >
                                <ListItemText primary={item.label} />
                              </ListItem>
                            );
                          })}
                        </List>
                      </div>
                    </div>
                  </Card>
                  <div className={classes.actionArea}>
                    <Button
                      variant='contained'
                      onClick={(e) => setStep(step - 1)}
                    >
                      Back
                    </Button>
                    <Button
                      variant='contained'
                      onClick={(e) => setStep(step + 1)}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      );
      break;
    default:
      return <Fragment>Hello</Fragment>;
      break;
  }
};

export default PreliminaryDiagnosis;
