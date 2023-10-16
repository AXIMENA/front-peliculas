import PropTypes from 'prop-types';
export const Card = ({ nombres, estado, fecCrea, fecActualiza, onSubmit, inputNombres, inputEstado, inputCreacion, inputActualizacion, isEdit }) => {
  return (
    <div className="wrapper-content content-center">
      <form onSubmit={onSubmit}>
        <input type="text" className="placeholder:italic border-input w-full" placeholder={'Nombres'} onChange={inputNombres} value={nombres} />

        <input type="text" className="placeholder:italic border-input w-full" placeholder={'Estado'} onChange={inputEstado} value={estado} />

        <input type="text" className="placeholder:italic border-input w-full" placeholder={'Fecha Creación AÑO-MES-DIA'} onChange={inputCreacion} value={fecCrea} />

        <input type="text" className="placeholder:italic border-input w-full" placeholder={'Fecha Actualización AÑO-MES-DIA'} onChange={inputActualizacion} value={fecActualiza} />

        {/* <input type="date" className="border-input" value={fecCrea} onChange={inputCreacion} />

        <input type="date" className="border-input" value={fecActualiza} onChange={inputActualizacion} /> */}
        <div className="flex justify-end">
          <input type="submit" value={isEdit ? 'Edit' : 'Add'} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" />
        </div>
      </form>
    </div>
  );
};

Card.propTypes = {
  nombres: PropTypes.string.isRequired,
  estado: PropTypes.string.isRequired,
  fecCrea: PropTypes.string.isRequired,
  fecActualiza: PropTypes.string.isRequired,
  isEdit: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  inputNombres: PropTypes.func.isRequired,
  inputEstado: PropTypes.func.isRequired,
  inputCreacion: PropTypes.func.isRequired,
  inputActualizacion: PropTypes.func.isRequired,
};
