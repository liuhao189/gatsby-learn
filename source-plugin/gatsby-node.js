
exports.onPreInit = () => {
    console.log(`Loaded source-plugin`)
}

const { createRemoteFileNode } = require('gatsby-source-filesystem');

const POST_NODE_TYPE = 'Post';

exports.sourceNodes = async ({ actions, createContentDigest, createNodeId, getNodesByType }) => {

    const { createNode } = actions;

    const data = {
        posts: [
            {
                id: 1,
                desc: 'Hello World',
                imgUrl: 'https://liuhao189.github.io/demo/old/imgs/paojiehat.jpg'
            },
            {
                id: 2,
                desc: 'Second post',
                imgUrl: 'https://liuhao189.github.io/demo/old/imgs/5121.jpg'
            }
        ]
    }


    data.posts.forEach(post => {
        createNode(
            {
                ...post,
                id: createNodeId(`${POST_NODE_TYPE}-${post.id}`),
                parent: null,
                children: [],
                internal: {
                    type: POST_NODE_TYPE,
                    content: JSON.stringify(post),
                    contentDigest: createContentDigest(post)
                }
            }
        )
    })
}

exports.onCreateNode = async ({ node, actions: { createNode }, createNodeId, getCache }) => {

    if (node.internal.type === POST_NODE_TYPE) {
        const fileNode = await createRemoteFileNode({
            url: node.imgUrl,
            parentNodeId: node.id,
            createNode,
            createNodeId,
            getCache
        })
        if (fileNode) {
            node.remoteImage__NODE = fileNode.id;
        }
    }
}