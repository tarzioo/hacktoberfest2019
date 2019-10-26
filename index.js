const SpookyFlavors = [
    'Cobwebs',
    'Boo Berry',
    'Dusty Books',
    'Graveyard Breeze',
    'Ghost Whispers',
    'Essence of Coffin',
    'Vampire Grins',
    'Witches Brew',
    'Bat Flutters',
    'Midnight Breeze',
    'Lightning',
    'Ominous Footsteps',
    'Devil\'s Food Cake',
    'Gingivitis',
    'Someone is Watching',
    'Creaky Staircase',
    'Door Slams',
    'Murdered by Coolness',
    'Funeral Home',
    'Spider Poison',
    'Poison Apple',
    'Count Chocula',
    'Chainsaws',
    'Fresh Freddy Claws',
    'Your Nightmares But Fizzy',
    'Werewolf Hair'

];

const SeasonalFlavors = [
    'Pumpkin Spice',
    'Angel Food Cake',
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

const Flavors = SeasonalFlavors.concat(SpookyFlavors);

const Colors = [
    'blue',
    'red',
    'darkorange',
    'yellow',
    'pink',
    'green',
    'purple',
    'teal',
    'lightgreen',
    'skyblue'
];

spookyTime = () => {
    console.log('i am spooooky!');
    //here is where we can add a spooky class to the window/document body to make ghost appear, set a timeout for 3? seconds, then remove the class and make ghost disappear
}


getRandomFlavor = () => {
    let output = document.querySelector('.flavor-div');
    let randomNum = Math.floor(Math.random() * Flavors.length);
    let randomFlavor = Flavors[randomNum];
    output.innerHTML = randomFlavor.toUpperCase();
    getRandomColor();
    if (SpookyFlavors.indexOf(randomFlavor) > -1) {
        spookyTime();
    }
};

getRandomColor = () => {
    let flavorDiv = document.querySelector('.flavor-div');
    flavorDiv.style.color = 'hotpink';
    let elements = document.querySelectorAll('.can-color');
    let randomNum = Math.floor(Math.random() * Colors.length);
    let randomColor = Colors[randomNum];
    if (randomColor == 'red' || randomColor == 'darkorange' || randomColor == 'purple') {
        flavorDiv.style.color = 'white';
    }
    if (randomColor == 'lightgreen' || randomColor == 'pink' || randomColor == 'skyblue') {
        flavorDiv.style.color = 'darkgreen';
    }
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
