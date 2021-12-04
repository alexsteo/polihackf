import React from 'react';
import { useSelector } from 'react-redux';
import HomeNavigator from '../navigation/HomeNavigator';
import QuestionAnswersScreen from '../screens/QuestionAnswersScreen';

const Root = () => {
  const auth = useSelector(state => state.auth);

  console.log(auth);

  if (auth.register) {
    return <QuestionAnswersScreen />;
  }

  return <HomeNavigator />;
};

export default Root;
