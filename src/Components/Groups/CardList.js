import React from 'react';
import Card from './Card';

const CardList = ( {groups , members, usergrp ,username} ) =>
{
	const cardArray = groups.map((user,i) => {
    const trial = user.gname;
    const getMembers = members.filter(mem=>{
       if(trial === mem.gname)
          return mem;
    })
    
		return (
			<Card className="dib"
				key={groups[i].grpid} 
				name={groups[i].gname}
				member={getMembers}
				usergrp={usergrp}
				user={username}
				/>);
	});
	return(
		<div>
			{cardArray}
		</div>
	);
}

export default CardList;
