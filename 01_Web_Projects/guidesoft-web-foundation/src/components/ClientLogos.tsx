const clients = [
  { name: 'Microsoft', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg' },
  { name: 'Google', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
  { name: 'Amazon', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
  { name: 'IBM', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ibm/ibm-original.svg' },
  { name: 'Oracle', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
  { name: 'Salesforce', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg' }
];

const ClientLogos = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-muted-foreground font-medium mb-8">
            Trusted by Industry Leaders Worldwide
          </h3>
          
          {/* Client Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 opacity-60">
            {clients.map((client, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-12 w-auto hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://via.placeholder.com/120x48/666666/FFFFFF?text=${client.name}`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-muted-foreground text-sm">Global Clients</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-secondary">50+</div>
            <div className="text-muted-foreground text-sm">Countries Served</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">1000+</div>
            <div className="text-muted-foreground text-sm">Projects Completed</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">15+</div>
            <div className="text-muted-foreground text-sm">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;