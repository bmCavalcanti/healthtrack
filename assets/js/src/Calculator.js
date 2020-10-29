function calculateCalories() {
    var user = {
        "weight": 43.84,
        "height": 1.60,
        "age": 19,
        "gender": 1
    }

    var calories = 0;
    if (user["gender"] == 1) { // FEMININO
        calories = 655.1 + (1.8 * (user["height"] * 100)) + (9.5 * user["weight"]) - (4.7 * user["age"]);
    }

    if (user["gender"] == 2) { // MASCULINO
        calories = 66.5 + (5 * (user["height"] * 100)) + (13.8 * user["weight"]) - (6.8 * user["age"]);
    }

    return calories;
}

function calculateWeight() {
    var user = {
        "height": 1.60,
        "gender": 1,
    }

    var weight = 0;

    if (user["gender"] == 1) { // FEMININO
        weight = (62.1 * user["height"]) - 44.7;
    }

    if (user["gender"] == 2) { // MASCULINO
        weight = (72.7 * user["height"]) - 58;
    }

    return parseFloat(weight).toFixed(2);
}
