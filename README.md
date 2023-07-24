### Instructions for running the project

I bootstrapped the project with TypeScript CRA, so setup should be relatively straightforward!

1. `cd` into the project root
2. `npm i` to install dependencies
3. `npm start` to run the project; it will be available on `localhost:3000`

If the above instructions don't work, let me know and I can transfer the code into a CodeSandbox!

### Assumptions:
I reached out earlier in the week in a reply to the email I received giving me the challenge with some questions, but I haven't heard back yet and I didn't want to submit late, so I made a few assumptions on my end that I will list below:

- The assignment says to use a RESTful endpoint to fetch the data, but I wasn't given any actual endpoints, I ended up mocking the request and importing the JSON in a file

- The mock data provided doesn't have a "status" field - so I ended up changing some of the inventory quantity numbers on the mock data to allow for two states (in stock and out of stock)

- I didn't see any Tablet styles on the Figma file and the jump from 390px to 1440px is pretty big, so I tried my best to make up some styles in between that would still make the UI look good



### Additional Notes:
There were certain states and error handling scenarios that weren't present in the Figma designs that would still be fairly crucial to an actual production app, so I made them up on my end:

- I added a fake loading state that aims to mimic the actual fetch request in production

- I added an empty state to the table for when there's no data or the search result is empty

- The validation required for the text field is unclear in the requirements - I ended up only allowing alphanumeric characters and adding an error message as soon as the user types in a special character

- The search function will not fire if there is currently an error present.
