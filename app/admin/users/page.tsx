import Navbar from '../../components/Navbar.jsx';

const users = [
  { id: 1, name: 'Priya Sharma', role: 'Dreamer' },
  { id: 2, name: 'Rahul Kumar', role: 'Jobseeker' },
  { id: 3, name: 'StartupX', role: 'Startup' },
];

export default function AdminUsersPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen px-4 py-8">
        <div className="max-w-3xl mx-auto w-full">
          <h1 className="text-2xl font-bold text-[#41E5FF] font-archivo mb-6 text-center">Manage Users</h1>
          <div className="space-y-4">
            {users.map((user) => (
              <div key={user.id} className="border border-gray-200 rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between bg-white shadow-sm">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">{user.name}</h2>
                  <p className="text-gray-600 text-sm">{user.role}</p>
                </div>
                <div className="flex gap-2 mt-4 md:mt-0">
                  <button className="bg-[#41E5FF] hover:bg-[#22CCB2] text-white px-4 py-2 rounded-lg font-semibold transition-colors">View</button>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold transition-colors">Remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
} 