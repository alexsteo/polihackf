import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  AsyncStorage,
} from 'react-native';
import { Form, FormItem } from 'react-native-form-component';
import { loginUser } from '../services/user-services/AuthServiceHandler';

import forest_image from '../images/forest2.png';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const LoginForm = () => {
  const [user, setCurrentUser] = useState({
    username: '',
    password: '',
  });

  const handleFieldChange = (key, input) => {
    setCurrentUser({ ...user, [key]: input });
  };

  const viewLoggedUser = async () => {
    let user = await AsyncStorage.getItem('user');
    let parsed = JSON.parse(user);
    console.log(parsed);
  };

  const onSubmitForm = () => {
    console.log(user);
    loginUser(user);
    viewLoggedUser();
  };

  return (
    <View>
      <ImageBackground
        source={forest_image}
        resizeMode="cover"
        style={imageStyle}
        blurRadius={1}
      >
        <Form
          onButtonPress={onSubmitForm}
          buttonStyle={{
            backgroundColor: '#EDEAC2',
            shadowColor: '#000',
            shadowOpacity: 0.25,
          }}
          buttonTextStyle={{ color: '#105657' }}
          buttonText="Login"
        >
          <FormItem
            placeholder="Username"
            isRequired
            value={user.username}
            name="username"
            onChangeText={text => handleFieldChange('username', text)}
            style={inputStyle}
          />
          <FormItem
            placeholder="Password"
            isRequired
            value={user.password}
            name="password"
            onChangeText={text => handleFieldChange('password', text)}
            secureTextEntry={true}
            style={inputStyle}
          />
        </Form>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderRadius: 25,
    width: 225,
    opacity: 0.9,
  },

  imageStyle: {
    paddingTop: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height + 100,
    flex: 1,
    justifyContent: 'center',
  },
});

const inputStyle = StyleSheet.compose(styles.inputStyle);
const imageStyle = StyleSheet.compose(styles.imageStyle);

export default LoginForm;
