interface ButtonProps {
    children: any;
    button2?: string; 
    className: string;
    type?: "submit" | "reset" | "button" | undefined;
    onClick?: () => void;
  }
  
  export default function Button({ children, className, type, onClick}: ButtonProps) {
    return (
      <button
        onClick={onClick}
        type={type}
        className={`${
            className === "button2"
            ? "border-2 rounded-md p-2 w-full transition duration-300 border-primary hover:bg-primary hover:text-white"
            : "w-full px-4 py-2 border-[#aa367c80] border-2 bg-gradient-to-r from-[#aa367c80] to-[#4a2fbd80] text-white transition-all duration-500 rounded-lg hover:border-2 hover:bg-none"
        }`}
      >
        {children}
      </button>
    );
  }
  