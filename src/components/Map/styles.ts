import styled from "styled-components";

interface PinContainerProps {
  lat?: number;
  lng?: number;
}

export const MapContainer = styled.div`
  /* width: 100%; */
  height: 500px;
  margin: 0 -1000px;
`;

export const PinContainer = styled.div<PinContainerProps>`
  display: flex;
  width: 180px;
  align-items: center;
`;

export const PinText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  margin-left: 9px;
`;
