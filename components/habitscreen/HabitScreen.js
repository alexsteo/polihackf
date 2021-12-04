import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import Users from "../../entities/Users";
import { fetchHabitsForUsers } from "../../services/habit-services/HabitService";
import Habit from "./Habit";

const HabitScreen = () => {

    useEffect(() => {
        initializeHabits()
    }, [])

    const [habits, setHabits] = useState([]);

    const initializeHabits = async () => {
        let hab = await fetchHabitsForUsers(new Users("-Mq4GF3cOflGrD4kUdaf", "asd", "sad", "dasda", "asds", "dasd"));
        setHabits(hab);
    }

    const createHabitComponent = ({ item }) => (<Habit habit={item} />);

    return (
        <View>
            <FlatList data={habits} renderItem={createHabitComponent} keyExtractor={(item) => item.title} />
        </View>
    );
}

export default HabitScreen;