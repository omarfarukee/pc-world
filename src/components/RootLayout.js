/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useGetCategoryQuery } from "@/redux/api/api";
import Link from "next/link";
import { FaBeer, FaUserCircle } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";
const RootLayout = ({ children }) => {
  const { data: session } = useSession();
  console.log(session?.user);
  const { data, isError, isLoading, error } = useGetCategoryQuery();
  console.log(data?.data);
  return (
    <div className="flex justify-center">
      <div className="w-11/12">
        <div className="navbar bg-base-100 border rounded">
          <div className="">
            <Link href="/pcBuilder">
              <button className="btn btn-ghost">PC_BUILD</button>
            </Link>
          </div>
          <div className="navbar-start">
            <div className="dropdown">
              <div className="dropdown dropdown-hover ">
                <label tabIndex={0} className="btn m-1">
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
                          <p>{d?.categoryName}</p>
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
              <p className="btn btn-ghost normal-case text-xl">PC_WORLD</p>
            </div>
          </Link>
          <div className="navbar-end">
            <div className="dropdown dropdown-bottom dropdown-hover dropdown-end">
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
                {!session?.user ? (
                  <>
                    <Link href="/login">
                      <li>
                        <p>Login</p>
                      </li>
                    </Link>
                    <li>
                      <p>Sign-up</p>
                    </li>{" "}
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
