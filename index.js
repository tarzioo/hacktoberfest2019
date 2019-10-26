const Flavors = [
    'Pumpkin Spice',
    'Essence of Durian',
    'Teriyaki',
    'Beef Broth',
    'Rice',
    'Wet Cardboard',
    'Paper Towel',
    'Hot Dog',
    'Ketchup',
    'Regret',
    'Expensive Water',
    'Cedar',
    'Fresh-Cut Grass',
    'Ghee',
    'Kettle Corn',
    'Bubble Gum',
    'Fruit Snacks',
    'Oolong',
    'Looking Cool',
    'Disappoint\ -ment',
    'Raindrops',
    'You\'re a Hipster',
    'Literally Nothing',
    'We Tricked You and Your Wallet',
    'Vanilla Macaron',
    'Banana',
    'Honeycomb',
    'Candle Wax',
    'Cereal Milk',
    'Raisin',
    'Funfetti',
    'Zucchini',
    'Seaweed',
    'Essence of Smoked Salmon',
    'Rotisserie Chicken',
    'Ham Sandwich',
    'Granny Smith Apple',
    'Parsnip',
    'Twizzler-Dipped',
    'Fairy Dust',
    'Summer Breeze',
    'Half a Drop of Coffee',
    'Sourdough',
    'Stale White Bread',
    'Essence of Cold Brew',
    'Sprinkle of Cinnamon',
    'Potpourri',
    'Avocado Toast',
    'Butter\ -scotch',
    'Whiskey',
    'Smoked Gouda',
    'Hint of La Croix',
    'Apple Pie',
    'Marzipan',
    'Martini',
    'Walnut Shell',
    'Just Bubbles',
    'Onion Rings',
    'Watermelon',
    'Green Beans',
    'Marsh\ -mallow Fluff',
    'Nutella',
    'Peanut Butter',
    'Grape Jelly',
    'Pink Lemonade',
    'Blue Raspberry',
    'Glacier Frost',
    'Fresh Snow',
    'Fruit Punch',
    'Meringue',
    'Nacho Cheese',
    'Mint Chocolate Chip',
    'Blueberry',
    'Papaya',
    'Orange Creamsicle',
    'Tears of Your Tastebuds',
    'Broccoli',
    'Fresh Soil',
    'Cheez-it',
    'Fig',
    'Baking Soda',
    'Trendy Water',
    'Millennial Tears',
    'Faint Pastel Rainbow',
    'Pizza',
];


getRandomFlavor = () => {
    let output = document.querySelector('.flavor-div');
    let randomNum = Math.floor(Math.random() * Flavors.length);
    let randomFlavor = Flavors[randomNum].toUpperCase();
    output.innerHTML = randomFlavor;
    getRandomColor();
};

getRandomColor = () => {
    let elements = document.querySelectorAll('.can-color');
    let randomNum = Math.floor(Math.random() * Colors.length);
    let randomColor = Colors[randomNum].toUpperCase();
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = randomColor;
    }
};


function startKeyFrames() {
    var bubble1 = document.getElementById("bubble-1");
    bubble1.classList.add("bubble-1-animated");
    var bubble2 = document.getElementById("bubble-2");
    bubble2.classList.add("bubble-2-animated");
    var bubble3 = document.getElementById("bubble-3");
    bubble3.classList.add("bubble-3-animated");
    setTimeout(function() {
    bubble1.classList.remove("bubble-1-animated");
    bubble2.classList.remove("bubble-2-animated");
    bubble3.classList.remove("bubble-3-animated");
  }, 3000);
}

// clearKeyFrames = () => {
//     bubble1.classList.remove("bubble-1-animated");
//     bubble2.classList.remove("bubble-2-animated");
//     bubble3.classList.remove("bubble-3-animated");
// }


const Colors = [
    'blue',
    'red',
    'orange',
    'yellow',
    'pink',
    'green',
    'purple',
];