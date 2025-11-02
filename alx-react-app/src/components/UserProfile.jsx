const UserProfile = (props) =>{
    return(
        <div>
            <h1>{props.name}</h1>
            <p>Age:{props.age}</p>
            <p>{props.bio}</p>
        </div>
    );
};

export default UserProfile: