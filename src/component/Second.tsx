// import React from 'react';
// import { BookOpen, Code, Server, Database, Briefcase, Award } from 'lucide-react';

// const Second = () => {
//   return (
//     <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//             Education & Skills
//           </h2>
//           <p className="mt-4 text-lg text-gray-500">
//             My academic background and technical expertise
//           </p>
//         </div>

//         {/* Education Section */}
//         <div className="mb-20">
//           <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
//             <BookOpen className="mr-2" size={24} />
//             Education
//           </h3>
          
//           <div className="grid gap-8 md:grid-cols-2">
//             <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h4 className="font-semibold text-lg">Bachelor of Computer Science</h4>
//                   <p className="text-gray-600">University Name</p>
//                 </div>
//                 <span className="text-gray-500 text-sm">2018 - 2022</span>
//               </div>
//               <p className="mt-4 text-gray-600">
//                 Focused on web development, algorithms, and data structures. Graduated with honors.
//               </p>
//             </div>
            
//             <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h4 className="font-semibold text-lg">Full Stack Web Development</h4>
//                   <p className="text-gray-600">Tech Bootcamp</p>
//                 </div>
//                 <span className="text-gray-500 text-sm">2022</span>
//               </div>
//               <p className="mt-4 text-gray-600">
//                 Intensive 12-week program covering modern web development practices with MERN stack.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Skills Section */}
//         <div>
//           <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
//             <Code className="mr-2" size={24} />
//             Technical Skills
//           </h3>
          
//           <div className="grid gap-8 md:grid-cols-3">
//             {/* Frontend */}
//             <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
//               <div className="flex items-center mb-4">
//                 <Code size={20} className="text-blue-600 mr-2" />
//                 <h4 className="font-semibold text-lg">Frontend</h4>
//               </div>
//               <ul className="space-y-2">
//                 <li className="flex items-center">
//                   <div className="w-full bg-gray-200 rounded-full h-2.5">
//                     <div className="bg-blue-600 h-2.5 rounded-full w-11/12"></div>
//                   </div>
//                   <span className="ml-2 text-sm font-medium text-gray-700">React</span>
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-full bg-gray-200 rounded-full h-2.5">
//                     <div className="bg-blue-600 h-2.5 rounded-full w-10/12"></div>
//                   </div>
//                   <span className="ml-2 text-sm font-medium text-gray-700">JavaScript</span>
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-full bg-gray-200 rounded-full h-2.5">
//                     <div className="bg-blue-600 h-2.5 rounded-full w-10/12"></div>
//                   </div>
//                   <span className="ml-2 text-sm font-medium text-gray-700">HTML/CSS</span>
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-full bg-gray-200 rounded-full h-2.5">
//                     <div className="bg-blue-600 h-2.5 rounded-full w-9/12"></div>
//                   </div>
//                   <span className="ml-2 text-sm font-medium text-gray-700">Tailwind CSS</span>
//                 </li>
//               </ul>
//             </div>
            
//             {/* Backend */}
//             <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
//               <div className="flex items-center mb-4">
//                 <Server size={20} className="text-green-600 mr-2" />
//                 <h4 className="font-semibold text-lg">Backend</h4>
//               </div>
//               <ul className="space-y-2">
//                 <li className="flex items-center">
//                   <div className="w-full bg-gray-200 rounded-full h-2.5">
//                     <div className="bg-green-600 h-2.5 rounded-full w-11/12"></div>
//                   </div>
//                   <span className="ml-2 text-sm font-medium text-gray-700">Node.js</span>
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-full bg-gray-200 rounded-full h-2.5">
//                     <div className="bg-green-600 h-2.5 rounded-full w-10/12"></div>
//                   </div>
//                   <span className="ml-2 text-sm font-medium text-gray-700">Express</span>
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-full bg-gray-200 rounded-full h-2.5">
//                     <div className="bg-green-600 h-2.5 rounded-full w-9/12"></div>
//                   </div>
//                   <span className="ml-2 text-sm font-medium text-gray-700">RESTful APIs</span>
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-full bg-gray-200 rounded-full h-2.5">
//                     <div className="bg-green-600 h-2.5 rounded-full w-8/12"></div>
//                   </div>
//                   <span className="ml-2 text-sm font-medium text-gray-700">JWT Auth</span>
//                 </li>
//               </ul>
//             </div>
            
//             {/* Database */}
//             <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
//               <div className="flex items-center mb-4">
//                 <Database size={20} className="text-purple-600 mr-2" />
//                 <h4 className="font-semibold text-lg">Database</h4>
//               </div>
//               <ul className="space-y-2">
//                 <li className="flex items-center">
//                   <div className="w-full bg-gray-200 rounded-full h-2.5">
//                     <div className="bg-purple-600 h-2.5 rounded-full w-11/12"></div>
//                   </div>
//                   <span className="ml-2 text-sm font-medium text-gray-700">MongoDB</span>
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-full bg-gray-200 rounded-full h-2.5">
//                     <div className="bg-purple-600 h-2.5 rounded-full w-9/12"></div>
//                   </div>
//                   <span className="ml-2 text-sm font-medium text-gray-700">Mongoose</span>
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-full bg-gray-200 rounded-full h-2.5">
//                     <div className="bg-purple-600 h-2.5 rounded-full w-8/12"></div>
//                   </div>
//                   <span className="ml-2 text-sm font-medium text-gray-700">SQL</span>
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-full bg-gray-200 rounded-full h-2.5">
//                     <div className="bg-purple-600 h-2.5 rounded-full w-7/12"></div>
//                   </div>
//                   <span className="ml-2 text-sm font-medium text-gray-700">Redis</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
          
