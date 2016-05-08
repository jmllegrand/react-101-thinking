

#### Identify the minimal (but complete) representation of UI state

Types of data:

- 1) The original list of products
- 2) The search text the user has entered
- 3) The value of the checkbox
- 4) The filtered list of products


Identification of the data type

Is it passed in from a parent via props? If so, it probably isn't state.
    *applicable for 1)
    
Does it change over time? If not, it probably isn't state.
    *applicable for 2), 3) & 4)

Can you compute it based on any other state or props in your component? If so, it's not state.
    *applicable for 4)


State representation

- 2) The search text the user has entered
- 3) The value of the checkbox


#### Identify which component mutates, or owns, this state
2) & 3) belongs to SearchBar

- Identify every component that renders something based on that state.

*ProductTable* will update the list based on the the state (searchValue)
*SearchBar* will display the text and hold the value of the checked state 

- a common owner component 
*FilterableProductTable*

Problem

```
Cannot read property 'state' of undefined
```

Solution

http://stackoverflow.com/questions/29577977/unable-to-access-react-instance-this-inside-event-handler