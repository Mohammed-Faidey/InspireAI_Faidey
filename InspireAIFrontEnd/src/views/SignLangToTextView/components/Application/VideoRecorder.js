import { useState, useRef } from "react";
const mimeType = "video/webm";

const VideoRecorder = () => {
  const [permission, setPermission] = useState(false);
  const mediaRecorder = useRef(null);
  const liveVideoFeed = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [stream, setStream] = useState(null);
  const [videoChuncks, setVideoChuncks] = useState([]);
  const [recordedVideo, setRecordedVideo] = useState(null);

  const getCameraPermission = async () => {
    setRecordedVideo(null);

    if ("MediaRecorder" in window) {
      try {
        const videoConstraints = {
          audio: false,
          video: true,
        };
        const audioConstrains = { audio: true };

        const videoStream = await navigator.mediaDevices.getUserMedia(
          videoConstraints
        );
        const audioStream = await navigator.mediaDevices.getUserMedia(
          audioConstrains
        );
        setPermission(true);

        const combinedStream = new MediaStream([
          ...videoStream.getVideoTracks(),
          ...audioStream.getAudioTracks(),
        ]);

        setStream(combinedStream);
        liveVideoFeed.current.srcObject = videoStream;
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("The media Recorder API is not supported in your browser");
    }
  };
  const startRecording = async () => {
    setRecordingStatus("recording");
    const media = new MediaRecorder(stream, { mimeType });
    mediaRecorder.current = media;
    mediaRecorder.current = media;
    mediaRecorder.current.start();
    let localVideoChuncks = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      localVideoChuncks.push(event.data);
    };
    setVideoChuncks(localVideoChuncks);
  };
  const stopRecording = () => {
    setPermission(false);
    setRecordingStatus("inactive");
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      const videoBlob = new Blob(videoChuncks, { type: mimeType });
      const videoUrl = URL.createObjectURL(videoBlob);
      setRecordedVideo(videoUrl);
      setVideoChuncks([]);
      
    };
  };
  return (
    <div>
      <h2>Video Recorder</h2>
      <main>
        <div className="video-controls">
          {!permission ? (
            <button onClick={getCameraPermission} type="button">
              Get Camera
            </button>
          ) : null}

          {permission && recordingStatus === "inactive" ? (
            <button onClick={startRecording} type="button">
              Start Recording
            </button>
          ) : null}
          {recordingStatus === "recording" ?(
            <button onClick={stopRecording} type="button">
                Stop Recording
            </button>
          ): null}
          {recordedVideo ?(
            <div className="video-player">
                <video src={recordedVideo} controls></video>
                <a download href={recordedVideo}> Download Recording</a>
            </div>
          ):null}
        </div>
      </main>
    </div>
  );
};

export default VideoRecorder;
