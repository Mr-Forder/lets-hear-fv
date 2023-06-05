import { useState, useEffect } from "react";
import Link from "next/link";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface ILocation {
  id: string;
  latitude: number;
  longitude: number;
}

interface IProps {
  location: ILocation;
  nearby: ILocation[]; //an array of locations
}

export default function SingleMap({ location, nearby }: IProps) {
  const [darkMap, setDarkMap] = useState(false);
  const [viewport, setViewport] = useState({
    latitude: location.latitude,
    longitude: location.longitude,
    zoom: 13,
  });

  useEffect(() => {
    const item = localStorage.getItem("mode");
    if (item) {
      setDarkMap(JSON.parse(localStorage.getItem("mode") || ""));
    } else return;
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 pb-16">
      <div className="text-black">
        <ReactMapGL
          {...viewport}
          width="100%"
          height="calc(100vh)"
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
          mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
          mapStyle={
            darkMap
              ? "mapbox://styles/letshear/cl4msplra004e14qse3umqvhf"
              : "mapbox://styles/letshear/cl4e5ss4q000914lcskne3peo"
          }
          scrollZoom={false}
          minZoom={8}
        >
          <div className="absolute top-0 left-0 p-4">
            <NavigationControl showCompass={false} />
          </div>

          <Marker
            latitude={location.latitude}
            longitude={location.longitude}
            offsetLeft={-15}
            offsetTop={-15}
          >
            <button
              type="button"
              style={{
                width: "30px",
                height: "30px",
                fontSize: "30px",
                zIndex: 10,
              }}
            >
              <img
                src="/home-color.svg"
                className="w-8 "
                alt="selected house"
              />
            </button>
          </Marker>
          {nearby.map((near) => (
            <Marker
              key={near.id}
              latitude={near.latitude}
              longitude={near.longitude}
              offsetLeft={-15}
              offsetTop={-15}
            >
              <Link href={`/reviews/${near.id}`}>
                <a
                  style={{
                    width: "30px",
                    height: "30px",
                    fontSize: "30px",
                    zIndex: 0,
                  }}
                >
                  <img
                    src="/home-solid.svg"
                    className="w-8"
                    alt="nearby house"
                  />
                </a>
              </Link>
            </Marker>
          ))}
        </ReactMapGL>
      </div>
    </div>
  );
}
