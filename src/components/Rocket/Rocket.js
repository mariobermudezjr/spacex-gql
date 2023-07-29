import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';

// components
import Error from './../../components/Error';
import Loader from './../../components/Loader';
import LaunchFeed from './../../components/LaunchesFeed';

const GET_ROCKET__INFO = gql`
    query Rockets {
        rocket(id: "5e9d0d95eda69973a809d1ec") {
            id
            diameter {
                feet
                meters
            }
            cost_per_launch
            engines {
                number
                propellant_1
                propellant_2
                thrust_to_weight
                type
            }
            height {
                feet
                meters
            }
            stages
        }
    }
`;

const Rocket = ({ match }) => {
    const { data, loading, error } = useQuery(GET_ROCKET__INFO);

    if (loading) return <Loader />;
    if (error) return <Error error={error} />;

    const rocketid = match.params.id;
    console.log({ rocketid });
    return <Fragment></Fragment>;
};

export default Rocket;