//           {/* Additional Skills */}
//           <div className="mt-12 grid gap-8 md:grid-cols-2">
//             {/* Tools & Technologies */}
//             <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
//               <div className="flex items-center mb-4">
//                 <Briefcase size={20} className="text-gray-700 mr-2" />
//                 <h4 className="font-semibold text-lg">Tools & Technologies</h4>
//               </div>
//               <div className="flex flex-wrap gap-2">
//                 <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-700">Git</span>
//                 <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-700">GitHub</span>
//                 <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-700">Docker</span>
//                 <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-700">Webpack</span>
//                 <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-700">Redux</span>
//                 <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-700">Jest</span>
//                 <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-700">AWS</span>
//                 <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-700">Heroku</span>
//                 <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-700">Vercel</span>
//                 <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-700">Figma</span>
//               </div>
//             </div>
            
//             {/* Certifications */}
//             <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
//               <div className="flex items-center mb-4">
//                 <Award size={20} className="text-yellow-600 mr-2" />
//                 <h4 className="font-semibold text-lg">Certifications</h4>
//               </div>
//               <ul className="space-y-3">
//                 <li className="flex items-start">
//                   <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mt-1.5 mr-2"></span>
//                   <div>
//                     <p className="font-medium">Deloitte - React-developer</p>
//                     <p className="text-sm text-gray-500">Issued: 2024</p>
//                   </div>
//                 </li>
                 
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Second;


 import { BookOpen, Code, Server, Database, Briefcase, Award } from 'lucide-react';

const Second = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Education & Skills
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            My academic background and technical expertise
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <BookOpen className="mr-2" size={24} />
            Education
          </h3>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-lg">Bachelor of Computer Science</h4>
                  <p className="text-gray-600">Terrthankar mahaveer university</p>
                </div>
                <span className="text-gray-500 text-sm">2022 - 2026</span>
              </div>
              <p className="mt-4 text-gray-600">
                Focused on web development, algorithms, and data structures. Graduated with honors.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-lg">Full Stack Web Development</h4>
                  <p className="text-gray-600">Tech Bootcamp</p>
                </div>
                <span className="text-gray-500 text-sm">2022</span>
              </div>
              <p className="mt-4 text-gray-600">
                Intensive 12-week program covering modern web development practices with MERN stack.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Code className="mr-2" size={24} />
            Technical Skills
          </h3>
          
          <div className="grid gap-8 md:grid-cols-3">
            {/* Frontend */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <Code size={20} className="text-indigo-400 mr-2" />
                <h4 className="font-semibold text-lg">Frontend</h4>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-400 h-2.5 rounded-full w-11/12"></div>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700">React</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-400 h-2.5 rounded-full w-10/12"></div>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700">JavaScript</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-400 h-2.5 rounded-full w-10/12"></div>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700">HTML/CSS</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-400 h-2.5 rounded-full w-9/12"></div>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700">Tailwind CSS</span>
                </li>
              </ul>
            </div>
            
            {/* Backend */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <Server size={20} className="text-teal-400 mr-2" />
                <h4 className="font-semibold text-lg">Backend</h4>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-teal-400 h-2.5 rounded-full w-11/12"></div>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700">Node.js</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-teal-400 h-2.5 rounded-full w-10/12"></div>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700">Express</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-teal-400 h-2.5 rounded-full w-9/12"></div>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700">RESTful APIs</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-teal-400 h-2.5 rounded-full w-8/12"></div>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700">JWT Auth</span>
                </li>
              </ul>
            </div>
            
            {/* Database */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <Database size={20} className="text-rose-300 mr-2" />
                <h4 className="font-semibold text-lg">Database</h4>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-rose-300 h-2.5 rounded-full w-11/12"></div>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700">MongoDB</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-rose-300 h-2.5 rounded-full w-9/12"></div>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700">Mongoose</span>
                </li>
                <li className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-rose-300 h-2.5 rounded-full w-8/12"></div>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700">SQL</span>
                </li>
                 
              </ul>
            </div>
          </div>
          
          {/* Additional Skills */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Tools & Technologies */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <Briefcase size={20} className="text-gray-700 mr-2" />
                <h4 className="font-semibold text-lg">Tools & Technologies</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 border border-gray-200 rounded-full text-sm font-medium">Git</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 border border-gray-200 rounded-full text-sm font-medium">GitHub</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 border border-gray-200 rounded-full text-sm font-medium">Docker</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 border border-gray-200 rounded-full text-sm font-medium">Node.js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 border border-gray-200 rounded-full text-sm font-medium">context Api</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 border border-gray-200 rounded-full text-sm font-medium">React.js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 border border-gray-200 rounded-full text-sm font-medium">AWS</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 border border-gray-200 rounded-full text-sm font-medium">Mongodb</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 border border-gray-200 rounded-full text-sm font-medium">Vercel</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 border border-gray-200 rounded-full text-sm font-medium">Figma</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 border border-gray-200 rounded-full text-sm font-medium">Express.js</span>
              </div>
            </div>
            
            {/* Certifications */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <Award size={20} className="text-amber-400 mr-2" />
                <h4 className="font-semibold text-lg">Certifications</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-400 rounded-full mt-1.5 mr-2"></span>
                  <div>
                    <p className="font-medium">Deloitte - React-developer</p>
                    <p className="text-sm text-gray-500">Issued: 2024</p>
                  </div>
                </li>
                 
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;