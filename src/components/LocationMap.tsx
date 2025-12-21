import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";

const LocationMap = () => {
  const position: LatLngTuple = [9.013154159429098, 38.83362425435434];

  return (
    <section className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-center text-4xl font-bold text-white">
          Find Us
        </h2>

        <div className="h-100 w-full overflow-hidden rounded-2xl">
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={false}
            className="h-full w-full"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                <strong>Addis Fitness Gym</strong>
                <br />
                Train with purpose.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
