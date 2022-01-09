import React from 'react';
import './sass/UserData.scss'


const RepoList = (props) => {
    const { repos } = props;
   
    const listRepos = repos.length !==0 ? (
        repos.data.sort((a, b) => b.stargazers_count - a.stargazers_count).map((item) => ( 
        <div key={item.id}>
        <li key={item.id} id='li' className='repos-list'>
            <a className='user-repos-name' href={item.html_url} rel="noopener noreferrer" target='blank'>{item.full_name}</a>
            <div className='user-repos-stars'>
                <i className="fas fa-star"></i>
                {item.stargazers_count}
            </div>
        </li>
        </div>
        )) 
     ) : (
        <li>No repos found</li> 
     );

    return (
                <div className='data-wrapper'> 
                
                    <div className="user-stats">
                        <p>Lista repozytoriów:</p>
                    </div>
                    <ul>
                        {listRepos}
                    </ul>
                </div>
        )
}

export default RepoList