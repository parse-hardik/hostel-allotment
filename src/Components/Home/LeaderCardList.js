import React from 'react';
import LeaderCard from './LeaderCard';

const LeaderCardList = ( {groups} ) =>
{
	const cardArray = groups.map((grp,i) => {
		return (
			<LeaderCard 
				fromusername={grp.fromusername} 
				togname={grp.togname}
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
