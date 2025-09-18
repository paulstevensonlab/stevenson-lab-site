// src/data/teamData.js

export const principalInvestigator = {
  name: "Dr. Paul Stevenson",
  title: "Assistant Professor",
  department: "Department of Physics",
  email: "p.stevenson@northeastern.edu",
  photo: `${process.env.PUBLIC_URL}/images/team/pi/stevenson.jpg`, // Update with actual photo path
  bio: "Dr. Stevenson leads the quantum sensing laboratory at Northeastern University, focusing on developing novel quantum sensors for applications in physics, chemistry, biology, and materials science.",
  links: {
    email: "p.stevenson@northeastern.edu",
    googleScholar: "#",
    cv: "/files/stevenson-cv.pdf",
    orcid: "0000-0000-0000-0000"
  }
};

export const postdocs = [
  // Add postdoctoral fellows here when you have them
  // {
  //   name: "Dr. Name",
  //   photo: "/images/team/postdocs/name.jpg",
  //   research: "Research focus area",
  //   email: "email@northeastern.edu"
  // }
];

export const graduateStudents = [
  {
    name: "Nicole Voce",
    photo: <img 
          src={`${process.env.PUBLIC_URL}/images/team/students/nvoce.jpeg`} 
            alt="Nicole Voce"
            className="w-40 h-34 mx-auto mb-4 rounded-lg object-cover"
          />,
    degree: "PhD Student",
    research: "Biophysical Quantum Sensing",
  },
  {
    name: "You?",
    photo: <img 
          src={`${process.env.PUBLIC_URL}/images/team/students/new.png`} 
            alt="??"
            className="w-50 h-60 mx-auto mb-4 rounded-lg object-cover"
          />,
    degree: "Join us! We're looking for talented and motivated students to join our team.",
  },
  // Add more graduate students as needed
];

export const ugStudents = [
  {
    name: "Ky Farhadi",
    photo: `${process.env.PUBLIC_URL}/images/team/undergrads/ky-farhadi.jpg`, // Update with actual path
    major: "Biochemistry",
    year: "Senior", // Optional
    project: null // Optional
  },
  {
    name: "Joshua Reid",
    photo: `${process.env.PUBLIC_URL}/images/team/undergrads/joshua-reid.jpg`, // Update with actual path
    major: "Physics & Engineering",
    year: null,
    project: null
  },
  {
    name: "You?",
    photo: `${process.env.PUBLIC_URL}/images/team/students/new.png`, // Update with actual path
    major: "Contact Paul to learn about undergraduate research opportunities",
    year: null,
    project: null
  },
  // Add more undergraduate students as needed
];

export const pets = [
  {
    name: "Rockwell",
    title: "Assistant Purr-fessor",
    research: "Research area: Napping and catnip testing",
    photo: <img 
          src={`${process.env.PUBLIC_URL}/images/team/pets/rockwell.jpg`} 
            alt="Rockwell"
            className="w-40 h-40 mx-auto mb-4 rounded-lg object-cover"
          />,
  },
  {
    name: "Mimi",
    title: "Paw-stdoctoral Researcher",
    research: "Research area: Chasing lasers",
    photo: <img 
          src={`${process.env.PUBLIC_URL}/images/team/pets/mimi.jpg`} 
            alt="Mimi"
            className="w-40 h-40 mx-auto mb-4 rounded-lg object-cover"
          />,
  }
  // Add more lab pets as needed
];

export const alumni = {
  graduate: [
    {
      name: "Dr. Nathanial Beaver",
      degree: "PhD 2025",
      thesis: "Selective Temperature Sensing in Nanodiamonds",
    }
    // Add more graduate alumni
  ],
  undergraduate: [
    // Add undergraduate alumni here
    // {
    //   name: "Name",
    //   degree: "BS 2024",
    //   currentPosition: "Graduate Student",
    //   institution: "Harvard University"
    // }
  ]
};
