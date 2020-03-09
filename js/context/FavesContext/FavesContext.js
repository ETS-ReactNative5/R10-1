import React, {Component} from 'react';
import {showFaves, addFave, removeFave} from '../../config/models';

export const FavesContext = React.createContext();
class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: [],
    };
  }

  componentDidMount() {
    this.showFaves();
  }
  showFaves = async () => {
    try {
      const currentFaves = await showFaves();
      const ids = currentFaves.map(fave => fave[0]);
      this.setState({faveIds: ids});
    } catch (error) {
      throw error;
    }
  };
  addFave = async faveId => {
    try {
      const newFave = await addFave(faveId);

      if (newFave) {
        this.setState({faveIds: [...this.state.faveIds, newFave.id]});
      }
      this.showFaves();
    } catch (error) {
      throw error;
    }
  };
  removeFave = async faveId => {
    try {
      await removeFave(faveId);
      this.showFaves();
    } catch (error) {}
  };

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          addFave: this.addFave,
          removeFave: this.removeFave,
        }}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
export default FavesProvider;
