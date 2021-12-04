import forest_image from "../images/forest2.png";
import {
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  Text,
} from "react-native";
import React, { useState } from "react";
import QuestionAnswersList from "./QuestionAnswersList";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

const questions = [
  {
    question: "Intrebare 1",
    answers: [
      { id: 1, value: "Raspuns 1" },
      { id: 2, value: "Raspuns 2" },
      { id: 3, value: "Raspuns 3" },
      { id: 4, value: "Raspuns 4" },
    ],
    hasBeenBefore: true,
  },
  {
    question: "Intrebare 2",
    answers: [
      { id: 1, value: "Raspuns 4" },
      { id: 2, value: "Raspuns 3" },
      { id: 3, value: "Raspuns 2" },
      { id: 4, value: "Raspuns 1" },
    ],
    hasBeenBefore: false,
  },
  {
    question: "Intrebare 3",
    answers: [
      { id: 1, value: "Raspuns 4" },
      { id: 2, value: "Raspuns 3" },
      { id: 3, value: "Raspuns 2" },
      { id: 4, value: "Raspuns 1" },
    ],
    hasBeenBefore: false,
  },
  {
    question: "Intrebare 4",
    answers: [
      { id: 1, value: "Raspuns 4" },
      { id: 2, value: "Raspuns 3" },
      { id: 3, value: "Raspuns 2" },
      { id: 4, value: "Raspuns 1" },
    ],
    hasBeenBefore: false,
  },
  {
    question: "Intrebare 5",
    answers: [
      { id: 1, value: "Raspuns 4" },
      { id: 2, value: "Raspuns 3" },
      { id: 3, value: "Raspuns 2" },
      { id: 4, value: "Raspuns 1" },
    ],
    hasBeenBefore: false,
  },
];

function getRandomInt(max) {
  const index = Math.floor(Math.random() * max);

  return index;
}

const QuestionCard = () => {
  const [question, setQuestion] = useState(questions[0]);

  const generateNewQuestion = index => {
    let newIndex = getRandomInt(index);
    if (questions[newIndex].hasBeenBefore === false) {
      questions[newIndex].hasBeenBefore = true;
      setQuestion(questions[newIndex]);
    } else if (
      questions.find(question => question.hasBeenBefore === false) !== undefined
    ) {
      generateNewQuestion(5);
    }
  };

  return (
    <View>
      <ImageBackground
        source={forest_image}
        style={imageStyle}
        resizeMode='cover'
        blurRadius={1}
      >
        <QuestionAnswersList
          createQuestion={generateNewQuestion}
          questionTitle={question.question}
          answersList={question.answers}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: width,
    height: height + 100,
    flex: 1,
    justifyContent: "center",
  },
});

const imageStyle = StyleSheet.compose(styles.imageStyle);

export default QuestionCard;
