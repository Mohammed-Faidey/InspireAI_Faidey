import { useState, useRef } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import sendAudioForm from "./sendAudioForm";
import * as FFmpeg from '@ffmpeg/ffmpeg';


const mimeType = "audio/mp3";

const AudioRecorder = () => {
  const [permission, setPermission] = useState(false);
  const mediaRecorder = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [stream, setStream] = useState(null);
  const [audioChuncks, setAudioChuncks] = useState([]);
  const [audio, setAudio] = useState(null);
  const [responseFromBackend, setResponseFromBackend] = useState("");

  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("The mediaRecorder API is not Supported in your browser");
    }
  };
  const startRecording = async () => {
    setRecordingStatus("recording");
    const media = new MediaRecorder(stream, { type: mimeType });
    mediaRecorder.current = media;
    mediaRecorder.current.start();
    let localAudioChuncks = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      localAudioChuncks.push(event.data);
    };
    setAudioChuncks(localAudioChuncks);
  };

  // try to use asysnc(e) here as in predict application
  const stopRecording = () => {
    setRecordingStatus("inactive");
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      const audioBlob = new Blob(audioChuncks, { type: mimeType });
      const audioURL = URL.createObjectURL(audioBlob);
      setAudio(audioURL);
      setAudioChuncks([]);
      // Create a file name for the recording
      

      const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
      };
      saveAs(audioBlob, 'audio1.mp3');
      handleSubmit(audioBlob)
      // ->>>>>>>>> saveAs(audioBlob, 'audio1'); <<<<<<<<<<<
    };
  };

  const handleSubmit = async (audioBlob) => {
    // Create a FormData object to hold the file data
    const formData = new FormData();
    formData.append("audio", audioBlob);

    try {
      // Send a POST request to the server
      const response = await axios({
        method: "post",
        url: "/api/speechToTextJs", // Replace with your server endpoint
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Handle the response (e.g., show a success message)
      console.log("Audio uploaded successfully:", response.data);
    } catch (error) {
      // Handle any errors (e.g., display an error message)
      console.error("Error uploading video:", error);
    }
  };
  return (
    <div>
      <h2>Audio Recorder</h2>
      <main>
        <div className="audio-controls">
          {!permission ? (
            <button onClick={getMicrophonePermission} type="button">
              Get Microphone
            </button>
          ) : null}
          {permission && recordingStatus === "inactive" ? (
            <button onClick={startRecording} type="button">
              Start Recording
            </button>
          ) : null}
          {recordingStatus === "recording" ? (
            <button onClick={stopRecording} type="button">
              stop Recording
            </button>
          ) : null}
        </div>
        <div>
          {audio ? (
            <div className="audio-container">
              <audio src={audio} controls></audio>
              <a download href={audio}>
                Download Recording
              </a>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
};

/*
    var fd = new FormData();
    fd.append('audio', audioBlob);

    axios
      .post(
        "/api/speechToTextJs",
        { message:'hi' }, //send this data to our server, and our server will send data to aws endpoint
      )
      .then(res => {
          setResponseFromBackend(res.data.message)
      })
      .catch(err => {
        console.log('Error', err);
      });
*/
export default AudioRecorder;
