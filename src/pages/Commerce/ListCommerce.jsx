import React from 'react'
import { Table } from 'react-bootstrap'
import { formData, formsData } from '../../helpers/forms'
const ListCommerce = (props) => {
  const { data } = formsData;
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#	</th>
            <th>Situacion Laboral	</th>
            <th>Ingreso Líquido Promedio</th>
            <th>Facturacion Minima Promedio	</th>
            <th>Nombre</th>
            <th>Apellidos	</th>
            <th>Telefono	</th>
            <th>Correo Electronico	</th>
            <th>Ciudad de Residencia</th>
            <th>Carnet de Identidad	</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => {
              const date = new Date(item.timestamp)
              return (
                <tr key={index}>
                  <td>{item.seq_num}</td>
                  <td>{item.submissionFieldCollection.situacion_laboral_1605830268693.value}</td>
                  <td>{item.submissionFieldCollection.ingreso_liquido_promedio.value}</td>
                  <td>{item.submissionFieldCollection.facturacion_minima_promedio.value}</td>
                  <td>{item.submissionFieldCollection.nombre.value}</td>
                  <td>{item.submissionFieldCollection.apellidos.value}</td>
                  <td>{item.submissionFieldCollection.telefono.value}</td>
                  <td>{item.submissionFieldCollection.correo_electronico.value}</td>
                  <td>{item.submissionFieldCollection['ciudad-residencia'].value}</td>
                  <td>{item.submissionFieldCollection.carnet_identidad.value}</td>
                  <td>{`${date.getDate()}-${date.getUTCMonth()+1}-${date.getFullYear()}`}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table></div>
  )
}

export default ListCommerce