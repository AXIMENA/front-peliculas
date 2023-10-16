import { useState } from 'react';
import { Card } from '../component/Card';
import { format } from 'date-fns';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const Home = () => {
  const formatDate = 'yyyy-MM-dd';
  const [currentDate, setCurrentDate] = useState(format(new Date(), formatDate));
  const [fecCrea, setDate] = useState('');
  const [nombres, setNombres] = useState('');
  const [estado, setEstado] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      const { nombresEdit, estadoEdit, /*fecCreaEdit, actualizacionEdit,*/ isEditData, _id } = location.state;
      setIsEdit(isEditData);
      setNombres(nombresEdit);
      setId(_id);
      setEstado(estadoEdit);
      /* setDate(fecCreaEdit, formatDate);
      setCurrentDate(format(new Date(actualizacionEdit), formatDate)); */
      console.log('dataSend', location.state);
    }
  }, [location.state]);

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(isEdit);
      if (isEdit) {
        await axios.post(`http://localhost:5000/directores/update/${id}`, {
          nombres: nombres,
          estado: estado,
          fecCrea: fecCrea,
          fecActualiza: new Date(currentDate),
        });
      } else {
        await axios.post('http://localhost:5000/directores/add', {
          nombres: nombres,
          estado: estado,
          fecCrea: format(new Date(fecCrea), formatDate),
          fecActualiza: new Date(currentDate),
        });
      }

      navigate('/list-data');
    } catch (error) {
      console.log(error);
    }
  };

  const inputActualiza = (event) => {
    setCurrentDate(event.target.value);
  };

  const inputNombres = (event) => {
    setNombres(event.target.value);
  };

  const inputEstado = (event) => {
    setEstado(event.target.value);
  };

  const inputCreacion = (event) => {
    setDate(event.target.value);
  };
  return (
    <div className="wrapper-parent-page">
      <Card nombres={nombres} 
            estado={estado} 
            creacion={fecCrea}
            date={currentDate}               
            onSubmit={onSubmit} inputNombres={inputNombres} inputEstado={inputEstado} inputCreacion={inputCreacion} inputActualiza={inputActualiza} isEdit={isEdit} />
    </div>
  );
};
