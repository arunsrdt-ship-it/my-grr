const accordionData = [
  {
    id:1,
    title: 'Module 1: Introduction to UX Design',
    duration: '1hr 24 min',
    lectures: 5,
    completed: 2,
    lessons: [
      { title: '1. What is User Experience (UX) Design?', completed: true, video: true, book: false, url: 'https://www.youtube.com/embed/55NvZjUZIO8'  },
      { title: '2. Historical Overview of UX Design', completed: true, video: true, book: true , url: 'https://www.youtube.com/embed/55NvZjUZIO8'},
      { title: '3. Understanding User-Centered Design', completed: false, video: true, book: true ,  url: 'https://www.youtube.com/embed/55NvZjUZIO8' },
      { title: '4. The Role of UX Design in Digital Products', completed: false, video: false, book: true },
      { title: '5. Introduction to UX Design Tools and Techniques', completed: false, video: true, book: true,  url: 'https://www.youtube.com/embed/55NvZjUZIO8'},
    ],
  },
  {
    id:2,
    title: 'Module 2: Basics of User-Centered Design',
    duration: '1hr 24 min',
    lectures: 5,
    completed: 0,
    lessons: [],
  },
  {
    id:3,
    title: 'Module 3: Elements of User Experience',
    duration: '1hr 24 min',
    lectures: 5,
    completed: 0,
    lessons: [],
  },
  {
    id:4,
    title: 'Module 4: Visual Design Principles',
    duration: '1hr 24 min',
    lectures: 5,
    completed: 0,
    lessons: [],
  },
];

export default accordionData;