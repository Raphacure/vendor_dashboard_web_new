import React from 'react';
import OnSiteCampPageStyled from './WellnessSessionPage.styled';
import PrimaryButton from '@/components/custom/button/PrimaryButton';
import WellnessSessionCard from './components/WellnessSessionCard/WellnessSessionCard';
import { useNavigate } from 'react-router';
import CommonBreadCrumbs from '@/components/custom/BreadCrumb/CommonBreadCrumb';
import { wellnessSessionPagebreadcrumbsItems } from '@/constants/breadcrumbs.constants';

interface SpeakerInfo {
  name: string;
  designation: string;
  avatar: string;
}

interface WellnessSessionCardType {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
  date: string;
  time: string;
  speaker: SpeakerInfo;
}

interface SectionData {
  type: 'upcoming' | 'recommended' | 'completed';
  title: string;
  data: WellnessSessionCardType[];
}

const WellnessSessionPage: React.FC = () => {
  const navigate = useNavigate();
  // Image from S3 bucket
  const stressManagementImage = "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1746017475858.png";
  const speakerAvatar = "https://randomuser.me/api/portraits/men/32.jpg";

  // Sample data structure using array of section objects
  const sections: SectionData[] = [
    {
      type: 'upcoming',
      title: 'Upcoming Wellness Webinar',
      data: [
        {
          id: '1',
          title: 'Mindfulness for Stress Relief',
          description: 'Learn practical mindfulness techniques to manage stress and improve well-being.',
          image: stressManagementImage,
          category: 'Stress Management',
          link: '/wellness-session/details/1',
          date: '2024-06-10',
          time: '10:00 AM',
          speaker: {
            name: 'Dr. John Doe',
            designation: 'Clinical Psychologist',
            avatar: speakerAvatar
          }
        },
        {
          id: '2',
          title: 'Work-Life Balance Strategies',
          description: 'Explore actionable strategies to balance work and personal life.',
          image: stressManagementImage,
          category: 'Work-Life Balance',
          link: '/wellness-session/details/2',
          date: '2024-06-15',
          time: '2:00 PM',
          speaker: {
            name: 'Ms. Jane Smith',
            designation: 'Wellness Coach',
            avatar: speakerAvatar
          }
        },
        {
          id: '3',
          title: 'Nutrition and Mental Health',
          description: 'Understand the link between nutrition and mental well-being.',
          image: stressManagementImage,
          category: 'Nutrition',
          link: '/wellness-session/details/3',
          date: '2024-06-20',
          time: '11:00 AM',
          speaker: {
            name: 'Dr. Emily Clark',
            designation: 'Dietician',
            avatar: speakerAvatar
          }
        }
      ]
    },
    {
      type: 'recommended',
      title: 'Recommended Wellness Webinar',
      data: [
        {
          id: '4',
          title: 'Yoga for Beginners',
          description: 'A gentle introduction to yoga for all fitness levels.',
          image: stressManagementImage,
          category: 'Yoga',
          link: '/wellness-session/details/4',
          date: '2024-06-25',
          time: '9:00 AM',
          speaker: {
            name: 'Mr. Raj Patel',
            designation: 'Yoga Instructor',
            avatar: speakerAvatar
          }
        },
        {
          id: '5',
          title: 'Building Resilience',
          description: 'Tips and tools to build emotional resilience in challenging times.',
          image: stressManagementImage,
          category: 'Resilience',
          link: '/wellness-session/details/5',
          date: '2024-06-28',
          time: '4:00 PM',
          speaker: {
            name: 'Dr. Priya Singh',
            designation: 'Motivational Speaker',
            avatar: speakerAvatar
          }
        },
        {
          id: '6',
          title: 'Healthy Sleep Habits',
          description: 'Discover how to improve your sleep for better health.',
          image: stressManagementImage,
          category: 'Sleep',
          link: '/wellness-session/details/6',
          date: '2024-07-01',
          time: '7:00 PM',
          speaker: {
            name: 'Dr. Alan Brown',
            designation: 'Sleep Specialist',
            avatar: speakerAvatar
          }
        }
      ]
    }
  ];


  return (
    <OnSiteCampPageStyled>
      <div className="header">
        <h1>Wellness Sessions</h1>
        <div className="header-actions">
          <PrimaryButton>Request New</PrimaryButton>
        </div>
      </div>
      <CommonBreadCrumbs className='mb-2' items={wellnessSessionPagebreadcrumbsItems} />
      <div className="container">
        {sections.map((section) => (
          <div key={section.type} className="section">
            <h2 className="section-title">{section.title}</h2>
            <div className="card-grid">
              {section.data.map((card) => (
                <WellnessSessionCard key={card.id} card={card} section={section} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </OnSiteCampPageStyled>
  );
};

export default WellnessSessionPage;