// dependencies
import { useState } from 'react';
// utils
import { getDemoData } from '../utils';
import { formatd3RadialChart } from './data';


const RadialChart = ({
    id,
    dimensions: { width, height },
}) => {

    const rawData = getDemoData();
    const [ data, setData ] = useState( formatd3RadialChart( rawData, width ) );

    return (
        <section id={id} className='container'>
        <h2>Radial Chart</h2>
        <div className='radial-chart-container chart-container'>
            <svg width={width} height={height}>
                <g transform={`translate( ${width / 2}, ${height / 2} )`}>
                    {
                        data.map( ( radialItem, index ) => (
                            <path key={`radial-${index}`} d={radialItem.path} fill={radialItem.fill} /> 
                        ) )
                    }
                </g>
            </svg>
        </div>
        </section>
    );
}

export default RadialChart;