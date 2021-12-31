import * as React from 'react';
import {
  styled,
  IconButton,
  Button,
  Modal,
  Typography,
  Box,
  TextField,
  Input,
  Divider,
} from '@mui/material';

import Table from '@mui/material/Table';
import Stack from '@mui/material/Stack';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getpresctiption } from '../../utils/profileactions';
import { useEffect } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import axios from 'axios';
import { render } from 'express/lib/application';
import { useHistory } from 'react-router-dom';
const FileDownload = require('js-file-download');
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function createData(ind, name, date, doctor, url) {
  return { ind, name, date, doctor, url };
}

const downloadprescription = (index) => {
  console.log(index);
  return axios
    .post(
      'http://localhost:5000' + index,
      {},
      { responseType: 'blob' },
      {
        headers: {
          'x-access-token': localStorage.getItem('token'),
          index: index,
        },
      }
    )
    .then((res) => {
      console.log(res);
      FileDownload(res.data, index.substring(9));
    });
};
const Medications = (props) => {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(null);
  useEffect(() => {
    getpresctiption().then((data) => {
      for (let i = 0; i < data.length; i++) {
        //  console.log(i);
        rows.push(
          createData(
            i + 1,
            data[i].patient,
            data[i].Date.substring(0, 10),
            data[i].Doctor,
            data[i].url
          )
        );
      }
      setRows(rows);
      setOpen(true);
      setOpen(false);
    });
  }, [localStorage.getItem('token')]);
  const Upload = async (e) => {
    e.preventDefault();

    const doc = document.querySelector('#upfile');
    const doctor = document.querySelector('#doctor');
    const date = document.querySelector('#date');
    const patient = document.querySelector('#patient');
    const formData = new FormData();
    formData.append('file', doc.files[0]);
    console.log(formData);
    axios.post('http://localhost:5000/file_upload', formData, {
      headers: {
        'x-access-token': localStorage.getItem('token'),
        val: date.value,
        doctor: doctor.value,
        patient: patient.value,
        'Content-Type': 'multipart/form-data',
      },
    });
    setOpen(false);
    window.location.reload();
  };
  return (
    <div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label='customized table'>
            <TableHead>
              <TableRow>
                <StyledTableCell>#</StyledTableCell>
                <StyledTableCell align='right'>Name</StyledTableCell>
                <StyledTableCell align='right'>Date</StyledTableCell>
                <StyledTableCell align='right'>Doctor</StyledTableCell>
                <StyledTableCell align='right'>Download</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.ind}>
                  <StyledTableCell component='th' scope='row'>
                    {row.ind}
                  </StyledTableCell>
                  <StyledTableCell align='right'>{row.name}</StyledTableCell>
                  <StyledTableCell align='right'>{row.date}</StyledTableCell>
                  <StyledTableCell align='right'>{row.doctor}</StyledTableCell>
                  <StyledTableCell align='right'>
                    <IconButton
                      color='primary'
                      aria-label='download'
                      onClick={() => {
                        downloadprescription(row.url);
                      }}
                    >
                      <GetAppOutlinedIcon />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>
        <Button onClick={handleOpen}>Upload Prescription</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              Upload Prescription
            </Typography>
            <h5>Patient Name</h5>
            <Typography sx={{ mt: 2 }}>
              <TextField id='patient' label='Patient Name' variant='outlined' />
              <h5>Doctor Name</h5>
              <Typography sx={{ mt: 2 }}>
                <TextField id='doctor' label='Doctor Name' variant='outlined' />
                <h5>Select Date</h5>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label='Basic example'
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField id='date' {...params} />
                    )}
                  />
                </LocalizationProvider>
                <h5>Attach Prescription</h5>
                <label htmlFor='contained-button-file'>
                  <Input accept='*' id='upfile' multiple type='file' />
                </label>
                <Button
                  type='submit'
                  onClick={Upload}
                  variant='contained'
                  color='primary'
                >
                  Upload
                </Button>
              </Typography>
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
};
export default Medications;
