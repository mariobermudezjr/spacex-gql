import React from 'react';
import { gql, useQuery } from '@apollo/client';

// components
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import Rocket from './../../components/Rocket';

const GET_ROCKET__INFO = gql`
    query Rockets($rocketid: ID!) {
        rocket(id: $rocketid) {
            id
            name
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

const RocketPage = ({ match }) => {
    const rocketid = match.params.id;
    const { data, loading, error } = useQuery(GET_ROCKET__INFO, {
        variables: { rocketid },
    });

    if (loading) return <Loader />;
    if (error) return <Error error={error} />;

    return <Rocket rocket={{ ...data.rocket, id: rocketid }} />;
};

export default RocketPage;
