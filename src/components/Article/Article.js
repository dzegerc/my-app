import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Article = (props) => {
    const {isLoggedIn} = useContext(AuthContext);
    
    return (
        <>
        <h2>Some article title</h2>
        {isLoggedIn &&   <button>Edit</button> }
        </>
    );
}
export default Article;