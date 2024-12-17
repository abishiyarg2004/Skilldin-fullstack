

import graphic from '../Assets/graphic.png';
import potter from '../Assets/potter.png';
import visual from '../Assets/visual.png';
import fashion from '../Assets/fashion.png';
import photo from '../Assets/photo.png';
import interior from '../Assets/interior.png'; 

import musician from '../Assets/musician.png';
import dancer from '../Assets/dancer.png';
import actor from '../Assets/actor.png';




const skillsData = [
  {
    id: 1,
    title: 'Visual Artist',
    description: 'Creates visual works for exhibitions or commissions, including paintings and sculptures.',
    skills: 'Creativity, attention to detail, self-discipline',
    imageUrl: visual,
    requirements: 'Bachelor’s degree in fine arts or related field',
    salary: '$40,000 - $80,000',
    work_environment: 'Studios, galleries, or freelance',
    career_path: 'Gallery curator, art director, or educator',
    jobOpenings: [50,40 , 30],
  },
  {
    id: 2,
    title: 'Potter/Ceramic Artist',
    description: 'Crafts pottery or ceramic pieces, requiring an understanding of materials and techniques.',
    skills: 'Creativity, patience, manual dexterity',
    imageUrl: potter,
    requirements: 'Experience with clay and pottery techniques',
    salary: '$30,000 - $60,000',
    work_environment: 'Studios or workshops',
    career_path: 'Studio owner, art teacher, or production potter',
    jobOpenings: [50, 40, 60],
  },
  {
    id: 3,
    title: 'Graphic Designer',
    description: 'Creates visual content for branding, advertising, and digital media.',
    skills: 'Creativity, communication, eye for aesthetics',
    imageUrl: graphic,
    requirements: 'Bachelor’s degree in graphic design or related field',
    salary: '$45,000 - $85,000',
    work_environment: 'Agencies, in-house teams, or freelance',
    career_path: 'Art director, UX/UI designer, or creative director',
    jobOpenings: [50, 20, 60],
  },
  {
    id: 4,
    title: 'Fashion Designer',
    description: 'Designs clothing and accessories, understanding fabric and color theory.',
    skills: 'Creativity, trend awareness, strong visual communication',
    imageUrl: fashion,
    requirements: 'Degree in fashion design or related field',
    salary: '$50,000 - $90,000',
    work_environment: 'Fashion houses, studios, or freelance',
    career_path: 'Costume designer, stylist, or brand manager',
    jobOpenings: [60, 55, 60],
  },
  {
    id: 5,
    title: 'Photographer',
    description: 'Captures images for various purposes, including portraits, events, and commercial work.',
    skills: 'Creativity, composition, technical understanding of lighting',
    imageUrl: photo,
    requirements: 'Experience with photography equipment and software',
    salary: '$30,000 - $70,000',
    work_environment: 'Studios, on location, or freelance',
    career_path: 'Photojournalist, studio owner, or art director',
    jobOpenings: [53, 34, 40],
  },
  {
    id: 6,
    title: 'Interior Designer',
    description: 'Plans and designs interior spaces to enhance functionality and aesthetics.',
    skills: 'Creativity, spatial awareness, understanding of aesthetics',
    imageUrl: interior,
    requirements: 'Degree in interior design or related field',
    salary: '$40,000 - $80,000',
    work_environment: 'Offices, client homes, or freelance',
    career_path: 'Project manager, design consultant, or furniture designer',
    jobOpenings: [45, 23, 45],
  },
  {
    id: 7,
    title: 'Musician',
    description: 'Composes, performs, and records music across genres.',
    skills: 'Creativity, discipline, emotional expression',
    imageUrl: musician,
    requirements: 'Skill in playing one or more instruments',
    salary: '$25,000 - $100,000',
    work_environment: 'Studios, on stage, or freelance',
    career_path: 'Music producer, composer, or music teacher',
    jobOpenings: [42, 23, 34],
  },
  {
    id: 8,
    title: 'Dancer/Choreographer',
    description: 'Performs or creates dance routines for performance or competition.',
    skills: 'Creativity, physical coordination, expressive ability',
    imageUrl: dancer,
    requirements: 'Extensive training in dance styles',
    salary: '$30,000 - $70,000',
    work_environment: 'Studios, theaters, or on stage',
    career_path: 'Dance instructor, choreographer, or artistic director',
    jobOpenings: [23, 34, 23],
  },
  {
    id: 9,
    title: 'Actor/Actress',
    description: 'Performs in theatrical productions, films, or television.',
    skills: 'Creativity, emotional intelligence, strong communication',
    imageUrl: actor,
    requirements: 'Acting classes and auditions',
    salary: '$40,000 - $200,000',
    work_environment: 'Theaters, studios, or on set',
    career_path: 'Director, producer, or screenwriter',
    jobOpenings: [60, 70, 80],
  },
  

  
];

export default skillsData;
