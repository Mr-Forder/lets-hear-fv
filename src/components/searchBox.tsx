import { ChangeEvent } from "react";
import { FunctionComponent } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { useGoogleMapsScript, Libraries } from "use-google-maps-script";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

interface ISearchBoxProps {
  onSelectAddress: (
    address: string,
    latitude: number | null,
    longitude: number | null
  ) => void;
  defaultValue: string;
}

//INTEGRATE GOOGLE MAPS SCRIPT
const libraries: Libraries = ["places"];

export function SearchBox({ onSelectAddress, defaultValue }: ISearchBoxProps) {
  const { isLoaded, loadError } = useGoogleMapsScript({
    //init googlemaps script
    googleMapsApiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "", //api key, or if null, coalesce into an empty string
    libraries,
  });

  if (!isLoaded) return null; //if not loaded, return null (can add loader to this later)
  if (loadError) return <div> Error loading </div>;

  //INITIALISE ACTUAL SEARCH BOX

  return (
    <ReadySearchBox
      onSelectAddress={onSelectAddress}
      defaultValue={defaultValue}
    />
  );
}

function ReadySearchBox({ onSelectAddress, defaultValue }: ISearchBoxProps) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({ debounce: 300, defaultValue }); //init google places autocomplete - debounce limits requests for people who type too much shit too fast

  //USER TYPES IN ADDRESS
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (e.target.value === "") {
      //if search box is empty
      onSelectAddress("", null, null); //display nothing
    }
  };

  //USER SELECTS A LOCATION FROM GOOGLEPLACES SUGGESTIONS
  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address }); //get geocode takes in object with address - returns a promise
      const { lat, lng } = await getLatLng(results[0]); //get long and lat from first result from googleplaces suggestions
      onSelectAddress(address, lat, lng);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        id="search"
        value={value}
        onChange={handleChange}
        disabled={!ready}
        placeholder="Find a location"
        className="w-full p-2  dark:bg-gray-800 "
        autoComplete="off"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" && //if googleplaces status is okay,
            data.map((
              { place_id, description } //map over the data array
            ) => (
              <ComboboxOption key={place_id} value={description} /> //show place id and description
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}
