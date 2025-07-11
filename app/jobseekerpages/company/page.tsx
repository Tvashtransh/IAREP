import React from 'react';
import Image from 'next/image';

const mockCompany = {
  name: 'LABORUM',
  logo: '/company-logo.png',
  website: 'laborum.com',
  location: 'Tucson, AZ',
  employees: '100 - 300 employees',
  type: 'Top IT company',
  workType: 'Hybrid',
  schedule: 'Monday - Friday',
  ot: 'No OT',
  followers: 500,
  about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem lorem aliquam sed lacinia quis. Nibh dictumst vulputate odio pellentesque qui quis ac, sit ipsum. Sit rhoncus velit in sed massa arcu sit eu. Vitae et vitae eget lorem non dui. Sollicitudin ut mi adipiscing duis.`,
  whyChoose: [
    'Lorem ipsum dolor sit amet',
    'Consectetur adipiscing elit. Lorem lorem aliquam sed lacinia quis.',
    'Nibh dictumst vulputate odio pellentesque qui quis ac, sit ipsum.',
    'Sit rhoncus velit in sed massa arcu sit eu.',
    'Vitae et vitae eget lorem non dui. Sollicitudin ut mi adipiscing duis.'
  ],
  lifeImages: [
    '/life1.jpg', '/life2.jpg', '/life3.jpg', '/life4.jpg'
  ],
  jobs: [
    { title: 'C# Developer', salary: '$110K - $120K', location: 'Tucson, AZ' },
    { title: 'Product Manager', salary: '$110K - $120K', location: 'Tucson, AZ' },
    { title: 'UI / UX Designer', salary: '$95K - $120K', location: 'Tucson, AZ' },
    { title: 'Full-Stacked Dev', salary: '$110K - $120K', location: 'Tucson, AZ' },
  ],
  rating: 4.8,
  reviews: [
    { name: 'Jay Rutherford', text: 'The compensation & benefits are amazing', daysAgo: 3 },
    { name: 'Anna', text: 'It is a high growth company & an amazing workplace to learn in terms of culture, mission and working with seniors.', daysAgo: 3 },
    { name: 'Kenneth', text: 'I am fresh starter & I receive great leadership & guidance from seniors', daysAgo: 3 },
  ]
};

export default function CompanyProfilePage() {
  return (
        <div className="bg-[#F8FAFC] min-h-screen pb-12">
      {/* Combined Header and Company Info Card */}
      <div className="w-[1176px] mx-auto bg-white rounded-[10px] border border-[#F3F4F6] shadow-sm overflow-hidden">
        {/* Banner/Header - Figma accurate recreation */}
        <div className="relative w-full h-[282px] bg-[#41E5FF] overflow-hidden flex items-center">
          {/* Top-left decorative shape */}
          <div className="absolute top-0 left-0 w-[108px] h-[108px] bg-[#C2F6FF] rounded-bl-[54px]" style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomRightRadius: 0 }} />
          {/* Left-side white circle with logo */}
          <div className="absolute left-[-50px] bottom-[-40px] w-[170px] h-[170px] bg-white rounded-full flex items-center justify-center shadow-lg">
            <img src="/company-logo.png" alt="Logo" className="w-[120px] h-[120px] object-contain" />
          </div>
          {/* Main text */}
          <div className="ml-[180px] z-10">
            <h2 className="text-white text-5xl font-bold leading-tight whitespace-pre-line">
              Get your\nMedicines in 5 mins
            </h2>
          </div>
          {/* Decorative rectangles (right) */}
          <div className="absolute right-[200px] top-[174px] w-[149px] h-[171px] bg-[#BAF3EB] rounded-[32px] rotate-2" />
          <div className="absolute right-0 top-[-12px] w-[200px] h-[306px] bg-[#C2F6FF] rounded-br-[100px]" />
          {/* People image */}
          <img src="/banner-people.png" alt="People" className="absolute right-[120px] top-[-22px] h-[367px] w-[268px] object-contain z-20" />
          <img src="/banner-people2.png" alt="People2" className="absolute right-[0px] top-[16px] h-[342px] w-[238px] object-contain z-10" />
          {/* Lightbulb in circle */}
          <div className="absolute right-12 top-[162px] w-[64px] h-[64px] bg-[#41E5FF] rounded-full flex items-center justify-center border-2 border-[#00B9D6]">
            <span className="text-3xl">💡</span>
          </div>
        </div>
        
        {/* Very thin grey separator */}
        <div className="w-full h-[1px] bg-[#F3F4F6]"></div>
        
        {/* Company Info Section */}
        <div className="relative h-[380px] flex items-stretch">
          {/* Logo - overlapping */}
          <div className="flex flex-col items-center justify-start w-[260px] relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-[90px] w-[170px] h-[170px] rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-white">
              <img src="/company-logo.png" alt="Logo" className="w-[120px] h-[120px] object-contain" />
            </div>
          </div>
          {/* Main Info and Details */}
          <div className="flex-1 flex flex-col justify-center pl-2 pr-8 pt-16 pb-8">
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-3xl font-extrabold text-[#171A1F] tracking-tight">{mockCompany.name}</h1>
              <span className="flex items-center gap-1 text-[#22CCB2] font-semibold text-base">
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="#22CCB2" strokeWidth="2" fill="#E6FCF7"/><path d="M10 5v6l4 2" stroke="#22CCB2" strokeWidth="2" strokeLinecap="round"/></svg>
                Top IT company
              </span>
            </div>
            <div className="text-[#9095A0] text-base mb-1">Software development</div>
            <a href={`https://${mockCompany.website}`} className="text-[#3694E5] text-base hover:underline mb-2 inline-block">{mockCompany.website}</a>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-4 text-[#6F7782] text-base">
              <span className="flex items-center gap-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 18.333s6.667-5.833 6.667-10A6.667 6.667 0 1 0 3.333 8.333c0 4.167 6.667 10 6.667 10Z" stroke="#6F7782" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="10" cy="8.333" r="2.5" stroke="#6F7782" strokeWidth="1.5"/></svg>{mockCompany.location}</span>
              <span className="flex items-center gap-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="6" cy="8" r="3" stroke="#6F7782" strokeWidth="1.5"/><circle cx="14" cy="8" r="3" stroke="#6F7782" strokeWidth="1.5"/><path d="M2 16c0-2.21 2.686-4 6-4s6 1.79 6 4" stroke="#6F7782" strokeWidth="1.5"/></svg>{mockCompany.employees}</span>
              <span className="flex items-center gap-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M5 3a2 2 0 0 0-2 2v12l7-4 7 4V5a2 2 0 0 0-2-2H5Z" stroke="#6F7782" strokeWidth="1.5"/></svg>{mockCompany.workType}</span>
              <span className="flex items-center gap-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="3" y="5" width="14" height="12" rx="2" stroke="#6F7782" strokeWidth="1.5"/><path d="M3 9h14" stroke="#6F7782" strokeWidth="1.5"/><path d="M7 3v2" stroke="#6F7782" strokeWidth="1.5"/><path d="M13 3v2" stroke="#6F7782" strokeWidth="1.5"/></svg>{mockCompany.schedule}</span>
              <span className="flex items-center gap-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" stroke="#6F7782" strokeWidth="1.5"/></svg>No OT</span>
            </div>
          </div>
          {/* Right Side: Buttons and Followers */}
          <div className="flex flex-col items-end justify-between py-10 pr-6 w-[320px]">
            <div className="flex gap-2 mb-4">
              <button className="flex items-center gap-2 bg-[#00D2FF] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#22CCB2] transition text-base"><svg width='20' height='20' fill='none' viewBox='0 0 20 20'><path d='M10 4v12M4 10h12' stroke='#fff' strokeWidth='2' strokeLinecap='round'/></svg>Follow</button>
              <button className="flex items-center gap-2 bg-[#E6F9FF] text-[#3694E5] px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#B3E6FF] transition text-base"><svg width='20' height='20' fill='none' viewBox='0 0 20 20'><path d='M15 8.333V6.667A3.333 3.333 0 1 0 8.333 6.667v1.666' stroke='#3694E5' strokeWidth='1.5'/><path d='M10 13.333V6.667' stroke='#3694E5' strokeWidth='1.5'/><path d='M5 10l5-5 5 5' stroke='#3694E5' strokeWidth='1.5'/></svg>Share</button>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <img src="/avatar1.png" alt="avatar1" className="w-9 h-9 rounded-full border-2 border-white" />
              <img src="/avatar2.png" alt="avatar2" className="w-9 h-9 rounded-full border-2 border-white -ml-2" />
              <img src="/avatar3.png" alt="avatar3" className="w-9 h-9 rounded-full border-2 border-white -ml-2" />
              <span className="w-9 h-9 rounded-full bg-[#9095A0] text-white flex items-center justify-center text-sm font-semibold -ml-2">+9</span>
              <span className="ml-2 text-[#6F7782] text-base font-medium">500 followers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Very thin grey separator */}
      <div className="w-[1176px] mx-auto h-[1px] bg-[#E5E7EB] my-4"></div>

      {/* Combined Company Information Card */}
      <div className="w-[1176px] mx-auto">
         <div className="w-full bg-white rounded-[10px] border border-[#F3F4F6] px-10 py-8 flex flex-col shadow-sm">
           {/* About Us Section */}
           <h2 className="text-[24px] font-bold text-[#171A1F] mb-4">About us</h2>
           <p className="text-[#6F7782] text-base mb-8 max-w-[718px]">{mockCompany.about}</p>
           <h3 className="text-lg font-semibold text-[#171A1F] mb-3">Why choosing us</h3>
           <ul className="list-disc pl-6 text-[#6F7782] text-base mb-8 max-w-[718px] space-y-2">
             {mockCompany.whyChoose.map((item, idx) => (
               <li key={idx}>{item}</li>
             ))}
           </ul>

           {/* Very thin grey separator */}
           <div className="w-full h-[1px] bg-[#F3F4F6] my-6"></div>

           {/* Life at Company */}
           <div>
             <h2 className="text-lg font-semibold mb-4 text-[#171A1F]">Life at {mockCompany.name}</h2>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {mockCompany.lifeImages.map((img, idx) => (
                 <img key={idx} src={img} alt="life" className="rounded-lg h-32 w-full object-cover" />
               ))}
             </div>
           </div>

           {/* Very thin grey separator */}
           <div className="w-full h-[1px] bg-[#F3F4F6] my-6"></div>

           {/* Recent job openings */}
           <div>
             <h2 className="text-lg font-semibold mb-4 text-[#171A1F]">Recent job openings</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               {mockCompany.jobs.map((job, idx) => (
                 <div key={idx} className="bg-[#F8FAFC] rounded-xl p-4 border border-[#F3F4F6] flex flex-col gap-2">
                   <div className="font-bold text-gray-900">{job.title}</div>
                   <div className="text-sm text-gray-500">{job.salary}</div>
                   <div className="text-xs text-gray-400">{job.location}</div>
                   <button className="mt-2 text-cyan-600 text-xs hover:underline">View details</button>
                 </div>
               ))}
             </div>
           </div>
         </div>
       </div>
      
             {/* Footer */}
       <footer className="w-full bg-[#171A1F] text-[#DEE1E5] py-16 mt-16">
         <div className="container mx-auto px-4 max-w-7xl">
           <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
             {/* Logo and Language Selector */}
             <div className="space-y-8">
               <div className="h-11 w-[123px] relative">
                 <Image
                   src="/images/NewLogo.png"
                   alt="IdeaAscend Logo"
                   fill
                   className="object-contain"
                 />
               </div>
               <div className="bg-[#1D1D1D] text-white px-3 py-2 rounded-md w-[127px] flex items-center justify-between">
                 <span>English</span>
                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
               </div>
             </div>

             {/* Company Links */}
             <div className="space-y-4">
               <h3 className="text-[#DEE1E5] text-lg font-semibold">Company</h3>
               <ul className="space-y-4">
                 <li><a href="/" className="hover:text-[#41E5FF]">Home</a></li>
                 <li><a href="/about" className="hover:text-[#41E5FF]">About Us</a></li>
                 <li><a href="/team" className="hover:text-[#41E5FF]">Founder's Team</a></li>
                 <li><a href="/mentor" className="hover:text-[#41E5FF]">Mentor</a></li>
                 <li><a href="/investor" className="hover:text-[#41E5FF]">Investor</a></li>
                 <li><a href="/chatbot" className="hover:text-[#41E5FF]">CHATBOT</a></li>
               </ul>
             </div>

             {/* Product Links */}
             <div className="space-y-4">
               <h3 className="text-[#DEE1E5] text-lg font-semibold">Product</h3>
               <ul className="space-y-4">
                 <li><a href="/" className="hover:text-[#41E5FF]">Home</a></li>
                 <li><a href="/about" className="hover:text-[#41E5FF]">About Us</a></li>
                 <li><a href="/team" className="hover:text-[#41E5FF]">Founder's Team</a></li>
                 <li><a href="/mentor" className="hover:text-[#41E5FF]">Mentor</a></li>
                 <li><a href="/investor" className="hover:text-[#41E5FF]">Investor</a></li>
                 <li><a href="/jobs" className="hover:text-[#41E5FF]">Jobs</a></li>
                 <li><a href="/chatbot" className="hover:text-[#41E5FF]">Chatbot</a></li>
               </ul>
             </div>

             {/* Services Links */}
             <div className="space-y-4">
               <h3 className="text-[#DEE1E5] text-lg font-semibold">Services</h3>
               <ul className="space-y-4">
                 <li><a href="#" className="hover:text-[#41E5FF]">Idea validation and refining</a></li>
                 <li><a href="#" className="hover:text-[#41E5FF]">1:1 Mentorship</a></li>
                 <li><a href="#" className="hover:text-[#41E5FF]">Team building support</a></li>
                 <li><a href="#" className="hover:text-[#41E5FF]">Business execution validation</a></li>
                 <li><a href="#" className="hover:text-[#41E5FF]">Funding opportunities</a></li>
                 <li><a href="#" className="hover:text-[#41E5FF]">Networking opportunities</a></li>
               </ul>
             </div>

             {/* Resources Links */}
             <div className="space-y-4">
               <h3 className="text-[#DEE1E5] text-lg font-semibold">Resources</h3>
               <ul className="space-y-4">
                 <li><a href="/blog" className="hover:text-[#41E5FF]">Blog</a></li>
                 <li><a href="/user-guides" className="hover:text-[#41E5FF]">User guides</a></li>
                 <li><a href="/webinars" className="hover:text-[#41E5FF]">Webinars</a></li>
                 <li><a href="/terms" className="hover:text-[#41E5FF]">Terms and Conditions</a></li>
               </ul>
             </div>

             {/* Newsletter Section */}
             <div className="space-y-4">
               <h3 className="text-[#41E5FF] text-lg font-semibold">Subscribe Newsletter</h3>
               <p className="text-[#DEE1E5]">Explore our news and blog content today and take the first step towards unlocking your full business potential.</p>
               <div className="flex gap-4 w-full md:w-auto">
                 <div className="flex-1 md:flex-none relative">
                   <input
                     type="email"
                     placeholder="Email..."
                     className="w-full md:w-[269px] bg-[#1D1D1D] text-white px-4 py-2 rounded-md pl-10"
                   />
                   <svg className="absolute left-3 top-1/2 transform -translate-y-1/2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M2.5 4.5H13.5C14.0523 4.5 14.5 4.94772 14.5 5.5V10.5C14.5 11.0523 14.0523 11.5 13.5 11.5H2.5C1.94772 11.5 1.5 11.0523 1.5 10.5V5.5C1.5 4.94772 1.94772 4.5 2.5 4.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                     <path d="M14.5 5.5L8 9.5L1.5 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                 </div>
                 <button className="bg-[#41E5FF] text-[#005C6A] px-6 py-2 rounded-md font-semibold hover:bg-opacity-90">
                   SUBSCRIBE
                 </button>
               </div>
             </div>
           </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-[#DEE1E5] flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[#DEE1E5]">© 2024 IdeaAscend, Inc.</div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-[#DEE1E5] hover:text-[#41E5FF]">Privacy</a>
              <span className="text-[#DEE1E5]">•</span>
              <a href="#" className="text-[#DEE1E5] hover:text-[#41E5FF]">Terms</a>
              <span className="text-[#DEE1E5]">•</span>
              <a href="#" className="text-[#DEE1E5] hover:text-[#41E5FF]">Sitemap</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-[#DEE1E5] hover:text-[#41E5FF]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" fill="#2E6FDE"/>
                </svg>
              </a>
              <a href="#" className="text-[#DEE1E5] hover:text-[#41E5FF]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" fill="#2EBADE"/>
                </svg>
              </a>
              <a href="#" className="text-[#DEE1E5] hover:text-[#41E5FF]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" fill="#5870DE"/>
                </svg>
              </a>
              <a href="#" className="text-[#DEE1E5] hover:text-[#41E5FF]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82072 5.55057 1.57879 5.98541 1.46 6.46C1.14521 8.20556 0.991235 9.97631 1 11.75C0.988768 13.537 1.14277 15.3213 1.46 17.08C1.59096 17.5398 1.83831 17.9581 2.17814 18.2945C2.51798 18.6308 2.93882 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8572 8.1787 22.54 6.42Z" fill="#E82E2E"/>
                  <path d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 