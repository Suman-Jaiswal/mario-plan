import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, fbConfig),
    // reactReduxFirebase(firebase, fbConfig)
  )
);

const profileSpecificProps = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  updateProfileOnLogin: false,
};

const rrfProps = {
  firebase,
  config: fbConfig, profileSpecificProps,
  dispatch: store.dispatch,
  createFirestoreInstance
};

firebase.auth().onAuthStateChanged(() => 
  
  ReactDOM.render(
    <React.StrictMode>
    <Provider store={store} >
      <ReactReduxFirebaseProvider {...rrfProps}  >
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  )
  
  );

reportWebVitals();
