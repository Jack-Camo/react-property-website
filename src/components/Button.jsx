import React from 'react';

const Button = ({
  text,
  styles = "", // Additional styles (if any)
  textColor = "text-black", // Text color
}) => {
  
  return (
    <button 
      type="button"
      className={`font-poppins font-medium text-[18px] outline-none py-4 px-6 ${styles} ${textColor} border-gold-gradient`}
    >
      {text}
    </button>
  );
}

export default Button;
