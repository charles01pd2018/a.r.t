// dependencies
import Link from 'next/link';

const Logo = ({
    logoTitle
}) => {

    /* CONTENT */
    const displayLogoTitle = logoTitle ? ( <h1 className='header-branding-title'>{logoTitle}</h1> ) : ( null );

    return (
        <div className='site-logo-wrapper'>
            <Link href='#top'>
                <a><img src='/favicon.svg' alt='site-logo' className='site-logo' /></a>
            </Link>
            {displayLogoTitle}
        </div>
    );
}

export default Logo;