import { useState } from 'react';
import { Menu, X, ShoppingCart, Search, ChevronRight, LogIn, Crown } from 'lucide-react';
import { User as UserType } from '../types';
import { Button } from './ui/button';

const categories = [
  {
    name: "Explore by Goal",
    sub: [
      { name: "Learn AI", link: "/goals/ai" },
      { name: "Launch a new career", link: "/goals/career" },
      { name: "Prepare for a certification", link: "/goals/certifications" },
      { name: "Practice with Role Play", link: "/goals/roleplay" },
    ],
  },
  {
    name: "Development",
    sub: [
      { name: "Web Development", link: "/development/web" },
      { name: "Data Science", link: "/development/datascience" },
      { name: "Mobile Apps", link: "/development/mobile" },
      { name: "Programming Languages", link: "/development/languages" },
      { name: "Game Development", link: "/development/game" },
    ],
  },
  {
    name: "Business",
    sub: [
      { name: "Entrepreneurship", link: "/business/entrepreneurship" },
      { name: "Management", link: "/business/management" },
      { name: "Sales", link: "/business/sales" },
      { name: "Business Strategy", link: "/business/strategy" },
      { name: "E-commerce", link: "/business/ecommerce" },
    ],
  },
  {
    name: "Finance & Accounting",
    sub: [
      { name: "Accounting", link: "/finance/accounting" },
      { name: "Finance", link: "/finance/core" },
      { name: "Investing", link: "/finance/investing" },
      { name: "Crypto & Blockchain", link: "/finance/crypto" },
      { name: "Taxes", link: "/finance/taxes" },
    ],
  },
  {
    name: "IT & Software",
    sub: [
      { name: "Network & Security", link: "/it/network" },
      { name: "Hardware", link: "/it/hardware" },
      { name: "Operating Systems", link: "/it/os" },
      { name: "Databases", link: "/it/databases" },
      { name: "Cloud Computing", link: "/it/cloud" },
    ],
  },
  {
    name: "Office Productivity",
    sub: [
      { name: "Microsoft Office", link: "/office/microsoft" },
      { name: "Google Workspace", link: "/office/google" },
      { name: "Productivity Tools", link: "/office/tools" },
      { name: "Time Management", link: "/office/time" },
    ],
  },
  {
    name: "Personal Development",
    sub: [
      { name: "Leadership", link: "/personal/leadership" },
      { name: "Communication Skills", link: "/personal/communication" },
      { name: "Personal Finance", link: "/personal/finance" },
      { name: "Career Development", link: "/personal/career" },
    ],
  },
  {
    name: "Design",
    sub: [
      { name: "Graphic Design", link: "/design/graphic" },
      { name: "UX/UI", link: "/design/uxui" },
      { name: "3D & Animation", link: "/design/3d" },
      { name: "Fashion", link: "/design/fashion" },
      { name: "Interior Design", link: "/design/interior" },
    ],
  },
  {
    name: "Marketing",
    sub: [
      { name: "Digital Marketing", link: "/marketing/digital" },
      { name: "Branding", link: "/marketing/branding" },
      { name: "Social Media", link: "/marketing/social" },
      { name: "SEO", link: "/marketing/seo" },
      { name: "Content Marketing", link: "/marketing/content" },
    ],
  },
  {
    name: "Lifestyle",
    sub: [
      { name: "Arts & Crafts", link: "/lifestyle/arts" },
      { name: "Cooking", link: "/lifestyle/cooking" },
      { name: "Travel", link: "/lifestyle/travel" },
      { name: "Gaming", link: "/lifestyle/gaming" },
      { name: "Pet Care", link: "/lifestyle/pets" },
    ],
  },
  {
    name: "Photography & Video",
    sub: [
      { name: "Photography", link: "/photo/photography" },
      { name: "Video Editing", link: "/photo/video-editing" },
      { name: "Filmmaking", link: "/photo/filmmaking" },
      { name: "YouTube", link: "/photo/youtube" },
      { name: "Drone Photography", link: "/photo/drone" },
    ],
  },
  {
    name: "Health & Fitness",
    sub: [
      { name: "Fitness", link: "/health/fitness" },
      { name: "Yoga", link: "/health/yoga" },
      { name: "Mental Health", link: "/health/mental" },
      { name: "Sports", link: "/health/sports" },
      { name: "Nutrition", link: "/health/nutrition" },
    ],
  },
  {
    name: "Music",
    sub: [
      { name: "Instruments", link: "/music/instruments" },
      { name: "Vocal Training", link: "/music/vocals" },
      { name: "Music Theory", link: "/music/theory" },
      { name: "DJ", link: "/music/dj" },
      { name: "Music Production", link: "/music/production" },
    ],
  },
];

const issuers = [
  { name: "Amazon Web Services (AWS) Certifications", link: "/issuers/aws" },
  { name: "Microsoft Certifications", link: "/issuers/microsoft" },
  { name: "Cisco Certifications", link: "/issuers/cisco" },
  { name: "CompTIA Certifications", link: "/issuers/comptia" },
  { name: "Project Management Institute (PMI) Certifications", link: "/issuers/pmi" },
  { name: "Google Cloud Certifications", link: "/issuers/googlecloud" },
  { name: "Six Sigma Certifications", link: "/issuers/sixsigma" },
  { name: "Oracle Certifications", link: "/issuers/oracle" },
];

