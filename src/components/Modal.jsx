import { createPortal } from "react-dom"
import { AiOutlineClose } from "react-icons/ai"
const Modal = ({onClose, isOpen, children}) => {
    return createPortal (
        <>
            {isOpen && (
                <div  className=" grid place-content-center absolute top-0 z-40 h-screen w-screen backdrop-blur">
                    <div className=" m-auto relative z-50 min-h-[200px] min-w-[600px] bg-white p-4 ">
                    <div className=" flex justify-end">
                        <AiOutlineClose onClick={onClose} className=" text-2xl cursor-pointer "/>
                    </div>
                    {children}
                    </div>
                </div>
            )}
        </>
        ,document.getElementById("modal-root")
    )
}

export default Modal