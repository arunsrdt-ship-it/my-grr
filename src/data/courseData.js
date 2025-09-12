
import AWARD from "../assets/decription/award.png";

import STARS from "../assets/ForEnroll/Rating.png";
import INSTRUCTOR from "../assets/ForEnroll/Instructor.png";
import COURSE from "../assets/ForEnroll/course.png";
import ICON from "../assets/decription/icon.png";
import GRAD from "../assets/decription/grad.png";
import PLAY from "../assets/decription/play.png";
import FACEBOOK from "../assets/ForEnroll/facebook.png";
import LINKEDIN from "../assets/ForEnroll/linkedIn.png";
import WHATSAPP from "../assets/ForEnroll/whatsapp.png";

const courses = [
  {
    id: 1,
    title: "Introduction to UX Design",
    description:
      "This interactive e-learning course will introduce you to User Experience (UX) design, the art of creating products and services that are intuitive, enjoyable, and user-friendly.",
    certification:
      "Upon successful completion of this course, you will earn a prestigious certification that validates your expertise.",
    instructor: {
      name: "Ronald Richards",
      role: "UI/UX Designer",
      photo: ICON,
      rating: 4.5,
      students: 500,
      courses: 15,
    },
    enroll: {
      courseImage: COURSE,
      instructorIcon: INSTRUCTOR,
      starsImage: STARS,
      price: 0,
      originalPrice: 499,
      discount: "100% Off",
      ratingValue: 4.6,
      totalRatings: 651651,
      totalHours: 22,
      lectures: 155,
      level: "All levels",
      shareIcons: [
        { src: WHATSAPP, alt: "Whatsapp" },
        { src: FACEBOOK, alt: "Facebook" },
        { src: LINKEDIN, alt: "LinkedIn" },
      ],
    },
    syllabus: [
      {
        title: "Introduction to UX Design",
        lessons: [
          "What is User Experience (UX) Design?",
          "Historical Overview of UX Design",
          "Understanding User-Centered Design",
        ],
        totalLessons: 3,
        duration: "1 hour",
      },
      {
        title: "Visual Design Principles",
        lessons: ["Typography Basics", "Color Theory", "Layout Design"],
        totalLessons: 3,
        duration: "1 hour",
      },
    ],
  },
  {
    id: 2,
    title: "Advanced Interaction Design",
    description:
      "Master advanced interaction design techniques, focusing on micro-interactions, animations, and accessibility considerations.",
    certification:
      "Earn a certificate validating your advanced interaction design skills.",
    instructor: {
      name: "Jane Doe",
      role: "Senior UX Designer",
      photo: ICON,
      rating: 4.7,
      students: 350,
      courses: 10,
    },
    enroll: {
      courseImage: COURSE,
      instructorIcon: INSTRUCTOR,
      starsImage: STARS,
      price: 799,
      originalPrice: 999,
      discount: "20% Off",
      ratingValue: 4.7,
      totalRatings: 123456,
      totalHours: 30,
      lectures: 200,
      level: "Intermediate",
      shareIcons: [
        { src: WHATSAPP, alt: "Whatsapp" },
        { src: FACEBOOK, alt: "Facebook" },
        { src: LINKEDIN, alt: "LinkedIn" },
      ],
    },
    syllabus: [
      {
        title: "Advanced Prototyping",
        lessons: ["Prototype Tools", "Interactive Prototypes", "Testing Feedback"],
        totalLessons: 3,
        duration: "1.5 hours",
      },
    ],
  },
];

export default courses;
