import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import chevronLeft from '../../assets/images/chevron-left.svg';
import walkIcon from '../../assets/images/walk-icon--black.svg';
import overgroundIcon from '../../assets/images/overground-icon.svg';
import undergroundIcon from '../../assets/images/underground-icon.svg';

import Details from '../Details';
import Avatar from '../Avatar';

import style from './style.module.scss';

const getTransportName = ({name, type}) => name.substring(0, name.toLowerCase().indexOf(type)).trim();

const Teaser = ({
  uuid,
  photos,
  featuredPhoto,
  roomTitle,
  rentPerMonth,
  area,
  transport,
  roommates
}) => {
  const [isAvatarsHovered, setIsAvatarsHovered] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const photo = photos.find((image) => image.uuid === featuredPhoto);
  const transportSystemIcon = transport.type === 'underground' ? undergroundIcon : overgroundIcon;
  const transportName = getTransportName(transport);

  return (
    <div className={style.teaser} key={uuid}>
      <div className={style.hero}>
        <Link to={`/listing/${uuid}`}>
          <img
            src={photo.cdnUrl}
            alt={`${roomTitle}`}
            className={style.photo}
          />
        </Link>
        <div className={`${style.overlay} ${isOverlayVisible ? style['overlay--visible'] : ''}`}>
          <button
            className={style['overlay-btn']}
            onClick={() => setIsOverlayVisible(false)}
          >
            <img
              src={chevronLeft}
              alt="Left chevron icon"
              className={style.chevron}
            />
          </button>
          {roommates.map((roomMate) => (
            <Avatar
              id={roomMate.uuid}
              firstName={roomMate.firstName}
              imageSrc={roomMate.profilePic.cdnUrl}
              theme="overlay"
            />
          ))}
        </div>
        <div
          className={style['inline-avatars']}
          onMouseEnter={() => setIsAvatarsHovered(true)}
          onMouseLeave={() => setIsAvatarsHovered(false)}
          onClick={() => setIsOverlayVisible(true)}
        >
          {roommates.map((roomMate, index, arr) => {
            const translateXVal = isAvatarsHovered ? -((arr.length - index - 1)*5) : ((arr.length - index)*20)-20;
            return (
              <Avatar
                id={roomMate.uuid}
                firstName={roomMate.firstName}
                imageSrc={roomMate.profilePic.cdnUrl}
                theme="inline"
                inlineStyle={{
                  transform: `translateX(${translateXVal}px)`
                }}
              />
            );
          })}
        </div>
      </div>
      <Details
        rentPerMonth={rentPerMonth}
        roomTitle={roomTitle}
        area={area}
        walkIcon={walkIcon}
        transport={transport}
        transportName={transportName}
        transportSystemIcon={transportSystemIcon}
      />
    </div>
  )
}

export default Teaser;

