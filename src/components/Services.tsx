import { Languages, Briefcase, Globe2, Rocket } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Languages,
      title: 'Language Coaching',
      subtitle: 'German and English',
      description:
        'Learning a new language is more than just memorizing words. It is about confidence, culture, and communication. In my language coaching, I focus on real-life speaking, so you can use what you learn immediately in studies, at work, or in everyday life.',
      highlights: [
        'Real-life conversation practice',
        'Cultural understanding',
        'Pronunciation and fluency',
        'Professional communication',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Briefcase,
      title: 'Career Coaching',
      subtitle: 'Build Your Professional Future',
      description:
        'Your skills and experience already matter. You just need to learn how to show them in the right way. I help you discover your strengths, define your goals, and build a clear path toward success.',
      highlights: [
        'Professional CV and cover letters',
        'Interview preparation',
        'LinkedIn optimization',
        'Personal branding strategy',
      ],
      gradient: 'from-teal-500 to-green-500',
    },
    {
      icon: Globe2,
      title: 'Integration Coaching',
      subtitle: 'Settle Into Your New Home',
      description:
        'Moving to a new country can be exciting, but also confusing. I provide clear, structured guidance on how to adapt to your new environment, understand cultural differences, and navigate local systems.',
      highlights: [
        'Cultural adaptation support',
        'Daily life management',
        'Community resources',
        'Local system navigation',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Rocket,
      title: 'Job & Study Placement',
      subtitle: 'Connect To Real Opportunities',
      description:
        'When you are ready to take the next step, I help you connect your skills to real opportunities. We explore options together such as universities, internships, or full-time jobs.',
      highlights: [
        'University and program guidance',
        'Internship opportunities',
        'Job search strategies',
        'Professional networking',
      ],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold inline-block mb-4">
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Support For Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Global Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I help people from all backgrounds prepare for their global careers and life transitions
            through a mix of personal coaching, smart technology, and cultural understanding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-transparent"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 from-teal-500 to-cyan-500"></div>

              <div className="relative p-8">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-teal-600 font-semibold mb-4">{service.subtitle}</p>
                <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>

                <div className="space-y-3">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0"></div>
                      <span className="text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`h-1 w-full bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              ></div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-200">
          <p className="text-center text-gray-700 text-lg">
            <span className="font-semibold text-gray-900">Note:</span> I provide coaching and
            preparation, not legal representation. My focus is on empowering you with the knowledge,
            skills, and confidence to succeed in your journey.
          </p>
        </div>
      </div>
    </section>
  );
}
