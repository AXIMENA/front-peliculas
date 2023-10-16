import { Table } from '../component/Table';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const ListData = () => {
  const [directors, setDirectores] = useState([]);

  useEffect(() => {
    getDirectores();
  });

  const getDirectores = async () => {
    const response = await axios.get('http://localhost:5000/directores');
    setDirectores(response.data);
  };

  return (
    <div className="wrapper-parent-page">
      <Table directors={directors} />
    </div>
  );
};
