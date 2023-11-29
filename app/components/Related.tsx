import Link from "next/link";
import StopPoint from "../ContantComponents/StopPoint";
import Spinner from "../ContantComponents/Spinner";
import { getPostsMeta } from "@/lib/posts";
// import { popularPost } from "./context/ContextProvider";

type Props = {
  props: {
    MyPostsByTags: Meta[];
  };
};

const Related: React.FC<Props> = ({ props: { MyPostsByTags } }: Props) => {
  
  let uniquePostsSet = new Set(MyPostsByTags.map((post) => post.id));

  // Convert the Set back to an array of unique posts
  let uniquePostsArray: Meta[] = Array.from(uniquePostsSet)
  .map((id) => MyPostsByTags.find((post) => post.id === id))
  .filter((post): post is Meta => post !== undefined); // Filter out undefined values explicitly


  console.log("UniquePostsArray:", uniquePostsArray);






  return (
    <>
      {uniquePostsArray && <section className="bg-blue-100 rounded-sm dark:bg-gray-900 px-1 drop-shadow-md">
        <div className="py-2 px-0 mx-auto max-w-screen-xl">
          <div className="flex items-center mb-4">
            <h2 className="my-3 px-2.5 inline text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Related{" "}
            </h2>{" "}
            <img
              className="h-8 w-8 dark:filter dark:invert"
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgocEYbDmzkXPOlV29vgpn4ORGtpIQAIDuNd0jo6C_DWlflju-monJC7rRyKeJnGRCXxV3aaS4Tpec0OEST2b5DOdLcvrGU_pLS01UYeQ_o0QJT6V-WE_u6AFbF_z3lfpdyYJ1E8vet06S2LSTHaA79LmO2bQN2U6Jd3hYlHTgYv5vsuOHoJDSoiqCXGC0/w400-h400/popularicon.png"
              alt=""
            />
          </div>
          {uniquePostsArray && !uniquePostsArray.length ? (
            <>
              <Spinner />
              <h1 className="text-center"> no length </h1>
              {/* <h1 className="text-center my-2">{myTagPosts[0].title}</h1> */}
            </>
          ) : (
            <div className="grid gap-2 mb-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-2">
              {uniquePostsArray && uniquePostsArray.length === 0 ? (
                <h1 className="px-2.5 text-2xl font-bold ">0</h1>
              ) : (
                uniquePostsArray.map((post) => (
                  <div
                    key={post.id}
                    className="hover:shadow-lg  hover:scale-105 duration-300 transition-transform hover:border hover:border-1.5 hover:border-blue-300 items-center flex flex-col bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
                  >
                    <Link href={`/posts${post.link}`}>
                      <img
                        className="w-full rounded-lg "
                        src={`${post.image}`}
                        alt="Bonnie Avatar"
                      />
                    </Link>
                    <div className="p-2">
                      <h3 className="text-sm font-lighter tracking-tight text-gray-900 dark:text-white">
                        <span className="font-[700]">{post.title} </span>
                      </h3>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </section>}
      <StopPoint />
    </>
  );
};

export default Related;
