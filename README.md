# autocomplete-react-component
an autocomplete select box component

## description

The project is created with [vite](https://vitejs.dev/) (React + Typescript). To run the project locally in develop mode, first run `npm install` to install the dependencies then run `npm run dev` command.
prettier is used to format the code.

This is an autocomplete select box react component, which is implemented with functional components and hooks, without using any additional ui libraries.

A dummy users api is used to get fake data for the options list wich the url is : <https://jsonplaceholder.typicode.com/users> .

You can enter your search input to see the filtered results and select an option. note: each time you close the options list the search query gets cleared and you have to search again next time.

## To Do

some tasks haven't been done yet due to lack of time and they're going to be implemented soon

- write tests
- implement outside click (to close the options list when user clicks outside of it)
