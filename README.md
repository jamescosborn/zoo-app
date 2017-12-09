# PDX Zoo Animal Tracker

by James Osborn

## Description

Kelly Turner, master walrus trainer, approached me about building a new animal tracking app for the zoo. I'm glad to help out. Anything for the walruses. Or is it walrie? Such noble beasts.

The app will display a list of all the zoo animal names. Clicking on an animal's name will bring up detailed info, and a form to edit some of that info (name, age, caretakers). There is a form to add new animals to the zoo. Last, a filter to find the youngest animals at 2 years and younger, older animals at over 2 years, or view all animals at once.

## Installation / Setup Instructions

1. `Git Clone` from https://github.com/jamescosborn/zoo-app  

2. Navigate to the project directory in the command prompt  

3. Open with your favorite text editor  *(to view code)*  

OR  

4. Use the following commands to launch the site in a browser *(Chrome)*     

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

## Known Bugs/Notes

* Note: edit-animal.component.ts isn't currently hooked up to display the current animal's information in the root component. Instead, edit-animal appears in the animal-list.component, and is generated dynamically with each animal's description.

## Future Updates

* Make edit-animal its own component
* Close button for when the user is finished viewing an animal's info
* Done button for when the user is done editting an animal's info
* Operation Manticore

## Contact Information

Please contact the developer if you have any questions or suggestions for improvements. jamescarlosborn@gmail.com

## Specs

#### Description:  App will display a list of animals logged in the system.
Input:  View website  
Output:  Display animal list

#### Description: Clicking an animal name from the list will display an animal's 9 unique details, including name, species, age, diet, zoo location, number of needed caretakers, sex, likes, and dislikes.
Input:  Click Marty the Walrus  
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

#### Description:  User is able to edit animal name, age, or number of caretakers
Input:  Users edits Marty's Age  
Output: Age: 12>13  

#### Description:  User is able to filter animal list for only young animals (less than 2 years old)
Input:  Filter: Young animals < 2 years old  
Output:  Henrietta, Shadowfax

#### Description:  User is able to filter animal list for only older animals (greater than 2 years old)
Input:  Filter: Mature animals > 2 years old 
Output:  Marty, other mature animals...

#### Description:  User is able to add a new animal to the animal list via a form
Input:  Add: Henrietta the Seal  
Output:  Henrietta appears in list

## Phase 2 -- Operation Manticore

Sign Off for Kelly:

So, I've been working here long enough to see that this zoo is in trouble. We only have 3 animals, we're located under an overpass in a sketchy part of town, and maybe a dozen people visit us every day.

Here is my proposal to turn this place around. We switch up our theme in a way to bring in more paying visitors, and then we charge $80 a ticket instead of $20.

We need to play to our strengths. We're a spooky petting zoo under a highway overpass. Let's tweak this whole petting zoo thing and become a "Death Metal Petting Zoo."

Here me out, Kelsters. The Kel-meister.  

Visitors will no longer be paying to safely watch and pet animals in enclosures. Instead, they will pay 4x more to be hunted by those very same animals. That's right, the animals hunt the humans, and the humans pay for it.

Picture it: you enter the zoo, and no staff are in sight. Then you see him. Marty is there, watching you, in the middle of the thoroughfare. He starts barreling towards you, barking and fierce. The visitors will be mesmerized, thrilled, ecstatic! It'll be like riding a roller coaster, but better!

Let me know if this all sounds acceptable. I pretty much know you will say yes to this amazing plan, so I took the liberty of letting Marty out from his enclosure this morning. He seems pretty stoked to be free to roam throughout the park. I also shared with him 4 rolls of Sweet Tarts, 2 boxes of Cinnabons, and a couple Rockstar energy drinks, so he is really amped. Just a heads up!  

Maybe for Phase 3, I can hook up the Twitter API to this website so we can tweet whenever Marty gets a KO, then make a list of those tweets on the website. Lots of potential here, I know, and I've got plenty more ideas like this! 

You all promoted the right guy!

Cheers,  
James

# License
This app uses the MIT license.
