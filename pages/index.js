// dependencies
import Head from 'next/head';
// layout
import DefaultLayout from '../layout/defaultLayout';
// components
import { Hero } from '../components';
// content
import { HeroContent } from '../content/homeContent';


const Home = ({
}) => {
  return (
    <DefaultLayout>
        <Head>
            <title>a.r.t</title>
        </Head>

        <Hero id='home-page-hero' content={HeroContent} />

    </DefaultLayout>
  );
}

export default Home;