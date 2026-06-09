import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, GraduationCap, Briefcase, Code } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].about;
  
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">{t.title}</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
          </div>
          <a 
            href="./Resume_Szerement_Vivian.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-slate-700 hover:border-slate-600"
          >
            <FileDown size={18} />
            {t.download}
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
                {t.profile}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {t.profileText}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">{t.languages}</h3>
              <ul className="space-y-2 text-slate-400">
                <li>{t.langFrench}</li>
                <li>{t.langEnglish}</li>
                <li>{t.langChinese}</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">{t.skills}</h3>
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
                {t.experience}
              </h3>
              
              <div className="space-y-8">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h4 className="text-lg font-bold text-slate-200">{t.internAI}</h4>
                    <span className="text-blue-400 text-sm font-medium">{t.internAI_date}</span>
                  </div>
                  <p className="text-slate-400 font-medium mb-3">{t.internAI_loc}</p>
                  <ul className="list-disc list-outside ml-5 text-slate-400 space-y-1.5 text-sm">
                    <li>{t.internAI_1}</li>
                    <li>{t.internAI_2}</li>
                    <li>{t.internAI_3}</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h4 className="text-lg font-bold text-slate-200">{t.internProd}</h4>
                    <span className="text-blue-400 text-sm font-medium">{t.internProd_date}</span>
                  </div>
                  <p className="text-slate-400 font-medium mb-3">{t.internProd_loc}</p>
                  <ul className="list-disc list-outside ml-5 text-slate-400 space-y-1.5 text-sm">
                    <li>{t.internProd_1}</li>
                    <li>{t.internProd_2}</li>
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
                {t.education}
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h4 className="text-lg font-bold text-slate-200">{t.eduTongji}</h4>
                    <span className="text-blue-400 text-sm font-medium">{t.eduTongji_date}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{t.eduTongji_desc}</p>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h4 className="text-lg font-bold text-slate-200">{t.eduArts}</h4>
                    <span className="text-blue-400 text-sm font-medium">{t.eduArts_date}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{t.eduArts_desc}</p>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h4 className="text-lg font-bold text-slate-200">{t.eduDauphine}</h4>
                    <span className="text-blue-400 text-sm font-medium">{t.eduDauphine_date}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{t.eduDauphine_desc}</p>
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
