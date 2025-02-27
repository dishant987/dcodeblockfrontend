
const Button = ({ name, size = "md", isActive, onClick, type = "button" }) => {
    // Size variants
    const sizeClasses = {
        sm: "min-w-[100px] max-w-[120px] min-h-[30px] px-3 text-xs",
        md: "min-w-[120px] max-w-[140px] min-h-[40px] px-4 text-sm",
        lg: "min-w-[140px] max-w-[160px] min-h-[50px] px-5 text-base",
    };

    return (
        <button
            type={type}
            className={`relative flex items-center justify-center w-full whitespace-nowrap font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 
            text-white
             ${sizeClasses[size]}`}
            onClick={onClick}
        >
            {/* SVG with Neon Effect */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 160 60"
                fill="none"
                className={`absolute inset-0 w-full h-full  transition-all duration-300 ease-in-out ${isActive
                    ? "drop-shadow-[0_0_12px_#6A0DAD]"
                    : "hover:drop-shadow-[0_0_12px_#B026FF]"
                    }`}
            >
                <path
                    d="M54.6556 6.62199L55.0376 6.88201H55.4997H150V47.553L138.973 54H9.93774V3H47.1312L54.6556 6.62199Z"
                    fill={isActive ? "#6A0DAD" : "#F8D6FF"}
                    fillOpacity="0.1"
                    stroke={isActive ? "#6A0DAD" : "#B026FF"}
                    strokeWidth="3"
                />
            </svg>

            {/* Button Text */}
            <span
                className={`absolute z-10 text-center font-bold transition-all duration-300 ease-in-out ${isActive
                    ? "text-[#ca86f7] drop-shadow-[0_0_8px_#6A0DAD]"
                    : "hover:text-[#c685ec] hover:drop-shadow-[0_0_8px_#B026FF] drop-shadow-[0_0_5px_#9000FF]"
                    }`}
            >
                {name}
            </span>

        </button>
    );
};

export default Button;
