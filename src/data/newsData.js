// src/data/newsData.js

export const newsItems = [
  {
    id: 20,
    date: "September 1, 2025",
    category: "GRANT",
    categoryColor: "orange",
    title: "New NIH MIRA Award for Biocompatible Quantum Sensors",
    summary: "We're excited to announce new support from the NIH! This MIRA award will enable the development of biocompatible nanoscale magnetic resonance tools using quantum sensors, allowing us to access biophysical dynamics in new and exciting ways.",
  },
  {
    id: 19,
    date: "July 18, 2025",
    category: "PUBLICATION",
    categoryColor: "blue",
    title: "Two New Preprints on Multiferroic Systems",
    summary: "Two new preprints on the ArXiv imaging multiferroic systems! One shows how we can access highly nonlinear behaviors, while the second explores the interplay of topology and transport in BiFeO3.",
    link: "https://arxiv.org/abs/2507.10724"
  },
  {
    id: 18,
    date: "June 10, 2025",
    category: "ACHIEVEMENT",
    categoryColor: "indigo",
    title: "Congratulations to Dr. Beaver!",
    summary: "Congratulations to the newly-minted Dr. Beaver! A great talk highlighting some great work - now just to finish up that last paper!",
    image: `${process.env.PUBLIC_URL}/images/events/nb_grad.jpg`
  },
  {
    id: 17,
    date: "June 3, 2025",
    category: "PUBLICATION",
    categoryColor: "blue",
    title: "Imaging Flux Channeling with Quantum Sensors",
    summary: "New work from the QMSI out now! See how NV centers can be used to map out time-varying magnetic fields in magnetic nanostructures, revealing flux channeling effects",
    link: "https://pubs.acs.org/doi/full/10.1021/acs.nanolett.5c02174"
  },
  {
    id: 16,
    date: "May 7, 2025",
    category: "CONFERENCE",
    categoryColor: "purple",
    title: "Northeastern Cross-College Magnetics Workshop",
    summary: "Great day at the Northeastern Cross-College magnetics workshop. Nicole and Nathaniel presented their new work on magnetoacoustic devices and VLF AC sensing. ",
    link: "https://cos.northeastern.edu/events/magnetics-workshop/",
    image: `${process.env.PUBLIC_URL}/images/events/cc_mag.jpg`
  },
  {
    id: 15,
    date: "April 28, 2025",
    category: "PUBLICATION",
    categoryColor: "blue",
    title: "Two New Joint Works on Magnetism in BiFeO3",
    summary: "Two new joint works on magnetism in BiFeO3, fresh off the press: Morphogenesis of spin cycloids in a noncollinear antiferromagnet.",
    link: "https://doi.org/10.1073/pnas.2423298122"
  },
  {
    id: 14,
    date: "April 2, 2025",
    category: "PUBLICATION",
    categoryColor: "blue",
    title: "Collaborative Work with UC Berkeley",
    summary: "New collaborative work with UC Berkeley out now - find out more about how defect emission can be tuned with local variations in crystal environment.",
    link: "https://pubs.aip.org/aip/jap/article/137/13/134402/3342051"
  },
  {
    id: 13,
    date: "March 18, 2025",
    category: "GRANT",
    categoryColor: "orange",
    title: "AFOSR Young Investigator Program Award",
    summary: "We're excited to announce support from the AFOSR Young Investigator Program! Read more about how quantum sensing can help address problems at the intersection of biophysics and magnetics.",
    link: "https://www.afosr.af.mil/News/Article-Display/Article/3307084/afosr-announces-2025-young-investigator-research-awards/"
  },
  {
    id: 12,
    date: "December 6, 2024",
    category: "AWARD",
    categoryColor: "yellow",
    title: "Nathaniel Wins Best Student Presentation at MRS",
    summary: "Congratulations to Nathaniel for winning 'Best Student Presentation' in the diamond session at MRS!",
  },
  {
    id: 11,
    date: "September 25, 2024",
    category: "MEDIA",
    categoryColor: "green",
    title: "Temperature Sensing Work Featured in Advanced Science News",
    summary: "Check out the highlight news article about our temperature sensing work: Diamond-based sensors measure temperatures on the nanoscale.",
    link: "https://www.advancedsciencenews.com/diamond-based-sensors-measure-temperatures-on-the-nanoscale/"
  },
  {
    id: 10,
    date: "September 2, 2024",
    category: "PUBLICATION",
    categoryColor: "blue",
    title: "Nathaniel's Temperature Sensing Paper Published",
    summary: "Nathaniel's new temperature sensing paper is now online! Check out how we can engineer the NV center Hamiltonian to be selectively sensitive to temperature at Advanced Quantum Technologies.",
    link: "https://onlinelibrary.wiley.com/doi/10.1002/qute.202400271"
  },
  {
    id: 9,
    date: "August 19, 2024",
    category: "CONFERENCE",
    categoryColor: "purple",
    title: "Inaugural QuESO Workshop at Northeastern",
    summary: "We're excited to be a part of the inaugural Quantum Engineering & Science Opportunities (QuESO) workshop at Northeastern.",
    link: "https://queso-boston.com/"
  },
  {
    id: 8,
    date: "June 17, 2024",
    category: "PUBLICATION",
    categoryColor: "blue",
    title: "Order-of-Magnitude Improvement in Sensitivity",
    summary: "New work from the Boston lab showing how to realize an order-of-magnitude improvement in sensitivity by carefully positioning an external magnet!",
    link: "https://pubs.aip.org/aip/apl/article/124/25/254001/3298693/Optimizing-off-axis-fields-for-two-axis"
  },
  {
    id: 7,
    date: "April 26, 2024",
    category: "MEDIA",
    categoryColor: "green",
    title: "BiFeO3 Research Highlighted by Northeastern",
    summary: "Our work on BiFeO3 was highlighted on Northeastern's COS webpage - learn more about why we're working on this material!",
    link: "https://cos.northeastern.edu/news/unveiling-the-potential-of-bismuth-ferrite-in-antiferromagnetic-spintronics-a-qa-with-professor-paul-stevenson/"
  },
  {
    id: 6,
    date: "April 5, 2024",
    category: "PUBLICATION",
    categoryColor: "blue",
    title: "Nicole's First Paper Makes JPCB Front Cover",
    summary: "Nicole's first paper is online, and made the front cover of JPCB! Congratulations! Find out more about how the geometry and curvature of obstacles shapes diffusion in membranes.",
    link: "https://doi.org/10.1021/acs.jpcb.3c07388"
  },
  {
    id: 5,
    date: "April 4, 2024",
    category: "PUBLICATION",
    categoryColor: "blue",
    title: "Nature Communications Paper on BiFeO3 Magnetism",
    summary: "Our paper using scanning NV microscopy to image the magnetism in BiFeO3 is now online at Nature Communications! Find out more about how complex magnetic ordering can be controlled with electric fields.",
    link: "https://www.nature.com/articles/s41467-024-47232-5"
  },
  {
    id: 4,
    date: "August 1, 2023",
    category: "LAB UPDATE",
    categoryColor: "gray",
    title: "Scanning NV System Moves to Building V",
    summary: "The scanning NV system has now moved to its permanent lab space in Building V. We've also moved our training documentation online!",
    link: "https://www.snvm-qmsi.com/"
  },
  {
    id: 3,
    date: "February 20, 2023",
    category: "AWARD",
    categoryColor: "yellow",
    title: "Nicole Wins Poster Competition at BPS 2023",
    summary: "Congratulations to Nicole for winning the poster competition at BPS 2023!",
  },
  {
    id: 2,
    date: "September 30, 2022",
    category: "LAB UPDATE",
    categoryColor: "gray",
    title: "New Scanning NV Magnetometer Operational",
    summary: "The new scanning NV magnetometer is now operational at the EQUAL labs in Burlington! This tool enables nanoscale magnetic fields to be measured and imaged in a wide range of materials. Thanks to Qnami for the installation and excellent user training sessions!",
  },
  {
    id: 1,
    date: "September 7, 2022",
    category: "LAB UPDATE",
    categoryColor: "gray",
    title: "EQUAL Labs Launch Event",
    summary: "Great launch event for the Experiential Quantum Advancement Laboratories (EQUAL) at the Burlington Innovation Campus! New facilities include a scanning NV magnetometer, state-of-the-art ARPES systems and new material growth platforms.",
  }
];

// Export categories for filtering
export const newsCategories = [
  { name: "ALL", color: "gray" },
  { name: "GRANT", color: "orange" },
  { name: "PUBLICATION", color: "blue" },
  { name: "AWARD", color: "yellow" },
  { name: "ACHIEVEMENT", color: "indigo" },
  { name: "CONFERENCE", color: "purple" },
  { name: "MEDIA", color: "green" },
  { name: "LAB UPDATE", color: "gray" }
];

// Helper function to get recent news (for homepage)
export const getRecentNews = (count = 3) => {
  return newsItems.slice(0, count);
};

// Helper function to get news by category
export const getNewsByCategory = (category) => {
  if (category === "ALL") return newsItems;
  return newsItems.filter(item => item.category === category);
};

// Helper function to get news by year
export const getNewsByYear = (year) => {
  return newsItems.filter(item => {
    const itemYear = new Date(item.date).getFullYear();
    return itemYear === year;
  });
};