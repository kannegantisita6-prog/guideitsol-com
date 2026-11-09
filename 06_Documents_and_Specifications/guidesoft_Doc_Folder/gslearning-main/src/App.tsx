import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CourseSearch from './components/CourseSearch';
import CategoryPage from './components/CategoryPage';
import SubcategoryPage from './components/SubcategoryPage';
import CourseCard from './components/CourseCard';
import BlogCard from './components/BlogCard';
import EventCard from './components/EventCard';
import SubscriptionModal from './components/SubscriptionModal';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';
import { User, Course, BlogPost, Event } from './types';
import { sampleUser, sampleCourses, sampleBlogPosts, sampleEvents } from './data/mockData';
import { courseCategories, getCategoryByName } from './data/categories';

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState<any>(null);
  const [currentView, setCurrentView] = useState<'home' | 'category' | 'subcategory'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(sampleCourses);

  const handleAuth = (userData: User) => {
    setUser(userData);
  };

  const handleSubscribe = (planType: 'monthly' | 'yearly') => {
    // Simulate Razorpay integration
    console.log(`Processing ${planType} subscription...`);
    
    // Update user subscription status
    if (user) {
      setUser({
        ...user,
        subscriptionStatus: 'premium',
        subscriptionExpiry: new Date(Date.now() + (planType === 'yearly' ? 365 : 30) * 24 * 60 * 60 * 1000)
      });
    }
    
    setShowSubscriptionModal(false);
    alert('Subscription activated successfully! Welcome to Premium!');
  };

  const handleCourseClick = (course: Course) => {
    setSelectedContent(course);
    // Here you would navigate to the course page or open video player
    console.log('Opening course:', course.title);
  };

  const handleBlogClick = (post: BlogPost) => {
    setSelectedContent(post);
    // Here you would navigate to the blog post page
    console.log('Opening blog post:', post.title);
  };

  const handleEventRegister = (event: Event) => {
    // Simulate event registration with payment
    console.log('Registering for event:', event.title);
    alert(`Event registration initiated for ${event.title}. Price: ₹${event.price}`);
  };

  const handleWatchDemo = () => {
    // Demo video functionality
    console.log('Playing demo video');
    alert('Demo video would play here!');
  };

  const handleCategorySelect = (categoryName: string | null) => {
    setSelectedCategory(categoryName);
    setSelectedSubcategory(null);
    
    if (categoryName) {
      // Filter courses by category (in a real app, this would be an API call)
      const categoryFiltered = sampleCourses.filter(course => 
        course.category.toLowerCase().includes(categoryName.toLowerCase()) ||
        categoryName.toLowerCase().includes(course.category.toLowerCase())
      );
      setFilteredCourses(categoryFiltered);
      setCurrentView('category');
    } else {
      setFilteredCourses(sampleCourses);
      setCurrentView('home');
    }
  };

  const handleSubcategorySelect = (subcategory: string | null) => {
    setSelectedSubcategory(subcategory);
    
    if (subcategory) {
      // Filter courses by subcategory (in a real app, this would be an API call)
      const subcategoryFiltered = sampleCourses.filter(course => 
        course.title.toLowerCase().includes(subcategory.toLowerCase()) ||
        course.description.toLowerCase().includes(subcategory.toLowerCase())
      );
      setFilteredCourses(subcategoryFiltered);
      setCurrentView('subcategory');
    } else if (selectedCategory) {
      handleCategorySelect(selectedCategory);
    } else {
      setFilteredCourses(sampleCourses);
      setCurrentView('home');
    }
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setFilteredCourses(sampleCourses);
  };

  const handleBackToCategory = () => {
    setCurrentView('category');
    setSelectedSubcategory(null);
    if (selectedCategory) {
      handleCategorySelect(selectedCategory);
    }
  };

  const userSubscriptionStatus = user?.subscriptionStatus || 'free';

  // Render different views
  if (currentView === 'category' && selectedCategory) {
    const categoryData = getCategoryByName(selectedCategory);
    if (categoryData) {
      return (
        <div className="min-h-screen bg-gray-50">
          <Header 
            user={user}
            onAuthClick={() => setShowAuthModal(true)}
            onSubscribeClick={() => setShowSubscriptionModal(true)}
          />
          <CategoryPage
            category={categoryData}
            courses={filteredCourses}
            userSubscriptionStatus={userSubscriptionStatus}
            onBack={handleBackToHome}
            onCourseClick={handleCourseClick}
            onSubscribeClick={() => setShowSubscriptionModal(true)}
            onSubcategoryClick={handleSubcategorySelect}
          />
          <Footer />
          
          <AuthModal
            isOpen={showAuthModal}
            onClose={() => setShowAuthModal(false)}
            onAuth={handleAuth}
          />
          <SubscriptionModal
            isOpen={showSubscriptionModal}
            onClose={() => setShowSubscriptionModal(false)}
            onSubscribe={handleSubscribe}
          />
        </div>
      );
    }
  }

  if (currentView === 'subcategory' && selectedSubcategory) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header 
          user={user}
          onAuthClick={() => setShowAuthModal(true)}
          onSubscribeClick={() => setShowSubscriptionModal(true)}
        />
        <SubcategoryPage
          subcategory={selectedSubcategory}
          categoryName={selectedCategory || 'Courses'}
          courses={filteredCourses}
          userSubscriptionStatus={userSubscriptionStatus}
          onBack={selectedCategory ? handleBackToCategory : handleBackToHome}
          onCourseClick={handleCourseClick}
          onSubscribeClick={() => setShowSubscriptionModal(true)}
        />
        <Footer />
        
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          onAuth={handleAuth}
        />
        <SubscriptionModal
          isOpen={showSubscriptionModal}
          onClose={() => setShowSubscriptionModal(false)}
          onSubscribe={handleSubscribe}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        user={user}
        onAuthClick={() => setShowAuthModal(true)}
        onSubscribeClick={() => setShowSubscriptionModal(true)}
      />

      {/* Hero Section */}
      <Hero 
        onSubscribeClick={() => setShowSubscriptionModal(true)}
        onWatchDemo={handleWatchDemo}
      />

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Courses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master in-demand skills with our comprehensive video courses taught by industry experts
            </p>
          </div>

          {/* Course Search and Filters */}
          <CourseSearch
            onCategorySelect={handleCategorySelect}
            onSubcategorySelect={handleSubcategorySelect}
            selectedCategory={selectedCategory}
            selectedSubcategory={selectedSubcategory}
          />

          {/* Course Categories Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Browse by Category</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {courseCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category.name)}
                  className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-left border border-gray-100 hover:border-blue-200"
                >
                  <h4 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {category.name}
                  </h4>
                  <p className="text-sm text-gray-500 mb-3">
                    {category.subcategories.length} specializations
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-blue-600 font-medium">
                      Explore →
                    </span>
                    <div className="flex items-center space-x-1">
                      <span className="text-xs text-gray-400">
                        {Math.floor(Math.random() * 50) + 10} courses
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                userSubscriptionStatus={userSubscriptionStatus}
                onCourseClick={handleCourseClick}
                onSubscribeClick={() => setShowSubscriptionModal(true)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Insights & Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep dive into real-world projects and learn from detailed case studies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleBlogPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                userSubscriptionStatus={userSubscriptionStatus}
                onPostClick={handleBlogClick}
                onSubscribeClick={() => setShowSubscriptionModal(true)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Live Workshops & Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join interactive workshops and masterclasses with industry professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onRegisterClick={handleEventRegister}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join over 10,000 developers who are already mastering cutting-edge technologies
          </p>
          <button
            onClick={() => setShowSubscriptionModal(true)}
            className="bg-white text-blue-600 px-12 py-4 rounded-2xl text-xl font-bold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-2xl"
          >
            Start Learning Today - ₹99/month
          </button>
          <p className="text-sm text-blue-200 mt-4">
            ✓ 7-day money back guarantee • ✓ Cancel anytime
          </p>
        </div>
      </section>

      <Footer />

      {/* Modals */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onAuth={handleAuth}
      />

      <SubscriptionModal
        isOpen={showSubscriptionModal}
        onClose={() => setShowSubscriptionModal(false)}
        onSubscribe={handleSubscribe}
      />
    </div>
  );
}