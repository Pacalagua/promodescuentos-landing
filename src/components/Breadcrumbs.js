import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ title }) => {
  return (
    <section className="breadcrumbs">
      <div className="container">
        <ol>
          <li><Link href="/">Inicio</Link></li>
          <li>{title}</li>
        </ol>
        <h1><b>{title}</b></h1>
      </div>
    </section>
  );
};

export default Breadcrumbs;
