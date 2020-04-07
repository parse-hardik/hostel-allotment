import React from 'react';
import LeaderCard from './LeaderCard';

const LeaderCardList = ( {groups} ) =>
{
	const cardArray = groups.map((grp,i) => {
		// console.log(grp)
		return (
			<LeaderCard 
				fromusername={grp.fromusername} 
				togname={grp.togname}
				colour={grp.colour}
				disabled={grp.disabled}
				/>
		);
	});
	return(
		<div>
			{cardArray}
		</div>
	);
}

export default LeaderCardList;
