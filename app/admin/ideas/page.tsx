import Navbar from '../../components/Navbar.jsx';

const ideas = [
  { id: 1, title: 'AI-powered Resume Builder', user: 'Priya S.', status: 'Pending' },
  { id: 2, title: 'Sustainable Fashion Marketplace', user: 'Rahul K.', status: 'Pending' },
];

export default function AdminIdeasPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen px-4 py-8">
        <div className="max-w-3xl mx-auto w-full">
          <h1 className="text-2xl font-bold text-[#41E5FF] font-archivo mb-6 text-center">Validate Ideas</h1>
          <div className="space-y-4">
            {ideas.map((idea) => (
              <div key={idea.id} className="border border-gray-200 rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between bg-white shadow-sm">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">{idea.title}</h2>
                  <p className="text-gray-600 text-sm">By {idea.user}</p>
                </div>
                <div className="flex gap-2 mt-4 md:mt-0">
                  <button className="bg-[#41E5FF] hover:bg-[#22CCB2] text-white px-4 py-2 rounded-lg font-semibold transition-colors">Approve & Assign Dreamer</button>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold transition-colors">Reject</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
} 