 import React from 'react';
 class RemoveBuilding extends React.Component{
        selectedUpdate() {this.props.selectedUpdate(null);}
    
        removeBuilding(id) {       
            this.props.removeBuilding(id);
            this.setState({ state: this.state });
        }
        
        render() {
            const {building} = this.props;
            return (
                <div>
                    {building &&
                    <button 
                    type="button" 
                    onClick={() =>   {
                        this.removeBuilding(building);
                        this.setState({ state: this.state });
                        this.selectedUpdate();
                        }}>
                        Delete Building
                    </button>
                    }
                </div>
            ); 
        }
    }
    
    export default RemoveBuilding