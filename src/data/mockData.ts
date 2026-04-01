export interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  status: 'onboarding' | 'ativo' | 'férias';
  skills: string[];
  avatar: string;
  startDate: string;
  birthday: string;
  email: string;
  location: string;
  salary: string;
}

export interface Candidate {
  id: string;
  name: string;
  role: string;
  score: number;
  avatar: string;
  stage: 'triagem' | 'entrevista' | 'fit-cultural' | 'proposta' | 'contratado';
  skills: string[];
  location: string;
  salaryExpectation: string;
  email: string;
  phone: string;
  experience: string;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  urgency: 'alta' | 'média' | 'baixa';
  candidates: number;
  createdAt: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  type: 'entrevista' | 'feedback' | 'reunião';
  date: string;
  time: string;
  participant: string;
}

export const employees: Employee[] = [
  { id: '1', name: 'Ana Silva', role: 'Desenvolvedora Frontend', department: 'Tecnologia', status: 'ativo', skills: ['React', 'TypeScript', 'CSS'], avatar: '', startDate: '2023-03-15', birthday: '04-12', email: 'ana@empresa.com', location: 'São Paulo', salary: 'R$ 12.000' },
  { id: '2', name: 'Carlos Oliveira', role: 'Product Manager', department: 'Produto', status: 'ativo', skills: ['Scrum', 'Analytics', 'Roadmap'], avatar: '', startDate: '2022-08-01', birthday: '04-25', email: 'carlos@empresa.com', location: 'Rio de Janeiro', salary: 'R$ 15.000' },
  { id: '3', name: 'Maria Santos', role: 'UX Designer', department: 'Design', status: 'férias', skills: ['Figma', 'Research', 'Prototyping'], avatar: '', startDate: '2023-01-10', birthday: '07-08', email: 'maria@empresa.com', location: 'Belo Horizonte', salary: 'R$ 10.000' },
  { id: '4', name: 'Pedro Costa', role: 'Engenheiro Backend', department: 'Tecnologia', status: 'ativo', skills: ['Node.js', 'Python', 'AWS'], avatar: '', startDate: '2021-11-20', birthday: '09-15', email: 'pedro@empresa.com', location: 'São Paulo', salary: 'R$ 14.000' },
  { id: '5', name: 'Julia Ferreira', role: 'Analista de RH', department: 'RH', status: 'onboarding', skills: ['Recrutamento', 'People Analytics'], avatar: '', startDate: '2024-03-01', birthday: '12-03', email: 'julia@empresa.com', location: 'Curitiba', salary: 'R$ 8.000' },
  { id: '6', name: 'Rafael Mendes', role: 'Data Scientist', department: 'Dados', status: 'ativo', skills: ['Python', 'ML', 'SQL'], avatar: '', startDate: '2022-05-10', birthday: '04-18', email: 'rafael@empresa.com', location: 'São Paulo', salary: 'R$ 16.000' },
  { id: '7', name: 'Beatriz Lima', role: 'Marketing Digital', department: 'Marketing', status: 'ativo', skills: ['SEO', 'Google Ads', 'Conteúdo'], avatar: '', startDate: '2023-06-01', birthday: '11-22', email: 'beatriz@empresa.com', location: 'Porto Alegre', salary: 'R$ 9.000' },
  { id: '8', name: 'Lucas Almeida', role: 'DevOps Engineer', department: 'Tecnologia', status: 'ativo', skills: ['Docker', 'Kubernetes', 'CI/CD'], avatar: '', startDate: '2022-02-14', birthday: '06-30', email: 'lucas@empresa.com', location: 'Florianópolis', salary: 'R$ 13.000' },
];

