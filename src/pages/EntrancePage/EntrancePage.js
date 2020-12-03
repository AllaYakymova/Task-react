import React from 'react';
import { Link } from "react-router-dom";

const EntrancePage = () => {
    
    return (
        <Link to ="/employees" >
            <button
                type="button"
                className="btn btn-lg">
                Show employees
            </button>
        </Link>
    )
};

export default EntrancePage;