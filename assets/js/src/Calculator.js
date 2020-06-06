function calculateCalories() {
    var user = {
        "weight": 43.84,
        "height": 160.00,
        "age": 19,
        "gender": 0
    }

    var calories = 0;
    if (user["gender"] == 0) {
        calories = 655.1 + (1.8 * user["height"]) + (9.5 * user["weight"]) - (4.7 * user["age"]);
    }

    if (user["gender"] == 1) {
        calories = 66.5 + (5 * user["height"]) + (13.8 * user["weight"]) - (6.8 * user["age"]);
    }

    return calories;
}

function calculateWeight() {
    var user = {
        "height": 160.00,
        "gender": 0,
    }

    var weight = 0;

    if (user["gender"] == 0) {
        weight = (62.1 * (user["height"] / 100)) - 44.7;
    }

    if (user["gender"] == 1) {
        weight = (72.7 * (user["height"] / 100)) - 58;
    }

    return parseFloat(weight).toFixed(2);
}
