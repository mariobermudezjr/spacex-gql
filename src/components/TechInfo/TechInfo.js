import React from 'react';

//components
import InfoTable from '../InfoTable/InfoTable';

//hooks
import useTechInfo from '../../hooks/useTechInfo';

const TechInfo = ({ name, rocket, isEngine }) => {
    const tableContents = useTechInfo({ name, rocket, isEngine });

    return (
        <div className="container d-flex flex-column justify-content-around tech-info__container">
            <div
                className={`d-flex row
                     flex-md-row${isEngine ? '-reverse' : ''}
                 justify-content-between flex-column py-5`}
            >
                <InfoTable data={tableContents.body} title={tableContents.header} />
                <div className="col col-md-4 d-flex justify-content-center">
                    <img src={tableContents.img} alt={name} />
                </div>
            </div>
        </div>
    );
};

export default TechInfo;
