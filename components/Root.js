import React from 'react';
import { useSelector } from 'react-redux';
import HomeNavigator from '../navigation/HomeNavigator';
import AuthNavigator from '../navigation/AuthNavigator';
import QuestionAnswersScreen from '../screens/QuestionAnswersScreen';

const Root = () => {
  const auth = useSelector(state => state.auth);
  const answers = useSelector(state => state.answer);

  console.log(auth);

  if (auth.register) {
    return <QuestionAnswersScreen />;
  }

  if (answers) {
    console.log('...');
  }

  if (auth.user) {
    return <AuthNavigator />;
  }

  return <HomeNavigator />;
};

export default Root;
