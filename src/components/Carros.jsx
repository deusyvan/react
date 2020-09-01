import React from 'react';
import { Panel, Grid, Row, Col, Button } from 'rsuite';
import './Carros.css'


export default (props) => {

  const carros = [
    {id: 1, marca: 'Nissan', modelo: 'Sentra', ano: 2013, foto: 'https://www.comprecar.com.br/storage/news/featured/0z_i3_OIHjI858D.jpg' },
    {id: 2, marca: 'VW', modelo: 'Brasília', ano: 1986, foto: 'https://www.carroclub.com.br/foto/volkswagen-brasilia-b13c3525-5c13-48b1-b4e0-84d11dc613ef'},
    {id: 3, marca: 'Jaguar', modelo: 'XE', ano: 2010, foto: 'https://s2.glbimg.com/9AqITVYWjygwCib-ZBotr1woOrk=/512x320/smart/e.glbimg.com/og/ed/f/original/2014/10/29/jaguar_01.jpg'},
    {id: 4, marca: 'GM', modelo: 'Onix', ano: 1986, foto: 'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2020-onix-premier/colorizer/6-onix-premier-prata-switchblade.jpg?imwidth=960'},
    {id: 5, marca: 'VW', modelo: 'Gol', ano: 1986, foto: 'https://cdn.motor1.com/images/mgl/1BW6X/s1/vw-gol-2020.jpg'},
    {id: 6, marca: 'VW', modelo: 'Jetta', ano: 1986, foto: 'https://1.bp.blogspot.com/-aYAWkCqbEhk/XPlzTVJkHFI/AAAAAAAAU_U/ilfulIzwzRsJ_3_RNulObhfQ9fTWajujgCLcBGAs/s1600/Novo-Jetta-GLi-2020-087.jpg'},
    {id: 7, marca: 'Honda', modelo: 'HR-V', ano: 1986, foto: 'https://cdn.motor1.com/images/mgl/6J4PX/s3/honda-hr-v-2020.jpg'},
    {id: 8, marca: 'GM', modelo: 'Omega', ano: 1986, foto: 'https://img0.icarros.com/dbimg/imgadicionalnoticia/4/96913_1'},
  ]

  return (
    <>
     <h1>Carros</h1>
     { carros.map(item=>(
        <Panel key={ item.id } shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
            <img src={ item.foto } className="responsive" alt={ item.modelo } />
            <Panel header={ item.marca + ' - ' + item.modelo }>
                <Grid fluid>
                    <Row className="show-grid">
                        <Col xs={12}>Ano <strong>{ item.ano }</strong></Col>
                        <Col xs={12}><Button color="red">Detalhes</Button></Col>
                    </Row>
                </Grid>
            </Panel>
        </Panel>
    ))}
    </>

  )
}
