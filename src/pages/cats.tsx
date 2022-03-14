import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Cats: React.FC = ({ data }) => {
    console.log(data);
    const img = getImage(data.file);
    return (
        <Layout>
            <h1>I love the cats!</h1>
            <GatsbyImage image={img} alt="the cat"></GatsbyImage>
        </Layout >
    )
}

export const query = graphql`
    query MyQuery {
        file(relativePath:{eq:"cat.jpeg"}){
            childImageSharp {
               gatsbyImageData(width:200,placeholder:BLURRED,formats:[AUTO,WEBP,AVIF])
            }
        }
    }
`

export default Cats;