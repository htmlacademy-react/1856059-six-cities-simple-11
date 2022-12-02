import React, { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { City } from '../../types/city';
import { Points } from '../../types/points';
import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT} from './const';


type MapProps = {
  city: City;
  points: Points;
}

function Map(props: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, props.city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  // const currentCustomIcon = leaflet.icon({
  //   iconUrl: URL_MARKER_CURRENT,
  //   iconSize: [40, 40],
  //   iconAnchor: [20, 40],
  // });

  useEffect(() => {
    if (map) {
      props.points.forEach((point) => {
        leaflet
          .marker({
            lat: point.lat,
            lng: point.lng,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, props.points]);

  return (
    <div ref={mapRef} className="cities__map map"></div>
  );
}

export default Map;
