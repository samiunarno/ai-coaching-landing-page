import { Languages, Briefcase, Heart, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Languages, label: 'Languages', value: '6' },
    { icon: Briefcase, label: 'Years Experience', value: '5+' },
    { icon: Award, label: 'Qualifications', value: 'MBA' },
    { icon: Heart, label: 'Success Stories', value: '100+' },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Hi, I am{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                Rameen Noor
              </span>
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              I am 26 years old and hold a Master of Business Administration in Project Management
              and Innovation. For more than five years, I have worked as an interpreter for the
              Federal Office for Migration and Refugees (BAMF), public authorities, and the police
              in Germany.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              I speak <span className="font-semibold text-teal-700">Dari, Farsi, Urdu, German, English, and Spanish</span>. My
              multicultural background allows me to connect with people from all over the world and
              truly understand the challenges they face.
            </p>

            <div className="p-6 bg-white rounded-2xl shadow-lg border border-teal-100">
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "I came to Europe as a child with no language, no plan, and no direction. It was
                difficult for my brothers and me to learn German and adapt to a new culture. But
                with discipline, courage, and optimism, everything became possible."
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Today, my mission is to guide others on their own path. I help them learn German or
              English, find the right career direction, and integrate successfully into a new
              environment. I want to make the process of education, work, and adaptation easier for
              those who come after me.
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-teal-400 to-cyan-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-teal-500 to-cyan-700 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-6xl font-bold mb-4">RN</div>
                    <div className="text-xl font-semibold">Rameen Noor</div>
                    <div className="text-sm opacity-90 mt-2">Career & Integration Coach</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-400 rounded-full opacity-20 blur-2xl"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <stat.icon className="w-8 h-8 text-teal-600 mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-8 rounded-2xl shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-3">My Guide</h3>
              <p className="text-lg opacity-95 leading-relaxed">
                "No Plan. No Problem. Your journey begins right here." My guide stands for courage,
                clarity, and new beginnings. It is not about having all the answers. It is about
                finding the strength to start.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
