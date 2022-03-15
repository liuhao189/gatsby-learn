
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    const nodeData = {
        title: 'Test Node',
        description: 'Testing the node'
    }

    const newNode = {
        ...nodeData,
        id: createNodeId("TestNode-testid"),
        internal: {
            type: 'TestNode',
            contentDigest: createContentDigest(nodeData)
        }
    }

    actions.createNode(newNode);
}