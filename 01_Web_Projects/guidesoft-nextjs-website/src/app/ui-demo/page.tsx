import { Metadata } from 'next';
import { Button, Card, AnimatedSection, Loading } from '@/components/ui';
import { ArrowRightIcon, StarIcon, HeartIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'UI Components Demo - Guidesoft',
  description: 'Showcase of enhanced UI components and animations',
};

export default function UIDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Enhanced UI Components
          </h1>
          <p className="text-xl text-gray-600">
            Showcase of our modern, animated, and interactive components
          </p>
        </AnimatedSection>

        {/* Button Variants */}
        <AnimatedSection delay={200} className="mb-16">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Button Components</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Variants</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="accent">Accent</Button>
                  <Button variant="gradient">Gradient</Button>
                  <Button variant="glass">Glass</Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Sizes</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="xs">Extra Small</Button>
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra Large</Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Rounded Variants</h3>
                <div className="flex flex-wrap gap-3">
                  <Button rounded="sm">Small Rounded</Button>
                  <Button rounded="md">Medium Rounded</Button>
                  <Button rounded="lg">Large Rounded</Button>
                  <Button rounded="full">Full Rounded</Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">With Icons & Loading</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="gradient">
                    Get Started <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                  <Button isLoading>Loading...</Button>
                  <Button variant="accent">
                    <HeartIcon className="mr-2 h-4 w-4" /> Favorite
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </AnimatedSection>

        {/* Card Variants */}
        <AnimatedSection delay={300} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="default" hover>
              <h3 className="text-lg font-semibold mb-3">Default Card</h3>
              <p className="text-gray-600">A standard card with soft shadows and hover effects.</p>
            </Card>
            
            <Card variant="elevated" hover>
              <h3 className="text-lg font-semibold mb-3">Elevated Card</h3>
              <p className="text-gray-600">Card with larger shadows for more prominence.</p>
            </Card>
            
            <Card variant="outlined" hover>
              <h3 className="text-lg font-semibold mb-3">Outlined Card</h3>
              <p className="text-gray-600">Clean card with border styling.</p>
            </Card>
            
            <Card variant="glass" hover glow>
              <h3 className="text-lg font-semibold mb-3">Glass Card</h3>
              <p className="text-gray-600">Modern glass morphism effect with backdrop blur.</p>
            </Card>
            
            <Card variant="gradient" hover>
              <h3 className="text-lg font-semibold mb-3">Gradient Card</h3>
              <p className="text-gray-600">Subtle gradient background for visual appeal.</p>
            </Card>
            
            <Card hover rounded="2xl" padding="xl">
              <h3 className="text-lg font-semibold mb-3">Custom Rounded</h3>
              <p className="text-gray-600">Extra large padding and rounded corners.</p>
            </Card>
          </div>
        </AnimatedSection>

        {/* Loading Components */}
        <AnimatedSection delay={400} className="mb-16">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Loading Indicators</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Spinner Variants</h3>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <Loading variant="spinner" size="sm" />
                    <p className="text-sm mt-2">Small</p>
                  </div>
                  <div className="text-center">
                    <Loading variant="spinner" size="md" />
                    <p className="text-sm mt-2">Medium</p>
                  </div>
                  <div className="text-center">
                    <Loading variant="spinner" size="lg" />
                    <p className="text-sm mt-2">Large</p>
                  </div>
                  <div className="text-center">
                    <Loading variant="spinner" size="xl" />
                    <p className="text-sm mt-2">Extra Large</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Other Variants</h3>
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <Loading variant="dots" />
                    <p className="text-sm mt-2">Dots</p>
                  </div>
                  <div className="text-center">
                    <Loading variant="pulse" />
                    <p className="text-sm mt-2">Pulse</p>
                  </div>
                  <div className="text-center">
                    <Loading variant="bars" />
                    <p className="text-sm mt-2">Bars</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Color Variants</h3>
                <div className="flex items-center gap-6">
                  <Loading variant="spinner" color="primary" />
                  <Loading variant="spinner" color="secondary" />
                  <Loading variant="spinner" color="accent" />
                </div>
              </div>
            </div>
          </Card>
        </AnimatedSection>

        {/* Animation Examples */}
        <AnimatedSection delay={500} className="mb-16">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Animation Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <AnimatedSection animation="fadeInUp" delay={100}>
                <div className="p-4 bg-blue-100 rounded-lg text-center">
                  <p className="font-semibold">Fade In Up</p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInScale" delay={200}>
                <div className="p-4 bg-green-100 rounded-lg text-center">
                  <p className="font-semibold">Fade In Scale</p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="slideInLeft" delay={300}>
                <div className="p-4 bg-purple-100 rounded-lg text-center">
                  <p className="font-semibold">Slide In Left</p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="slideInRight" delay={400}>
                <div className="p-4 bg-pink-100 rounded-lg text-center">
                  <p className="font-semibold">Slide In Right</p>
                </div>
              </AnimatedSection>
            </div>
          </Card>
        </AnimatedSection>

        {/* Interactive Examples */}
        <AnimatedSection delay={600}>
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Interactive Elements</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl hover:from-blue-100 hover:to-indigo-200 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 bg-blue-500 rounded-lg text-white group-hover:scale-110 transition-transform duration-200">
                      <StarIcon className="h-5 w-5" />
                    </div>
                    <span className="text-sm text-blue-600 font-medium">Feature</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Hover Effects</h3>
                  <p className="text-gray-600 text-sm">Interactive cards with smooth hover transitions</p>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl hover:from-green-100 hover:to-emerald-200 transition-all duration-300 cursor-pointer group animate-float">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 bg-green-500 rounded-lg text-white group-hover:scale-110 transition-transform duration-200">
                      <HeartIcon className="h-5 w-5" />
                    </div>
                    <span className="text-sm text-green-600 font-medium">Animation</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Floating Animation</h3>
                  <p className="text-gray-600 text-sm">Subtle floating effect for visual interest</p>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl hover:from-purple-100 hover:to-violet-200 transition-all duration-300 cursor-pointer group hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 bg-purple-500 rounded-lg text-white group-hover:scale-110 transition-transform duration-200">
                      <ArrowRightIcon className="h-5 w-5" />
                    </div>
                    <span className="text-sm text-purple-600 font-medium">Transform</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Lift Effect</h3>
                  <p className="text-gray-600 text-sm">Cards that lift up on hover with enhanced shadows</p>
                </div>
              </div>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
}