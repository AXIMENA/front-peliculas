//import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal } from './Modal';
import axios from 'axios';

export const Table = ({ directors }) => {
  const headerTable = ['No', 'Nombres', 'Estado', 'Creacion', 'Actualizacion', 'Acciones'];
  //const formatDate = 'dd/MM/yyyy';
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState('');

  const handleEdit = (element) => {
    const dataEdit = {
      _id: element._id,
      nombresEdit: element.nombres,
      estadoEdit: element.estado,
      creacionEdit: element.fecCrea,
      actualizacionEdit: element.fecActualiza,
      isEditData: true,
    };
    navigate('/', { state: dataEdit, replace: true });
  };

  const handleDelete = (id) => {
    setId(id);
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };
  const handleCancel = () => {
    setShowModal(false);
  };

  const handleOke = async () => {
    await axios.delete(`http://localhost:5000/directores/delete/${id}`);
    setShowModal(false);
  };

  return (
    <div className="wrapper-content">
      <table className=" mx-auto">
        <thead className="border-b bg-neutral-800 font-medium text-white">
          <tr>
            {headerTable.map((element, index) => (
              <th key={index}>{element}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {directors.map((element, index) => {
            return (
              <tr key={element._id} className="hover:bg-neutral-100">
                <td className="border-cell">{index + 1}</td>
                <td className="border-cell">{element.nombres}</td>
                <td className="border-cell">{element.estado ? 'Activo':'Inactivo'}</td>
                <td className="border-cell">{element.fecCrea}</td>
                <td className="border-cell">{element.fecActualiza}</td>
                <td className="border-cell flex justify-center items-center">
                  <button className="btn btn-blue mr-1" onClick={() => handleEdit(element)}>
                    Editar
                  </button>
                  <button className="btn btn-red" onClick={() => handleDelete(element._id)}>
                    Borrar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal hidden={showModal ? '' : 'hidden'} handleCancel={handleCancel} handleOke={handleOke} />
    </div>
  );
};

Table.propTypes = {
  directors: PropTypes.array.isRequired,
};
