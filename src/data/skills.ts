export interface Skill {
  name: string;
  rating: number;
  category: string;
}

export const skillsData: Skill[] = [
  // Programming Languages
  { name: 'Rust', rating: 5, category: 'Programming Languages' },
  { name: 'Python', rating: 5, category: 'Programming Languages' },
  { name: 'Node.js', rating: 5, category: 'Programming Languages' },
  { name: 'C++', rating: 4, category: 'Programming Languages' },
  { name: 'Java', rating: 4, category: 'Programming Languages' },
  { name: 'PL/SQL', rating: 5, category: 'Programming Languages' },
  
  // Blockchain & Web3
  { name: 'Blockchain', rating: 5, category: 'Blockchain & Web3' },
  { name: 'Smart Contracts', rating: 5, category: 'Blockchain & Web3' },
  { name: 'Cryptography', rating: 4, category: 'Blockchain & Web3' },
  { name: 'Web3 Development', rating: 5, category: 'Blockchain & Web3' },
  { name: 'Tokenization', rating: 4, category: 'Blockchain & Web3' },
  
  // Cloud & Infrastructure
  { name: 'AWS', rating: 4, category: 'Cloud & Infrastructure' },
  { name: 'Cloud Platforms', rating: 4, category: 'Cloud & Infrastructure' },
  
  // Industrial Automation
  { name: 'PLC Programming', rating: 5, category: 'Industrial Automation' },
  { name: 'SCADA Systems', rating: 5, category: 'Industrial Automation' },
  { name: 'Industrial Automation', rating: 5, category: 'Industrial Automation' },
  { name: 'Allen-Bradley', rating: 5, category: 'Industrial Automation' },
  { name: 'Siemens', rating: 4, category: 'Industrial Automation' },
  { name: 'Mitsubishi', rating: 4, category: 'Industrial Automation' },
  
  // Full-Stack Development
  { name: 'Full-Stack Development', rating: 5, category: 'Full-Stack Development' },
  { name: 'System Architecture', rating: 5, category: 'Full-Stack Development' },
  { name: 'Database Design', rating: 5, category: 'Full-Stack Development' },
  { name: 'API Development', rating: 5, category: 'Full-Stack Development' },
  
  // Project Management
  { name: 'Project Management', rating: 5, category: 'Project Management' },
  { name: 'Requirements Analysis', rating: 5, category: 'Project Management' },
  { name: 'Strategic Communications', rating: 5, category: 'Project Management' },
  { name: 'C-level Communication', rating: 5, category: 'Project Management' },
  
  // Languages
  { name: 'Portuguese', rating: 5, category: 'Languages' },
  { name: 'English', rating: 5, category: 'Languages' },
  { name: 'Spanish', rating: 4, category: 'Languages' },
  { name: 'French', rating: 3, category: 'Languages' },
  { name: 'Japanese', rating: 3, category: 'Languages' },
  
  // Other Skills
  { name: 'PCI Compliance', rating: 5, category: 'Other Skills' },
  { name: 'ISO 8583', rating: 4, category: 'Other Skills' },
  { name: 'Payment Systems', rating: 5, category: 'Other Skills' },
  { name: 'Medical Device Development', rating: 4, category: 'Other Skills' },
  { name: 'Biomedical Engineering', rating: 4, category: 'Other Skills' },
];

export const groupSkillsByCategory = (skills: Skill[]) => {
  const grouped: { [key: string]: Skill[] } = {};
  skills.forEach(skill => {
    if (!grouped[skill.category]) {
      grouped[skill.category] = [];
    }
    grouped[skill.category].push(skill);
  });
  return grouped;
}; 