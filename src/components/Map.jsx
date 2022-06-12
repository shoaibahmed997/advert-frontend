import React from "react";
import { ComposableMap, Geographies, Geography,Marker,useZoomPan } from "react-simple-maps";


const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


  const CustomZoomableGroup = ({ children, ...restProps }) => {
    const { mapRef, transformString, position } = useZoomPan(restProps);
    return (
      <g ref={mapRef}>
        <rect width={800} height={600} fill="transparent" />
        <g transform={transformString}>{children(position)}</g>
      </g>
    );
  };

const Map = ({coords}) => (
  <div>
    <ComposableMap>
    <CustomZoomableGroup center={[5, -10]} zoom={1}>
    {(position) => (
            <>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                    geographies.map(geo => <Geography fill="#27272a"
                            stroke="#5D5A6D" key={geo.rsmKey} geography={geo} />)
                    }
                </Geographies>
                <Marker  coordinates={coords}>
                    <g fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="translate(-12, -24)" >
                        <circle cx="12" cy="10" r="3" />
                        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                    </g>
                    <text textAnchor="middle" y={-25} style={{ fontFamily: "system-ui", fill: "#ffffff" }}>
                        Dharamshala
                    </text>
                </Marker>
            </>
          )}
      
    
       
        </CustomZoomableGroup>
    </ComposableMap>
  </div>
);

export default Map
