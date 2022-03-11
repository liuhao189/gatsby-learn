import React from 'react';
import { Link } from 'gatsby'
//@ts-ignore
window.PageName2 = 'my-files'

const MyFiles: React.FC = () => {
    return (
        <>
            <h1> GATSBY_DISK_API: {process.env.GATSBY_DISK_API}</h1>
            <h1>SECRET:{process.env.SECRET}</h1>
            <p><Link to='/app/'>App</Link></p>
        </>
    )
};

export default MyFiles;