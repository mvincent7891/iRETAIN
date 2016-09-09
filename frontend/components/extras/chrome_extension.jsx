import React from 'react';

class ChromeExtension extends React.Component {
  render () {
    return (
      <div>
        <h2 className="extension">Chrome Extension</h2>
        <div className="extension">
          The Chrome Extension sets iRetain apart from any other flashcard app. Create flashcards from anywhere on the web and revisit them when you have the time!<br/><br/>
          While iRetain's features are similar to many other apps, the app was built with a novel feature in mind: in future releases, the iRetain Chrome extension will enable dynamic creation of flashcards from anywhere on the web. Simply install the extension and click on a word to view it's definition. In the background, iRetain will build a flash card for you, enabling you to revisit words you've looked up previously while browsing or studying. A demo of the feature is shown below.
        </div>
        <h2 className="extension">Chrome Extension Demo</h2>

        <div className="extension">

          <img src="/assets/ex_demo.gif"/>
        </div>
      </div>
    );
  }
}

export default ChromeExtension;
