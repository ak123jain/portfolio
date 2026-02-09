import { useState } from 'react';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';

// Logo Components
const InsobitLogo = () => (
  <svg width="80" height="40" viewBox="0 0 140 60" xmlns="http://www.w3.org/2000/svg" className="w-20 h-10">
    <rect width="140" height="60" rx="12" fill="#000"/>
    <text x="15" y="42" fill="#fff" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="32">
      insybit
    </text>
  </svg>
);

const InSriLogo = () => (
  <svg width="70" height="40" viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" className="w-[70px] h-10">
    <rect width="120" height="60" rx="12" fill="#fff" stroke="#e5e5e5" strokeWidth="2"/>
    <text x="15" y="42" fill="#000" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="32">
      inSri
    </text>
    <circle cx="100" cy="18" r="6" fill="#fbbf24"/>
  </svg>
);

const Experience = () => {
  // Fix: Type as number | null instead of just null
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Insybit',
      logo: <InsobitLogo />,
      type: 'Onsite',
      location: 'Onsite',
      period: 'July 28, 2025 – Present',
      duration: 'Current',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
      responsibilities: [
        'Contributing as a Full Stack Developer on production-grade web applications used by real users.',
        'Developing and maintaining end-to-end features using React.js, Node.js, Express.js, and MongoDB.',
        'Building clean, responsive, and reusable UI components with React.js and Tailwind CSS.',
        'Designing and coding responsive HTML emailers for transactional and marketing campaigns in production.',
        'Designing and implementing scalable RESTful APIs with secure authentication and authorization using JWT.',
        'Handling database schema design and optimizing MongoDB queries for performance and reliability.',
        'Integrating third-party services and internal APIs to support business workflows.',
        'Collaborating with product managers, designers, and engineers in an onsite agile environment.',
        'Participating in code reviews, debugging, performance tuning, and production deployments.'
      ]
    },
    {
      title: 'Frontend Developer Intern',
      company: 'inSri Tech Solutions',
      logo: <InSriLogo />,
      type: 'Remote',
      location: 'Remote',
      period: 'June 15, 2025 – July 15, 2025',
      duration: '1 month',
      technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'Git'],
      responsibilities: [
        'Worked on real-world projects as a Frontend Developer Intern in a remote team environment.',
        'Developed responsive and reusable UI components using React.js, JavaScript, and Tailwind CSS.',
        'Integrated frontend components with backend APIs to ensure seamless data flow.',
        'Enhanced UI consistency and usability based on design feedback and code reviews.',
        'Collaborated using Git-based workflows and followed professional development practices.'
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-6 pb-8 sm:py-12 md:py-16 lg:py-20">
      <div className="w-full max-w-5xl mx-auto px-3 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-6 sm:mb-10 md:mb-16">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-3">
            Work Experience
          </h2>
          <p className="text-gray-600 text-xs sm:text-base md:text-lg">Professional journey and contributions</p>
        </div>

        {/* Experience List */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg sm:rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              {/* Card Header */}
              <div 
                className="p-3 sm:p-6 md:p-8 cursor-pointer"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div className="flex items-start gap-2 sm:gap-6 mb-3 sm:mb-6">
                  {/* Company Logo */}
                  <div className="flex-shrink-0 rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                    {exp.logo}
                  </div>
                  
                  <div className="flex-1 min-w-0 overflow-hidden">
                    {/* Title and Company */}
                    <div className="mb-2 sm:mb-4">
                      <h3 className="text-sm sm:text-xl md:text-2xl font-bold text-gray-900 mb-0.5 sm:mb-1 leading-tight">
                        {exp.title}
                      </h3>
                      <p className="text-xs sm:text-lg text-gray-700 font-medium">{exp.company}</p>
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-col gap-1 sm:gap-2 text-gray-600 mb-2 sm:mb-5">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="text-[10px] sm:text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="text-[10px] sm:text-sm">{exp.location}</span>
                      </div>
                      <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-gray-100 text-gray-900 font-semibold rounded-full text-[10px] sm:text-xs self-start mt-1">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* Expand Button */}
                  <button
                    className={`p-1 sm:p-2 rounded-lg sm:rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 flex-shrink-0 ${
                      expandedIndex === index ? 'rotate-180' : ''
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedIndex(expandedIndex === index ? null : index);
                    }}
                  >
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  </button>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 sm:px-4 sm:py-2 bg-gray-50 text-gray-700 text-[10px] sm:text-sm font-medium rounded-md sm:rounded-xl border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expandable Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expandedIndex === index ? 'max-h-[2000px]' : 'max-h-0'
                }`}
              >
                <div className="px-3 sm:px-6 md:px-8 pb-3 sm:pb-6 md:pb-8 pt-2 border-t border-gray-100">
                  <h4 className="text-[10px] sm:text-sm font-bold text-gray-900 mb-2 sm:mb-4 uppercase tracking-wider">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-3">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li
                        key={respIndex}
                        className="flex items-start gap-2 sm:gap-3 text-gray-700 leading-relaxed"
                      >
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0"></span>
                        <span className="text-[10px] sm:text-sm">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;