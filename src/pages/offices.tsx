import React from 'react';
import { Disclosure } from '@headlessui/react'
import { Content } from '../components/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { Mapa } from '../components/Mapa';

interface ISucursalProps {
  nombre: string;
  direccion: string;
  lat: number;
  lng: number;
  horarios: {dia:string, horario:string}[];
}

const horarios = [  
  { dia: "Lunes", horario: "9 a 18hs", state: "active" },
  { dia: "Martes", horario: "9 a 18hs", state: "active" },
  { dia: "Miercoles", horario: "9 a 18hs", state: "active" },
  { dia: "Jueves", horario: "9 a 18hs", state: "active" },
  { dia: "Viernes", horario: "9 a 18hs", state: "active" }
]

const Sucursal = (props: ISucursalProps) => (
  <>
    <h2>{props.nombre}</h2>
    <div className='grid grid-cols-2 gap-1'>
      <div>
        <p className="text-sm">{props.direccion}</p>
        <Disclosure>
          <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
            <span>Horarios</span>
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            <ul>
            {props.horarios.map(item=>(
              <li key={item.dia} className='grid grid-cols-3'>
                <div>{item.dia}</div>
                <div className="text-right">{item.horario}</div>
              </li>
            ))}
            </ul>
          </Disclosure.Panel>
        </Disclosure>
      </div>
      <div>
          <img src={ '/assets/images/' + props.nombre + '.png'}></img> 
          <Mapa zoom={15} lat={props.lat} lng={props.lng} nombre={props.nombre} direccion={props.direccion}></Mapa>
      </div>
    </div>
  </>
)

const Sucursales = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <div>
        <Sucursal lat={51.511300} lng={-0.140770}  nombre="Londres" direccion="Clifford St 33, Savile Row, Londres" horarios={horarios} ></Sucursal>
      </div>
      <div>
        <Sucursal lat={-34.471440} lng={-58.509490} nombre="Buenos Aires" direccion="Leandro Alem 350, San Isidro, Buenos Aires" horarios={horarios} ></Sucursal>
      </div>
      <div>
        <Sucursal lat={35.55164623} lng={139.73149155} nombre="Tokio" direccion="2 Chome, Haginaka, Tokio, Japan" horarios={horarios} ></Sucursal>
      </div>
      <div>
        <Sucursal lat={25.840311052548} lng={-80.217030704934} nombre="Miami" direccion="NW 12th Av, Miami, Florida, USA" horarios={horarios} ></Sucursal>
      </div>
    </Content>
  </Main>
);


export default Sucursales;


