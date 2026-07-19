const Profile = () => {
  const user = JSON.parse(
    localStorage.getItem("Auth")
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-4xl">

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Profile Page
          </h1>

          <p className="mt-2 text-gray-600">
            Manage your personal information
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

          <div className="flex flex-col items-center gap-6 sm:flex-row">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-900 text-3xl font-bold text-white">
              {user?.userName?.charAt(0).toUpperCase() || "U"}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {user?.userName || "User"}
              </h2>

              <p className="mt-1 text-gray-500">
                {user?.userEmail || "No email available"}
              </p>
            </div>

          </div>

          <div className="mt-8 grid gap-6 border-t border-gray-200 pt-8 sm:grid-cols-2">

            <div>
              <p className="text-sm font-medium text-gray-500">
                Username
              </p>

              <p className="mt-2 text-lg font-semibold text-gray-900">
                {user?.userName || "Not available"}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500">
                Email Address
              </p>

              <p className="mt-2 text-lg font-semibold text-gray-900">
                {user?.userEmail || "Not available"}
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile;