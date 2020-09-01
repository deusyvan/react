import React from 'react';
import { Table } from 'rsuite';

const { Column, HeaderCell, Cell, Pagination } = Table;

export default (props) => {

  const carros = [
    {id: 1, marca: 'Nissan', modelo: 'Sentra', ano: 2013},
    {id: 2, marca: 'VW', modelo: 'Brasília', ano: 1986},
    {id: 3, marca: 'Jaguar', modelo: 'XE', ano: 2010},
    {id: 4, marca: 'GM', modelo: 'Onix', ano: 1986},
    {id: 5, marca: 'VW', modelo: 'Gol', ano: 1986},
    {id: 6, marca: 'VW', modelo: 'Jetta', ano: 1986},
    {id: 7, marca: 'Honda', modelo: 'HR-V', ano: 1986},
    {id: 8, marca: 'GM', modelo: 'Omega', ano: 1986},
  ]

  return (
    <>
      <ul>
        { carros.map(item=>(
                  <li>{item.marca} - {item.modelo} ({item.ano})</li>
                )) }
      </ul>

      <div>
        <Table height={420} data={carros}>
          <Column width={50} align="center" resizable>
            <HeaderCell>Id</HeaderCell>
            <Cell dataKey="id" />
          </Column>

          <Column width={100} resizable>
            <HeaderCell>First Name</HeaderCell>
            <Cell dataKey="marca" />
          </Column>

          <Column width={100} resizable>
            <HeaderCell>Last Name</HeaderCell>
            <Cell dataKey="modelo" />
          </Column>

          <Column width={200} resizable>
            <HeaderCell>City</HeaderCell>
            <Cell dataKey="ano" />
          </Column>
        </Table>
      </div>
  
    </>
  )
}
