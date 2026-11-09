export interface Category {
  id: number;
  name: string;
  subcategories: string[];
}

export const courseCategories: Category[] = [
  {
    id: 1,
    name: "Software & IT",
    subcategories: [
      "Programming (Python, Java, C#, Go, Rust)",
      "Web Development (Frontend, Backend, Fullstack)",
      "Mobile App Development (Android, iOS, Flutter, React Native)",
      "Game Development (Unity, Unreal Engine, Godot)",
      "Data Science (Data Analysis, Pandas, NumPy)",
      "Artificial Intelligence & ML (TensorFlow, PyTorch, NLP, Computer Vision)",
      "Cloud Computing (AWS, Azure, GCP, DevOps)",
      "Cybersecurity & Ethical Hacking",
      "Blockchain & Web3 (Ethereum, Solidity, NFTs, Crypto)"
    ]
  },
  {
    id: 2,
    name: "Non-Software Academic",
    subcategories: [
      "Mathematics (Algebra, Calculus, Statistics)",
      "Physics, Chemistry, Biology",
      "Economics & Commerce",
      "Engineering (Civil, Mechanical, Electrical, Electronics)",
      "Medical & Health Sciences",
      "Law & Legal Studies",
      "Psychology & Social Sciences"
    ]
  },
  {
    id: 3,
    name: "Business & Professional",
    subcategories: [
      "Entrepreneurship",
      "Finance & Investment",
      "Stock Market & Trading",
      "Business Management & Leadership",
      "Human Resources (HR, Recruitment)",
      "Sales & Marketing",
      "Digital Marketing (SEO, SEM, SMM, Ads)",
      "Project Management (Agile, Scrum, PMP)"
    ]
  },
  {
    id: 4,
    name: "Online Earning & Freelancing",
    subcategories: [
      "Freelancing Platforms (Upwork, Fiverr, Freelancer)",
      "Affiliate Marketing",
      "Dropshipping & E-commerce (Shopify, Amazon FBA)",
      "YouTube Growth & Monetization",
      "Podcasting & Blogging",
      "Content Creation & Copywriting",
      "Print on Demand (Merch, Designs)",
      "Crypto & NFT Earning Models"
    ]
  },
  {
    id: 5,
    name: "Artificial Intelligence & Online Tools",
    subcategories: [
      "ChatGPT, Bard, Claude, Perplexity AI",
      "MidJourney, DALL·E, Stable Diffusion (AI Art)",
      "Runway ML, Pika Labs (AI Video)",
      "AI Music Tools (AIVA, Soundraw, Suno)",
      "AI Coding Assistants (GitHub Copilot, Replit AI)",
      "AI Office Tools (Notion AI, Jasper, Tome)",
      "AI Chatbots (Dialogflow, Botpress, Rasa)"
    ]
  },
  {
    id: 6,
    name: "Creative Arts & Design",
    subcategories: [
      "Graphic Design (Photoshop, Illustrator, CorelDraw)",
      "UI/UX Design (Figma, Adobe XD, Sketch)",
      "Animation (2D, 3D, Blender, Maya)",
      "Video Editing (Premiere Pro, Final Cut, DaVinci)",
      "Photography & Cinematography",
      "Music Production (FL Studio, Ableton, Logic Pro)",
      "Fashion Design & Styling"
    ]
  },
  {
    id: 7,
    name: "Lifestyle & Personal Growth",
    subcategories: [
      "Fitness & Gym Training",
      "Yoga & Meditation",
      "Nutrition & Diet Planning",
      "Cooking & Culinary Arts",
      "Travel & Adventure Skills",
      "Mindfulness & Stress Management",
      "Personal Finance & Budgeting",
      "Productivity & Time Management"
    ]
  },
  {
    id: 8,
    name: "Communication & Soft Skills",
    subcategories: [
      "Public Speaking",
      "Writing & Storytelling",
      "Critical Thinking",
      "Problem Solving",
      "Negotiation & Persuasion",
      "Interview Preparation",
      "Leadership Skills",
      "Language Learning (English, Spanish, French, Mandarin)"
    ]
  },
  {
    id: 9,
    name: "Modeling & Entertainment",
    subcategories: [
      "Modeling (Runway, Print, Commercial)",
      "Acting & Theater",
      "Dance (Hip-Hop, Classical, Salsa, Ballet)",
      "Singing & Voice Training",
      "Makeup & Personal Styling",
      "Influencer & Social Media Growth"
    ]
  },
  {
    id: 10,
    name: "Kids to College Learning",
    subcategories: [
      "Kids Learning (ABC, Numbers, Stories, Rhymes)",
      "School (1–10th Grade Subjects)",
      "Higher Secondary (11–12 Science, Commerce, Arts)",
      "College UG (Engineering, Medical, Arts, Commerce)",
      "Postgraduate (MBA, MSc, MTech, PhD)",
      "Competitive Exams (UPSC, SSC, JEE, NEET, IELTS, TOEFL, GRE)"
    ]
  },
  {
    id: 11,
    name: "Future Tech & Innovation",
    subcategories: [
      "Robotics",
      "Internet of Things (IoT)",
      "Augmented Reality (AR) & Virtual Reality (VR)",
      "Quantum Computing",
      "Nanotechnology",
      "Biotechnology & Genetic Engineering",
      "Space Technology & Aerospace",
      "Renewable Energy & Sustainability"
    ]
  }
];

// Helper functions
export const getAllSubcategories = (): string[] => {
  return courseCategories.flatMap(category => category.subcategories);
};

export const getCategoryByName = (name: string): Category | undefined => {
  return courseCategories.find(category => 
    category.name.toLowerCase() === name.toLowerCase()
  );
};

export const getSubcategoryCategory = (subcategory: string): Category | undefined => {
  return courseCategories.find(category => 
    category.subcategories.some(sub => 
      sub.toLowerCase().includes(subcategory.toLowerCase())
    )
  );
};

export const searchCategories = (query: string): Category[] => {
  const lowercaseQuery = query.toLowerCase();
  return courseCategories.filter(category => 
    category.name.toLowerCase().includes(lowercaseQuery) ||
    category.subcategories.some(sub => 
      sub.toLowerCase().includes(lowercaseQuery)
    )
  );
};