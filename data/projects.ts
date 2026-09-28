export interface Project {
  slug: string
  title: string
  subtitle: string
  icon: string
  iconColor: string
  tags: Array<{ label: string; color: string }>
  stats: Array<{ value: string; label: string }>
  description: string
  features: string[]
  period: string
  buttonColor: string
  category: 'professional' | 'personal'
  technicalDetails?: string[]
  challenges?: string[]
  outcomes?: string[]
  link?: string
}

export const projects: Project[] = [
  {
    slug: 'integrated-erp-system',
    title: 'Integrated ERP System',
    subtitle: 'Enterprise Resource Planning',
    icon: 'fa-cogs',
    iconColor: 'blue',
    tags: [
      { label: 'PHP', color: 'blue' },
      { label: 'Node.js', color: 'cyan' },
      { label: 'MySQL', color: 'green' },
      { label: 'React Native', color: 'red' },
    ],
    stats: [
      { value: '200+', label: 'Daily Users' },
      { value: '++', label: 'Efficiency Gain' },
    ],
    description:
      'Comprehensive ERP system integrating HR, Accounting, Finance, Sales, Engineer, Warehouse, Inventory, Logistics, and Purchasing departments. Built from scratch to replace legacy systems and improve operational efficiency.',
    features: [
      'Multi-department workflow automation',
      'Real-time reporting and analytics',
      'Role-based access control',
      'API integration with external systems',
    ],
    technicalDetails: [
      'Backend built with PHP for robustness and compatibility',
      'Node.js for real-time features and API services',
      'MySQL database with optimized schema design',
      'React Native mobile app for field operations',
      'RESTful API architecture for system integration',
      'Automated backup and recovery systems',
    ],
    challenges: [
      'Migrating data from multiple legacy systems',
      'Training users across different departments',
      'Ensuring zero downtime during transition',
      'Integrating with existing external vendor systems',
    ],
    outcomes: [
      'Reduced manual processing time',
      'Improved data accuracy and consistency',
      'Streamlined inter-department communication',
      'Real-time visibility into business operations',
    ],
    period: '2015 - Present',
    buttonColor: 'blue',
    category: 'professional',
  },
  {
    slug: 'sap-transition-support',
    title: 'SAP Transition Support',
    subtitle: 'Enterprise System Implementation',
    icon: 'fa-server',
    iconColor: 'green',
    tags: [
      { label: 'SAP', color: 'green' },
      { label: 'Network', color: 'cyan' },
      { label: 'Compliance', color: 'red' },
      { label: 'Cisco', color: 'yellow' },
      { label: 'Mikrotik', color: 'blue' },
    ],
    stats: [
      { value: '99.9%', label: 'Uptime' },
      { value: '2', label: 'Legal Entities' },
    ],
    description:
      "Upgraded the company's network infrastructure to enhance reliability and coverage, aligned with Legrand Group standards, collaborated with Group IT in France and Regional SEA and ASIA IT teams. Supported the post-SAP transition by reducing legacy system usage.",
    features: [
      'Coordination with group IT (France, SEA, ASIA) for implementation',
      'Successful backup internet installation with dual-router configuration',
      'Improved wireless coverage with additional access points',
      'Legacy system usage reduction post-SAP migration',
    ],
    technicalDetails: [
      'Cisco and Mikrotik router configuration for redundancy',
      'Network infrastructure upgrade aligned with international standards',
      'Implementation of fail-over mechanisms',
      'Wireless network expansion with enterprise-grade access points',
      'Network security hardening and monitoring',
      'Documentation and knowledge transfer to local IT team',
    ],
    challenges: [
      'Coordinating with international team across time zones',
      'Ensuring compliance with Legrand Group IT policies',
      'Minimal disruption during network infrastructure changes',
      'Managing dual-vendor router ecosystem (Cisco & Mikrotik)',
    ],
    outcomes: [
      'Achieved 99.9% network uptime SLA',
      'Seamless SAP system connectivity for 2 legal entities',
      'Improved network reliability and redundancy',
      'Enhanced wireless coverage across facilities',
      'Successful collaboration with Global IT',
    ],
    period: '2024 - Present',
    buttonColor: 'green',
    category: 'professional',
  },
  {
    slug: 'ai-powered-assistant',
    title: 'AI-Powered Assistant System',
    subtitle: 'Smart Automation & Communication with AI',
    icon: 'fa-microchip',
    iconColor: 'orange',
    tags: [
      { label: 'Local LLM', color: 'orange' },
      { label: 'Open API', color: 'blue' },
      { label: 'Vision-Language', color: 'yellow' },
    ],
    stats: [
      { value: '100%', label: 'Private & Offline' },
      { value: 'API Ready', label: 'Easy Integration' },
    ],
    description:
      'AI-based assistant system built on local large language models (LLMs) and vision-language models (VLMs), designed to enhance automation, communication, and intelligent interaction across platforms and real-time image processing systems.',
    features: [
      'Local deployment of LLMs (Ollama, Llama.cpp) for fast and private AI processing',
      'Open API for connecting AI capabilities to external applications',
      'Real-time object identification using camera and VLMs',
      'Contextual AI replies via WhatsApp for assistance and inquiries',
    ],
    technicalDetails: [
      'Deployed using Ollama and Llama.cpp for efficient local inference',
      'Integration with vision-language models for image understanding',
      'RESTful API design for easy integration with existing systems',
      'WhatsApp integration for conversational AI',
      'Real-time camera feed processing with object detection',
      'Resource optimization for deployment on standard hardware',
    ],
    challenges: [
      'Optimizing model performance on limited hardware resources',
      'Integrating multiple AI models in a cohesive system',
      'Ensuring data privacy and security with local processing',
    ],
    outcomes: [
      '100% data privacy with fully local processing',
      'Rapid response times for user queries',
      'Automated visual inspection capabilities',
    ],
    period: '2025 - Present',
    buttonColor: 'orange',
    category: 'personal',
  },
  {
    slug: 'microsoft-power-platform',
    title: 'Microsoft Power Platform Solutions',
    subtitle: 'Streamlined Workflow & Smart Integration',
    icon: 'fa-clock',
    iconColor: 'cyan',
    tags: [
      { label: 'Power Automate', color: 'cyan' },
      { label: 'SharePoint', color: 'blue' },
      { label: 'MS Forms', color: 'green' },
      { label: 'Graph API', color: 'orange' },
    ],
    stats: [
      { value: '100%', label: 'MS Integrated' },
      { value: '2x', label: 'Faster Approval' },
    ],
    description:
      'Workflow automation and form-based systems built using Microsoft Power Platform to simplify internal processes, enable secure access, and enhance productivity through seamless Microsoft ecosystem integration.',
    features: [
      'Request Workflow for automated approval chains',
      'Application System using Microsoft Forms and Power Automate',
      'Auto Backup System using SharePoint and rclone',
      'Single Sign-On with Microsoft Account via Graph API',
    ],
    technicalDetails: [
      'Power Automate flows for multi-stage approval processes',
      'Microsoft Forms integration for data collection',
      'SharePoint as central document and data repository',
      'Microsoft Graph API for authentication and authorization',
      'rclone for automated cloud backup synchronization',
      'Power Apps for mobile-friendly user interfaces',
    ],
    challenges: [
      'Navigating Microsoft licensing and permissions model',
      'Designing intuitive workflows for non-technical users',
      'Ensuring secure data handling across cloud services',
      'Managing version control and deployment of Power Platform solutions',
      'Optimizing flow execution for performance and cost',
    ],
    outcomes: [
      'Faster process for approval requests',
      'Reduced manual data entry errors',
      'Improved employee self-service capabilities',
      'Seamless SSO experience across applications',
      'Automated backup ensuring data protection',
      'Enhanced visibility into request and approval status',
    ],
    period: '2024 - Present',
    buttonColor: 'blue',
    category: 'professional',
  },
  {
    slug: 'wytopup',
    title: 'WyTopup.com',
    subtitle: 'Digital Product Marketplace',
    icon: 'fa-shopping-cart',
    iconColor: 'blue',
    tags: [
      { label: 'Digital Product', color: 'blue' },
      { label: 'Payment Gateway', color: 'green' },
      { label: 'API Integration', color: 'cyan' },
    ],
    stats: [
      { value: '10+', label: 'Product Types' },
      { value: '24/7', label: 'Automated' },
    ],
    description:
      'Comprehensive digital product marketplace offering game top-ups, mobile credit, data packages, e-toll, vouchers, PLN tokens, and more. Fully automated system with multiple payment gateway integrations.',
    features: [
      'Automated top-up processing for games and mobile credit',
      'Multiple payment gateway integration',
      'Real-time transaction status tracking',
      'Admin panel for product and pricing management',
    ],
    period: '2024 - Present',
    buttonColor: 'blue',
    category: 'personal',
    link: 'https://wytopup.com',
  },
  {
    slug: 'okane',
    title: 'Okane - Money Tracker',
    subtitle: 'Personal Finance Management App',
    icon: 'fa-wallet',
    iconColor: 'blue',
    tags: [
      { label: 'React Native', color: 'blue' },
      { label: 'SQLite', color: 'green' },
      { label: 'Mobile App', color: 'cyan' },
    ],
    stats: [
      { value: 'Play Store', label: 'Published' },
      { value: 'Offline', label: 'Privacy First' },
    ],
    description:
      'Personal finance management application built with React Native. Track expenses, manage multiple wallets, and gain insights into spending habits. All data stored locally for complete privacy.',
    features: [
      'Multi-wallet support with different currencies',
      'Category-based expense tracking',
      'Monthly and yearly financial reports',
      'Offline-first with local SQLite database',
    ],
    period: '2025 - Present',
    buttonColor: 'green',
    category: 'personal',
    link: 'https://play.google.com/store/apps/details?id=id.my.yosefa.okane',
  },
  {
    slug: 'network-monitoring',
    title: 'IT Network Monitoring',
    subtitle: 'Real-time Network Analytics',
    icon: 'fa-network-wired',
    iconColor: 'orange',
    tags: [
      { label: 'Monitoring', color: 'orange' },
      { label: 'Real-time', color: 'red' },
      { label: 'Network', color: 'blue' },
    ],
    stats: [
      { value: 'Real-time', label: 'Monitoring' },
      { value: '24/7', label: 'Uptime Track' },
    ],
    description:
      'Network monitoring system for real-time bandwidth tracking and device online status. Provides instant visibility into network performance and connectivity issues.',
    features: [
      'Real-time bandwidth usage monitoring',
      'Device online/offline status tracking',
      'Historical data and trend analysis',
      'Alert system for network anomalies',
    ],
    technicalDetails: [
      'SNMP protocol integration for network device monitoring',
      'WebSocket implementation for real-time data streaming',
      'Custom dashboard with interactive charts and graphs',
      'API integration with network equipment',
      'Automated alert system with email',
    ],
    challenges: [
      'Handling high-frequency data from multiple network devices',
      'Ensuring minimal performance impact on network infrastructure',
      'Standardizing data collection across different device vendors',
    ],
    outcomes: [
      'Reduced network troubleshooting time',
      'Proactive identification of bandwidth bottlenecks',
      'Improved network uptime',
      'Enhanced visibility into network usage patterns',
    ],
    period: '2025 - Present',
    buttonColor: 'orange',
    category: 'professional',
  },
  {
    slug: 'whatsapp-ai-chatbot',
    title: 'WhatsApp AI Chatbot',
    subtitle: 'Intelligent Conversational Assistant',
    icon: 'fa-comments',
    iconColor: 'green',
    tags: [
      { label: 'AI', color: 'cyan' },
      { label: 'WhatsApp', color: 'green' },
      { label: 'Automation', color: 'blue' },
    ],
    stats: [
      { value: 'AI-Powered', label: 'Smart Replies' },
      { value: 'Instant', label: 'Response' },
    ],
    description:
      'AI-powered chatbot integrated with WhatsApp for intelligent conversations. Leverages natural language processing for context-aware responses.',
    features: [
      'Natural language understanding and processing',
      'Context-aware conversation handling',
      'Automated response to common queries',
      'Integration with WhatsApp',
    ],
    technicalDetails: [
      'WhatsApp integration for message handling',
      'Local LLM deployment (Ollama/Llama.cpp) for AI processing',
      'Context management system for multi-turn conversations',
      'Webhook architecture for real-time message processing',
    ],
    challenges: [
      'Managing conversation context across multiple sessions',
      'Optimizing AI response time for instant messaging expectations',
      'Ensuring appropriate and safe AI responses',
    ],
    outcomes: [
      'Automated responses to common inquiries',
    ],
    period: '2025 - Present',
    buttonColor: 'green',
    category: 'personal',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}
