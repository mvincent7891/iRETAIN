import React from 'react';
import DeckResultsContainer from './deck_results_container';

class Search extends React.Component {

  constructor (props) {
    super(props);
    this.state = { query: "" };
    this.renderSearchItem = this.renderSearchItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount () {
    this.props.search("ALL");
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.search(this.state.query);
  }

  handleChange (event) {
    event.preventDefault();
    this.setState({ query: event.currentTarget.value });
    this.props.search(this.state.query);
  }

  renderSearchItem () {
    return (
      <ul className="search-bar">
        <li className="search-component-left">
        </li>
        <li className="search-component-center">
          <form onSubmit={ this.handleSubmit } >
            <input type="text"
                   placeholder="Try typing music, plants, general..."
                   value={ this.state.query }
                   onChange={ this.handleChange }
                   className="search-component-field"/>
          </form>
        </li>
        <li className="search-component-right"
            onClick={ this.handleSubmit }>
        </li>
      </ul>
    );
  }

  render () {
    return (
      <div className="search-container">
        <div className="search-header-item">
          Search
        </div>
          { this.renderSearchItem() }
        <div>
          <DeckResultsContainer />
        </div>
      </div>
    );
  }

}

export default Search;
