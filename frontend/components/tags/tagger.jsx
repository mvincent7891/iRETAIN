import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import { tagNameSelector } from '../../util/tag_name_selector';

class Tagger extends React.Component {
    constructor(props) {
      super(props);
      this.props.tags.forEach((tag) => {

      });
      this.state = { tags: this.props.tags,
                     suggestions: this.props.suggestions };
      this.handleDelete = this.handleDelete.bind(this);
      this.handleAddition = this.handleAddition.bind(this);
      this.handleDrag = this.handleDrag.bind(this);
      this.removeSuggestions = this.removeSuggestions.bind(this);
    }

    componentWillReceiveProps(newProps) {
      let suggestions = this.removeSuggestions(newProps.suggestions);
      this.setState({ suggestions });
    }

    removeSuggestions(suggestions) {
      const tags = tagNameSelector(this.state.tags);
      const newSuggestions = [];
      suggestions.forEach((suggestion) => {
        if (tags.indexOf(suggestion) === -1) {
          newSuggestions.push(suggestion);
        }
      });
      return newSuggestions;
    }

    handleDelete(i) {
        let tags = this.state.tags;
        tags.splice(i, 1);
        this.setState({tags: tags});
        this.props.setTags(tags);
    }

    handleAddition(tag) {
        let tags = this.state.tags;
        const tagNames = tagNameSelector(tags);
        if (tagNames.indexOf(tag) === -1) {
          tags.push({
            id: tags.length + 1,
            text: tag
          });
        }
        this.setState({tags: tags});
        this.props.setTags(tags);
    }

    handleDrag(tag, currPos, newPos) {
        let tags = this.state.tags;

        // mutate array
        tags.splice(currPos, 1);
        tags.splice(newPos, 0, tag);

        // re-render
        this.setState({ tags: tags });
    }

    render() {
        let tags = this.state.tags;
        let suggestions = this.state.suggestions;
        return (
            <div>
                <ReactTags tags={tags}
                    suggestions={suggestions}
                    allowDeleteFromEmptyInput={false}
                    autofocus={false}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleInputChange={this.handleInputChange}
                    handleDrag={this.handleDrag} />
            </div>
        );
    }
}

export default Tagger;
