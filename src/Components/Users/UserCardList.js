import React from 'react';
import UserCard from './UserCard';

const UserCardList = ( {users,sendReq,superUser,role} ) =>
{
	const cardArray = users.map((user,i) => {
		return (
			<UserCard className="dib"
				key={users[i]._id} 
				name={users[i].name}
				username={users[i].username}
				sendReq={sendReq}
				user={users[i]}
				superUser={superUser}
				/>);
	});
	return(

		<div className='d-flex flex-wrap ma2'>
		{/* {console.log(superUser)} */}
			{cardArray}
		</div>
	);
}

export default UserCardList;