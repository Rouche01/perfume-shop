import React, { FC } from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";

interface PinContainerProps {
  lat?: number;
  lng?: number;
}

const MapContainer = styled.div`
  /* width: 100%; */
  height: 500px;
  margin: 0 -1000px;
`;

const PinContainer = styled.div<PinContainerProps>`
  display: flex;
  width: 180px;
  align-items: center;
`;

const PinText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  margin-left: 9px;
`;

const location = {
  address: "Addo Road, Ajah, Lagos, Nigeria",
  lat: 6.466667,
  lng: 3.566667,
};

interface MapProps {
  location: {
    address: string;
    lat: number;
    lng: number;
  };
  zoomLvl: number;
}

const Map: FC<MapProps> = ({ location, zoomLvl }) => {
  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location}
        defaultZoom={zoomLvl}
      >
        <PinContainer>
          <FaMapMarkerAlt size={36} />
          <PinText>Addo Road, Ajah, Lagos, Nigeria</PinText>
        </PinContainer>
      </GoogleMapReact>
    </MapContainer>
  );
};

export default Map;
