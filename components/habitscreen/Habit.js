
import React, { useState } from "react";
import { StyleSheet, Dimensions, Text, View, Share } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { updateHabit } from '../../services/habit-services/HabitService';

var width = Dimensions.get("window").width; //full width
let height = 60;

const Habit = ({ habit }) => {

    const [set, reset] = useState(true);
    const [newHeight, setNewHeight] = useState(60);
    const [descriptionHidden, setDescriptionHidden] = useState(false);
    const [showLike, setShowLike] = useState(true);

    const getNotificationsIcon = () => {
        if (habit.notifications === true)
            return (<Ionicons name="alert-circle" size={25} onPress={() => changeNotificationsForHabit()} style={styles.icon} />)
        else
            return (<Ionicons name="alert-circle-outline" size={25} onPress={() => changeNotificationsForHabit()} style={styles.icon} />)
    }

    const changeNotificationsForHabit = () => {
        habit.notifications = !habit.notifications;
        updateHabit(habit);
        reset(!set);
    }

    const doHabit = () => {
        habit.rating++;
        updateHabit(habit);
        setShowLike(!showLike);
        reset(!set);
    }

    const changeHeight = () => {
        setNewHeight(180 - newHeight);
        setDescriptionHidden(!descriptionHidden);
    }

    const showDescription = () => {
        if (descriptionHidden) {
            return <Text style={styles.textStyle} onPress={() => changeHeight()}>{habit.description}</Text>
        }
    }

    const openShareScreen = async () => {
        try {
            const result = await Share.share({
                message:
                    `Hey! My score on ${habit.title} is ${habit.rating}`,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    const showLikeButton = () => {
        if (showLike) {
            return <Ionicons name="thumbs-up-outline" size={25} onPress={() => doHabit()} style={styles.icon} />
        }
    }

    return (
        <View style={{ ...styles.viewStyle, height: newHeight }}>
            <Text style={styles.textStyle} onPress={() => changeHeight()}> {habit.title}</ Text>
            {showDescription()}
            <Text style={styles.ratingStyle} onPress={() => changeHeight()}>{habit.rating}</Text>
            {showLikeButton()}
            {getNotificationsIcon()}
            <Ionicons name="share-social-outline" size={25} style={styles.icon} onPress={() => openShareScreen()} />
        </View >
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        marginTop: 30,
        width: "100%",
        backgroundColor: "green",
        flex: 1,
        flexDirection: "row",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        width: width,
    },
    textStyle: {
        fontSize: 24,
        alignContent: "center"
    },
    ratingStyle: {
        fontSize: 24,
        alignContent: "center",
        color: "#00ff00"
    },
    icon: {
        color: 'white',
    },
});

export default Habit;