import React from 'react';
import { Link } from 'react-router-dom';

import style from './style.module.scss';

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

export default Avatar;