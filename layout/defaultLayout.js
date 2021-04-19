// components
import { Header } from '../components/layout'
// content
import { HeaderContent } from '../content/layoutContent';

var SITE_NAME = 'a.r.t';


const DefaultLayout = ({
    children
}) => {

    return (
        <>
            <Header siteName={SITE_NAME} content={HeaderContent} />
                <main className='site-content'>{children}</main>
        </>
    );
}

export default DefaultLayout;