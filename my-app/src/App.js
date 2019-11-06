import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import RemoveBuilding from './components/RemoveBuilding';
import AddBuilding from './components/AddBuilding';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0
    };
  }

  filterUpdate(value) {this.setState({filterText: value})}

  selectedUpdate(id) {this.setState({selectedBuilding: id})}

  addBuilding(newBuild)
  {this.props.data.push(newBuild);
    this.setState({state: this.state});
    
  }

  removeBuilding(id)
  {
    this.setState(() => {
      delete this.props.data[id - 1];
    })
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1 align="center">UF Directory App</h1>
          <AddBuilding addBuilding={this.addBuilding.bind(this)} data={this.props.data}/>
        </div>

        <Search filterText={this.state.filterText} filterUpdate = {this.filterUpdate.bind(this)}/>
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <h4>Code Building</h4>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    selectedBuilding={this.state.selectedBuilding}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                data={this.props.data}
                id={this.state.selectedBuilding}
              />
              <RemoveBuilding
                data={this.RemoveBuilding}
                removeBuilding = {this.removeBuilding.bind(this)}
                building = {this.state.selectedBuilding}
                selectedUpdate={this.selectedUpdate.bind(this)}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
