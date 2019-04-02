import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList';
import CustomersActions from '../components/CustomersActions';

const customers = [
    {
        "dni":"27000000",
        "name":"Blablabla",
        "age":37
    },
    {
        "dni":"28000000",
        "name":"Blablfdfdabla",
        "age":31
    },
    {
        "dni":"30000000",
        "name":"Blafdfblfdfdabla",
        "age":27
    }
];

class CustomersContainer extends Component {
    renderBody = customers => (
        <div>
            <CustomersList
                customers={customers}
                urlPath={'customer/'} >
            </CustomersList>

            <CustomersActions>
                <button onClick={this.handleAddNew}></button>
            </CustomersActions>
        </div>
    );

    render() {
        return (
            <div>
                <AppFrame header={'Listado de Clientes'}
                    body={this.renderBody(customers)}>

                </AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {

};

export default CustomersContainer;