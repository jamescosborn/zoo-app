# PDX Zoo Animal Tracker

by James Osborn

## Description

Kelly Turner, master walrus trainer, approached me about building a new animal tracking app for the zoo. I'm glad to help out. Anything for the walruses. Or is it walrie?

The app will display a list of all zoo animal's names. Clicking on an animal's name will bring up detailed info and a form to edit several of the properties. Additionally, there is a form to add new animals to the zoo, and a filter to find the youngest animals under 2 years old.

## Installation / Setup Instructions

1. `Git Clone from https://github.com/jamescosborn/zoo-app`  
2. `Navigate to the project directory in the command prompt`  
3. `Open with your favorite text editor`  
OR  
4. `Use the following commands to launch the site in a browser (Chrome)`  

```
TO START:

$ npm install  
$ bower init  
$ bower install  
$ gulp build  
$ gulp serve
```

## Technologies Used

* Git     
* Atom   
* NPM  
* Bower   
* Chrome  

## Known Bugs

* edit-animal.component.ts isn't currently hooked up to display the current animal's information in the root component. Instead, edit-animal appears in the animal-list.component, and is generated dynamically with each animal's description.

## Contact Information

Please contact the developer if you have any questions or suggestions for improvements. jamescarlosborn@gmail.com

## Specs

##### Description:  App will display a list of animals logged in the system.
Input:  `View website`  
Output:  `Display animal list`

##### Description: Clicking an animal name from the list will display an animal's 9 unique details, including name, species, age, diet, zoo location, number of needed caretakers, sex, likes, and dislikes.
Input:  `Click Marty the Walrus`  
Output:  
```
Name: "Marty"  
Species: "Renegade Walrus"  
Age: 12  
Diet: "Fish, Sweet Tarts, Cinnabons"  
Zoo Location: "Roaming the Zoo"  
Number of Caretakers: 3
Sex: "Male"  
Likes: "Barking"
Dislikes: "Flash photography"
```

##### Description:  User is able to edit animal name, age, or number of caretakers
Input:  `Edit Marty's Age`  
Output: `Age: 12>13`  

##### Description:  User is able to filter animal list for only young animals (less than 2 years old)
Input:  `Filter: Young animals < 2 years old`  
Output:  `Henrietta, Shadowfax`

##### Description:  User is able to filter animal list for only older animals (greater than 2 years old)
Input:  `Filter: Mature animals > 2 years old`  
Output:  `Marty, other mature animals...`

##### Description:  User is able to add a new animal to the animal list via a form
Input:  `Add: Henrietta the Seal`  
Output:  `Henrietta appears in list`

## Phase 2 -- Operation Manticore

So, I've been working here long enough to see that this zoo is quickly going out of business. We only have 3 animals, we're located under a bridge in a sketchy part of town, and maybe a dozen people visit us every day.

Here is my proposal to bring in more paying visitors, and at a much higher, premium price point.

Let's tweak the traditional petting zoo format to become a "Death Metal Zoo."

Visitors will no longer be paying to safely watch and pet animals in enclosures, instead they will pay 4x as much to be hunted by those very same animals.

Picture it: you enter the zoo, and no staff are in sight. Then you see it--Marty is there, watching you, in the middle of the thoroughfare. Unleashed, he starts trotting your way and barking at you. The visitors will be thrilled, nay, ecstatic! It's like riding a roller coaster, but better!

Let me know if this all sounds acceptable. In anticipation of your undoubted approval of this amazing plan, I've taken the liberty of letting Marty out of his pen this morning, free to roam throughout the park. I also shared with him 4 rolls of Sweet Tarts, 2 boxes of Cinnabons, and a Rockstar energy drink to amp him up for hunting humans. So watch out!  

Maybe I can hook up the Twitter API to this website so we can tweet whenever Marty gets a KO, then make a list of those tweets. Lots of potential here!

Cheers,  
James

# License
This app uses the MIT license.
