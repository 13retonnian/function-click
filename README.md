# JS Activity: Eat and Drink click handlers
In this activity, you will complete the following app so that clicking each button will deduct the proper amount from the Account Balance.

See this [simple click handler](https://codepen.io/acidtone/pen/yLoypzr) for example code.

## Instructions
1. Download or fork/clone this Gist into your workspace. Alternatively, you can fork [this Codepen](https://codepen.io/acidtone/pen/GRvgPQO).
2. Using `document.querySelector` create `Element` variables for each `button` displayed on the page.
3. Define a separate function for each of the actions listed in `eat-drink.js`, moving the relevant code into each respective function:
    - Drink beer -> `drinkBeer()`
    - Eat burger -> `eatBurger()`
    - Drink pop -> `drinkPop()`
4. Using `Element.addEventListener()`, add a `click` listener to each button so that the proper function is invoked when the button is clicked.
5. Finally, refactor the code so that each `console.log()` instead displays the proper balance to `outputBalance`.

## Attributions
- This code is inspired by [Introduction to functions](https://youtu.be/W6QaDqud66Y) by Steve Griffith