import React, { useRef } from 'react';

//hooks
import useNavigation from '../../hooks/useNavigation';

// style
import './style.scss';

const RocketHeader = ({ id, name }) => {
    const navRef = useRef(null);
    const { isMobileView } = useNavigation(navRef);

    const imgMobileStyle = {
        backgroundImage: 'url(../assets/' + id + '.jpg)',
        backgroundPosition: 'center center',
        height: '24vh',
        paddingTop: '2em',
        marginTop: '2em',
    };
    const imgDesktopStyle = {
        backgroundImage: 'url(../assets/' + id + '.jpg)',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        height: '16vh',
        paddingTop: '4em',
        marginTop: '2em',
    };

    return (
        <div className="d-flex flex-column justify-content-around w-100">
            <div style={isMobileView ? imgMobileStyle : imgDesktopStyle}>
                <div className="rocket__header__container d-flex flex-column align-items-center">
                    <h1 className="rocket__header__text">{name.toUpperCase()}</h1>
                </div>
            </div>
        </div>
    );
};

export default RocketHeader;
