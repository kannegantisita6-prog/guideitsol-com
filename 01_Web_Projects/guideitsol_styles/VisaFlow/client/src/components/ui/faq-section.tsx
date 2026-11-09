import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
}

export const FAQSection = ({ items }: FAQSectionProps) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4" data-testid="faq-section">
      {items.map((item, index) => (
        <div key={index} className="glass-card rounded-2xl overflow-hidden" data-testid={`faq-item-${index}`}>
          <button
            onClick={() => toggleItem(index)}
            className="w-full p-6 text-left flex items-center justify-between hover:bg-white hover:bg-opacity-5 transition-all"
            data-testid={`faq-toggle-${index}`}
          >
            <span className="text-lg font-semibold">{item.question}</span>
            <ChevronDown 
              className={`transition-transform ${openItems.includes(index) ? 'rotate-180' : ''}`}
            />
          </button>
          {openItems.includes(index) && (
            <div className="p-6 pt-0 text-muted-foreground" data-testid={`faq-content-${index}`}>
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
