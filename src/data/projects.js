const projects = [
{
    id: 1,
    title: 'Dynamic Cricket Auction',
    category: 'Web Application',
    description: 'A feature-rich auction platform with complex state management. Handles real-time bidding logic, budget tracking, and a full undo/redo history system using LocalStorage.',
    tech: ['Vanilla JS', 'ES6+', 'LocalStorage', 'CSS3'],
    image: 'src/assets/projects/cricket-auction-app.png', // Replace with your screenshot
    github: 'https://github.com/RezwanZani/cricket-auction-app', // Add your repo link
    live: null,   // Add your live link
    featured: true, // Highlights the card slightly
},
{
    id: 2,
    title: 'Rover71 Website with Team management',
    category: 'Team Management',
    description: 'A comprehensive team management website featuring member profiles, project tracking, and collaborative tools. Built with modern React and styled using Tailwind CSS for a responsive design.',
    tech: ['React', 'Next.js', 'Firebase', 'Resend', 'Cloudinary', 'Tailwind CSS', 'Vite', 'Team Git'],
    image: 'src/assets/projects/rover71-website.png',
    github: '#',
    live: 'https://rover-71.vercel.app',
    featured: false,
},
];

export default projects;