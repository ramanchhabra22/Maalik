import { NavigationActions } from 'react-navigation'
import { RootNavigator } from '../component/AppNavigator'

const initalAction = RootNavigator.router.getActionForPathAndParams('Home')
const initialState = RootNavigator.router.getStateForAction(initalAction)

export default navigationReducer = (state = initialState, action) => {
  let nextState;

  switch (action.type) {
    case 'Home':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'home' }),
        state
      )
      break;
    case 'ViewMore':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'viewMore' }),
        state
      )
      break;
    case 'YouTubePlayer':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'youTubePlayer' }),
        state
      )
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state
}