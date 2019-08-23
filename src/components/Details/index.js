import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.scss';

const propTypes = {
  rentPerMonth: PropTypes.number.isRequired,
  roomTitle: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  walkIcon: PropTypes.string.isRequired,
  transport: PropTypes.shape({
    type: PropTypes.string.isRequired,
    distance: PropTypes.shape({
      time: PropTypes.string.isRequired
    }),
  }),
  transportName: PropTypes.string.isRequired,
  transportSystemIcon: PropTypes.string.isRequired
};

const Details = ({
  rentPerMonth,
  roomTitle,
  area,
  walkIcon,
  transport,
  transportName,
  transportSystemIcon
}) => {
  return (
    <div>
      <h4 className={style.heading}>&pound;{rentPerMonth} <span className={style.divider}>|</span> {roomTitle}</h4>
      <div className={style.info}>
        <div className={style.text}>
          {area}
        </div>
        <span className={style.divider}>|</span>
        <div className={style.segment}>
          <img src={walkIcon} alt="Icon of a person walking" className={`${style.segment}`} />
          <div>
            {transport.distance.time} 
          </div>
        </div>
        <div className={style.segment}>
          <img src={transportSystemIcon} alt={`London ${transport.type} Logo`} className={`${style.segment}`} />
          <div>
            {transportName}
          </div>
        </div>
      </div>
    </div>
  )
}

Details.propTypes = propTypes;

export default Details;
