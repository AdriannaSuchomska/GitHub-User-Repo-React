import React from 'react';
import './sass/UserCard.scss'
import RepoList from "./RepoList";
import UserName from "./UserName";



const UserProfil = (props) => {
    const { repos } = props;
    const size =1;
 
    const githubUser = repos.length !==0 ? (
        repos.data.slice(0, size).map((item) => ( 
            <div key={item.name} className='user-profile'>
                    <div className="profile-user-settings" >
                        <div className='user-img' >
                            <img className='user-img' src={item.owner.avatar_url} alt="" />
                        </div>
                        <UserName repos={item.owner.login} />
                    </div>  
                        <RepoList repos={repos} />
            </div>
        )) 
     ) : (
        <p></p> 
     );

return(
    <>
    {githubUser}
    </>
    
)
}


export default UserProfil