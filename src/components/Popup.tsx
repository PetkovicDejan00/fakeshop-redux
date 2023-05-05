import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const successPopup: any = (message: string) => {
  toast.success(`${message}`, {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const errorPopup: any = (message: string) => {
  toast.error(`${message}`, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};
