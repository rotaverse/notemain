import React, { useEffect, useState } from "react";
//import Header from "./components/Header";
import Footer from "../components/Footer";
import Note from "../components/Note";
import CreateArea from "../components/CreateArea";
import { storybase_backend } from "../../../declarations/storybase_backend";

function Home() {
  const [newNote, setNewNote] = useState([]);

  const handleAdd = (title, body) => {
    storybase_backend.createNote(title, body);
    setNewNote([...newNote, { title: title, content: body }]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const notesArray = await storybase_backend.readNotes();
    setNewNote(notesArray);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    setNewNote((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <CreateArea handleAdd={handleAdd} />
      <Note data={newNote} handleDelete={handleDelete} />
      <Footer />
    </>
  );
}

export default Home;
