const projects = [
{
    id: 1,
    title: 'Dynamic Cricket Auction',
    category: 'Web Application',
    description: 'A feature-rich auction platform with complex state management. Handles real-time bidding logic, budget tracking, and a full undo/redo history system using LocalStorage.',
    tech: ['Vanilla JS', 'ES6+', 'LocalStorage', 'CSS3'],
    image: 'https://placehold.co/600x400/0ea5e9/ffffff?text=Auction+App', // Replace with your screenshot
    github: '#', // Add your repo link
    live: '#',   // Add your live link
    featured: true, // Highlights the card slightly
},
{
    id: 2,
    title: 'Rover71 GCS Portal',
    category: 'Avionics Interface',
    description: 'The frontend for the Ground Control Station. Visualizes rover data and manages team recruitment. Built as part of the AAUB Mars Rover Team.',
    tech: ['React', 'Tailwind CSS', 'Vite', 'Team Git'],
    image: 'https://placehold.co/600x400/0f766e/ffffff?text=Rover71+Portal',
    github: '#',
    live: '#',
    featured: false,
},
];

export default projects;