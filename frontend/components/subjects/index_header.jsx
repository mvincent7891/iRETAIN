import React from 'react';
import Autosuggest from 'react-autosuggest';

// Autosuggest  functions

export class SubjectIndexHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: [],
      subjects: this.props.subjectArray
    };
    this.getSuggestions = this.getSuggestions.bind(this);
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.onChange = this.onChange.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.createSubject = this.createSubject.bind(this);
  }

  componentDidMount() {
    this.props.requestAllSubjects();
  }

  componentWillReceiveProps (newProps) {
    this.setState({ subjects: newProps.subjectArray });
  }

  createSubject () {
    if (this.state.value.length > 3) {
      this.props.createSubject(this.state.value);
    }
  }

  // Teach Autosuggest how to calculate suggestions for any given input value.
  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    const suggestionArray = inputLength === 0 ? [] : this.state.subjects.filter(subject => {
      return (
        subject.title.toLowerCase().slice(0, inputLength) === inputValue
      );
    });
    return suggestionArray;
  }

  // When suggestion is clicked, Autosuggest needs to populate the input field
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  getSuggestionValue(suggestion) {
    return suggestion.title;
  }

  // Use your imagination to render suggestions.
  renderSuggestion(suggestion) {
    return (
      <div className="search-suggestion" id={ suggestion }>{suggestion.title}</div>
    );
  }

  onChange (event, { newValue }) {
   this.setState({
     value: newValue
   });
  }

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested ({ value }) {
   this.setState({
     suggestions: this.getSuggestions(value)
   });
  }

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested () {
   this.setState({
     suggestions: []
   });
  }

  render () {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input field.
    const inputProps = {
      placeholder: 'Find or create...',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <div className="subject-index-header">
        <h3 className="subjects">Subjects</h3>
        <div className="subject-search-bar">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps} />
          <div className="subject-search-button"
                onClick={ this.createSubject }>
            <div>GO</div>
          </div>
        </div>
    </div>
    );
  }
}



// Sample Autosuggest array
// const languages = [
//   {
//     name: 'C',
//     year: 1972
//   },
//   {
//     name: 'Elm',
//     year: 2012
//   },
//   ...
// ];
