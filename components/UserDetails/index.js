import React from "react";


const UserDetails = ({user}) =>
{

	return (<><hr/>
	<section>
	<h2>Details:</h2>
	<p>Name:{user.name}</p>
	<p>Username:{user.username}</p>
	<p>Email:{user.email}</p>
	</section>
	</>);
}

export default UserDetails;