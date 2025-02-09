import { useState } from "react";
import { X, CheckCircle, AlertCircle, Info, XCircle } from "lucide-react";

const Notification = ({ type, message, onClose }) => {
  const icons = {
    success: <CheckCircle className="text-green-500" />,
    error: <XCircle className="text-red-500" />,
    warning: <AlertCircle className="text-yellow-500" />,
    info: <Info className="text-blue-500" />,
  };

   return (
    <div className="flex items-center w-85 p-4 bg-white dark:bg-gray-900 shadow-lg rounded-lg  
      transition-all duration-300 ease-in-out 
      "
    >
      <span className="mr-3">{icons[type]}</span>
      <p className="flex-1 text-sm font-medium text-black">{message}</p>   
      <button onClick={onClose} className="ml-3">
        <X className="w-4 h-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" />
      </button>
    </div>
  );
};

export default Notification;
