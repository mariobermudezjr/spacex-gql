import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';

// components
import Error from './../../components/Error';
import Loader from './../../components/Loader';
import LaunchFeed from './../../components/LaunchesFeed';

// style
// import './style.scss';

const GET_PAST_LAUNCH_INFO = gql`
    query LaunchesPast {
        launchesPast(limit: 15) {
            id
            launch_site {
                site_name_long
            }
            links {
                article_link
                flickr_images
            }
            mission_name
            rocket {
                rocket_name
            }
        }
    }
`;

const PastLaunches = () => {
    const { data, loading, error } = useQuery(GET_PAST_LAUNCH_INFO);

    if (loading) return <Loader />;
    if (error) return <Error error={error} />;

    console.log('Past Launches:', data);

    const launches = data.launchesPast.filter(
        launch => launch.links.article_link && launch.links.flickr_images.length > 0
    );

    return (
        <Fragment>
            <h1 className="display-4 text-center my-5 pt-5">Past Launches!</h1>
            <LaunchFeed launches={launches} />
        </Fragment>
    );
};

export default PastLaunches;
