import { ReactNode } from "react";

interface TimelineStepProps {
  number: number;
  title: string;
  description: string;
  gradient: string;
}

interface TimelineProps {
  steps: TimelineStepProps[];
}

export const TimelineStep = ({ number, title, description, gradient }: TimelineStepProps) => {
  return (
    <div className="timeline-step glass-card rounded-2xl p-8 text-center group hover:scale-105 transition-all" data-testid={`timeline-step-${number}`}>
      <div className={`w-16 h-16 ${gradient} rounded-full flex items-center justify-center mx-auto mb-6 neon-glow`}>
        <span className="text-2xl font-bold text-white">{number}</span>
      </div>
      <h3 className="text-xl font-bold mb-3 gradient-text">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export const Timeline = ({ steps }: TimelineProps) => {
  return (
    <div className="grid md:grid-cols-4 gap-8" data-testid="timeline">
      {steps.map((step, index) => (
        <TimelineStep key={index} {...step} />
      ))}
    </div>
  );
};
