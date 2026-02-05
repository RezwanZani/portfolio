import { Map, Workflow, Cpu, Rocket } from "lucide-react";
const developmentProcess = [
  {
    title: "Discovery & Strategy",
    subtitle: "The Flight Plan",
    Icon: Map,
    description: "Before a single line of code is written, I map out the mission trajectory. We define the core problem, user requirements, and technical feasibility."
  },
  {
    title: "System Architecture",
    subtitle: "The Blueprint",
    Icon: Workflow,
    description: "Designing the internal logic. I structure the database schema, plan the API flow, and select the right tech stack (Next.js/React) for stability."
  },
  {
    title: "Development & Logic",
    subtitle: "The Assembly",
    Icon: Cpu,
    description: "The engine room. I write clean, optimized code, focusing on complex state management and efficient algorithms (C++/JS) to ensure speed."
  },
  {
    title: "Quality & Launch",
    subtitle: "Liftoff",
    Icon: Rocket,
    description: "Rigorous system checks. After performance testing and debugging, the application is deployed to the live environment, ready for the real world."
  }
];

function WorkProcess() {
  return (
    <section id="work-process" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-none dark:bg-none relative overflow-hidden">
      <div className="container mx-auto max-w-[1000px]">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text py-2 text-transparent">
            Work Process
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A glimpse into my approach to software development, from ideation to deployment.
          </p>
        </div>

        {/* Process Steps - Use flex-col to allow zig-zagging */}
        <div className="flex flex-col gap-10 md:gap-0 relative">
          {/* Optional: Add a vertical center line for visual "pathway" on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-700 -translate-x-1/2" />

          {developmentProcess.map((step, index) => (
            <div 
              key={index} 
              className={`
                relative z-10 w-[80%] md:w-[45%] 
                flex flex-col items-start 
                p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl
                hover:shadow-2xl transition-shadow duration-300
                /* Zig Zag Logic */
                ${index % 2 === 0 ? 'self-start' : 'self-end'}
                /* Add some margin top to create the staggered effect on desktop */
                ${index !== 0 ? 'md:-mt-12' : ''}
              `}
            >
              <div className="flex items-center gap-4 mb-4">
                 <div className="p-3 bg-sky-100 dark:bg-sky-900/30 rounded-lg">
                    <step.Icon className="w-8 h-8 text-sky-600 dark:text-sky-400" />
                 </div>
                 <span className="text-5xl font-black opacity-10 absolute right-6 top-6">0{index + 1}</span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {step.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-left">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkProcess;