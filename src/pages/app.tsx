import React from 'react';
import Layout from './../components/layout';
import { Link } from 'gatsby';
// import girlImg from './../images/girl.jpeg';

const App: React.FC = () => {
    return (
        <>
            <Layout>
                <h1> GATSBY_DISK_API: {process.env.GATSBY_DISK_API}</h1>
                <h1>SECRET:{process.env.SECRET}</h1>
                {/* <img src={girlImg}></img> */}
                <Link to='/my-files/'>My Files</Link>
            </Layout>
        </>
    )
};

export default App;