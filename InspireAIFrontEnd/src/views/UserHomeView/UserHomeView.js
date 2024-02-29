import React, { useState, useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Section, SectionAlternate } from '../../components/organisms';
import { Application} from './components';
import { Context } from "../../../context";
import { useRouter } from "next/router";
import clsx from "clsx";


import UserRoute from "../../../routes/UserRoute";
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
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
}));



const UserHomeView = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(Context);
  const { user } = state;
  const router = useRouter();


const fileUploadAndResize=()=>{
  console.log("h")
}

  return (
    <UserRoute>
    <div>
      <SectionAlternate innerNarrowed>
        <Application />
                 
     
      </SectionAlternate>
      <Divider />
    </div>
    </UserRoute>
  );
};

export default UserHomeView;
