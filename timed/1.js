const potions = {
    volume: 100,
    ingredients: { ingredient1: 20, ingredient2: 20, ingredientA: 30 }
};

const mixPotions = (potionsArray) => {
    let result = potionsArray.reduce((acc, potion) => {
        if (acc.volume) {
            acc.volume ? acc.volume += potion.volume : acc.volume = potion.volume;
            for (let ingredient in acc.ingredients) {
                const potionIngredient = potion.ingredients[ingredient] ? potion.ingredients[ingredient] : 0;

                acc[ingredient] = ((acc[ingredient] * acc.volume) + (potionIngredient * potion.volume)) / (acc.volume + potion.volume);
            }
        } else {
            acc.volume = potion.volume;
            acc.ingredients = potion.ingredients;
        }
        return acc;
    }, {});
    return result;
};

// conc = (conc1 * pot1Vol + conc2 * pot2Vol) / (pot1Vol + pot2Vol)

console.log(mixPotions([
    {
        volume: 100,
        ingredients: { ingredient1: 50, ingredient2: 20, ingredientA: 500 }
    },
    {
        volume: 300,
        ingredients: { ingredient1: 150, ingredientA: 300, ingredientB: 950 }
    },
]))


let result = {
    volume: 400,
    ingredients: {
        ingredient1: 125, ingredient2: 5, ingredientA: 350,
        ingredientB: 712.5
    }
};



