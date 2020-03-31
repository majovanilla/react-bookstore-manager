import React from 'react';
import PropType from 'prop-types';
import categories from '../constants';

const myCategories = [...categories];
myCategories[0] = 'All';

const CategoryFilter = props => {
  const { handleFilterChange } = props;
  const onChange = event => {
    const index = event.target.selectedIndex;
    const filter = event.target[index].value;
    handleFilterChange(filter);
  };

  return (
    <select name="category" onChange={onChange}>
      {
        myCategories.map((category, index) => {
          const categoryKey = `CATEGORY_${index}`;

          return (
            <option key={categoryKey} value={category}>
              {category}
            </option>
          );
        })
      }
    </select>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropType.func.isRequired,
};

export default CategoryFilter;
