export interface Project {
  id: string;
  title: { en: string; fr: string; };
  context: { en: string; fr: string; };
  explanation: { en: string; fr: string; };
  visualDescription: { en: string; fr: string; };
  category: 'Robotics and Code' | 'Materials and Conception';
  filePath?: string;
  type: 'pdf' | 'docx' | 'folder' | 'zip' | 'none';
  tags: string[];
  image: string;
}

export const projects: Project[] = [
  {
    id: 'robotics-vision',
    title: { 
      en: 'Interactive Cobot Vision Control', 
      fr: 'Contrôle Interactif d\'un Cobot par Vision' 
    },
    context: { 
      en: 'Development of a gesture-controlled interactive robot demonstrator using computer vision.', 
      fr: 'Développement d\'un démonstrateur robotique interactif contrôlé par les gestes grâce à la vision par ordinateur.' 
    },
    explanation: { 
      en: 'This project involved programming a Doosan M0609 collaborative robot to react to human gestures in real-time. I utilized Python along with OpenCV and Google Mediapipe for robust hand-tracking and gesture recognition. The system architecture relied on a TCP/IP client-server model to ensure low-latency communication between the vision processing node and the robot controller, enabling a fluid "interactive mime" experience.', 
      fr: 'Ce projet a impliqué la programmation d\'un robot collaboratif Doosan M0609 pour réagir aux gestes humains en temps réel. J\'ai utilisé Python avec OpenCV et Google Mediapipe pour un suivi robuste des mains et la reconnaissance des gestes. L\'architecture du système reposait sur un modèle client-serveur TCP/IP pour assurer une communication à faible latence entre le nœud de traitement de la vision et le contrôleur du robot, permettant une expérience fluide de "mime interactif".' 
    },
    visualDescription: { 
      en: 'A flowchart showing the TCP/IP communication architecture and a camera feed overlay with Mediapipe hand-tracking nodes.', 
      fr: 'Un organigramme montrant l\'architecture de communication TCP/IP et une superposition de flux de caméra avec les nœuds de suivi des mains Mediapipe.' 
    },
    category: 'Robotics and Code',
    filePath: '/vivian-szerement.github.io/projects/Rapport_Vision_Robotique.pdf',
    type: 'pdf',
    tags: ['Python', 'OpenCV', 'Mediapipe', 'Doosan M0609', 'TCP/IP'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'robotics-skeleton',
    title: { 
      en: 'Dijkstra Pathfinding in 3D CAD', 
      fr: 'Algorithme de Dijkstra en CAO 3D' 
    },
    context: { 
      en: 'First-year algorithmic project implementing automated pathfinding with 3D visualization.', 
      fr: 'Projet d\'algorithmique de première année implémentant une recherche de chemin automatisée avec visualisation 3D.' 
    },
    explanation: { 
      en: 'I developed a pathfinding solver using Dijkstra\'s algorithm written entirely in Python. To bridge the gap between abstract algorithms and tangible engineering, I integrated the Python logic directly with FreeCAD using FCMacro. This allowed the calculated optimal paths to be visualized automatically within a 3D CAD environment, demonstrating strong software-to-CAD integration skills.', 
      fr: 'J\'ai développé un solveur de recherche de chemin en utilisant l\'algorithme de Dijkstra écrit entièrement en Python. Pour faire le pont entre les algorithmes abstraits et l\'ingénierie concrète, j\'ai intégré la logique Python directement avec FreeCAD en utilisant FCMacro. Cela a permis de visualiser automatiquement les chemins optimaux calculés dans un environnement de CAO 3D, démontrant de solides compétences en intégration logicielle et CAO.' 
    },
    visualDescription: { 
      en: 'A 3D FreeCAD viewport showing a generated optimal path connecting two nodes across a complex modeled environment.', 
      fr: 'Une fenêtre de visualisation 3D FreeCAD montrant un chemin optimal généré reliant deux nœuds à travers un environnement modélisé complexe.' 
    },
    category: 'Robotics and Code',
    filePath: '/vivian-szerement.github.io/projects/1A-info-projet-squelette.zip',
    type: 'zip',
    tags: ['Python', 'Dijkstra', 'FreeCAD', 'Algorithms'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'abaqus-fea',
    title: { 
      en: 'Shaft Optimization via FEA', 
      fr: 'Optimisation d\'Arbre via EF' 
    },
    context: { 
      en: 'Finite element analysis of a rotating transmission shaft to optimize diameter while maintaining structural integrity.', 
      fr: 'Analyse par éléments finis d\'un arbre de transmission rotatif pour optimiser le diamètre tout en maintenant l\'intégrité structurelle.' 
    },
    explanation: { 
      en: 'Using Abaqus, I conducted a rigorous structural analysis on a mechanical shaft. The study focused heavily on mesh sensitivity to ensure the accuracy of the results. By evaluating stress concentrations using Von Mises and Tresca yield criteria, I was able to propose an optimized shaft diameter that reduced weight without compromising the safety factor under maximum load.', 
      fr: 'En utilisant Abaqus, j\'ai mené une analyse structurelle rigoureuse sur un arbre mécanique. L\'étude s\'est fortement concentrée sur la sensibilité du maillage pour assurer la précision des résultats. En évaluant les concentrations de contraintes à l\'aide des critères de limite d\'élasticité de Von Mises et Tresca, j\'ai pu proposer un diamètre d\'arbre optimisé qui réduisait le poids sans compromettre le facteur de sécurité sous charge maximale.' 
    },
    visualDescription: { 
      en: 'A high-resolution Abaqus heatmap showing the Von Mises stress concentration gradient along the shaft, particularly near the bearing supports.', 
      fr: 'Une carte de chaleur haute résolution Abaqus montrant le gradient de concentration de contraintes de Von Mises le long de l\'arbre, en particulier près des supports de palier.' 
    },
    category: 'Materials and Conception',
    filePath: '/vivian-szerement.github.io/projects/Compte_Rendu_Abaqus_Martin_Szerement_Destrade.pdf',
    type: 'pdf',
    tags: ['Abaqus', 'FEA', 'Optimization', 'Von Mises'],
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fatigue-testing',
    title: { 
      en: 'Automotive Suspension Fatigue', 
      fr: 'Fatigue de Suspension Automobile' 
    },
    context: { 
      en: 'Fatigue life validation of a Citroën C3 suspension arm to ensure automotive safety standards.', 
      fr: 'Validation de la durée de vie en fatigue d\'un bras de suspension de Citroën C3 pour garantir les normes de sécurité automobile.' 
    },
    explanation: { 
      en: 'This critical safety analysis involved determining the fatigue limits of a HR60 steel suspension triangle. I employed the Dang Van multiaxial fatigue criterion alongside Basquin\'s law to predict the component\'s lifespan under cyclic loading. The theoretical calculations were corroborated using Abaqus FEA simulations to identify the exact initiation points for potential micro-cracks.', 
      fr: 'Cette analyse de sécurité critique a impliqué la détermination des limites de fatigue d\'un triangle de suspension en acier HR60. J\'ai employé le critère de fatigue multiaxiale de Dang Van aux côtés de la loi de Basquin pour prédire la durée de vie du composant sous chargement cyclique. Les calculs théoriques ont été corroborés par des simulations EF Abaqus pour identifier les points d\'initiation exacts des micro-fissures potentielles.' 
    },
    visualDescription: { 
      en: 'A stress-life (S-N) curve plot and an Abaqus simulation overlay highlighting the critical fatigue initiation zone on the suspension arm.', 
      fr: 'Un graphique de courbe contrainte-durée de vie (S-N) et une superposition de simulation Abaqus mettant en évidence la zone critique d\'initiation de la fatigue sur le bras de suspension.' 
    },
    category: 'Materials and Conception',
    filePath: '/vivian-szerement.github.io/projects/TP_FATIGUE_SZEREMENT_BREMOND (2).pdf',
    type: 'pdf',
    tags: ['Fatigue Analysis', 'Dang Van', 'Abaqus', 'HR60 Steel'],
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'copa-simulations',
    title: { 
      en: 'Cold Extrusion Material Simulation', 
      fr: 'Simulation d\'Extrusion à Froid' 
    },
    context: { 
      en: 'Numerical simulation study for WALOR to predict material properties during cold extrusion.', 
      fr: 'Étude de simulation numérique pour WALOR afin de prédire les propriétés des matériaux lors de l\'extrusion à froid.' 
    },
    explanation: { 
      en: 'I utilized FORGE NxT simulation software to model the severe plastic deformation of 20MnCr5 steel during a cold extrusion process. The objective was to accurately predict the resulting material hardness (Vickers hardness) post-deformation. This involved setting up complex boundary conditions, modeling die friction, and analyzing the resulting strain distribution to optimize the manufacturing process parameters.', 
      fr: 'J\'ai utilisé le logiciel de simulation FORGE NxT pour modéliser la déformation plastique sévère de l\'acier 20MnCr5 lors d\'un processus d\'extrusion à froid. L\'objectif était de prédire avec précision la dureté du matériau résultant (dureté Vickers) après déformation. Cela a nécessité la configuration de conditions aux limites complexes, la modélisation de la friction de la matrice, et l\'analyse de la distribution des déformations résultantes pour optimiser les paramètres du processus de fabrication.' 
    },
    visualDescription: { 
      en: 'A cross-sectional simulation view from FORGE NxT displaying the equivalent plastic strain and predicted Vickers hardness gradient.', 
      fr: 'Une vue de simulation en coupe transversale de FORGE NxT affichant la déformation plastique équivalente et le gradient de dureté Vickers prédit.' 
    },
    category: 'Materials and Conception',
    filePath: '/vivian-szerement.github.io/projects/Rapport_Copa_Simulations.pdf',
    type: 'pdf',
    tags: ['FORGE NxT', 'Cold Extrusion', 'Simulation', '20MnCr5'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ventilation-project',
    title: { 
      en: 'Forklift Ventilation Electrification', 
      fr: 'Électrification de Ventilation de Chariot' 
    },
    context: { 
      en: 'Technical and economic feasibility study of replacing a hydraulic ventilation system with an electric one on a Manitou forklift.', 
      fr: 'Étude de faisabilité technique et économique du remplacement d\'un système de ventilation hydraulique par un système électrique sur un chariot Manitou.' 
    },
    explanation: { 
      en: 'This industrial project analyzed the Manitou MC 25-4 forklift. I compared the existing Vivolo XV-2M hydraulic system against a proposed Brushless motor alternative. The study required modeling the cooling requirements, designing a PWM regulation strategy for the electric motor, and performing a detailed cost-benefit analysis. The electric integration proved to offer better efficiency and noise reduction.', 
      fr: 'Ce projet industriel a analysé le chariot élévateur Manitou MC 25-4. J\'ai comparé le système hydraulique existant Vivolo XV-2M avec une alternative proposée à moteur Brushless. L\'étude a nécessité la modélisation des besoins de refroidissement, la conception d\'une stratégie de régulation PWM pour le moteur électrique, et la réalisation d\'une analyse détaillée coûts-avantages. L\'intégration électrique s\'est avérée offrir une meilleure efficacité et une réduction du bruit.' 
    },
    visualDescription: { 
      en: 'A comparative efficiency graph between hydraulic and electric systems, alongside a schematic of the proposed PWM brushless regulation circuit.', 
      fr: 'Un graphique comparatif d\'efficacité entre les systèmes hydrauliques et électriques, aux côtés d\'un schéma du circuit de régulation PWM brushless proposé.' 
    },
    category: 'Materials and Conception',
    type: 'none',
    tags: ['Systems Engineering', 'Brushless Motors', 'Hydraulics', 'Manitou'],
    image: 'https://images.unsplash.com/photo-1504917595217-d4ce5eb3e212?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'vibratory-mechanics',
    title: { 
      en: 'Motor Suspension Modal Analysis', 
      fr: 'Analyse Modale de Suspension de Moteur' 
    },
    context: { 
      en: 'Experimental and numerical study to analyze and correlate the resonant frequencies of a suspended motor system.', 
      fr: 'Étude expérimentale et numérique pour analyser et corréler les fréquences de résonance d\'un système de moteur suspendu.' 
    },
    explanation: { 
      en: 'I conducted a comprehensive vibratory mechanics study focusing on a motor mounted on elastomer supports. Experimental modal analysis (using FFTs) was performed to find the system\'s natural frequencies. These results were then used for "Model Updating" in Abaqus MDSA, adjusting the simulated elastomer stiffness parameters until the numerical model perfectly correlated with the real-world physical behavior.', 
      fr: 'J\'ai mené une étude complète de mécanique vibratoire se concentrant sur un moteur monté sur des supports en élastomère. Une analyse modale expérimentale (utilisant des FFT) a été effectuée pour trouver les fréquences naturelles du système. Ces résultats ont ensuite été utilisés pour la "Mise à jour du modèle" dans Abaqus MDSA, en ajustant les paramètres de rigidité de l\'élastomère simulé jusqu\'à ce que le modèle numérique soit parfaitement corrélé avec le comportement physique réel.' 
    },
    visualDescription: { 
      en: 'A Fast Fourier Transform (FFT) frequency spectrum graph aligned next to the first three vibration modes simulated in Abaqus.', 
      fr: 'Un graphique de spectre de fréquences par Transformation de Fourier Rapide (FFT) aligné à côté des trois premiers modes de vibration simulés dans Abaqus.' 
    },
    category: 'Materials and Conception',
    filePath: '/vivian-szerement.github.io/projects/TP_Mecanique_Vibratoire.pdf',
    type: 'pdf',
    tags: ['Modal Analysis', 'Vibrations', 'Abaqus MDSA', 'FFT'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cosi-manipulator',
    title: { 
      en: 'Industrial Manipulator Design', 
      fr: 'Conception d\'un Manipulateur Industriel' 
    },
    context: { 
      en: 'Preliminary design and sizing of a workshop manipulator for industrial applications.', 
      fr: 'Conception préliminaire et dimensionnement d\'un manipulateur d\'atelier pour des applications industrielles.' 
    },
    explanation: { 
      en: 'As part of the COSI project, I led the architectural comparison between parallelogram and articulated arm designs for a material handling manipulator. The methodology involved rigorous kinematic analysis (using Al-Kashi theorem) and mechanical sizing of key components, including lead screws and plain bearings, to ensure the structure could handle the required payload safely and precisely.', 
      fr: 'Dans le cadre du projet COSI, j\'ai dirigé la comparaison architecturale entre des conceptions de bras en parallélogramme et articulé pour un manipulateur de manutention de matériaux. La méthodologie a impliqué une analyse cinématique rigoureuse (utilisant le théorème d\'Al-Kashi) et le dimensionnement mécanique des composants clés, y compris les vis mères et les paliers lisses, pour s\'assurer que la structure pouvait manipuler la charge utile requise de manière sûre et précise.' 
    },
    visualDescription: { 
      en: 'A kinematic skeleton diagram outlining the degrees of freedom and calculating the necessary lead screw actuation forces.', 
      fr: 'Un diagramme de squelette cinématique décrivant les degrés de liberté et calculant les forces d\'actionnement de la vis mère nécessaires.' 
    },
    category: 'Materials and Conception',
    filePath: '/vivian-szerement.github.io/projects/CR_Livrable3_COSI_GrB_2425-S2_B.pdf',
    type: 'pdf',
    tags: ['Mechanical Design', 'Kinematics', 'Sizing', 'COSI'],
    image: 'https://images.unsplash.com/photo-1580982333465-98369527eb5b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cad-winch',
    title: { 
      en: '8T Electric Winch Assembly', 
      fr: 'Assemblage de Treuil Électrique 8T' 
    },
    context: { 
      en: 'CAD assembly manual and dimensioning guide for a heavy-duty 8-ton electric winch system.', 
      fr: 'Manuel d\'assemblage CAO et guide de dimensionnement pour un système de treuil électrique robuste de 8 tonnes.' 
    },
    explanation: { 
      en: 'This project culminated in a detailed technical manual for assembling a multi-stage reduction winch. The core of the engineering work focused on the complex epicyclic (planetary) gear train and the splined shaft interfaces. I detailed the tolerances, assembly sequence, and mechanical interactions required to reliably transfer power from the motor to the lifting drum.', 
      fr: 'Ce projet a abouti à un manuel technique détaillé pour l\'assemblage d\'un treuil de réduction à plusieurs étages. Le cœur du travail d\'ingénierie s\'est concentré sur le train d\'engrenages épicycloïdal (planétaire) complexe et les interfaces d\'arbre cannelé. J\'ai détaillé les tolérances, la séquence d\'assemblage et les interactions mécaniques requises pour transférer de manière fiable la puissance du moteur au tambour de levage.' 
    },
    visualDescription: { 
      en: 'An exploded isometric CAD view of the epicyclic gear train, detailing the sun gear, planetary gears, and ring gear assembly.', 
      fr: 'Une vue CAO isométrique éclatée du train d\'engrenages épicycloïdal, détaillant l\'assemblage de l\'engrenage planétaire, des engrenages satellites et de la couronne.' 
    },
    category: 'Materials and Conception',
    type: 'none',
    tags: ['CAD', 'Gear Trains', 'Assembly', 'Mechanical Engineering'],
    image: 'https://images.unsplash.com/photo-1611078696879-111005fbc530?auto=format&fit=crop&q=80&w=800'
  }
];