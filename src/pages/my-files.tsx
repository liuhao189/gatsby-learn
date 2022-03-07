import React from 'react';
import { graphql } from 'gatsby';

const MyFiles: React.FC = ({ data }) => {
    console.log(data);
    return (
        <>
            <h1>Hello World</h1>
        </>
    )
};

export const query = graphql`
    query {
        allFile {
            edges {
                node {
                    relativePath
                    prettySize
                    extension
                    birthTime(fromNow:true)
                }
            }
        }
    }
`;

export default MyFiles;