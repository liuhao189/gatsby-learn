import React from 'react';
import { Link } from 'gatsby';

const AddTest: React.FC = () => {
    return (
        <>
            <div>
                <h1>I am add-test component.</h1>
            </div>
            <Link to='/about/'>About</Link>
        </>
    );
};

export default AddTest;