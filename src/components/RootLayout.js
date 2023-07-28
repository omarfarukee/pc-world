import Link from "next/link";

const RootLayout = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="w-11/12">
        <div className="navbar bg-base-100 border rounded">
          <div className="navbar-start">
            <div className="dropdown">
              <div className="dropdown dropdown-hover ">
                <label tabIndex={0} className="btn m-1">
                  Categories
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 border"
                >
                  <Link href="/about">
                    <li>
                      <p>Item 1</p>
                    </li>
                  </Link>
                  <li>
                    <a>Item 2</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
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
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default RootLayout;
