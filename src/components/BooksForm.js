import React from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import { createBook } from '../actions';
import categories from '../constants';

const generateID = () => Math.trunc(Math.random() * 100000000).toString();

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: generateID(),
      title: '',
      category: '',
    };

    this.reset = () => {
      this.setState({
        id: generateID(),
        title: '',
        category: '',
      });
    };

    this.handleChange = event => {
      const { value } = event.target;

      if (event.target.getAttribute('name') === 'title') {
        this.setState({ title: value });
      }

      if (event.target.getAttribute('name') === 'category') {
        this.setState({ category: value });
      }
    };

    this.handleSubmit = event => {
      event.preventDefault();
      const { id, title, category } = this.state;

      const emptyRegex = /^\s*$/;
      if (title.match(emptyRegex) || category.match(emptyRegex)) {
        return;
      }

      const { createBook } = this.props;
      createBook({ id, title, category });
      this.reset();
      event.target.reset();
    };
  }

  render() {
    const { id, title } = this.state;
    return (
      <form className="books-form" onSubmit={this.handleSubmit}>
        <h2>Book Form</h2>
        <div className="books-form-row">
          <input type="hidden" name="id" value={id} />
          <label htmlFor="title">
            Title:
            <input type="text" name="title" value={title} onChange={this.handleChange} />
          </label>
          <label htmlFor="category">
            Category
            :
            <select name="category" onChange={this.handleChange}>
              {
                categories.map((category, index) => {
                  const categoryKey = `CATEGORY_${index}`;

                  return (
                    <option key={categoryKey} value={category}>
                      {category}
                    </option>
                  );
                })
              }
            </select>
          </label>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}
const mapStateToProps = state => ({ books: state });

const mapDispatchToProps = dispatch => ({
  createBook: ({ id, title, category }) => { dispatch(createBook({ id, title, category })); },
});

BooksForm.propTypes = {
  createBook: PropType.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
