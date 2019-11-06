import React from 'react';
class BuilingList extends React.Component {
	selectedUpdate(){const id = this.myValue.id;this.props.selectedUpdated(id)}
	render() {
		const { data,filterText,selectedUpdate } = this.props;
		const buildingList = data
		.filter(listing => listing.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 || listing.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0)
		.map(directory=>
			{return (
					<tr
					key = {directory.id}
					onClick={()=>selectedUpdate(directory.id)}
					>
						<td> {directory.code}</td>
						<td>{directory.name}</td>
					</tr>
				);
			});
			return <div>{buildingList}</div>	
	}
}
export default BuilingList;
