import MissionShowSpot from '../../assets/images/about/mission.png';
import ShowcaseShowSpot from '../../assets/images/about/showcase.png';
import VisionShowSpot from '../../assets/images/about/vision.png';

const visionMissionItems = [
  {
    id: 1,
    title: 'Mission',
    icon: <img src={MissionShowSpot} alt="mission Show Spot" />,
    description:
      'Automate the input and management processes of project data to reduce the time and effort required.',
  },
  {
    id: 2,
    title: 'Showcase',
    icon: <img src={ShowcaseShowSpot} alt="showcase Show Spot" />,
    description:
      'With a modern design, students and mentors can view project status in real-time and easily make updates.',
  },
  {
    id: 3,
    title: 'Vision',
    icon: <img src={VisionShowSpot} alt="vision Show Spot" />,
    description:
      'To become the leading platform that facilitates the management and presentation of student projects with an interactive, efficient, and secure interface.',
  },
];

export default visionMissionItems;
