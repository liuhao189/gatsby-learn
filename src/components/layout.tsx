import React from 'react';

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <div style={{
                margin: `0 auto`,
                maxWidth: `650px`,
                padding: `0 1rem`
            }}>
                {children}
            </div>
        </>
    )
}

export default Layout;