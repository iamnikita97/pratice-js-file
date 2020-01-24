import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import Grid from "@material-ui/core/Grid";
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        maxWidth: '100%',
    },
});

export default function ImgMediaCard(props) {
    const classes = useStyles();
    const state = props.state;

    if (state.allData.length > 0) {
        return (
            state.allData.map((item, index) =>
                <Grid item xs={12} md={12} key={index.toString()}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardContent classes={classes.root}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.firstName} {item.lastName}
                                    <br />
                                    {item.email}
                                    <br />
                                    {item.gender}
                                    <br />
                                    {item.mobileNumber}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <IconButton size="small"
                                onClick={() => props.handleChangeStatus(item.firstName, item.counterId)}>
                            </IconButton>
                            <IconButton size="small"
                                onClick={() => props.handleRemoval(item.counterId)}
                            >
                                <DeleteIcon />
                            </IconButton>
                            <IconButton size="small"
                                onClick={() => props.handleEdit(item.counterId)}
                            >
                                <EditIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
            )
        );
    } else {
        return (<center><h2>No records available</h2></center>);
    }
}
