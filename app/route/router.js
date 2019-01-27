import React, { PureComponent } from 'react';
import { reduxifyNavigator, createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import AppNavigator from './welcomeRoutes';


export const routerReducer = createNavigationReducer(AppNavigator);

export const routerMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.router
);

const App = reduxifyNavigator(AppNavigator, 'root');


@connect(({ app, router }) => ({ app, router }))
class Router extends PureComponent {

  render() {
    const { dispatch, router } = this.props;
    return (
        <App dispatch={dispatch} state={router} />
    )
  }
}

export default Router;
