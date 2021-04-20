// dependencies
import { useState } from 'react';
import * as d3 from 'd3';
// utils
import { getDemoData } from '../utils';
import { formatd3BarChartData, getAxis } from './data';


const BarChart = ({
  id,
  dimensions: { width, height },
}) => {

  /* CONSTANTS */
  const RECT_WIDTH = 3;

  const rawData = getDemoData();
  const [ data, setData ] = useState( formatd3BarChartData( rawData, width, height ) );

  return (
    <section id={id} className='container'>
      <h2>Bar Chart</h2>
      <div className='bar-chart-container chart-container'>
        <svg width={width} height={height}>
          {
            data.map( ( barItem, index ) => (
              <rect key={`bar-${index}`} 
                x={barItem.x} y={barItem.y}
                width={RECT_WIDTH} height={barItem.height}
                fill={barItem.fill} />
            ) )
          }
        </svg>
      </div>
    </section>
  );
}

export default BarChart;