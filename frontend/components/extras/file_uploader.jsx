import { Receiver } from 'react-file-uploader';
import React from 'react';
import Dropzone from 'react-dropzone';
import { sendUploaded } from '../../actions/card_actions';

class FileUploader extends React.Component {

  constructor() {
    super();
    this.csvJSON = this.csvJSON.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop (files) {

    // this.props.sendUploaded(files);
  }

  csvJSON (csv) {

  }

  render () {
    return (
      <div>
        <Dropzone onDrop={ this.onDrop } >
          <div className = "upload">
            Drag and drop your file here, or click to choose a file from your computer. Flashcard files should be in .csv format.
          </div>
        </Dropzone>
      </div>
    );
  }
}

export default FileUploader;
