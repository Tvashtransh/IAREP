import JobSeekerNavbar from './components/JobSeekerNavbar';

export default function JobSeekerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JobSeekerNavbar />
      <main className="pt-16">
        {children}
      </main>
    </>
  );
} 