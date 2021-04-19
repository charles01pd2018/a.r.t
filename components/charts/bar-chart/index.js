// dependencies
import { useState } from 'react';
// utils
import { getDemoData } from '../utils';
import { formatd3BarChartData, getAxis } from './data';

const BarChart = ({
  id,
  dimensions: { width, height },
}) => {

  /* CONSTANTS */
  const RECT_WIDTH = 3;

  const [ xAxis, yAxis ] = getAxis(); // axis not working
  const rawData = getDemoData();
  const [ data, setData ] = useState( formatd3BarChartData( rawData, width, height ) );

  console.log( xAxis, yAxis );

  return (
    <section id={id} className='container'>
      <h2>Bar Chart</h2>
      <div className='bar-chart-container chart-container'>
        <svg width={width} height={height}>
          {
            data.map( barItem => (
              <rect x={barItem.x} y={barItem.y}
                width={RECT_WIDTH} height={barItem.height}
                fill={barItem.fill} />
            ) )
          }
        </svg>
      </div>
    </section>
  )
}

export default BarChart;