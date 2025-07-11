import Navbar from '../../components/Navbar.jsx';

const jobs = [
  { id: 1, title: 'Frontend Developer', company: 'StartupX', applicants: 12 },
  { id: 2, title: 'Marketing Lead', company: 'GrowthHub', applicants: 5 },
];

export default function AdminJobsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen px-4 py-8">
        <div className="max-w-3xl mx-auto w-full">
          <h1 className="text-2xl font-bold text-[#41E5FF] font-archivo mb-6 text-center">Manage Jobs</h1>
          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="border border-gray-200 rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between bg-white shadow-sm">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">{job.title}</h2>
                  <p className="text-gray-600 text-sm">{job.company}</p>
                </div>
                <div className="flex gap-2 mt-4 md:mt-0">
                  <span className="bg-[#E6F9FF] text-[#41E5FF] px-3 py-1 rounded-full text-xs font-medium">{job.applicants} Applicants</span>
                  <button className="bg-[#41E5FF] hover:bg-[#22CCB2] text-white px-4 py-2 rounded-lg font-semibold transition-colors">View</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
} 