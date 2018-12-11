import React from "react";
import RNTextDetector from "react-native-text-detector";


const ImageRecognition = ({Photo}) => {
  const visionResp = await RNTextDetector.detect(Photo);
  console.log('visionResp', visionResp);
  writeToClipboard(visionResp)
}

const writeToClipboard = async ({ result }) => {
  await Clipboard.setString(this.state.text);
  alert('Copied to Clipboard!');
};

export default ImageRecognition;
