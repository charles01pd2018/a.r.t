// dependencies
import Head from 'next/head';
// layout
import DefaultLayout from '../../layout/defaultLayout';
// components
import { Hero } from '../../components';
import { BarChart } from '../../components/charts';
// content
import { HeroContent } from '../../content/chartsContent';

const Charts = ({
}) => {

  return (
    <DefaultLayout>
        <Head>
            <title>charts</title>
        </Head>

        <Hero id='charts-page-hero' content={HeroContent} />
        <BarChart id='weather-bar-chart' dimensions={ { width: 650, height: 400 } } />
    </DefaultLayout>
  );
}

export default Charts;