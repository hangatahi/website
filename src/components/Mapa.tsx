import React, { ReactElement, useEffect, useRef } from "react"
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { AppConfig } from "../utils/AppConfig";

interface IMapaProps {
    direccion:string;
    nombre: string;
    lat: number;
    lng: number;
    zoom: number;
}

function MapComponent({center,zoom}: {
    center: {lat: number, lng: number};
    zoom: number;
  }) {  
    const ref = useRef<HTMLElement>(null); 
    const current = ref.current;
    if ( current !== null ) {
      useEffect(() => {
        new window.google.maps.Map(current, {
          center,
          zoom,
        });
      });
    }

    return <div className="w-full h-48" ref={ref as React.RefObject<HTMLDivElement>} id="map" >!</div>;
  }

  const render = (status: Status): ReactElement => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return <></>;
  };
      
const Mapa = ( props: IMapaProps) => (
    <>
    { AppConfig.mapKey && (
      <Wrapper apiKey={AppConfig.mapKey} render={render}>
        <MapComponent zoom={props.zoom} center={{lat: props.lat, lng: props.lng }}/>
      </Wrapper>
    )}
    </>
)

 export {Mapa};