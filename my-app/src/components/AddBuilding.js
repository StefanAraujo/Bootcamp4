import React from 'react';

class AddBuilding extends React.Component {

    addBuilding(newBuild){
        this.props.addBuilding(newBuild);
    }

    render(){
        const newBuild =
         {
         id : null,
         name :"", 
         code : "",
         address : "",
        };

        return(
            <form id="add">
                <input type="text" name="name" placeholder="Building Name"/>
                <input type="text" name="code" placeholder="Building Code"/>
                <input type="text" name="address" placeholder="Building Address"/>
                <button type="button" onClick={() => {
                    newBuild.name = document.getElementById('add').name.value;
                    if (newBuild.name !== "")
                    {
                        newBuild.code = document.getElementById('add').code.value;
                        newBuild.address = document.getElementById('add').address.value;
                        newBuild.id = this.props.data.length + 1;                    
                        console.log(newBuild);
                        this.addBuilding(newBuild);
                    }
                }}>Add Building</button>
            </form>
        )
    }
}

export default AddBuilding;