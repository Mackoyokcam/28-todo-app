![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) Code-401-Javascript Lab-28
===
This is day 28 of lab with Code Fellows. The purpose of the lab is to teach students the basics of react as well as modularize each component correctly.
# Notes App

Allows users to create and delete notes. Needs a title for the note and the content in order to create a note.

### main.js

Entry point for the app.

### Components

#### Structure:
```
App
  Landing
  Dashboard
    NoteForm
    NoteList
      Noteitem
```
  * ##### App
    * Manages the frontend routes and has a navbar
    * the `/` route displays the Landing component
    * the `/dashboard` route displays the Dashboard component
    * Links to these routes provided in navbar
  * ##### Landing
    * Displays a brief description of the notes app
  * ##### Dashboard
    * Manages the entire application state.
    * The state contains a notes array
    * It has a bounded addNote(note) method that adds a note to state.notes
      * Each note thats added has the following data:
        * `id`: Contains the result of `uuid.v1()`
        * `editing`: false by default
        * `completed`: false by default
        * `content`: user provided content
        * `title`: user provided title
    * It has a bounded removeNote(note) method that removes a note from state.notes based on it's id
  * ##### NoteForm
    * `onComplete` the NoteForm can either add a note to the application state or update an existing note.
  * ##### NoteList
    * Displays an unordered list of NoteItem components
  * ##### NoteItem
    * Displays the notes content and title
    * Displays a delete button
    * `onClick` the note is removed from the application state
    * ###### Default view
      * Displays the note's title, content and a delete button
    * ###### Edit View
      * Show the NoteForm and a Cancel Button in a Modal component
      * onComplete the NoteForm updates the note's title and/or content
  * ##### Modal
    * Uses this.props.children to define the content of the modal
    * Used when updating a NoteItem
    
