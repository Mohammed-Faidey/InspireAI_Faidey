import React, { useState, useContext } from "react";
import PropTypes from 'prop-types';
import { makeStyles, createTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid} from '@material-ui/core';
import { IconText } from '../../../../components/atoms';
import { SectionHeader } from '../../../../components/molecules';
import axios from "axios";
import { Context } from "../../../../../context";
import { useRouter } from "next/router";
import clsx from "clsx";


import UserRoute from "../../../../../routes/UserRoute";
import {
  Toolbar,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  Popover,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  icon: {
    background: 'transparent',
    borderRadius: 0,
  },
  iconText: {
    fontWeight: 700,
    marginLeft: theme.spacing(2),
  },
  form: {
    '& .MuiTextField-root': {
      background: theme.palette.background.paper,
    },
    '& .MuiOutlinedInput-input': {
      background: theme.palette.background.paper,
    },
  },
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  uploadButton: {
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid transparent',
    background: theme.palette.alternate.dark,
    textTransform: 'lowercase',
    '& .icon-text': {
      width: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
    },
  },
}));

const Application = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const { state, dispatch } = useContext(Context);
  const { user } = state;
  const router = useRouter();



  const [responseFromBackend,setResponseFromBackend]=useState("")



  const theme = createTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  axios
      .post(
        "/api/test"
      )
      .then(res => {
          setResponseFromBackend(res.data.message)
          setClassified(true)
      })
      .catch(err => {
        console.log('Error', err);
      });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Options"
        subtitle="Choose a method to interact with the chatbot"
        subtitleProps={{
          variant: 'body1',
          color: 'textPrimary',
        }}
        data-aos="fade-up"
        align={isMd ? 'center' : 'left'}
      />
      <div className={classes.form}>
        <Grid container spacing={isMd ? 4 : 2}>
        {responseFromBackend}
        </Grid>

      </div>
    </div>
  );
};

Application.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Application;
