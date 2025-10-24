import { MessageSquare, Phone, Bot, Users, TrendingUp } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      number: '01',
      title: 'Start on WhatsApp',
      description:
        'Send a short message like "I want to learn German" or "I need help with my career." The system will ask a few quick questions about your goals, background, and situation.',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: Phone,
      number: '02',
      title: 'Free Introductory Call',
      description:
        'Before any coaching begins, you will receive a free introductory call with me. We talk about your goals, challenges, and the best plan for you. This meeting is completely free.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Bot,
      number: '03',
      title: 'Get Smart Support',
      description:
        'Once you decide to begin, my AI assistant will create useful materials for you such as a CV, cover letter, or personal action plan. You will receive them directly on WhatsApp as a PDF.',
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: Users,
      number: '04',
      title: 'Personal Coaching',
      description:
        'We meet for your personalized coaching session, where we focus on language, career strategy, and integration guidance. This is where technology meets human connection.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: TrendingUp,
      number: '05',
      title: 'Learn, Grow, Integrate',
      description:
        'After your coaching, you will know exactly what to do next. Whether it is applying for jobs, studying abroad, or integrating into a new country, I stay by your side.',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  const uniqueFeatures = [
    'Start instantly through WhatsApp',
    'First meeting is completely free',
    'AI-powered materials + real human coaching',
    'Available worldwide from your phone',
    'Built on technology, empathy, and experience',
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-50 via-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-white text-teal-700 rounded-full text-sm font-semibold inline-block mb-4 shadow-md">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              The WhatsApp Coaching Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your journey starts where you already communicate every day, on WhatsApp. This system is
            personal, simple, and completely unique. You are not talking to a robot. You are
            connecting with your coach.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 via-cyan-400 to-purple-400 opacity-30"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1 lg:text-right" style={{ textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                  <div className={`inline-block ${index % 2 === 0 ? '' : 'lg:ml-auto'}`}>
                    <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 max-w-lg hover:-translate-y-2">
                      <div className="flex items-start gap-4" style={{ flexDirection: index % 2 === 0 ? 'row-reverse' : 'row', textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                        <div className="flex-1">
                          <div className={`text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${step.color} mb-2`}>
                            {step.number}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 hover:rotate-6`}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Why This System Is{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Unique
            </span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uniqueFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 rounded-xl hover:bg-teal-50 transition-colors duration-200"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-xl text-gray-700 font-semibold mb-6">
              This is the future of international coaching, and I am proud to be one of the first to
              offer it.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Start Your Journey Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
