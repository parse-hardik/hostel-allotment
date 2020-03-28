import React from 'react';
import Card from './Card';

const CardList = ( {users,sendReq,superUser,role} ) =>
{
	const cardArray = users.map((user,i) => {
		return (
			<Card className="dib"
				key={users[i]._id} 
				name={users[i].name}
				username={users[i].username}
				sendReq={sendReq}
				user={users[i]}
				superUser={superUser}
				/>);
	});
	return(
		<div>
			{cardArray}
		</div>
	);
}

export default CardList;
