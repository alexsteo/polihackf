import Habit from "../../entities/Habit";

export const fetchHabitsForUsers = async (user) => {

    let habitsForUser = [];

    const habitsResponse = await fetch(
        `https://pulihack-default-rtdb.europe-west1.firebasedatabase.app/habits.json`
    );

    if (!habitsResponse.ok) {
        console.log(habitsResponse)
    }
    let habits = [];
    let habitsResponseJson = await habitsResponse.json();
    for (const [key, habit] of Object.entries(habitsResponseJson)) {
        habits.push({ ...habit, key })
    }

    const response = await fetch(
        `https://pulihack-default-rtdb.europe-west1.firebasedatabase.app/habit_user.json`
    );

    if (!response.ok) {
        console.log(response)
    }

    const resData = await response.json();
    Object.values(resData).filter(hu => hu.user === user.key).forEach(hu => {
        let habit = habits.filter(habit => habit.key === hu.habit)[0];
        habitsForUser.push(new Habit(habit.key, habit.title, habit.description, hu.user, hu.rating));
    })

    return habitsForUser;
};
