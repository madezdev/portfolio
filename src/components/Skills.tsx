import { useStore } from '@nanostores/react';
import { currentLanguage } from '../i18n/store';
import { useTranslations } from '../i18n/utils';

export default function Skills() {
  const lang = useStore(currentLanguage);
  const { t } = useTranslations(lang);

  const skillCategories = [
    {
      key: 'frontend',
      icon: '⚛️',
      color: 'blue',
      skills: [
        { name: 'React', percentage: 95 },
        { name: 'TypeScript', percentage: 90 },
        { name: 'Next.js', percentage: 88 },
        { name: 'Tailwind CSS', percentage: 95 }
      ]
    },
    {
      key: 'backend',
      icon: '🟢',
      color: 'green',
      skills: [
        { name: 'Node.js', percentage: 92 },
        { name: 'Express.js', percentage: 90 },
        { name: 'MongoDB', percentage: 85 },
        { name: 'PostgreSQL', percentage: 88 }
      ]
    },
    {
      key: 'design',
      icon: '🎨',
      color: 'purple',
      skills: [
        { name: 'Figma', percentage: 93 },
        { name: 'Adobe XD', percentage: 87 },
        { name: 'Git & GitHub', percentage: 95 },
        { name: 'Docker', percentage: 82 }
      ]
    }
  ];

  const technologies = [
    { icon: '⚛️', name: 'React' },
    { icon: '🟢', name: 'Node.js' },
    { icon: '📘', name: 'TypeScript' },
    { icon: '🔷', name: 'Tailwind' },
    { icon: '🎨', name: 'Figma' },
    { icon: '📱', name: 'React Native' },
    { icon: '🐳', name: 'Docker' },
    { icon: '🔄', name: 'Git' }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('skills.title').split(' ').slice(0, -1).join(' ')}{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t('skills.title').split(' ').slice(-1)[0]}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category) => (
            <div key={category.key} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-${category.color}-500/20 rounded-xl flex items-center justify-center mr-4`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {t(`skills.categories.${category.key}`)}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className={`text-${category.color}-400 text-sm`}>{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r from-${category.color}-400 to-${category.color}-600 h-2 rounded-full`}
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Icons Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center p-4 bg-slate-900/30 rounded-xl hover:bg-slate-900/50 transition-colors group">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <span className="text-gray-400 text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}