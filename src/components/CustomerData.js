import React from 'react';
import PropTypes from 'prop-types';
import CustomersActions from './CustomersActions';
import {CUSTOMER_VIEW } from '../constants/permissions';
import{accessControl} from '../helpers/accessControl';

const CustomerData = ({id,name,dni,age, onBack, isDeleteAllowed,onDelete}) => {
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
                {isDeleteAllowed && <button onClick={() =>onDelete(id)}>Eliminar</button>}
            </CustomersActions>
        </div>
    );
};

CustomerData.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
    isDeleteAllowed: PropTypes.bool,
    onDelete: PropTypes.func,
};

export default accessControl([CUSTOMER_VIEW])(CustomerData);