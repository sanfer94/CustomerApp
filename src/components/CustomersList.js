import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';
import {accessControl} from '../helpers/accessControl';
import {CUSTOMER_LIST} from '../constants/permissions';


const CustomersList = ({ customers,urlPath }) => {
    return (
        
            
            <div className="customers-list">
                {
                    //seguir en 16 17
                    customers.map(c =>
                        <CustomerListItem
                            key={c.dni}
                            dni={c.dni}
                            name={c.name}
                            editAction={'Editar'}
                            delAction={'Eliminar'}
                            urlPath={urlPath}>

                        </CustomerListItem>)
                }
            </div>
        
    );
};

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default accessControl([CUSTOMER_LIST])(CustomersList);