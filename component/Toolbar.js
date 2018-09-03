import {ToolbarAndroid} from 'react-native'
import React from 'react';
import styles from './styles';

const Toolbar = () => {
    return(
      <ToolbarAndroid
      style = {styles.toolbarContainer}
      title="Maalik"
      onActionSelected={this.onActionSelected} />
    )
}

onActionSelected = (position) => {
    if (position === 0) { // index of 'Settings'
    }
  }

export default Toolbar;  