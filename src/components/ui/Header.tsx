import React from 'react';
import "../../assets/css/Header.css"

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <section className="header">
        <h1>{title}</h1>
    </section>
  );
}

export default Header;