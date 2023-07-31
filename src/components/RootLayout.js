/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useGetCategoryQuery } from "@/redux/api/api";
import Link from "next/link";
import { FaBeer, FaUserCircle } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/firebase/firebase.auth";
const RootLayout = ({ children }) => {
  const { data: session } = useSession();
  // console.log(session?.user);

  const [user, loading, error] = useAuthState(auth);
  // console.log(user?.email);

  const { data, isError, isLoading } = useGetCategoryQuery();
  // console.log(data?.data);

  return (
    <div className="flex justify-center">
      <div className="lg:w-11/12 w-full">
        <div className="navbar bg-black rounded border">
          <div className="">
            <Link href="/pcBuilder">
              <button className="btn btn-ghost text-white">PC_BUILD</button>
            </Link>
          </div>
          <div className="navbar-start">
            <div className="dropdown">
              <div className="dropdown dropdown-hover ">
                <label tabIndex={0} className="btn m-1 text-white">
                  Categories<FaBeer></FaBeer>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 border"
                >
                  {data?.data?.map((d) => (
                    <>
                      <Link href={`/category/${d?._id}`}>
                        <li>
                          <p className="bg-black mt-2 text-white">
                            {d?.categoryName}
                          </p>
                        </li>
                      </Link>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <Link href="/">
            <div className="navbar-center">
              <p className="btn btn-ghost normal-case text-xl mr-20">
                PC_WORLD
              </p>
            </div>
          </Link>
          <div className="navbar-end border">
            <div className="dropdown dropdown-bottom dropdown-hover dropdown-end border">
              <label tabIndex={0} className="btn m-1 btn-circle">
                {session?.user?.image ? (
                  <img className="rounded-full " src={session?.user?.image} />
                ) : (
                  <FaUserCircle className="text-3xl"></FaUserCircle>
                )}
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 border"
              >
                {!session?.user | !user?.email ? (
                  <>
                    <Link href="/login">
                      <li className="bg-black rounded-lg text-white">
                        <p>Sign-in</p>
                      </li>
                    </Link>
                  </>
                ) : (
                  <li>
                    <p onClick={() => signOut()} className="btn-error">
                      Log-out
                    </p>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default RootLayout;
