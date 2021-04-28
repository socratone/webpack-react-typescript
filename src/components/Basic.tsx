import React from 'react';

export interface BasicProps {
  children: String
}
 
const Basic = ({ children }: BasicProps) => {
  return (  
    <p>{children}</p>
  );
}
 
export default Basic;