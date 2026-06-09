export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Robotics and Code' | 'Materials and Conception';
  filePath: string;
  type: 'pdf' | 'docx' | 'folder';
}

export const projects: Project[] = [
  {
    id: 'robotics-skeleton',
    title: 'Robotics Control Project Skeleton',
    description: 'Initial architectural setup and skeleton for a robotics control system, focusing on modularity and clean code principles.',
    category: 'Robotics and Code',
    filePath: '/projects/1A-info-projet-squelette.zip',
    type: 'folder'
  },
  {
    id: 'robotics-vision',
    title: 'Robotics Vision Analysis',
    description: 'Comprehensive report on computer vision algorithms applied to robotic perception and object recognition.',
    category: 'Robotics and Code',
    filePath: '/projects/Rapport_Vision_Robotique.pdf',
    type: 'pdf'
  },
  {
    id: 'abaqus-fea',
    title: 'Finite Element Analysis - Abaqus',
    description: 'Structural analysis and simulation of mechanical parts using Abaqus to ensure durability and stress resistance.',
    category: 'Materials and Conception',
    filePath: '/projects/Compte_Rendu_Abaqus_Martin_Szerement_Destrade.pdf',
    type: 'pdf'
  },
  {
    id: 'cosi-3',
    title: 'Design of Complex Systems - Part 3',
    description: 'Analysis and design methodology for complex mechanical systems, focusing on systems engineering and integration.',
    category: 'Materials and Conception',
    filePath: '/projects/CR_Livrable3_COSI_GrB_2425-S2_B.pdf',
    type: 'pdf'
  },
  {
    id: 'cosi-4',
    title: 'Design of Complex Systems - Part 4',
    description: 'Advanced deliverable focusing on the final design stages and technical specifications of a complex system.',
    category: 'Materials and Conception',
    filePath: '/projects/CR_Livrable4_COSI_GrB_2425-S2_A.docx',
    type: 'docx'
  },
  {
    id: 'cad-winch',
    title: 'CAD Winch Assembly Manual',
    description: 'Detailed assembly and design instructions for a winch system designed using Computer-Aided Design (CAD).',
    category: 'Materials and Conception',
    filePath: '/projects/Notice d.pdf',
    type: 'pdf'
  },
  {
    id: 'ventilation-project',
    title: 'Industrial Ventilation System Design',
    description: 'Technical report on the design and simulation of an industrial ventilation system for airflow optimization.',
    category: 'Materials and Conception',
    filePath: '/projects/Projet Industriel Ventilation livrable 3.pdf',
    type: 'pdf'
  },
  {
    id: 'copa-simulations',
    title: 'COPA Simulation Analysis',
    description: 'Simulation study focusing on material behavior and structural response under specific load conditions.',
    category: 'Materials and Conception',
    filePath: '/projects/Rapport_Copa_Simulations.pdf',
    type: 'pdf'
  },
  {
    id: 'fatigue-testing',
    title: 'Fatigue and Endurance Analysis',
    description: 'Experimental study on the fatigue limits and endurance of materials under cyclic loading.',
    category: 'Materials and Conception',
    filePath: '/projects/TP_FATIGUE_SZEREMENT_BREMOND (2).pdf',
    type: 'pdf'
  },
  {
    id: 'vibratory-mechanics',
    title: 'Vibratory Mechanics Study',
    description: 'Analysis of mechanical vibrations, resonance frequencies, and damping systems in mechanical structures.',
    category: 'Materials and Conception',
    filePath: '/projects/TP_Mecanique_Vibratoire.pdf',
    type: 'pdf'
  }
];
