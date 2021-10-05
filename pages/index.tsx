export default function Home() {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-full">
      <form className="bg-white rounded-md shadow-2xl flex flex-col">
        <div className="px-8 pt-8">
          <div className="pb-4">
            Welcome to <strong>Zombo.com</strong>. Please log in.
          </div>
          <div className="flex flex-col pb-4">
            <label className="sr-only pl-2" htmlFor="username">
              Username
            </label>
            <input
              className="p-2 border rounded-md"
              type="text"
              id="username"
              placeholder="Enter username"
            />
          </div>
          <div className="flex flex-col pb-4">
            <label className="sr-only pl-2" htmlFor="password">
              Password
            </label>
            <input
              className="p-2 border rounded-md"
              type="password"
              id="password"
              placeholder="Enter password"
            />
          </div>
        </div>
        <div className="divide-y">
          <div className="flex flex-col px-8">
            <input
              className="bg-indigo-700 hover:bg-indigo-800 active:bg-indigo-900 text-white rounded-md flex-grow py-2 px-4 cursor-pointer"
              type="submit"
              value="Login"
            />
            <div className="pt-4 mb-4 text-center">
              <a className="text-indigo-700" href="#">
                I forgot my password
              </a>
            </div>
          </div>
          <div className="p-6 text-center bg-gray-50 rounded-b-md">
            <a
              className="bg-green-700 py-2 px-4 rounded-md text-white"
              href="#"
            >
              Create new account
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
