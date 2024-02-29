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



  const [baseImage, setBaseImage] = useState("");
  const [classified,setClassified]=useState(false)
  const [responseFromBackend,setResponseFromBackend]=useState("")


  const theme = createTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  
  let BotViewButton;
if (!user) {
  BotViewButton = null;
} else {
  BotViewButton = (
    <Button href="/botview">
      Assistant
    </Button>
  );
}

let TextTo3DSignLangViewButton;
if (!user) {
  TextTo3DSignLangViewButton = null;
} else {
  TextTo3DSignLangViewButton = (
    <Button component="a" href="/TextTo3DSignLangView">
      Text to 3d sign language  
    </Button>
  );
}

let TextToSpeechViewButton;
if (!user) {
  TextToSpeechViewButton = null;
} else {
  TextToSpeechViewButton = (
    <Button  component="a" href="/TextToSpeechView">
      Text To Speech
    </Button>
  );
}

let SpeechToTextViewButton;
if (!user) {
  SpeechToTextViewButton = null;
} else {
  SpeechToTextViewButton = (
    <Button component="a" href="/SpeechToTextView">
      Speech to text 
    </Button>
  );
}

let SpeechToSpeechViewButton;
if (!user) {
  SpeechToSpeechViewButton = null;
} else {
  SpeechToSpeechViewButton = (
    <Button  component="a" href="/SpeechToSpeechView">
      Speech to Speech
    </Button>
  );
}

let SignLangToTextViewButton;
if (!user) {
  SignLangToTextViewButton = null;
} else {
  SignLangToTextViewButton = (
    <Button  component="a" href="/SignLangToTextView">
      Sign language to text
    </Button>
  );
}

let SignLangToSignLangViewButton;
if (!user) {
  SignLangToSignLangViewButton = null;
} else {
  SignLangToSignLangViewButton = (
    <Button component="a" href="/SignLangToSignLangView">
      sign language to sign language
    </Button>
  );
}


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

        <ListItem
            className={clsx(classes.listItem, "menu-item--no-dropdown")}
          >
            {SignLangToSignLangViewButton}
          </ListItem>

          <ListItem
            className={clsx(classes.listItem, "menu-item--no-dropdown")}
          >
            {TextTo3DSignLangViewButton}
          </ListItem>

          <ListItem
            className={clsx(classes.listItem, "menu-item--no-dropdown")}
          >
            {SignLangToTextViewButton}
          </ListItem>

          <ListItem
            className={clsx(classes.listItem, "menu-item--no-dropdown")}
          >
            {SpeechToSpeechViewButton}
          </ListItem>

          <ListItem
            className={clsx(classes.listItem, "menu-item--no-dropdown")}
          >
            {TextToSpeechViewButton}
          </ListItem>

          <ListItem
            className={clsx(classes.listItem, "menu-item--no-dropdown")}
          >
            {SpeechToTextViewButton}
          </ListItem>

          <ListItem
            className={clsx(classes.listItem, "menu-item--no-dropdown")}
          >
            {BotViewButton}
          </ListItem>
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
