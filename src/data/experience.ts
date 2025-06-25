export interface Experience {
  title: string;
  company: string;
  date: string;
  description: string;
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    title: 'Business Technical Services Specialist',
    company: 'TSYS',
    date: 'March 2020 - Present (5 years 4 months)',
    description: 'Development of working relationships with client end-users, programmers and test analysts while assisting with the analysis, design, configuration, testing and maintenance of systems. Specialized in payment card industry (PCI) standards and ISO 8583 message standards for seamless interoperability in card processing ecosystems.',
    technologies: ['PL/SQL', 'PCI Compliance', 'ISO 8583', 'Payment Systems', 'System Architecture']
  },
  {
    title: 'Researcher and Developer Specialist',
    company: 'Roberto Pavusa Junior',
    date: 'March 2012 - Present (13 years 4 months)',
    description: 'Development, implementation and maintenance of systems and applications. Industrial automation systems and projects development. WEB3 Development (Full-Stack Blockchain Developer). Customer support for projects and infrastructure. Assistance to the development of medical devices.',
    technologies: ['Rust', 'Python', 'Node.js', 'Blockchain', 'Smart Contracts', 'PLC/SCADA']
  },
  {
    title: 'System Analyst',
    company: 'TMEIC',
    date: 'July 2013 - March 2020 (6 years 9 months)',
    description: 'Project management and operations of information technology services and Industrial Automation. Survey and specification of requirements and functionality of the systems. Specification architectures and solutions for automation computing environments. Development and implementation of systems with planning, scheduling, metrics and parameterizations.',
    technologies: ['Industrial Automation', 'PLC Programming', 'SCADA Systems', 'System Architecture', 'Project Management']
  },
  {
    title: 'University Lecturer',
    company: 'Universidade de Mogi das Cruzes',
    date: 'February 2013 - May 2013 (4 months)',
    description: 'Taught disciplines in Information Systems and Analysis and Systems Development courses including Requirements Analysis, Object Oriented Analysis, Fundamentals of Information Systems, Introduction to Software Engineering, Distributed Systems I, and Software Testing.',
    technologies: ['Software Engineering', 'Requirements Analysis', 'Object Oriented Analysis', 'Software Testing']
  },
  {
    title: 'Biomedical Researcher',
    company: 'Universidade de Mogi das Cruzes',
    date: 'April 2010 - February 2012 (1 year 11 months)',
    description: 'Development of medical image processing application. Assistance in laboratory techniques (Radiology and Molecular Biology). Treatment and care of animals (Biotherium).',
    technologies: ['Medical Image Processing', 'Biomedical Engineering', 'Laboratory Techniques']
  },
  {
    title: 'Systems Analyst',
    company: 'Portugal Telecom',
    date: 'July 2008 - December 2009 (1 year 6 months)',
    description: 'Development using Java and PL/SQL. Testing with HP Quality Center. Deployment with Oracle. Maintenance of systems and applications. Customer support.',
    technologies: ['Java', 'PL/SQL', 'Oracle', 'HP Quality Center', 'System Maintenance']
  },
  {
    title: 'Industrial Automation Consultant',
    company: 'Roberto Pavusa Junior',
    date: 'June 2005 - July 2009 (4 years 2 months)',
    description: 'Programming logical controllers (Allen-Bradley, Siemens, Moeller, Omron). Low-voltage electrical projects. Logical projects of weighing systems, development of supervision and control applications (Elipse SCADA). Man-machine interfaces programming.',
    technologies: ['Allen-Bradley', 'Siemens', 'SCADA', 'PLC Programming', 'Electrical Projects']
  },
  {
    title: 'Industrial Automation Technician',
    company: 'Mitsubishi Electric Corporation',
    date: 'August 2007 - July 2008 (1 year)',
    description: 'Programming of logical controllers (Mitsubishi). Development of supervision and control applications. Analysis, documentation and supervision of automation systems. Mounting and circuit layouts.',
    technologies: ['Mitsubishi', 'PLC Programming', 'Automation Systems', 'Circuit Layouts']
  }
]; 