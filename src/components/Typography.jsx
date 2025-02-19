import React from 'react';

const Typography = ({ variant, children}) => {
  const typographyStyles = {
    h1: "text-4xl font-extrabold",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-medium",
    h4: "text-xl font-normal",
    body1: "text-base font-normal",
    body2: "text-sm font-light",
    caption: "text-xs font-light",
    subtitle1: "text-lg font-semibold",
    subtitle2: "text-md font-medium",
  };

  return (
    <div className={`text-white ${typographyStyles[variant]}`}>
      {children}
    </div>
  );
};

export default Typography;