import React from 'react';

/**
 * SVG Canvas
 * This component generates the base SVG
 * and sets up all the sub-components
 */
const Canvas = ({ w, h }) => {
  const viewBox = [0, 0, w, h].join(' ');

  return (
    <svg version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox={ viewBox }
      style={ styles }>
      {
        clrs.map((clr, idx) => {
          return (
            <rect key={ idx }
              x={ 0.1625 * w + (0.15 * w * idx) } y={ 0.25 * h }
              width={ 0.075 * w }
              height={ 0.5 * h }
              fill={ clr } />
          );
        })
      }
    </svg>
  );
};

Canvas.propTypes = {
  h: React.PropTypes.number,
  w: React.PropTypes.number,
};

const styles = { display: 'block' };
const clrs = ['#FFE200', '#34A766', '#0072BB', '#DB3B43', '#FE7541'];

export default Canvas;
