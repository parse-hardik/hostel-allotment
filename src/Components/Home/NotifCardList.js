import React from 'react';
import NotifCard from './NotifCard';

const NotifCardList = ( {groups} ) =>
{
	const cardArray = groups.map((grp,i) => {
		// console.log(grp)
		return (
			<NotifCard 
				fromgname={grp.fromgname} 
				tousername={grp.tousername}
				colour={grp.colour}
				/>
		);
	});
	return(
		<div>
			{cardArray}
		</div>
	);
}

export default NotifCardList;
