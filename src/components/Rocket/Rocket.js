import React, { Fragment } from 'react';

// components
import RocketHeader from '../RocketHeader';
import TechInfo from '../TechInfo';

//style
import './style.scss';

const Rocket = ({ rocket }) => {
    const { id, name, diameter, cost_per_launch, height, stages } = rocket;

    return (
        <Fragment>
            <div className="rocket d-flex flex-column align-items-center">
                <RocketHeader id={id} name={name} />
                <TechInfo name={name} rocket={{ name, height, diameter, stages, ...rocket, cost: cost_per_launch }} />
            </div>
            <TechInfo
                name={rocket.engines.type}
                rocket={{ name, height, diameter, stages, ...rocket, cost: cost_per_launch }}
                isEngine
            />
        </Fragment>
    );
};

export default Rocket;
