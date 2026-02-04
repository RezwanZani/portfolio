import { Layout, Server, Database, GraduationCap, Palette, Network } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Frontend Design',
    description: 'Building responsive and modern web applications with cutting-edge technologies',
    icon: Layout,
    color: 'text-blue-500'
  },
  {
    id: 2,
    title: 'Backend & Logic',
    description: 'Scalable server-side solutions and robust APIs for enterprise applications',
    icon: Server,
    color: 'text-green-500'
  },
  {
    id: 3,
    title: 'Firebase Ecosystem',
    description: 'Efficient data modeling, optimization, and management strategies',
    icon: Database,
    color: 'text-purple-500'
  },
  {
    id: 4,
    title: 'UI/UX Engineering',
    description: 'Crafting intuitive user experiences with accessibility-first design and smooth interactions',
    icon: Palette,
    color: 'text-indigo-500'
  },
  {
    id: 5,
    title: 'API & System Design',
    description: 'Architecting scalable RESTful APIs and distributed systems with modern best practices',
    icon: Network,
    color: 'text-cyan-500'
  },
  {
    id: 6,
    title: 'Technical Consulting',
    description: 'Expert guidance on architecture, best practices, and technology decisions',
    icon: GraduationCap,
    color: 'text-orange-500'
  }
];

export default services;