import React, { useEffect, useState } from "react";
//import Header from "./components/Header";
import Footer from "../components/Footer";
import Note from "../components/Note";
import CreateArea from "../components/CreateArea";
import { notemain_backend } from "../../../declarations/notemain_backend";

function Home() {
  const [newNote, setNewNote] = useState([]);

  const handleAdd = (title, body) => {
    notemain_backend.createNote(title, body);
    setNewNote([...newNote, { title: title, content: body }]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const notesArray = await notemain_backend.readNotes();
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
