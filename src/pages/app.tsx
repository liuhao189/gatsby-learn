import React from 'react';
import Layout from './../components/layout';
import { Link } from 'gatsby';
// import JQuery from 'jQuery';

const App: React.FC = ({ serverData }) => {
    const { list } = serverData;
    return (
        <>
            <Layout>
                <h1> GATSBY_DISK_API: {process.env.GATSBY_DISK_API}</h1>
                <h1>SECRET:{process.env.SECRET}</h1>
                {/* <img src={girlImg}></img> */}
                <Link to='/my-files/'>My Files</Link>
                <ul>
                    {
                        list.map(item => {
                            return <li key={item.id}>{item.id}</li>
                        })
                    }
                </ul>
            </Layout>
        </>
    )
};

export async function getServerData(context) {
    try {
        fetch(`http://localhost:7823/one.json?ts=${new Date().getTime()}`).catch(ex => {
            console.error(ex)
        })
    } catch (ex) {
        console.error(ex);
    }
    return {
        status: 200,
        props: {
            list:
                [
                    { id: 1 },
                    { id: 2 }
                ]
        }
    }
}

export default App;