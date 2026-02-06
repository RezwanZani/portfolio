import ServiceCard from './ServiceCard';
import services from '../../data/services';

const Services = () => {

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10 bg-slate-200/50 dark:bg-gray-900/80 relative overflow-hidden place-items-center justify-center">
      
      {/* Decoration: Faint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="container mx-auto max-w-[1400px] xl:max-w-[1200px] 2xl:max-w-[1280px] relative z-10"></div>

      <div className="container mx-auto max-w-[1400px] xl:max-w-[1200px] 2xl:max-w-[1280px]">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-2 sm:mb-3 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text py-2 leading-tight text-transparent drop-shadow-lg">
            Technical Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
            From architectural design to knowledge transfer, I offer a full spectrum of engineering services.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 place-items-center justify-center max-w-5xl mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.id} title={service.title} description={service.description} icon={service.icon} color={service.color} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;