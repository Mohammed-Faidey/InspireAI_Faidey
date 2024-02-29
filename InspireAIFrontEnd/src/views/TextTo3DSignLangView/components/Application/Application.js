import React, { Suspense } from 'react';
import { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { IconText } from "../../../../components/atoms";
import { SectionHeader } from "../../../../components/molecules";
import axios from "axios";
import {
  WebChatContainer,
  setEnableDebug,
} from "@ibm-watson/assistant-web-chat-react";

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';
import Model2Hello from './Model2Hello';

const useStyles = makeStyles((theme) => ({
  icon: {
    background: "transparent",
    borderRadius: 0,
  },
  iconText: {
    fontWeight: 700,
    marginLeft: theme.spacing(2),
  },
  form: {
    "& .MuiTextField-root": {
      background: theme.palette.background.paper,
    },
    "& .MuiOutlinedInput-input": {
      background: theme.palette.background.paper,
    },
  },
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  uploadButton: {
    display: "flex",
    justifyContent: "center",
    border: "1px solid transparent",
    background: theme.palette.alternate.dark,
    textTransform: "lowercase",
    "& .icon-text": {
      width: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start",
    },
  },
}));



const Application = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const webChatOptions = {
    integrationID: "cf134e1a-14b7-4d0c-b7c1-4684c9d5e536", // The ID of this integration.
    region: "eu-gb", // The region your integration is hosted in.
    serviceInstanceID: "dd8f0bab-351b-4c0d-bcfc-3ef8dcb5958c", // The ID
    // subscriptionID: 'only on enterprise plans',
    // Note that there is no onLoad property here. The WebChatContainer component will override it.
    // Use the onBeforeRender or onAfterRender prop instead.
  };


  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Text to  3D Sign Language  "
        subtitle=""
        subtitleProps={{
          variant: "body1",
          color: "textPrimary",
        }}
        data-aos="fade-up"
        align={isMd ? "center" : "left"}
      />
	  	  <Canvas
         camera={{ position: [2, 0, 7.25], fov: 15 }}
         style={{
            backgroundColor: '#111a21',
            width: '50vw',
            height: '50vh',
         }}
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
            <Model2Hello position={[0.025, -0.9, 1]} />
         </Suspense>
         <OrbitControls />
      </Canvas>
		 
      <WebChatContainer config={webChatOptions} />

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
