import React from 'react';
import * as ContainerStyles from './styles/container.module.scss';
import { useStaticQuery, graphql } from 'gatsby';

const Container: React.FC = ({ children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <div className={ContainerStyles.container}>
                <h1>
                    {data.site.siteMetadata.title}
                </h1>
                {children}
            </div>
        </>
    )
};

export default Container;