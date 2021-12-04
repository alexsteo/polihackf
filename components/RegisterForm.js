import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import { addUsers } from "../services/user-services/UserServiceHandler";
import Users from "../entities/Users";

const RegisterForm = () => {
  const [user, setNewUser] = useState({
    email: "",
    password: "",
  });
  const handleFieldChange = (key, input) => {
    setNewUser({ ...user, [key]: input });
  };
  const onSubmitForm = () => {
    addUsers(user);
    console.log(user);
  };
  return (
    <View>
      <Text> Demo Form </Text>
      <View>
        <TextInput
          placeholder='Email'
          onChangeText={text => handleFieldChange("email", text)}
          value={user.email}
          name='email'
        />
        <TextInput
          secureTextEntry={true}
          placeholder='Password'
          onChangeText={text => handleFieldChange("password", text)}
          value={user.password}
          name='password'
        />
      </View>
      <Button title='Register' onPress={onSubmitForm} />
    </View>
  );
};
const styles = StyleSheet.create({
  //Check project repo for styles
});

export default RegisterForm;
