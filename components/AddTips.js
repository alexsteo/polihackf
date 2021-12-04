import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import { addTips } from "../services/tips-service/TipsServiceHandler";

const NewTipsForm = () => {
  const [tip, setNewTip] = useState({
    title: "",
    description: "",
  });
  const handleFieldChange = (key, input) => {
    setNewTip({ ...tip, [key]: input });
  };
  const onSubmitForm = () => {
    addTips(tip);
    console.log(tip);
  };
  return (
    <View>
      
      <View>
        <TextInput
          placeholder='Title'
          onChangeText={text => handleFieldChange("title", text)}
          value={tip.title}
          name='title'
        />
        <TextInput
          placeholder='Description'
          onChangeText={text => handleFieldChange("description", text)}
          value={tip.description}
          name='description'
        />
      </View>
      <Button title='Add new tip' onPress={onSubmitForm} />
    </View>
  );
};
const styles = StyleSheet.create({
  //Check project repo for styles
});

export default NewTipsForm;
