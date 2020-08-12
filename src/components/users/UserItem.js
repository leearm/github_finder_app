import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({user: { login, avatar_url, html_url }}) => {
    return (
    <div className="card text-center">
        <img src={avatar_url} alt="" className="round-img" style={{width: '60px'}}/>
        <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} target="blank" className="btn btn-dark btn-sm my-1">View {login}'s profile</Link> 
            </div>
    </div>
    );
};

UserItem.propTypes = {
    user: propTypes.object.isRequired
};

export default UserItem;
