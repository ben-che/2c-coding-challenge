### Instructions for running the project

I bootstrapped the project with TypeScript CRA, so setup should be relatively straightforward!

1. `cd` into the project root
2. `npm i` to install dependencies
3. `npm start` to run the project; it will be available on `localhost:3000`

If the above instructions don't work, let me know and I can transfer the code into a CodeSandbox!

### Notes:
Some additional things not present in the design that I added:

- I added a fake loading state that would be shown while results "loaded" in

- I added an empty state to the table for when there's no data or the search result is empty

- There doesn't seem to be a "status" field on the mock data, so I ended up rendering inventory status based on how much quantity was left as a placeholder. There also wasn't additional product details, so most of the information on the modal is hardcoded with the exception of the title.

- The validation required for the text field is unclear in the requirements - I ended up only allowing alphanumeric characters and adding an error message as soon as the user types in a special character

- The search function will not fire if there is currently an error present. Because there's a search button present, I'm assuming the search will not run as an onChange event within the input, and will be triggered via the Enter button or the Search button

- Added some hover states for each table row so users can see which product they're clicking on + some visual feedback on interaction



### Designs
Designs from Figma:

![Desktop-Table](./documentation/Desktop%20-%20Table.png)
![Desktop-Modal](./documentation/Desktop%20-%20Modal.png)
![Mobile - Modal](./documentation/Mobile%20-%20Modal.png)
![Mobile - Table](./documentation/Mobile%20-%20Table.png)