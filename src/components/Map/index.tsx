import React, { FC } from "react";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MapContainer, PinContainer, PinText } from "./styles";

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
