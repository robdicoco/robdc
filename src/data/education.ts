export interface Education {
  degree: string;
  institution: string;
  date: string;
  description?: string;
  type: 'degree' | 'certification';
}

export const educationData: Education[] = [
  {
    degree: 'Postgraduate Degree in Blockchain Technology, Tokenization and Security in Smart Contracts',
    institution: 'Sirius Education',
    date: 'February 2025 - February 2026',
    description: 'Computer Technology/Computer Systems Technology',
    type: 'degree'
  },
  {
    degree: 'Master in Biomedical Engineering',
    institution: 'Universidade de Mogi das Cruzes',
    date: '2010 - 2012',
    description: 'Biomedical/Medical Engineering',
    type: 'degree'
  },
  {
    degree: 'Information Systems Bachelor',
    institution: 'Universidade de Mogi das Cruzes',
    date: '2003 - 2006',
    description: 'Search algorithms',
    type: 'degree'
  },
  {
    degree: 'Mechatronics Technician',
    institution: 'ETE Presidente Vargas',
    date: '1999 - 2000',
    description: 'Mechatronics',
    type: 'degree'
  },
  {
    degree: 'High school with emphasis on civil construction',
    institution: 'ETE Presidente Vargas',
    date: '1998 - 2000',
    description: 'Civil construction',
    type: 'degree'
  }
];

export const certificationsData: Education[] = [
  {
    degree: 'Bootcamp Stellar',
    institution: 'Stellar Development Foundation',
    date: '2024',
    type: 'certification'
  },
  {
    degree: 'Fundamentos da Web3',
    institution: 'Web3 Foundation',
    date: '2024',
    type: 'certification'
  },
  {
    degree: 'Introdução a Smart Contracts',
    institution: 'Ethereum Foundation',
    date: '2024',
    type: 'certification'
  },
  {
    degree: 'IA para Empreendedores',
    institution: 'AI Institute',
    date: '2024',
    type: 'certification'
  },
  {
    degree: 'Rust 101',
    institution: 'Rust Foundation',
    date: '2024',
    type: 'certification'
  }
]; 