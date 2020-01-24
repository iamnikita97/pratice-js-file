import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import RemoveFromQueueIcon from '@material-ui/icons/RemoveFromQueue';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ImgMediaCard from './DeleteIcon';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(10, 7),
        maxWidth: '900px',
        top: '61px !important',
        margin: '0px 0px 0px 16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    root: {
        maxWidth: '900px',
        position: 'relative',
        margin: '60px auto 0 auto',
        marginBottom: '5px',
        border: '1px double #999',
        borderColor: 'black',
    },

    avatar: {
        margin: theme.spacing(1),
        backgroundColor: 'black',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Registration() {
    const classes = useStyles();
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        gender: '',
        submit: [],
        allData: [],
        counterId: 0,
        mode: 'add',
        editedRecord: 0
    }
    )

    function handleRemoval(formId) {

        var data = state.allData;
        data = data.filter(function (el) {
            return el.counterId !== formId;
        });
        setState({
            ...state,
            allData: data,
            mode: 'add',
            editedRecord: 0
        });
        return;
    }
    function handleEdit(editedRecord) {

        const { allData } = state;
        const editRecordData = allData.filter(function (e) {
            return e.counterId == editedRecord;
        })[0];


        setState((state)=>({
            ...state,
            firstName: editRecordData.firstName,
            lastName: editRecordData.lastName,
            email: editRecordData.email,
            mobileNumber: editRecordData.mobileNumber,
            gender: editRecordData.gender,
            mode: 'edit',
            editedRecord: editedRecord
        }));

        console.log(state);
       // return false;
        return;
        console.log(editRecordData);
        return false;
        
        for (var i in allData) {

           
            if (allData[i].counterId === editedRecord) {
                alert(allData[i].counterId);
                setState((state)=>({
                    ...state,
                    firstName: allData[i].firstName,
                    lastName: allData[i].lastName,
                    email: allData[i].email,
                    mobileNumber: allData[i].mobileNumber,
                    gender: allData[i].gender,
                    mode: 'edit',
                    editedRecord: editedRecord
                }));
                break;
            }
        }
        alert(editedRecord);

        console.log(state);
        return;
    }
    function myChangeHandler(event) {
        setState({
            ...state,
            [event.target.id]: event.target.value,
        });
    }

    function handleChangeStatus(formId) {
        var data = state.allData;
        for (var i in data) {
            if (data[i].counterId === formId) {
            }
        }
    }
    function submitstudForm(event) {
        event.preventDefault();
        
        if (state.mode === 'add') {
            let counter = state.counterId + 1;
            setState((state) => ({
                ...state,
                counterId: counter,
                allData: [...state.allData,
                {
                    counterId: counter,
                    firstName: state.firstName,
                    lastName: state.lastName,
                    email: state.email,
                    gender: state.gender,
                    mobileNumber: state.mobileNumber,
                    Status: ''
                },
                ],
                firstName: '',
                lastName: '',
                email: '',
                gender: '',
                mobileNumber: ''
            }));

        } else {
            const { allData } = state;
            for (var i in allData) {

                if (allData[i].counterId === state.editedRecord) {
                    
                    allData[i].firstName = state.firstName;
                    allData[i].lastName = state.lastName;
                    allData[i].email = state.email;
                    allData[i].gender = state.gender;
                    allData[i].mobileNumber = state.mobileNumber;
                    break;
                }
            }
            setState((state) => ({
                ...state,
                allData: allData,
                firstName: '',
                lastName: '',
                email: '',
                gender: '',
                mobileNumber: '',
                mode: 'add',
                editedRecord: null
            }));
            console.log(state,"--------------- Edit");
        }
        
    }

    return (
        <>
            <Grid container component="main" className={classes.todo_time_comp_con}
                justify="center">
            </Grid>

            <Grid container component="main" className={classes.root}
                justify="center">
                <CssBaseline />
                <Grid item xs={false} sm={12} md={12} ></Grid>
                
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <RemoveFromQueueIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                {state.mode === 'edit' ? state.mode.charAt(0).toUpperCase() + state.mode.slice(1) : ''}  Submit Form
                                           </Typography>
                            <form className={classes.form} onSubmit={submitstudForm}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="fname"
                                            name="firstname"
                                            variant="outlined"
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            value={state.firstName}
                                            onChange={myChangeHandler}

                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastname"
                                            autoComplete="lname"
                                            value={state.lastName}
                                            onChange={myChangeHandler}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            id="email"
                                            name="email"
                                            label="Email"
                                            autoComplete="email"
                                            value={state.email}
                                            onChange={myChangeHandler}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            id="gender"
                                            label="Gender"
                                            name="gender"
                                            autoComplete="gender"
                                            value={state.gender}
                                            onChange={myChangeHandler}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            id="mobileNumber"
                                            name="mobilenumber"
                                            label="Mobile Number"
                                            autoComplete="mobilenumber"
                                            value={state.mobileNumber}
                                            onChange={myChangeHandler}
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit} >Submit</Button>
                            </form>
                        </div>
                    </Container >
                </Grid>
                <Grid item xs={false} sm={4} md={7}>
                    <div className={classes.ImgMediaCardcontainers}>
                        <ImgMediaCard state={state} handleRemoval={handleRemoval} handleChangeStatus={handleChangeStatus} handleEdit={handleEdit} />
                    </div>
                </Grid>
            </Grid>
        </>
    );
}