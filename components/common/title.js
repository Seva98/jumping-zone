const Title = ({ children, className, style, level, white, size }) => {
  const combClass = `${className || ''} text-${size || '4'}xl font-bold uppercase mb-4 ${white && 'text-white'}`;

  switch (level) {
    case 1:
      return (
        <h1 className={`${combClass}`} style={style}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 className={`${combClass}`} style={style}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 className={`${combClass}`} style={style}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 className={`${combClass}`} style={style}>
          {children}
        </h4>
      );
    case 5:
      return (
        <h5 className={`${combClass}`} style={style}>
          {children}
        </h5>
      );
    case 6:
      return (
        <h6 className={`${combClass}`} style={style}>
          {children}
        </h6>
      );
    default:
      return (
        <div className={`${combClass}`} style={style}>
          {children}
        </div>
      );
  }
};

export default Title;
