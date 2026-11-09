'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Camera, Sparkles, Heart, Share2, Music } from 'lucide-react'

const storyExamples = [
  {
    id: 1,
    title: 'Beauty & Lifestyle',
    type: 'Story',
    colors: ['#FF6B9D', '#C44569', '#F8B500'],
    elements: ['camera', 'sparkles'],
    text: 'NEW POST CHECK IT OUT'
  },
  {
    id: 2,
    title: 'Premium Carwash',
    type: 'Story',
    colors: ['#4ECDC4', '#44A08D', '#2C3E50'],
    elements: ['sparkles', 'heart'],
    text: 'PREMIUM CARWASH'
  },
  {
    id: 3,
    title: 'Discover Beauty',
    type: 'Story',
    colors: ['#A8E6CF', '#DCEDC8', '#FFD3B6'],
    elements: ['camera', 'music'],
    text: 'Discover beauty of life'
  },
  {
    id: 4,
    title: 'Fitness Goals',
    type: 'Story',
    colors: ['#FF8A80', '#FF5252', '#D32F2F'],
    elements: ['heart', 'sparkles'],
    text: 'FITNESS GOALS'
  }
]

const features = [
  {
    icon: Camera,
    title: 'Story Templates',
    description: 'Choose from hundreds of Instagram story templates'
  },
  {
    icon: Sparkles,
    title: 'Animated Elements',
    description: 'Add animated stickers, GIFs, and effects'
  },
  {
    icon: Heart,
    title: 'Engagement Tools',
    description: 'Polls, questions, and interactive elements'
  },
  {
    icon: Share2,
    title: 'Easy Sharing',
    description: 'Export and share directly to Instagram'
  }
]

export default function InstagramStories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-display mb-6">
              Instagram Stories
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Build engagement with impressive Instagram stories. You'll reel in your viewers using our 
              Instagram story maker. Use the maker to incorporate fonts, colors, and shapes that will 
              make your business distinct. In minutes, you can create a design that will reinforce your 
              brand identity to the fullest.
            </p>
            
            {/* Features */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center space-x-2">
              <span>Make an Instagram Story</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Right Content - Story Examples */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Mobile Frame */}
            <div className="relative mx-auto w-80">
              {/* Phone Frame */}
              <div className="relative w-80 h-96 bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-purple-500 to-pink-500 z-10"></div>
                  
                  {/* Stories Container */}
                  <div className="pt-8 h-full flex">
                    {/* Story Examples */}
                    <div className="flex space-x-2 p-4">
                      {storyExamples.map((story, index) => (
                        <motion.div
                          key={story.id}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          className="flex-shrink-0"
                        >
                          <div 
                            className="w-20 h-32 rounded-2xl relative overflow-hidden shadow-lg"
                            style={{
                              background: `linear-gradient(135deg, ${story.colors[0]}, ${story.colors[1]})`
                            }}
                          >
                            {/* Story Content */}
                            <div className="absolute inset-0 p-3 flex flex-col justify-between">
                              {/* Top Elements */}
                              <div className="flex justify-between items-start">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                  <Camera className="w-4 h-4 text-white" />
                                </div>
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                  <Sparkles className="w-4 h-4 text-white" />
                                </div>
                              </div>
                              
                              {/* Center Text */}
                              <div className="text-center">
                                <div className="text-xs text-white/80 mb-1">
                                  {story.type}
                                </div>
                                <div className="text-sm font-bold text-white leading-tight">
                                  {story.text}
                                </div>
                              </div>
                              
                              {/* Bottom Elements */}
                              <div className="flex justify-center space-x-2">
                                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                                  <Heart className="w-3 h-3 text-white" />
                                </div>
                                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                                  <Music className="w-3 h-3 text-white" />
                                </div>
                              </div>
                            </div>
                            
                            {/* Animated Border */}
                            <motion.div
                              className="absolute inset-0 rounded-2xl border-2 border-white/30"
                              animate={{
                                scale: [1, 1.05, 1],
                                opacity: [0.3, 0.6, 0.3],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.5,
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-4 h-4 text-white" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center"
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart className="w-3 h-3 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
