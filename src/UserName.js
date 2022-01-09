import React from 'react';
import './sass/UserCard.scss'


const UserName = (props) => {
    const { repos } = props;

    const githubUserName = repos.length <= 14  ? (
        <div>
            <h1 className='user-name'>{repos}</h1>
        </div>
         ) : (
             <div>
                <h1 className='user-name-long'>{repos}</h1>
             </div>
        );

        return(
            <>
            {githubUserName}
            </>  
        )
        
}

export default UserName