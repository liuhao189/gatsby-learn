import { graphql } from 'gatsby';
import React from 'react';

interface IMarkdownData {
    markdownRemark: {
        frontmatter: {
            title: string
        },
        html: string
    }
}

const BlogPost: React.FC<{ data: IMarkdownData }> = ({ data }) => {
    const post = data.markdownRemark;
    return (
        <>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </>)
}

export default BlogPost;

export const query = graphql`
 query($slug:String!) {
     markdownRemark( fields : { slug : { eq: $slug } }) {
         html 
         frontmatter {
             title
         }
     }
 }
`