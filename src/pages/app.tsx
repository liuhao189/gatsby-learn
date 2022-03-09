import React from 'react';

const App: React.FC = () => {
    return (
        <>
            <h1> GATSBY_DISK_API: {process.env.GATSBY_DISK_API}</h1>
            <h1>SECRET:{process.env.SECRET}</h1>
        </>
    )
};

export default App;