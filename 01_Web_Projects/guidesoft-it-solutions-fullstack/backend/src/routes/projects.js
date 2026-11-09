const express = require('express');
const router = express.Router();

const projectsData = [
  {
    id: 'guideitsol-portal',
    title: 'GuideITSol Multi-Domain Enterprise Portal',
    client: 'GuideIT Solutions',
    category: 'Fullstack Platform',
    description: 'Comprehensive business portal aggregating immigration consulting, IT development, and client management.',
    technologies: ['Next.js', 'Express', 'React Native', 'MongoDB', 'Razorpay'],
    status: 'Active',
    url: 'https://guideitsol.com'
  },
  {
    id: 'visaflow-consulting',
    title: 'VisaFlow Immigration Suite',
    client: 'Global Immigration Clients',
    category: 'SaaS Platform',
    description: 'Automated study abroad, work permit, and tourist visa document handling pipeline.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Drizzle ORM', 'Express'],
    status: 'Production',
    url: 'https://guideitsol.com/visaflow'
  },
  {
    id: 'guidesoft-semantic-search',
    title: 'GuideSoft AI Semantic Search Engine',
    client: 'Enterprise AI Lab',
    category: 'AI / Vector Search',
    description: 'High-speed natural language vector search utilizing Elasticsearch ELSER embeddings.',
    technologies: ['Elasticsearch', 'Node.js', 'React', 'ELSER ML'],
    status: 'Completed'
  }
];

// @route   GET /api/projects
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    count: projectsData.length,
    data: projectsData
  });
});

// @route   GET /api/projects/:id
router.get('/:id', (req, res) => {
  const project = projectsData.find(p => p.id === req.params.id);
  if (!project) {
    return res.status(404).json({
      success: false,
      error: `Project with ID '${req.params.id}' not found`
    });
  }
  res.status(200).json({
    success: true,
    data: project
  });
});

module.exports = router;
