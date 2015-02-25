var React = require('react');
var NoteItem = require('./note_item');

var NoteBookList = React.createClass({

  componentDidMount: function() {
    this.props.notebooks.on('add remove reset', function() {
      this.forceUpdate();
    }.bind(this), this);
  },

  componentWillUnmount: function() {
    this.props.notebooks.off(null, null, this);
  },

  renderNotes: function() {
    return this.props.notes.map(function(note) {
      return <NoteItem
        key={note.get('_id')}
        swapView={this.props.swapView}
        note={note}
        hidden={true}
      />;
    }.bind(this));
  },

  renderNotebook: function() {
    return this.props.notebooks.map(function(notebook, index) {
      return (
        <div>
          {this.renderNotes()}
        </div>
      );
    });
  },

  render: function() {
    return (
      <div>
        <h1>Notebooks</h1>
        {this.renderNotebook()}
      </div>
    );
  }
});

module.exports = NoteBookList;