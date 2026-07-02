import { useEffect, useState } from "react";

const UserData = () => {
  const [dis, setDis] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      try {
        const user = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        const res = await user.json();
        setDis(res);
      } catch (err) {
        console.log(err);
      }
    }

    fetchdata();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        User Fetch Data
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dis.map((e) => (
          <div
            key={e.id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              {e.name}
            </h2>

            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-semibold">Username:</span> {e.username}
              </p>

              <p>
                <span className="font-semibold">Email:</span> {e.email}
              </p>

              <p>
                <span className="font-semibold">Phone:</span> {e.phone}
              </p>

              <p>
                <span className="font-semibold">Website:</span> {e.website}
              </p>

              <p>
                <span className="font-semibold">Company:</span>{" "}
                {e.company.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserData;