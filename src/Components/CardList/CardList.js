import React from 'react';
import Card from '../Card/Card';

const CardList = ( {groups , members} ) =>
{
	const cardArray = groups.map((user,i) => {
    const trial = user.gname;
    const getMembers = members.filter(mem=>{
       if(trial === mem.group)
          return mem;
    })
    
    // console.log({getMembers})
		return (
			<Card className="dib"
				key={groups[i].grpid} 
				name={groups[i].gname}
				member={getMembers}
				/>);
	});
	return(
		<div>
			{cardArray}
		</div>
	);
}

export default CardList;
