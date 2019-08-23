import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import style from './style.module.scss';

const propTypes = {
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['overlay', 'inline']).isRequired,
  inlineStyle: PropTypes.shape({})
};

const Avatar = ({ 
  id,
  firstName,
  imageSrc,
  theme,
  inlineStyle
}) => {
  const component = (
    <div
      id={id}
      className={`${style[`container`]} ${style[`container--${theme}`]}`}
      style={inlineStyle}
    >
      <div
        id={id}
        className={`${style[`avatar`]} ${style[`avatar--${theme}`]}`}
        style={{ backgroundImage: `url(${imageSrc})`}}
      />
      {theme && theme === 'overlay' &&
        <span>{firstName}</span>
      }
    </div>
  );

  if (theme === 'overlay') {
    return (
      <Link to={`/profile/${id}`}>
        {component}
      </Link>
    );
  } else {
    return (
      <>
        {component}
      </>
    );
  }
}

Avatar.propTypes = propTypes;

export default Avatar;