/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useEffect, useRef } from "react";

interface ModalProps {
  children: ReactNode;
  onClose: any;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  const ref: any = useRef({});
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);
  return (
    <div className="fixed top-0 w-[100vw] h-[100vh] z-[1000] bg-black/50 flex items-center justify-center">
      <div className="bg-white p-[20px] w-[50vw] max-h-[80vh]" ref={ref}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
