import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
}

export default function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = title;

      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        if (description) meta.setAttribute('content', description);
      } else if (description) {
        const m = document.createElement('meta');
        m.setAttribute('name', 'description');
        m.setAttribute('content', description);
        document.head.appendChild(m);
      }
    }
  }, [title, description]);

  return null;
}


