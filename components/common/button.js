import React from 'react';

const Button = React.forwardRef((props, ref) => {
  const { text, loading, style, onClick, className, white } = props;
  const combClass = `${className || ''} py-2 px-4 md:px-16 hover:bg-gray-200 hover:text-black rounded-sm text-lg font-bold tracking-tighter uppercase disabled:bg-gray-200 ${
    white ? 'bg-white text-black' : 'bg-gray-900 text-white'
  }`;

  return (
    <button className={combClass} onClick={onClick} style={{ ...style }} disabled={loading} ref={ref}>
      {text}
    </button>
  );
});

export default Button;
