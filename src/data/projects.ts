export interface Project {
  id: string;
  title: string;
  context: string;
  explanation: string;
  visualDescription: string;
  category: 'Robotics and Code' | 'Materials and Conception';
  filePath?: string;
  type: 'pdf' | 'docx' | 'folder' | 'zip' | 'none';
  tags: string[];
  image: string;
}

export const projects: Project[] = [
  {
    id: 'robotics-vision',
    title: 'Interactive Cobot Vision Control',
    context: 'Development of a gesture-controlled interactive robot demonstrator using computer vision.',
    explanation: 'This project involved programming a Doosan M0609 collaborative robot to react to human gestures in real-time. I utilized Python along with OpenCV and Google Mediapipe for robust hand-tracking and gesture recognition. The system architecture relied on a TCP/IP client-server model to ensure low-latency communication between the vision processing node and the robot controller, enabling a fluid "interactive mime" experience.',
    visualDescription: 'A flowchart showing the TCP/IP communication architecture and a camera feed overlay with Mediapipe hand-tracking nodes.',
    category: 'Robotics and Code',
    filePath: '/vivian-szerement.github.io/projects/Rapport_Vision_Robotique.pdf',
    type: 'pdf',
    tags: ['Python', 'OpenCV', 'Mediapipe', 'Doosan M0609', 'TCP/IP'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'robotics-skeleton',
    title: 'Dijkstra Pathfinding in 3D CAD',
    context: 'First-year algorithmic project implementing automated pathfinding with 3D visualization.',
    explanation: 'I developed a pathfinding solver using Dijkstra\'s algorithm written entirely in Python. To bridge the gap between abstract algorithms and tangible engineering, I integrated the Python logic directly with FreeCAD using FCMacro. This allowed the calculated optimal paths to be visualized automatically within a 3D CAD environment, demonstrating strong software-to-CAD integration skills.',
    visualDescription: 'A 3D FreeCAD viewport showing a generated optimal path connecting two nodes across a complex modeled environment.',
    category: 'Robotics and Code',
    filePath: '/vivian-szerement.github.io/projects/1A-info-projet-squelette.zip',
    type: 'zip',
    tags: ['Python', 'Dijkstra', 'FreeCAD', 'Algorithms'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'abaqus-fea',
    title: 'Shaft Optimization via FEA',
    context: 'Finite element analysis of a rotating transmission shaft to optimize diameter while maintaining structural integrity.',
    explanation: 'Using Abaqus, I conducted a rigorous structural analysis on a mechanical shaft. The study focused heavily on mesh sensitivity to ensure the accuracy of the results. By evaluating stress concentrations using Von Mises and Tresca yield criteria, I was able to propose an optimized shaft diameter that reduced weight without compromising the safety factor under maximum load.',
    visualDescription: 'A high-resolution Abaqus heatmap showing the Von Mises stress concentration gradient along the shaft, particularly near the bearing supports.',
    category: 'Materials and Conception',
    filePath: '/vivian-szerement.github.io/projects/Compte_Rendu_Abaqus_Martin_Szerement_Destrade.pdf',
    type: 'pdf',
    tags: ['Abaqus', 'FEA', 'Optimization', 'Von Mises'],
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fatigue-testing',
    title: 'Automotive Suspension Fatigue',
    context: 'Fatigue life validation of a Citroën C3 suspension arm to ensure automotive safety standards.',
    explanation: 'This critical safety analysis involved determining the fatigue limits of a HR60 steel suspension triangle. I employed the Dang Van multiaxial fatigue criterion alongside Basquin\'s law to predict the component\'s lifespan under cyclic loading. The theoretical calculations were corroborated using Abaqus FEA simulations to identify the exact initiation points for potential micro-cracks.',
    visualDescription: 'A stress-life (S-N) curve plot and an Abaqus simulation overlay highlighting the critical fatigue initiation zone on the suspension arm.',
    category: 'Materials and Conception',
    filePath: '/vivian-szerement.github.io/projects/TP_FATIGUE_SZEREMENT_BREMOND (2).pdf',
    type: 'pdf',
    tags: ['Fatigue Analysis', 'Dang Van', 'Abaqus', 'HR60 Steel'],
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'copa-simulations',
    title: 'Cold Extrusion Material Simulation',
    context: 'Numerical simulation study for WALOR to predict material properties during cold extrusion.',
    explanation: 'I utilized FORGE NxT simulation software to model the severe plastic deformation of 20MnCr5 steel during a cold extrusion process. The objective was to accurately predict the resulting material hardness (Vickers hardness) post-deformation. This involved setting up complex boundary conditions, modeling die friction, and analyzing the resulting strain distribution to optimize the manufacturing process parameters.',
    visualDescription: 'A cross-sectional simulation view from FORGE NxT displaying the equivalent plastic strain and predicted Vickers hardness gradient.',
    category: 'Materials and Conception',
    filePath: '/vivian-szerement.github.io/projects/Rapport_Copa_Simulations.pdf',
    type: 'pdf',
    tags: ['FORGE NxT', 'Cold Extrusion', 'Simulation', '20MnCr5'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ventilation-project',
    title: 'Forklift Ventilation Electrification',
    context: 'Technical and economic feasibility study of replacing a hydraulic ventilation system with an electric one on a Manitou forklift.',
    explanation: 'This industrial project analyzed the Manitou MC 25-4 forklift. I compared the existing Vivolo XV-2M hydraulic system against a proposed Brushless motor alternative. The study required modeling the cooling requirements, designing a PWM regulation strategy for the electric motor, and performing a detailed cost-benefit analysis. The electric integration proved to offer better efficiency and noise reduction.',
    visualDescription: 'A comparative efficiency graph between hydraulic and electric systems, alongside a schematic of the proposed PWM brushless regulation circuit.',
    category: 'Materials and Conception',
    type: 'none',
    tags: ['Systems Engineering', 'Brushless Motors', 'Hydraulics', 'Manitou'],
    image: 'https://images.unsplash.com/photo-1504917595217-d4ce5eb3e212?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'vibratory-mechanics',
    title: 'Motor Suspension Modal Analysis',
    context: 'Experimental and numerical study to analyze and correlate the resonant frequencies of a suspended motor system.',
    explanation: 'I conducted a comprehensive vibratory mechanics study focusing on a motor mounted on elastomer supports. Experimental modal analysis (using FFTs) was performed to find the system\'s natural frequencies. These results were then used for "Model Updating" in Abaqus MDSA, adjusting the simulated elastomer stiffness parameters until the numerical model perfectly correlated with the real-world physical behavior.',
    visualDescription: 'A Fast Fourier Transform (FFT) frequency spectrum graph aligned next to the first three vibration modes simulated in Abaqus.',
    category: 'Materials and Conception',
    filePath: '/vivian-szerement.github.io/projects/TP_Mecanique_Vibratoire.pdf',
    type: 'pdf',
    tags: ['Modal Analysis', 'Vibrations', 'Abaqus MDSA', 'FFT'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cosi-manipulator',
    title: 'Industrial Manipulator Design',
    context: 'Preliminary design and sizing of a workshop manipulator for industrial applications.',
    explanation: 'As part of the COSI project, I led the architectural comparison between parallelogram and articulated arm designs for a material handling manipulator. The methodology involved rigorous kinematic analysis (using Al-Kashi theorem) and mechanical sizing of key components, including lead screws and plain bearings, to ensure the structure could handle the required payload safely and precisely.',
    visualDescription: 'A kinematic skeleton diagram outlining the degrees of freedom and calculating the necessary lead screw actuation forces.',
    category: 'Materials and Conception',
    filePath: '/vivian-szerement.github.io/projects/CR_Livrable3_COSI_GrB_2425-S2_B.pdf',
    type: 'pdf',
    tags: ['Mechanical Design', 'Kinematics', 'Sizing', 'COSI'],
    image: 'https://images.unsplash.com/photo-1580982333465-98369527eb5b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cad-winch',
    title: '8T Electric Winch Assembly',
    context: 'CAD assembly manual and dimensioning guide for a heavy-duty 8-ton electric winch system.',
    explanation: 'This project culminated in a detailed technical manual for assembling a multi-stage reduction winch. The core of the engineering work focused on the complex epicyclic (planetary) gear train and the splined shaft interfaces. I detailed the tolerances, assembly sequence, and mechanical interactions required to reliably transfer power from the motor to the lifting drum.',
    visualDescription: 'An exploded isometric CAD view of the epicyclic gear train, detailing the sun gear, planetary gears, and ring gear assembly.',
    category: 'Materials and Conception',
    type: 'none',
    tags: ['CAD', 'Gear Trains', 'Assembly', 'Mechanical Engineering'],
    image: 'https://images.unsplash.com/photo-1611078696879-111005fbc530?auto=format&fit=crop&q=80&w=800'
  }
];