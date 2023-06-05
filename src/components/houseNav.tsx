import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAuth } from "src/auth/useAuth";
import {
  DeleteLocation,
  DeleteLocationVariables,
} from "src/generated/DeleteLocation";

const DELETE_MUTATION = gql`
  mutation DeleteLocation($id: String!) {
    deleteLocation(id: $id)
  }
`;

interface IProps {
  location: {
    id: string;
    userId: string;
  };
}

export default function HouseNav({ location }: IProps) {
  const router = useRouter();
  const { user } = useAuth(); //useAuth hook - provides user true or false
  const canManage = !!user && user.uid === location.userId; //true if there's a user and their id matches that of the userId attached to the review

  const [deleteLocation, { loading }] = useMutation<
    DeleteLocation,
    DeleteLocationVariables
  >(DELETE_MUTATION);

  return (
    <>
      <Link href="/">
        <a className="px-3 py-2 mx-1 text-sm font-bold leading-5 text-center text-white transition-colors duration-200 transform bg-teal-50  hover:bg-cyan-50  rounded-md  md:mx-2 md:w-auto cursor-pointer">
          map
        </a>
      </Link>
      {canManage && (
        <>
          {"  "}
          <Link href={`/reviews/${location.id}/edit`}>
            <a className="px-3 py-2 mx-1 text-sm font-bold leading-5 text-center text-white transition-colors duration-200 transform bg-gray-600 rounded-md hover:bg-gray-800  md:mx-2 md:w-auto cursor-pointer">
              edit
            </a>
          </Link>
          {"  "}
          <button
            className=" w-1/2 px-3 py-2 mx-1 text-sm font-bold leading-5 text-center text-white transition-colors duration-200 transform bg-rouge-50 hover:bg-rouge-500  rounded-md  md:mx-2 md:w-auto cursor-pointer"
            disabled={loading}
            type="button"
            onClick={async () => {
              if (confirm("Are you sure you want to delete this review?")) {
                await deleteLocation({ variables: { id: location.id } });
                router.push("/");
              }
            }}
          >
            delete
          </button>
        </>
      )}
    </>
  );
}
