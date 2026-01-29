[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=22433729&assignment_repo_type=AssignmentRepo)
## Storing, Retrieving and Deleting Data ##

  Everything in technology stores data somewhere. Whether it's on a device, an external device or the cloud. LocalStorage and SessionStorage are ways to save data to your browser. Many websites and ad tracker use this and cookies to monitor your activities.

This is the first step to understanding C.R.U.D (Create, Retrieve, Update and Delete). Common understanding regardless of database.

    
		localStorage.setItem( <key>, <data> )
		localStorage.getItem( <key> )
		localStorage.removeItem( <key> )

## Instructions

- Use the Browser (Safari/Chrome) Insector > Application tab to check if the data is being stored

1. In the script.js file, create a name to store into the key variable on line 1.
   (this name will be the key to use throughout the project)

	b. Enter Save Data.

- When the user clicks the save button

  a. it will get the value from the first input
  
  b. store the value to a variable.
  
  c. then save the variable to localStorage using the key in step 1 and the variable in step 1.ii
  
  d. clear the input to blank

3. Display Stored Data

- When the user clicks the load button

   a. using localStorage and the key defined on line 1.
   b. get the item from localStorage
   c. store it to a variable
   d. display the variable on step 2 to the input box on step 3.
   e. test to see if it displays the data stored.

4. Verify If Data Saved

- Requires closing and open the site

   a. close this page or preview page containing this website 
	 b. open a new tab and return to the site again.
	 c. *do not enter a new value for step 1*
	 d. click the load button
	 e. it should display the same data stored in localStorage.


5. Enter *Key* Name To Delete Data.

- When the use clicks the delete button

   1. it will get the value from the input: Enter Key Name To Delete input
   1. store the value in 4.ii into a variable
   1. using the variable in step 4.iii call localStorage remove item
	 1. click the load button in step 2 to see if the value has been deleted


# CHALLENGE

 - in step 5 test if localStorage getItem is null
   - if null then display a message < whatever is the key name > has been deleted.