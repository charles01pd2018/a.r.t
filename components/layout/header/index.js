// dependencies
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';

// partials
import Logo from '../logo';


const Header = ({
    siteTitle,
    content: { headerNavLinks=[] }
}) => {

    /* HOOKS */
    const navRef = useRef(null); // navigation menu, including mobile nav
    const [ mobileHeaderActive, setMobileHeaderActive ] = useState(false);

    /* FUNCTIONS */
    const closeMobileHeader = () => {
        setMobileHeaderActive(false);
    }

    const openMobileHeader = () => {
        setMobileHeaderActive(true);
    }

    const exitKey = (e) => {
        mobileHeaderActive && e.keyCode === 27 && closeMobileHeader();
    }

    const hamburgerOnClick = () => {
        mobileHeaderActive === true ? closeMobileHeader() : openMobileHeader();
    }

    const clickOutside = (e) => { // closes menu when the user clicks off the menu
        if (!navRef.current) return; // prevent page breakdown in event of a bug
        if (navRef.current.contains(e.target)) return; // don't close on header or nav menu click
        closeMobileHeader();
    }

    /* CLASSNAMES */
    const headerLinksWrapperClasses = classNames( 'header-links-wrapper', mobileHeaderActive === true ? 'header-mobile-active' : 'header-mobile-not-active' );
    const hamburgerButtonClasses = classNames( 'header-nav-toggle', headerNavLinks.length === 0 ? 'hide' : '' );
    const hamburgerInnerClasses = classNames( 'hamburger-inner', mobileHeaderActive === true ? 'off-nav-is-active': '' )

    useEffect( () => {
        document.addEventListener('keydown', exitKey);
        document.addEventListener('click', clickOutside);
        return () => {
            document.removeEventListener('keydown', exitKey);
            document.removeEventListener('click', clickOutside);
        }
    })

    return (
        <section id='top' className='header-container'>
            <header className='header-wrapper'>

                    <div className='header-branding-wrapper'>
                        <Logo logoTitle={siteTitle} />
                    </div>

                    <nav ref={navRef} className='header-nav-menu'>
                        <button onClick={hamburgerOnClick} className={hamburgerButtonClasses}>
                            <span className='screen-reader'>menu icon</span>
                            <span aria-label='menu-icon' className="hamburger">
                                <span className={hamburgerInnerClasses}></span>
                            </span>
                        </button>

                        <ul className={headerLinksWrapperClasses}>
                            {
                                headerNavLinks.map( linkObject => {
                                    const { mainLinkTitle, mainLinkDestination } = linkObject.mainLink;
                                    return (
                                        <li key={mainLinkTitle} onClick={closeMobileHeader} className='header-list-item site-link'>
                                            <Link href={mainLinkDestination}><a>{mainLinkTitle}</a></Link>
                                        </li>
                                    );
                                 } )
                            }
                        </ul>
                    </nav>

            </header>
        </section>
    );
}

export default Header;