import Link from "next/link";
import { Image } from "cloudinary-react";
import { LocationsQuery_locations } from "src/generated/LocationsQuery";
import Card from "../components/Card";
interface IProps {
  locations: LocationsQuery_locations[];
  setHighlightedId: (id: string | null) => void;
}

export default function HouseList({ locations, setHighlightedId }: IProps) {
  return (
    <>
      <div
        className="review-list"
        style={{
          maxHeight: "calc(60vh)",
          overflowY: "scroll",
          scrollbarWidth: "none",
        }}
      >
        {locations.map((location) => (
          <>
            <Link key={location.id} href={`/reviews/${location.id}`}>
              <div
                key={location.id}
                className="px-6 pt-4 cursor-pointer 
             "
                onMouseEnter={() => setHighlightedId(location.id)}
                onMouseLeave={() => setHighlightedId(null)}
              >
                <Card
                  key={location.id}
                  rating={location.rating}
                  address={location.address}
                  loops={location.loops}
                  review={location.review}
                />
              </div>
            </Link>
          </>
        ))}
      </div>
    </>
  );
}
