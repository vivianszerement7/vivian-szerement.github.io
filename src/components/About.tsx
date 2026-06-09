import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, GraduationCap, Briefcase, Code } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    'Python', 'SQL', 'C++', 'AI/LLM', 'Computer Vision', 
    'Cloud (Azure)', 'IoT (MQTT, TCP)', 'CAD (Catia, SolidWorks)'
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">About Me</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
          </div>
          <a 
            href="./Resume_Szerement_Vivian.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-slate-700 hover:border-slate-600"
          >
            <FileDown size={18} />
            Download Resume (PDF)
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column: Summary & Skills */}
          <div className="lg:col-span-4 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Code className="text-blue-400" />
                Profile Summary
              </h3>
              <p className="text-slate-400 leading-relaxed">
                I am an Engineering Student seeking a 2027 summer internship as a Fellow Intern. 
                Passionate about leveraging Tech & AI for strategic transformation, I combine advanced technical 
                acumen (Robotics, GenAI, Edge Computing) with economic modeling to drive data-backed, innovative 
                solutions bridging complex engineering constraints and business objectives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Languages</h3>
              <ul className="space-y-2 text-slate-400">
                <li><span className="font-semibold text-slate-300">French:</span> Native</li>
                <li><span className="font-semibold text-slate-300">English:</span> C1 (965/990 TOEIC)</li>
                <li><span className="font-semibold text-slate-300">Chinese:</span> Intermediate (HSK2)</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className="bg-slate-800 text-blue-300 px-3 py-1 rounded-md text-sm border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Experience & Education */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 border-b border-slate-800 pb-3">
                <Briefcase className="text-blue-400" />
                Professional Experience
              </h3>
              
              <div className="space-y-8">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h4 className="text-lg font-bold text-slate-200">Tech & AI Engineering Intern</h4>
                    <span className="text-blue-400 text-sm font-medium">June – Aug. 2026</span>
                  </div>
                  <p className="text-slate-400 font-medium mb-3">Accenture <span className="text-slate-600 px-2">•</span> Sophia Antipolis</p>
                  <ul className="list-disc list-outside ml-5 text-slate-400 space-y-1.5 text-sm">
                    <li>Architected scalable edge-to-cloud systems integrating GenAI agents and IoT, translating complex automation challenges into strategic deployment roadmaps.</li>
                    <li>Developed and trained lightweight Computer Vision models for robotic applications, optimizing inference performance for edge hardware (ESP32, Raspberry Pi).</li>
                    <li>Deployed containerized AI microservices on Microsoft Azure, establishing real-time MQTT telemetry pipelines to ensure highly-available data synchronization.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h4 className="text-lg font-bold text-slate-200">Production & Continuous Improvement Intern</h4>
                    <span className="text-blue-400 text-sm font-medium">June – July 2025</span>
                  </div>
                  <p className="text-slate-400 font-medium mb-3">Arkopharma <span className="text-slate-600 px-2">•</span> Carros</p>
                  <ul className="list-disc list-outside ml-5 text-slate-400 space-y-1.5 text-sm">
                    <li>Ensured a daily throughput of 20 units across 10+ production and packaging lines by directing shift operations and resolving real-time mechanical bottlenecks.</li>
                    <li>Identified a 50% potential reduction in energy consumption over 10 years by conducting CSR audits and energy balance assessments across 100+ recycling sites.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 border-b border-slate-800 pb-3">
                <GraduationCap className="text-blue-400" />
                Education
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h4 className="text-lg font-bold text-slate-200">Tongji University</h4>
                    <span className="text-blue-400 text-sm font-medium">Sept. 2026 – Jan. 2028</span>
                  </div>
                  <p className="text-slate-400 text-sm">Double Degree Master's in Mechanical and Robotics Engineering (Shanghai, China)</p>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h4 className="text-lg font-bold text-slate-200">Arts et Métiers ParisTech</h4>
                    <span className="text-blue-400 text-sm font-medium">Sept. 2024 – Jan. 2028</span>
                  </div>
                  <p className="text-slate-400 text-sm">Master of Science in General Engineering (Grande École program) — Awarded the Excellence Scholarship</p>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h4 className="text-lg font-bold text-slate-200">Université Paris Dauphine – PSL</h4>
                    <span className="text-blue-400 text-sm font-medium">Sept. 2025 – June 2026</span>
                  </div>
                  <p className="text-slate-400 text-sm">Bachelor's Degree in Applied Economics (Fast-track for Grandes Écoles)</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
