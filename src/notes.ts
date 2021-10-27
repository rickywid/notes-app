import { INote } from "./App";


const notesMock: INote[] = [
    {
        id: "1",
        title: "Notes App",
        description: "Create and store your notes for later purpose!",
        body: `
# Notes App

**Tier:** 1-Beginner

Create and store your notes for later purpose!

## User Stories

-   [ ] User can create a note
-   [ ] User can edit a note
-   [ ] User can delete a note
-   [ ] When closing the browser window the notes will be stored and when the User returns, the data will be retrieved

## Bonus features

-   [ ] User can create and edit a note in Markdown format. On save it will convert Markdown to HTML
-   [ ] User can see the date when he created the note

## Useful links and resources

-   [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
-   [Markdown Guide](https://www.markdownguide.org/basic-syntax/)
-   [Marked - A markdown parser](https://github.com/markedjs/marked)

## Example projects

-   [Markdown Notes built with Angular on Codepen](https://codepen.io/nickmoreton/full/gbyygq)
-   [Markdown Notes built with React](https://github.com/email2vimalraj/notes-app)
-   [Markdown Notes built with Angular 7 and bootstrap 4](https://github.com/omdnaik/angular-ui)

        `,
        priority: "low",
        createdAt: new Date().getTime().toString()
    }, 
    {
        id: "2",
        title: "Countdown Timer",
        description: "Provide a continuously decrementing display of the he months, days, hours, minutes, and seconds to a user entered",
        body: `
# Countdown Timer

**Tier:** 1-Beginner

We all have important events we look forward to in life, birthdays,
anniversaries, and holidays to name a few. Wouldn't it be nice to have an app
that counts down the months, days, hours, minutes, and seconds to an event?
Countdown Timer is just that app!

The objective of Countdown Timer is to provide a continuously decrementing
display of the he months, days, hours, minutes, and seconds to a user entered
event.

### Constraints

- Use only builtin language functions for your calculations rather than relying
on a library or package like [MomentJS](https://momentjs.com/). This assumes,
of course, that the language of your choice has adequate date and time
manipulation functions built in.
- You may not use any code generators such as the 
[Counting Down To](https://countingdownto.com/) site. You should develop your
own original implementation. 

## User Stories

-   [ ] User can see an event input box containing an event name field, an
date field, an optional time, and a 'Start' button.
-   [ ] User can define the event by entering its name, the date it is
scheduled to take place, and an optional time of the event. If the time is 
omitted it is assumed to be at Midnight on the event date in the local time
zone.
-   [ ] User can see a warning message if the event name is blank.
-   [ ] User can see a warning message if the event date or time are incorrectly
entered. 
-   [ ] User can see a warning message if the time until the event data and time
that has been entered would overflow the precision of the countdown timer.
-   [ ] User can click on the 'Start' button to see the countdown timer start
displaying the days, hours, minutes, and seconds until the event takes place.
-   [ ] User can see the elements in the countdown timer automatically
decrement. For example, when the remaining seconds count reaches 0 the remaining
minutes count will decrement by 1 and the seconds will start to countdown from 59. This progression must take place from seconds all the way up to the remaining days position in countdown display. 

## Bonus features

-   [ ] User can save the event so that it persists across sessions
-   [ ] User can see an alert when the event is reached
-   [ ] User can specify more than one event. 
-   [ ] User can see a countdown timers for each event that has been defined.

## Example projects

[Simple Clock/Countdown Timer](https://codepen.io/karlo-stekovic/pen/OajKVK)
[Countdown Timer built with React](https://www.florin-pop.com/blog/2019/05/countdown-built-with-react/)
        `,
        priority: "low",
        createdAt: new Date().getTime().toString()
    },  
    {
        id: "3",
        title: "Pomodoro Clock",
        description: "The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks - 5 minutes.",
        body: `
# Pomodoro Clock

**Tier:** 1-Beginner

The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks - 5 minutes.

## User Stories

-   [ ] User can see a timer for 25 minutes - the **working** session
-   [ ] After the **working** session is over, the User can see a timer for 5 minutes - the **break** session
-   [ ] User can _start_ / _pause_, _stop_ and _reset_ the timers

## Bonus features

-   [ ] User can hear a sound playing when the timer hits 00:00 - denoting that the session has ended
-   [ ] User can change / customize the minutes in both sessions before starting
-   [ ] User can set a **long break** session of 10 minutes. This will be activated every 4th **break** session

## Useful links and resources

-   More about the [Pomodoro Technique](https://en.m.wikipedia.org/wiki/Pomodoro_Technique)

## Example projects

-   [Joe Weaver's example](https://codepen.io/JoeWeaver/pen/bLbbxK)
-   [FreeCodeCamp Pomodoro Clock example](https://codepen.io/freeCodeCamp/full/XpKrrW)
-   [A desktop pomodoro app for menubar/tray.](https://github.com/amitmerchant1990/pomolectron)
-   [Sheri Richardson's example](https://srd-pomodoro-timer.netlify.com/)
        
        `,
        priority: "low",
        createdAt: new Date().getTime().toString()
    },  
    {
        id: "4",
        title: "Currency Converter",
        description: "A currency converter is used to convert an amount in one currency to its corresponding value in another currency using their current exchange rate.",
        body: `
# Currency Converter

**Tier:** 2-Intermediate

A currency converter is used to convert an amount in one currency to its corresponding value in another currency using their current exchange rate, for example it can be used to calculate the value of 100 US Dollars in Euros. Current exchange rates are usually provided by banks and other financial service providers, they also (in some cases) offer free and paid APIs for developers to get current and historical exchange rates between two or more currencies.

## User Stories

-   [ ] User can enter up to 9 digits to represent the amount to convert in a source input field
-   [ ] User can view a sorted list of available currencies and select the currency to convert from in a source drop-down list
-   [ ] User can view a sorted list of available currencies and select the currency to convert to in a destination drop-down list
-   [ ] User views the value (rounded to two decimal places) of the source amount converted to the destination currency in a single output field as soon as either the input value, the source currency, or the destination currency is changed.
-   [ ] User must be alerted if the input is not a number

## Bonus features

-   [ ] User should be able to swap the values of the source and destination drop-down lists on the click of a button

## Useful links and resources

- [Free currency converter API](https://free.currencyconverterapi.com/)
- [XE currency converter](https://www.xe.com/)
- [How to use fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to fetch data

## Example projects
- [Currency Converter](https://acodedoer.github.io/currency-converter/)
- [Currency converter code](https://github.com/acodedoer/currency-converter)
        
        `,
        priority: "low",
        createdAt: new Date().getTime().toString()
    },  
    {
        id: "5",
        title: "Simple Online Store",
        description: "Give your users the capability of selecting a product to purchase, viewing purchase information, adding it to an online shopping cart, and finally, actually purchasing the products in the shopping cart.",
        body: `
# Simple Online Store

**Tier:** 2-Intermediate

In the [Product Landing Page](../1-Beginner/Product-Landing-Page.md) project you implemented
a landing page to provide your users with information about a product and to
hopefully increase your sites conversion rate.

The goal of the Simple Online Store is to give your users the capability of 
selecting a product to purchase, viewing purchase information, adding it to
an online shopping cart, and finally, actually purchasing the products in the
shopping cart.

### Constraints

- Starting out you may implement your product inventory as an array of 
Javascript objects if you are developing in Javascript. For other languages
feel free to choose the in memory solution of your choice.

## User Stories

-   [ ] User can click on a View Products button on the Landing Page to 
display the Products Page.
-   [ ] User can see a card on the Products Page for each
Product showing the product thumbnail, name, price, a short description,
and a Select button.
-   [ ] User can see a Product Details page displayed when the Select button
is clicked showing the same information from the product card, but also a 
unique product id, a long description, Add to Cart button, and a 
See More Products button.
-   [ ] User can see a confirmation message when the product is added to the
shopping cart.
-   [ ] User can click on the See More Products page to return to the 
Products Page. 
-   [ ] User can see a Shopping Cart button on both the Landing
Page or the Products Page. Hint:  a top bar might be a good common location
for this button.
-   [ ] User can click on the Shopping Cart button to display the Shopping
Cart page containing the product id, name, price, and quantity
ordered input box for each product previously added to the Shopping Cart.
-   [ ] User can see a total purchase amount on the Shopping Card that is
calculated as the sum of the quantities multiplied by the unit price for each
product ordered.
-   [ ] User can adjust the quantity ordered for any product to adjust the
total purchase amount. 
-   [ ] User can click a Place Order button on the Shopping Cart Page to 
complete the order. User will see a confirmation number when the order has been
placed.
-   [ ] User can click a Cancel Order button on the Shopping Cart Page to 
cancel the order. User will see the product quantities and the total purchase
amount reset to zero.
-   [ ] User can click a See More Products button on the Shopping Cart Page
to return to the Products Page. If the order hasn't been placed yet this will
not clear the products that have already been added to the Products Page.

## Bonus features

-   [ ] User can see an error message if the quantity ordered exceeds the 
"on hand" quantity of the product.
-   [ ] User can specify a bill to and ship to address when the order is
placed from the Shopping Cart Page
-   [ ] User can see shipping charges added to the total purchase amount
-   [ ] User can see sales taxes added to the total purchase amount
-   [ ] Developer will implement the product inventory in an external file or
a database.

## Useful links and resources

There are plenty of eCommerce Site Pages out there. You can use [Dribbble](https://www.dribbble.com) and [Behance](https://www.behance.net) for inspiration.

## Example projects

-   [eCommerce Animations](https://codepen.io/RSH87/pen/RagqEv)
        
        
        `,
        priority: "medium",
        createdAt: new Date().getTime().toString()
    },  
    {
        id: "6",
        title: "Sales Reciepts",
        description: "implement point-of-sale functionality for a merchant and to make a record of all sales in a database.",
        body: `
# Sales Reciepts

**Tier:** 2-Intermediate

In the [First DB App](../1-Beginner/First-DB-App.md) you were able to learn the basics of
how to use the IndexedDB database that's built into the browser. In Sales
Reciepts you'll take this a step further by creating an app that records
point of sales receipts, presumably for subsequent balancing against cash in
the stores cash register.

The objective of Sales Receipts is to implement point-of-sale functionality for
a merchant and to make a record of all sales in a database.

### Requirements & Constraints

- Developer should implement this app as a frontend application that uses the
IndexedDB database in the browser to record all sales receipts.

- Developer may implement the inventory of items available for sale as an
array of objects in the application source. Each item should be defined with
the following attributes:
    - Item number (unique)
    - Description
    - Unit price

- Developer should use her UI/UX skills to create a pleasant and efficient
window layout that makes it easy for the user to purchase items and display 
purchase history.

- The primary use case for a browser based database is to maintain state or 
status information that needs to persist across sessions, or as a work area for 
temporary data. For example, data retrieved from a server that must be 
reformatted or cleansed before it's presented to the user.

- It is important to keep in mind that since the client-side browser environment
cannot be secured you should not maintain any confidential or personal
identifying information (PII) in a browser based database.

## User Stories

-   [ ] User can see an purchase panel containing buttons for each item containing
the item number, description, and unit price, as well as a 'Clear' and a
'Checkout' button.
-   [ ] User can click an item button to make a purchase.
-   [ ] User can see an field displaying the total sale amount incremented as
items are purchased.
-   [ ] User can see a reciept panel displaying the date and time of the sale,
as well as all items selected for purchase. This includes the item number,
description, and unit price.
-   [ ] User can click the 'Clear' button to clear all purchases at any time
before checking out.
-   [ ] User can click the 'Checkout' button to complete purchase all selected
items. The final total purchase amount will be added to the end of the reciept
panel and all selected items will be added to the database.
-   [ ] User can see the receipt panel cleared after all items have been added
to the database.
-   [ ] User can see a 'Daily Sales' and a 'Clear All' button at the bottom of
the app window. 
-   [ ] User can click the 'Daily Sales' button to display all items purchased
by all customers in the receipt panel along with the total of them all.
-   [ ] User can click the 'Clear All' button to clear the receipt panel and
delete the record of all purchases from the database.

## Bonus features

-   [ ] User can see an thumbnail image of the items on the item buttons.
-   [ ] User can see the 'Clear' button replaced by 'Clear Entry' and 'Cancel
All' buttons under the purchase panel
-   [ ] User can click the 'Clear Entry' button to clear the last selected item
from the receipt panel. This has the effect of unselecting that item.
-   [ ] User can click the 'Cancel All' button to clear all purchases made
before checking out.
-   [ ] User can see an input field in the input panel the user may enter the
name of the customer into when a purchase is made. The customer name will be
added to all items purchased by that customer in the receipt panel and in the
rows added to the database.

## Useful links and resources

- [IndexedDB Concepts (MDN)](http://tinyw.in/7TIr)
- [Using IndexedDB (MDN)](http://tinyw.in/w6k0)
- [IndexedDB API (MDN)](http://tinyw.in/GqnF)
- [IndexedDB Browser Support](https://caniuse.com/#feat=indexeddb)

## Example projects

- N/a
        `,
        priority: "medium",
        createdAt: new Date().getTime().toString()
    },  
    {
        id: "7",
        title: "This or That Game",
        description: "A game in which the user can select their favorite image between two choices.",
        body: `
# This or That Game

**Tier:** 2-Intermediate

A game in which the user can select their favorite image between two choices.

**Note**: images - might be dogs (as in the example below), cats, cars, houses, pretty much anything.

## User Stories

- [ ] User can see two images
- [ ] User can select it's favorite from the two images
- [ ] After a selection is made, other 2 images are displayed

## Bonus features

- [ ] Add a smooth animation when switching between images
- [ ] Save the votes in a database
- [ ] Add a leaderboard in which the user can see the top 10 voted images

## Useful links and resources

- [Public APIs](https://github.com/public-apis/public-apis) - access to a lot of Public APIs

## Example projects

- [This or That (w/ dogs) by Florin Pop on Codepen](https://codepen.io/FlorinPop17/full/rNBRYKZ)
        `
        ,
        priority: "medium",
        createdAt: new Date().getTime().toString()
    },  
    {
        id: "8",
        title: "Battleship Game Engine",
        description: "Battleship Game Engine (BGE) implements the classic turn-based board game as a package that's separated from any presentation layer",
        body: `
# Battleship Game Engine

**Tier:** 3-Advanced

Battleship Game Engine (BGE) implements the classic turn-based board game as a
package that's separated from any presentation layer. This is a type of
architectural pattern that useful in many application since it allows
any number of apps to utilize the same service.

The BGE itself is invoked through a series of function calls rather than
through directly coupled end user actions. In this respect using the BGE is
is similar to using an API or a series of routes exposed by a web server.

This challenge requires that you develop the BGE and a very thin, text-based
presentation layer for testing that's separate from the engine itself. Due to
this the User Stories below are divided two sets - one for the BGE and one
for the text-based presentation layer.

BGE is responsible for maintaining game state.

## User Stories

### BGE

-   [ ] Caller can invoke a startGame() function to begin a 1-player game. This function will generate an 8x8 game board consisting of 3 ships having a width of one square and a length of:

    -   Destroyer: 2 squares
    -   Cruiser: 3 squares
    -   Battleship: 4 squares

    startGame() will randomly place these ships on the board in any direction and will return an array representing ship placement.

-   [ ] Caller can invoke a shoot() function passing the target row and column coordinates of the targeted cell on the game board. shoot() will return indicators representing if the shot resulted in a hit or miss, the number of ships left (i.e. not yet sunk), the ship placement array, and an updated hits and misses array.

    Cells in the hits and misses array will contain a space if they have yet to be targeted, O if they were targeted but no part of a ship was at that location, or X if the cell was occupied by part of a ship.

### Text-based Presentation Layer

-   [ ] User can see the hits and misses array displayed as a 2 dimensional character representation of the game board returned by the startGame() function.
-   [ ] User can be prompted to enter the coordinates of a target square on the game board.
-   [ ] User can see an updated hits and misses array display after taking a shot.
-   [ ] User can see a message after each shot indicating whether the shot resulted in a hit or miss.
-   [ ] User can see an congratulations message after the shot that sinks the last remaining ship.
-   [ ] User can be prompted to play again at the end of each game. Declining to play again stops the game.

## Bonus features

### BGE

-   [ ] Caller can specify the number of rows and columns in the game board as a parameter to the startGame() function.
-   [ ] Caller can invoke a gameStats() function that returns a Javascript object containing metrics for the current game. For example, number of turns played, current number of hits and misses, etc.
-   [ ] Caller can specify the number of players (1 or 2) when calling startGame() which will generate one board for each player randomly populated with ships.

    shoot() will accept the player number the shot is being made for along with the coordinates of the shot. The data it returns will be for that player.

### Text-based Presentation Layer

-   [ ] User can see the current game statics at any point by entering the phrase stats in place of target coordinates. (Note that this requires the gameStats() function in the BGE)
-   [ ] User can specify a two player game is to be played, with each player alternating turns in the same terminal session (Note that this requires corresponding Bonus Features in the BGE)
-   [ ] User can see the player number in prompts associated with the inputs in each turn.
-   [ ] User can see both players boards at the end of each turn.

## Useful links and resources

-   [Battleship Game (Wikipedia)](<https://en.wikipedia.org/wiki/Battleship_(game)>)
-   [Battleship Game Rules (Hasbro)](https://www.hasbro.com/common/instruct/battleship.pdf)

## Example projects

This YouTube video shows how a text-based [Battleship Game](https://www.youtube.com/watch?v=TKksu3JXTTM) is played.

The following example is provided as a demonstration of the Battleship game if it is unfamiliar to you. Remember you are to implement a text based presentation layer for testing.

-   [Battleship Game by Chris Brody](https://codepen.io/CodifyAcademy/pen/ByBEOz)
        `,
        priority: "high",
        createdAt: new Date().getTime().toString()
    }
]

export default notesMock;