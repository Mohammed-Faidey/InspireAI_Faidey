import React, { useEffect } from "react";
import { useState, useCallback } from "react";
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
  const [instance, setInstance] = useState(null);

  useEffect(()=>{
   console.log(tetsing,'testing'); 
  })

  const toggleWebChat = useCallback(() => {
    instance.toggleOpen();
  }, [instance]);

  const { className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
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
  function onAfterRender_(instance, setInstance) {
    // Make the instance available to the React components.
    setInstance();
    instance.send("Hello");
    // Do any other work you might want to do before rendering. If you don't need any other work here, you can just use
    // onBeforeRender={setInstance} in the component above.
  }
  function renderCustomResponse(event) {
    console.log('testing renderCustomResponse',event);
    // The event here will contain details for each custom response that needs to be rendered.
    // The "user_defined_type" property is just an example; it is not required. You can use any other property or
    // condition you want here. This makes it easier to handle different response types if you have more than
    // one custom response type.
    if (
      event.data.message.user_defined &&
      event.data.message.user_defined.user_defined_type === "my-custom-type"
    ) {
      return <div>{event.data.message}</div>;
    }
  }
  var tetsing=null;
  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Welcome To watson Assistant "
        subtitle="This is the first functionality of Out Assistant "
        subtitleProps={{
          variant: "body1",
          color: "textPrimary",
        }}
        data-aos="fade-up"
        align={isMd ? "center" : "left"}
      />

      <WebChatContainer
        config={webChatOptions}
        onAfterRender={(instance) => {
          tetsing=instance
          instance.send("Hello");
              console.log('1231231231332132132312132132132132132132',instance);
              instance.receive('text',(t,r,n)=>{
                console.log(t,r,n);
              })

        }}
        renderCustomResponse={renderCustomResponse}
      />
    </div>
  );
};
//      //<WebChatContainer config={webChatOptions} onAfterRender= {(instance) => instance.send("Hello")} />
//       <WebChatContainer config={webChatOptions} renderCustomResponse={renderCustomResponse} onAfterRender= {(instance) => onAfterRender({instance, setInstance})}/>

Application.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Application;
