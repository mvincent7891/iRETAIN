import React from 'react';
import FileUploaderContainer from './file_uploader_container';

class ChromeExtension extends React.Component {

  goExtras () {
    window.location = 'https://chrome.google.com/webstore/detail/iretain/gbeamkiokdfmamlmmkhddfdpbmbgmkic?utm_source=gmail';
  }

  render () {
    return (
      <div>
        {/* <h2 className="extension">Upload Flashcards</h2>
        <div className="extension">
          Upload decks of flashcards in .csv format. Each row should have two columns - title and body. Additional columns will be ignored.
        <br/><br/><FileUploaderContainer />
        </div> */}
        <h2 className="extension">Chrome Extension</h2>
        <div className="extension">
          The Chrome Extension sets iRetain apart from any other flashcard app. Create flashcards from anywhere on the web and revisit them when you have the time!<br/><br/>
          While iRetain's features are similar to many other apps, the app was built with a novel feature in mind: the iRetain Chrome extension enables dynamic creation of flashcards from anywhere on the web. Simply install the extension and click on a word to view it's definition. In the background, iRetain will build a flash card for you, enabling you to revisit words you've looked up previously while browsing or studying. A demo of the feature is shown below.
        </div>
        <h2 className="extension">Chrome Extension Demo</h2>

        <div className="extension">

          <img src="/assets/ex_demo.gif" width="560px"/>
        </div>
        <h2 className="extension">Download</h2>

        <div className="extension">
          <ul className="sidebar-chrome extra" onClick={ this.goExtras }>
            <li id="ext-icon" className="material-icons">
              get_app
            </li>
            <li id="ext-text">
              Download Extension
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ChromeExtension;
