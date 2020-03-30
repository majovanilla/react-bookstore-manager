import React from 'react';
import { CATEGORIES as categories } from '../constants';

const myCategories = [...categories];
myCategories[0] = 'All';

const CategoryFilter = props => (
  <select name="category">
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

export default CategoryFilter;
