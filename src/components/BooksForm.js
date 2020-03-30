import React from 'react';

const generateID = () => Math.trunc(Math.random() * 10 ** 9);

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
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
  }

  render() {
    return (
      <form>
        <h2>Book Form</h2>
        <input type="hidden" name="id" value={generateID()} />
        <label htmlFor="title">
          Title:
          {' '}
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
        </label>
        <label htmlFor="category">
          Category
          {' '}
          { this.state.category }
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
      </form>
    );
  }
}


export default BooksForm;
