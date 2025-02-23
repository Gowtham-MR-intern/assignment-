import React from 'react';

type TypographyVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2' | 'caption' | 'subtitle1' | 'subtitle2';

type typoprops ={
  variant: TypographyVariants,
  children?:React.ReactNode,
  className?:string
}
const Typography = ({ variant, children, className}:typoprops) => {
  const typographyStyles = {
    h1: "text-4xl font-extrabold",
    h2: "text-3xl font-semibold mb-2",
    h3: "text-2xl font-medium",
    h4: "text-xl font-normal",
    body1: "text-base font-normal",
    body2: "text-sm font-light",
    caption: "text-xs font-light",
    subtitle1: "text-lg font-semibold",
    subtitle2: "text-md font-medium",
  };

  return (
    <div className={`text-white ${typographyStyles[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Typography;