import PropTypes from 'prop-types';

export const Modal = ({ hidden, handleCancel, handleOke }) => {
  return (
    <div className={`modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black  bg-opacity-50 ${hidden}`}>
      <div className="bg-white rounded shadow-lg w-1/3">
        <div className="border-b px-4 py-2">
          <h3>Borrar Director</h3>
        </div>

        <div className="p-3">Seguro de borrar el director?</div>

        <div className="flex justify-end w-100 border-t p-3">
          <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1" onClick={() => handleCancel()}>
            Cancelar
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white " onClick={() => handleOke()}>
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  hidden: PropTypes.array.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleOke: PropTypes.func.isRequired,
};
