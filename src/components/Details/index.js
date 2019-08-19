import React from 'react';

import style from './style.module.scss';

const details = ({
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

export default details;
