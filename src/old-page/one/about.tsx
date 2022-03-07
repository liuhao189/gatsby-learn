import React from 'react';
import Container from '../components/container';
import { graphql } from 'gatsby'

const About: React.FC = ({ data }) => {
    return (
        <Container>
            <div style={{ 'color': 'red' }}>
                <h1>About {data.site.siteMetadata.title}</h1>
                <h1>I am about component.</h1>
            </div>
        </Container>
    )
}

export default About;

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`