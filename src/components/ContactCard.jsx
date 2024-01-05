import { HiOutlineUserCircle } from "react-icons/hi2";
import { RiEditCircleLine } from "react-icons/ri"
import { IoMdTrash } from "react-icons/io";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclouse from "../Hooks/useDisclouse";
import { toast } from "react-toastify";
const ContactCard = ({contact}) => {

  const { isOpen, onClose, onOpen} = useDisclouse();

    const deleteContact = async(id) => {
      try {
        await deleteDoc(doc(db, "contacts", id));
        toast.success("Contact Delecteds Successfully")
      } catch (error) {
        console.log(error);
      }
    }

    return(
      <>
        <div key={contact.id} className=" bg-yellow flex justify-between rounded-xl p-3 mt-2">
        <div className=" flex gap-1 ">
        <HiOutlineUserCircle className=" text-4xl text-orange"/> 
        <div className=" text-[14px] leading-4 ">
          <h2 className="">{contact.name}</h2>
          <p className="">{contact.email}</p>
        </div>
        </div>
        <div className=" flex gap-2">
          <RiEditCircleLine onClick={onOpen} className=" text-3xl cursor-pointer"/>
          <IoMdTrash onClick={() => deleteContact(contact.id)} className=" text-3xl text-purple-800 cursor-pointer"/>
        </div>
      </div>
      <AddAndUpdateContact contact = {contact} isUpdate isOpen={isOpen} onClose={onClose} />
    </>
    )
}

export default ContactCard;