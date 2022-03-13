import React from 'react';
import Layout from './../components/layout'
import { useStaticQuery, graphql } from 'gatsby'


const MyFiles: React.FC = () => {

    const data = useStaticQuery(graphql`
    {
        allFile(filter: { extension: {eq: "jpeg"}}){
            edges {
                node {
                    publicURL
                    name
                }
            }
        }
    }
    `)

    return (
        <Layout>
            <h1>Hello World</h1>
            <ul>
                {data.allFile.edges.map((item, inx) => {
                    return (<li key={inx}>
                        <a href={item.node.publicURL} target="_blank">
                            {item.node.name}
                        </a>
                    </li>)
                })
                }
            </ul>
        </Layout>
    )
};


export default MyFiles;