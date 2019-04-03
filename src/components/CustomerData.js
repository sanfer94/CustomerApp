import React from 'react';
import PropTypes from 'prop-types';
import CustomersActions from './CustomersActions';

const CustomerData = ({name,dni,age, onBack}) => {
    return (
        <div>
            <div className="customer-data">
                <h2>Datos del cliente</h2>
                <div>Nombre: {name}</div>
                <div>Documento: {dni}</div>
                <div>Edad: {age}</div>
            </div>
            <CustomersActions>
                <button onClick={onBack}>Volver</button>
            </CustomersActions>
        </div>
    );
};

CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
};

export default CustomerData;