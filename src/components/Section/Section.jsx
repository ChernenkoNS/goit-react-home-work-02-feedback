import PropTypes from 'prop-types';
import css from '../Section/Section.module.css'

export const Section = ({ children }) => {
  return <div 
          className={css.container}
          >
            {children}
          </div>;
};

Section.propTypes = {
  children: PropTypes.array.isRequired,
};
