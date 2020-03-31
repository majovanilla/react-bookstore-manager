import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import CategoryFilter from './CategoryFilter';
import { changeFilter } from '../actions/index';


const Header = props => {
  const { handleFilterChange } = props;
  return (
    <div className="header">
      <h1 className="main-title">Bookstore CMS</h1>
      <CategoryFilter handleFilterChange={handleFilterChange} />
    </div>
  );
};

Header.propTypes = {
  handleFilterChange: PropType.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleFilterChange: filter => {
    dispatch(changeFilter(filter));
  },
});

export default connect(null, mapDispatchToProps)(Header);
