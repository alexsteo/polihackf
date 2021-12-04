import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { addUsers } from "../services/user-services/UserServiceHandler";
import { Form, FormItem } from "react-native-form-component";

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
  };
  return (
    <View>
      <Form
        onButtonPress={onSubmitForm}
        buttonStyle={{ backgroundColor: "#044123" }}
      >
        <FormItem
          placeholder='Username'
          isRequired
          value={user.username}
          name='username'
          onChangeText={text => handleFieldChange("username", text)}
          style={inputStyle}
        />

        <FormItem
          placeholder='First name'
          isRequired
          value={user.firstName}
          name='firstName'
          onChangeText={text => handleFieldChange("firstName", text)}
          style={inputStyle}
        />

        <FormItem
          placeholder='Last name'
          isRequired
          value={user.lastName}
          name='lastName'
          onChangeText={text => handleFieldChange("lastName", text)}
          style={inputStyle}
        />

        <FormItem
          placeholder='Email'
          isRequired
          value={user.email}
          name='email'
          onChangeText={text => handleFieldChange("email", text)}
          style={inputStyle}
        />

        <FormItem
          placeholder='Password'
          isRequired
          value={user.password}
          name='password'
          onChangeText={text => handleFieldChange("password", text)}
          secureTextEntry={true}
          style={inputStyle}
        />
      </Form>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderRadius: 25,
    width: 225,
    opacity: 0.8,
  },
});

const inputStyle = StyleSheet.compose(styles.inputStyle);

export default RegisterForm;
