import React from 'react';
import * as ContainerStyles from './styles/container.module.scss';

console.log(ContainerStyles)

const Container: React.FC = ({ children }) => {
    return (
        <>
            <div className={ContainerStyles.container}>
                {children}
            </div>
        </>
    )
};

export default Container;