const subjects = [
  { name: "Cloud Certification", link: "/subjects/cloud" },
  { name: "Networking Certification", link: "/subjects/networking" },
  { name: "Cybersecurity Certification", link: "/subjects/cybersecurity" },
  { name: "Project Management Certification", link: "/subjects/project-management" },
  { name: "DevOps Certification", link: "/subjects/devops" },
];

// Navigation items
const navItems = [
  { name: "Home", link: "/" },
  { name: "Courses", link: "/courses" },
  { name: "Subscriptions", link: "/subscriptions" },
  { name: "Downloads", link: "/downloads" },
  { name: "Profile", link: "/profile" },
];

interface HeaderProps {
  user: UserType | null;
  onAuthClick: () => void;
  onSubscribeClick: () => void;
  onNavigate?: (view: string) => void;
}

export default function Header({ user, onAuthClick, onSubscribeClick, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <nav className="w-full sticky top-0 z-50 shadow-md border-b bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left section */}
          <div className="flex items-center space-x-4">
            {/* Mobile toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <div className="font-extrabold text-2xl text-white drop-shadow-md">
              gslearning
            </div>

            {/* Categories mega-menu */}
            <div className="relative hidden md:block">
              <Button
                variant="ghost"
                className="text-white font-medium hover:bg-white/20"
              >
                Categories
              </Button>
              <div className="absolute left-0 top-full mt-2 bg-white shadow-xl rounded-lg overflow-hidden w-[900px] grid grid-cols-3 gap-4 p-4">
                {/* Categories with sub */}
                <div>
                  {categories.map((cat, idx) => (
                    <div
                      key={idx}
                      className="relative group"
                      onMouseEnter={() => setHoveredCategory(cat.name)}
                      onMouseLeave={() => setHoveredCategory(null)}
                    >
                      <div className="flex justify-between items-center px-4 py-2 hover:bg-purple-50 cursor-pointer">
                        <span>{cat.name}</span>
                        <ChevronRight size={16} />
                      </div>

                      {hoveredCategory === cat.name && (
                        <div className="absolute top-0 left-full w-64 bg-white shadow-lg rounded-r-lg border-l">
                          {cat.sub.map((sub, sIdx) => (
                            <a
                              key={sIdx}
                              href={sub.link}
                              className="block px-4 py-2 hover:bg-purple-100 cursor-pointer"
                            >
                              {sub.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Popular Issuers */}
                <div>
                  <h4 className="font-semibold px-4 py-2">Popular Issuers</h4>
                  {issuers.map((issuer, idx) => (
                    <a
                      key={idx}
                      href={issuer.link}
                      className="block px-4 py-2 hover:bg-purple-50 cursor-pointer"
                    >
                      {issuer.name}
                    </a>
                  ))}
                </div>

                {/* Popular Subjects */}
                <div>
                  <h4 className="font-semibold px-4 py-2">Popular Subjects</h4>
                  {subjects.map((sub, idx) => (
                    <a
                      key={idx}
                      href={sub.link}
                      className="block px-4 py-2 hover:bg-purple-50 cursor-pointer"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation items */}
            <div className="hidden md:flex space-x-4 ml-6">
              {navItems.map((item, idx) => (
                <button
                  onClick={() => onNavigate?.(item.link.replace('/', ''))}
                  key={idx}
                  className="text-white font-medium hover:underline"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 mx-6">
            <div className="flex w-full border rounded-full overflow-hidden shadow-sm">
              <input
                type="text"
                placeholder="Search for anything"
                className="flex-1 px-4 py-2 outline-none"
              />
              <button className="px-4 bg-white text-purple-600 font-bold">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-4 text-sm font-medium text-white">
              <a href="#" className="hover:underline">
                gslearning Business
              </a>
              <a href="#" className="hover:underline">
                Teach on gslearning
              </a>
              <a href="#" className="hover:underline">
                My Learning
              </a>
            </div>

            <ShoppingCart size={22} className="text-white" />

            {user ? (
              <>
                {user.subscriptionStatus === 'free' && (
                  <button
                    onClick={onSubscribeClick}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2"
                  >
                    <Crown className="h-4 w-4" />
                    <span>Subscribe ₹99</span>
                  </button>
                )}
                <div className="flex items-center space-x-3">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-8 w-8 rounded-full border-2 border-gray-200"
                  />
                  <span className="text-white font-medium">{user.name}</span>
                  {user.subscriptionStatus === 'premium' && (
                    <Crown className="h-4 w-4 text-yellow-500" />
                  )}
                </div>
              </>
            ) : (
              <>
                <Button variant="outline" className="bg-white text-purple-600">
                  Log in
                </Button>
                <Button className="bg-purple-700 text-white hover:bg-purple-800">
                  Sign up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t px-4 pb-4 space-y-2 bg-white">
          <div className="flex flex-col space-y-2 text-sm font-medium">
            <a href="#">gslearning Business</a>
            <a href="#">Teach on gslearning</a>
            <a href="#">My Learning</a>
            {navItems.map((item, idx) => (
              <button
                onClick={() => onNavigate?.(item.link.replace('/', ''))}
                key={idx}
                className="text-left hover:text-blue-600"
              >
                {item.name}
              </button>
            ))}
            <div className="border rounded-full flex overflow-hidden">
              <input
                type="text"
                placeholder="Search for anything"
                className="flex-1 px-4 py-2 outline-none"
              />
              <button className="px-4 bg-purple-600 text-white">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}