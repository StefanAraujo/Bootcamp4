import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const {data,id} = this.props;
		let building = '';

		if (id)
		{
			building = data.find(function(x){
			if(x && x.id !== id)
				return null;
				return x;
			});
			console.log(id);

		}
		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
				{
					building  &&
					<> 
						<h4>Code:</h4>
						<p>{building.code}</p>
						<h4>Name: </h4>
						<p>{building.name}</p>
						</>
				}
				{building.address &&
				<>
				<h4>Address:</h4>
				<p>{building.address}</p>
				</>
				}
				{building.coordinates &&
				<>
				<h4>Coordinates:</h4>
				<p>Latitude: {building.coordinates.latitude}</p>
				<p>Longitude: {building.coordinates.longitude}</p>
				</>
				}
			</div>
		);
	}
}
export default ViewBuilding;
