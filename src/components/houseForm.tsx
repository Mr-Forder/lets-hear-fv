import Link from "next/link";
import { useState, useEffect, ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
// import { Image } from "cloudinary-react";
import { SearchBox } from "./searchBox";
import {
  CreateLocationMutation,
  CreateLocationMutationVariables,
} from "src/generated/CreateLocationMutation";
import {
  UpdateLocationMutation,
  UpdateLocationMutationVariables,
} from "src/generated/UpdateLocationMutation";
import { CreateSignatureMutation } from "src/generated/CreateSignatureMutation";

const SIGNATURE_MUTATION = gql`
  mutation CreateSignatureMutation {
    createImageSignature {
      signature
      timestamp
    }
  }
`;

const CREATE_LOCATION_MUTATION = gql`
  mutation CreateLocationMutation($input: LocationInput!) {
    createLocation(input: $input) {
      id
    }
  }
`;

const UPDATE_LOCATION_MUTATION = gql`
  mutation UpdateLocationMutation($id: String!, $input: LocationInput!) {
    updateLocation(id: $id, input: $input) {
      id
      latitude
      longitude
      rating
      review
      loops
      address
    }
  }
`;

interface IUploadImageResponse {
  secure_url: string;
}

async function uploadImage(
  image: File,
  signature: string,
  timestamp: number
): Promise<IUploadImageResponse> {
  const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
  const formData = new FormData();
  formData.append("file", image);
  formData.append("signature", signature);
  formData.append("timestamp", timestamp.toString());
  formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_KEY ?? "");

  const response = await fetch(url, {
    method: "post",
    body: formData,
  });
  return response.json();
}

interface IFormData {
  address: string;
  latitude: number;
  longitude: number;
  rating: string;
  loops: string;
  review: string;
}

interface ILocation {
  id: string;
  address: string;
  latitude: number;
  longitude: number;
  rating: number;
  review: string;
  loops: string;
}

interface IProps {
  location?: ILocation;
}

export default function HouseForm({ location }: IProps) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>();
  const { register, handleSubmit, setValue, errors, watch } = useForm<
    IFormData
  >({
    defaultValues: location //check to see if there's location data on db
      ? {
          //if so, set them to the db values
          address: location.address,
          latitude: location.latitude,
          longitude: location.longitude,
          rating: location.rating.toString(),
          review: location.review,
          loops: location.loops,
        }
      : {}, //if not, set to empty object
  });

  const address = watch("address"); // use watch method from react hook form to grab address from searchbox googleplaces suggestion that user picks
  const [createSignature] = useMutation<CreateSignatureMutation>(
    SIGNATURE_MUTATION
  );
  //call create location mutation
  const [createLocation] = useMutation<
    CreateLocationMutation,
    CreateLocationMutationVariables
  >(CREATE_LOCATION_MUTATION);
  //call update location mutation
  const [updateLocation] = useMutation<
    UpdateLocationMutation,
    UpdateLocationMutationVariables
  >(UPDATE_LOCATION_MUTATION);

  useEffect(() => {
    register({ name: "address" }, { required: "Please enter your address" });
    register({ name: "latitude" }, { required: true, min: -90, max: 90 });
    register({ name: "longitude" }, { required: true, min: -180, max: 180 });
  }, [register]); //useEffect, triggers when useForm hook register method state changes

  //create a review
  const handleCreate = async (data: IFormData) => {
    console.log(data);
    const { data: signatureData } = await createSignature();
    if (signatureData) {
      const { signature, timestamp } = signatureData.createImageSignature;

      const { data: locationData } = await createLocation({
        variables: {
          input: {
            address: data.address,
            coordinates: {
              latitude: data.latitude,
              longitude: data.longitude,
            },
            rating: parseInt(data.rating, 10),
            review: data.review,
            loops: data.loops,
          },
        },
      });

      if (locationData?.createLocation) {
        router.push(`/reviews/${locationData.createLocation.id}`);
      }
    }
  };

  //update a review

  const handleUpdate = async (currentLocation: ILocation, data: IFormData) => {
    const { data: locationData } = await updateLocation({
      variables: {
        id: currentLocation.id,
        input: {
          address: data.address,
          coordinates: {
            latitude: data.latitude,
            longitude: data.longitude,
          },
          rating: parseInt(data.rating, 10),
          review: data.review,
          loops: data.loops,
        },
      },
    });

    if (locationData?.updateLocation) {
      router.push(`/reviews/${currentLocation.id}`);
    }
  };

  //submit a review (user action)
  const onSubmit = (data: IFormData) => {
    //takes in IFormData from typescript interface (written above)
    setSubmitting(false);
    if (!!location) {
      //if location already exists
      handleUpdate(location, data); //run handleupdate
    } else {
      handleCreate(data); //otherwise handlecreate
    }
  };

  return (
    <form className="mx-auto max-w-xl py-4" onSubmit={handleSubmit(onSubmit)}>
      <h1 className=" text-2xl font-extrabold text-gray-700 dark:text-teal-50">
        {location ? `Editing ${location.address}` : "Add a New Review"}
      </h1>

      <div className="mt-4">
        <label
          htmlFor="search"
          className="block text-lg font-bold text-teal-50 dark:text-gray-200 md:text-xl pb-4"
        >
          Search for a location
        </label>
        <SearchBox
          onSelectAddress={(address, latitude, longitude) => {
            setValue("address", address);
            setValue("latitude", latitude);
            setValue("longitude", longitude);
          }}
          defaultValue={location ? location.address : ""}
        />
        {/* check for errors in useForm hook, in address field. if there are any, show them here */}
        {errors.address && <p>{errors.address.message}</p>}
        {/* <h2 className="text-teal-50">{address}</h2> */}
      </div>

      {address && (
        <>
          <div className="mt-4">
            <label
              htmlFor="loops"
              className="block text-lg font-bold text-teal-50 dark:text-gray-200 md:text-xl"
            >
              Your review, please
            </label>
            <input
              id="loops"
              name="loops"
              type="string"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              ref={register({
                required: "Please enter a brief review",
              })}
            />
            {errors.loops && <p>{errors.loops.message}</p>}
          </div>
          <div className="mt-4">
            <label
              htmlFor="rating"
              className="block text-lg font-bold text-teal-50 dark:text-gray-200 md:text-xl"
            >
              Overall Rating (1 - 5)
            </label>
            <input
              id="rating"
              name="rating"
              type="number"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring rating"
              ref={register({
                required: "Please enter a rating",
                max: { value: 5, message: "too high! please enter 1-5" },
                min: { value: 1, message: "too low! please enter 1-5" },
              })}
            />
            {errors.rating && <p>{errors.rating.message}</p>}
          </div>

          <div className="mt-4">
            <label
              htmlFor="review"
              className="block text-lg font-bold text-teal-50 dark:text-gray-200 md:text-xl"
            >
              Anything else you'd like to add?
            </label>
            <input
              id="review"
              name="review"
              type="string"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              ref={register({
                required:
                  "Please add a comment or two about the service you received",
              })}
            />
            {errors.review && <p>{errors.review.message}</p>}
          </div>

          <div className="submit mt-4">
            <button
              className="px-4 py-2 text-sm font-bold tracking-wide text-white capitalize transition-colors duration-200 transform bg-teal-50 rounded-md sm:mx-2 hover:bg-cyan-50 focus:outline-none "
              type="submit"
              disabled={submitting}
            >
              Submit
            </button>{" "}
            <Link href={location ? `/reviews/${location.id}` : "/"}>
              <a className="dark:text-white"> Cancel </a>
            </Link>
          </div>
        </>
      )}
    </form>
  );
}