export const candidates: Candidate[] = [
  { id: 'c1', name: 'Fernanda Rocha', role: 'Desenvolvedora Full Stack', score: 92, avatar: '', stage: 'proposta', skills: ['React', 'Node.js', 'PostgreSQL'], location: 'São Paulo', salaryExpectation: 'R$ 13.000', email: 'fernanda@email.com', phone: '(11) 99999-1111', experience: '5 anos' },
  { id: 'c2', name: 'Gustavo Pires', role: 'Product Designer', score: 87, avatar: '', stage: 'entrevista', skills: ['Figma', 'Design System', 'UX Research'], location: 'Rio de Janeiro', salaryExpectation: 'R$ 11.000', email: 'gustavo@email.com', phone: '(21) 99999-2222', experience: '4 anos' },
  { id: 'c3', name: 'Isabela Nunes', role: 'Analista de Dados', score: 78, avatar: '', stage: 'triagem', skills: ['SQL', 'Python', 'Tableau'], location: 'Belo Horizonte', salaryExpectation: 'R$ 9.000', email: 'isabela@email.com', phone: '(31) 99999-3333', experience: '3 anos' },
  { id: 'c4', name: 'Thiago Martins', role: 'Engenheiro Backend', score: 95, avatar: '', stage: 'fit-cultural', skills: ['Go', 'Microservices', 'AWS'], location: 'Curitiba', salaryExpectation: 'R$ 15.000', email: 'thiago@email.com', phone: '(41) 99999-4444', experience: '7 anos' },
  { id: 'c5', name: 'Camila Souza', role: 'Gerente de Projetos', score: 83, avatar: '', stage: 'entrevista', skills: ['PMP', 'Agile', 'Liderança'], location: 'São Paulo', salaryExpectation: 'R$ 14.000', email: 'camila@email.com', phone: '(11) 99999-5555', experience: '6 anos' },
  { id: 'c6', name: 'Bruno Azevedo', role: 'Desenvolvedor Mobile', score: 70, avatar: '', stage: 'triagem', skills: ['React Native', 'Flutter', 'iOS'], location: 'Porto Alegre', salaryExpectation: 'R$ 12.000', email: 'bruno@email.com', phone: '(51) 99999-6666', experience: '3 anos' },
  { id: 'c7', name: 'Larissa Campos', role: 'Analista de Marketing', score: 88, avatar: '', stage: 'contratado', skills: ['Growth', 'Analytics', 'CRM'], location: 'São Paulo', salaryExpectation: 'R$ 8.000', email: 'larissa@email.com', phone: '(11) 99999-7777', experience: '4 anos' },
  { id: 'c8', name: 'Diego Ribeiro', role: 'QA Engineer', score: 81, avatar: '', stage: 'proposta', skills: ['Selenium', 'Cypress', 'Jest'], location: 'Florianópolis', salaryExpectation: 'R$ 10.000', email: 'diego@email.com', phone: '(48) 99999-8888', experience: '5 anos' },
];

export const jobs: Job[] = [
  { id: 'j1', title: 'Desenvolvedor Full Stack Sr.', department: 'Tecnologia', urgency: 'alta', candidates: 12, createdAt: '2024-03-01' },
  { id: 'j2', title: 'Product Designer Pleno', department: 'Design', urgency: 'média', candidates: 8, createdAt: '2024-03-05' },
  { id: 'j3', title: 'Analista de Dados Jr.', department: 'Dados', urgency: 'baixa', candidates: 15, createdAt: '2024-03-10' },
  { id: 'j4', title: 'Gerente de Projetos', department: 'Produto', urgency: 'alta', candidates: 5, createdAt: '2024-02-20' },
  { id: 'j5', title: 'QA Engineer Pleno', department: 'Tecnologia', urgency: 'média', candidates: 7, createdAt: '2024-03-12' },
];

export const calendarEvents: CalendarEvent[] = [
  { id: 'e1', title: 'Entrevista - Fernanda Rocha', type: 'entrevista', date: '2024-04-02', time: '10:00', participant: 'Fernanda Rocha' },
  { id: 'e2', title: '1:1 Feedback - Ana Silva', type: 'feedback', date: '2024-04-02', time: '14:00', participant: 'Ana Silva' },
  { id: 'e3', title: 'Entrevista - Gustavo Pires', type: 'entrevista', date: '2024-04-03', time: '11:00', participant: 'Gustavo Pires' },
  { id: 'e4', title: 'Reunião de Alinhamento RH', type: 'reunião', date: '2024-04-04', time: '09:00', participant: 'Equipe RH' },
  { id: 'e5', title: '1:1 Feedback - Pedro Costa', type: 'feedback', date: '2024-04-05', time: '15:00', participant: 'Pedro Costa' },
  { id: 'e6', title: 'Entrevista Técnica - Thiago', type: 'entrevista', date: '2024-04-05', time: '10:30', participant: 'Thiago Martins' },
  { id: 'e7', title: 'Fit Cultural - Camila Souza', type: 'entrevista', date: '2024-04-08', time: '14:00', participant: 'Camila Souza' },
];

export const departments = ['Tecnologia', 'Produto', 'Design', 'RH', 'Dados', 'Marketing'];

export const departmentDistribution = [
  { department: 'Tecnologia', count: 3 },
  { department: 'Produto', count: 1 },
  { department: 'Design', count: 1 },
  { department: 'RH', count: 1 },
  { department: 'Dados', count: 1 },
  { department: 'Marketing', count: 1 },
];
