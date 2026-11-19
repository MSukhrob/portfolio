const COURSE = 'https://msukhrob.github.io/web-programming/'
const SRC = 'https://github.com/MSukhrob/web-programming/blob/main/'

export const COURSE_URL = COURSE
export const GITHUB_URL = 'https://github.com/MSukhrob'

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
]

export const stats = [
  { value: '80+', label: 'course tasks' },
  { value: '100', label: 'Lighthouse score' },
  { value: '12', label: 'weeks of practice' },
]

export const facts = [
  { term: 'University', detail: 'Gachon University' },
  { term: 'Major', detail: 'Computer Science' },
  { term: 'Course', detail: 'Web Programming (K0126002)' },
  { term: 'Focus', detail: 'Accessibility, performance and React' },
]

export const skillGroups = [
  { title: 'Front-end', items: ['HTML5', 'CSS3', 'Flexbox and Grid', 'JavaScript', 'React', 'useState', 'Vite'] },
  { title: 'Data and forms', items: ['Fetch API', 'Async / await', 'localStorage', 'Form validation', 'JSON'] },
  { title: 'Quality and tools', items: ['Accessibility', 'Performance', 'Lighthouse', 'Git and GitHub', 'GitHub Pages'] },
]

export const projects = [
  { id: 10, title: 'Interactive Shopping Cart', text: 'React state with objects & arrays, quantity controls, real-time total and promo discounts.', tags: ['React', 'State'], demo: COURSE + 'week12/task1.html', code: SRC + 'week12/task1.html' },
  { id: 11, title: 'Counter with History & Undo', text: 'Dual stateful counter tracking last 5 count values with undo functionality.', tags: ['React', 'State'], demo: COURSE + 'week12/task2.html', code: SRC + 'week12/task2.html' },
  { id: 1, title: 'Student Directory', text: 'A React app with a reusable StudentProfileCard component, props and custom CSS.', tags: ['React', 'Props'], demo: 'https://msukhrob.github.io/task11/', code: 'https://github.com/MSukhrob/task11' },
  { id: 2, title: 'React Practice Lab', text: 'Default props, conditional icons, props.children, StudentCard and ProductCard.', tags: ['React', 'Props'], demo: COURSE + 'week11/task2.html', code: SRC + 'week11/task2.html' },
  { id: 3, title: 'Project Gallery', text: 'ProjectCard, ProjectList and a FilterBar that filters cards by technology using state.', tags: ['React', 'State'], demo: COURSE + 'week11/task4.html', code: SRC + 'week11/task4.html' },
  { id: 4, title: 'Random Joke Generator', text: 'Loads a joke from a public API with a spinner, error handling and favourites in localStorage.', tags: ['JavaScript', 'API'], demo: COURSE + 'week6/task1.html', code: SRC + 'week6/task1.html' },
  { id: 5, title: 'Book Search App', text: 'Searches the Open Library API and renders the results as responsive cards.', tags: ['JavaScript', 'API'], demo: COURSE + 'week7/task1.html', code: SRC + 'week7/task1.html' },
  { id: 6, title: 'Form Validation', text: 'Live checks, ARIA messages, password confirmation and a smart submit button.', tags: ['JavaScript', 'Accessibility'], demo: COURSE + 'week9/task1.html', code: SRC + 'week9/task1.html' },
  { id: 7, title: 'Accessible Events Page', text: 'Skip link, labelled form and keyboard friendly controls, improved from 92 to 100.', tags: ['Accessibility', 'HTML'], demo: COURSE + 'week9_1/task1.html', code: SRC + 'week9_1/task1.html' },
  { id: 8, title: 'Performance Makeover', text: 'A gallery that went from 39 to 100 with WebP, lazy loading, defer and minified files.', tags: ['Performance', 'HTML'], demo: COURSE + 'week9_2/task1.html', code: SRC + 'week9_2/task1.html' },
  { id: 9, title: 'Hello Git', text: 'A Git and GitHub Pages exercise with branches, merges and a custom 404 page.', tags: ['Git', 'HTML'], demo: 'https://msukhrob.github.io/webpro-w9/', code: 'https://github.com/MSukhrob/webpro-w9' },
]

export const journey = [
  { when: 'Weeks 2-3', title: 'HTML and CSS', text: 'Semantic pages, the box model, flexbox, grid and responsive layouts.' },
  { when: 'Weeks 4-5', title: 'JavaScript and the DOM', text: 'Selecting elements, handling events and building small interactive tools.' },
  { when: 'Weeks 6-7', title: 'APIs', text: 'Fetching real data with async / await and showing loading and error states.' },
  { when: 'Weeks 8-9', title: 'Forms, accessibility and speed', text: 'Validation, ARIA, Lighthouse audits and performance optimisation.' },
  { when: 'Week 10', title: 'Git and deployment', text: 'Branches, merges, commits and publishing with GitHub Pages.' },
  { when: 'Week 11', title: 'React', text: 'Components, props, lists, conditional rendering and a filterable gallery.' },
  { when: 'Week 12', title: 'React State & Hooks', text: 'The useState Hook, immutable updates for objects/arrays, lifting state up, and interactive shopping cart.' },
]
