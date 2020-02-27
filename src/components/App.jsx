import React from 'react';
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes";

function App () {
    return <div>
        <Header />
        {Notes.map( myNote => (
            <Note 
                key = {myNote.id}
                myTitle = {myNote.title}
                myContent = {myNote.content}
            />
        ))}
        <Footer />
    </div>
}

export default App;