import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { FaSearch } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./Hooks/useDisclouse";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from "./components/NotFoundContact";
const App = () => {

  const [contacts, setContacts] = useState([])

  const { isOpen, onClose, onOpen} = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        
        const contactsRef = collection(db, "contacts");
        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            }
          });
          setContacts(contactLists)
          return contactLists;
        });

      } catch (error) {
        console.log(error);
      }

    };
      
    getContacts()
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");
        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            }
          });

          const filterContacts = contactLists.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()))

          setContacts(filterContacts)

          return filterContacts;
        });
  }


  return (
    <>
    <div className=" mx-auto max-w-[370px] px-4">
      <Nav />
      <div className="flex gap-2">
        <div className=" flex relative items-center">
        <FaSearch className=" absolute ml-1 text-3xl text-white"/>
        <input
        onChange={filterContacts}
        type="text" className=" flex-grow h-10 border bg-transparent border-white rounded-lg text-white pl-9"/> 
      </div>
        <FaCirclePlus 
        onClick={onOpen}
        className=" text-5xl text-white cursor-pointer"/>
      </div>
      <div>
        {
          contacts.length <= 0 ? (<NotFoundContact />) : (contacts.map((contact) => (
           <ContactCard contact={contact} key={contact.id} />
          ))
        )}
      </div>
    </div>
    <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
    <ToastContainer position="bottom-center" />
    </>
  )
};

export default App;
