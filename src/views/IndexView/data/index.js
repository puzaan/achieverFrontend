import { colors } from '@material-ui/core';

export const partners = [
  {
    name: 'Airbnb',
    logo: 'https://assets.maccarianagency.com/the-front/logos/airbnb.svg',
  },
  {
    name: 'Coinbase',
    logo: 'https://assets.maccarianagency.com/the-front/logos/coinbase.svg',
  },
  {
    name: 'Dribbble',
    logo: 'https://assets.maccarianagency.com/the-front/logos/dribbble.svg',
  },
  {
    name: 'Instagram',
    logo: 'https://assets.maccarianagency.com/the-front/logos/instagram.svg',
  },
  {
    name: 'Netflix',
    logo: 'https://assets.maccarianagency.com/the-front/logos/netflix.svg',
  },
  {
    name: 'Pinterest',
    logo: 'https://assets.maccarianagency.com/the-front/logos/pinterest.svg',
  },
];

export const courseCategories = [
  {
    color: colors.blue,
    icon: 'fas fa-pen-nib',
    title: 'Web Design',
    subtitle: 'Choose thousands of web design online course.',
  },
  {
    color: colors.purple,
    icon: 'fas fa-book-open',
    title: 'Business Analytics',
    subtitle: 'Choose thousands of business analytics online course.',
  },
  {
    color: colors.amber,
    icon: 'fas fa-camera-retro',
    title: 'Photography',
    subtitle: 'Choose thousands of photography online course.',
  },
  {
    color: colors.indigo,
    icon: 'fas fa-video',
    title: 'Video Creating',
    subtitle: 'Choose thousands of video creating online course.',
  },
  {
    color: colors.pink,
    icon: 'fas fa-heartbeat',
    title: 'Health & Fitness',
    subtitle: 'Choose thousands of health & fitness online course.',
  },
  {
    color: colors.green,
    icon: 'fas fa-bullhorn',
    title: 'Marketing',
    subtitle: 'Choose thousands of marketing online course.',
  },
  {
    color: colors.deepOrange,
    icon: 'fas fa-funnel-dollar',
    title: 'Finances & Sales',
    subtitle: 'Choose thousands of finaces & sales online course.',
  },
  {
    color: colors.red,
    icon: 'fas fa-paint-brush',
    title: 'Graphic Design',
    subtitle: 'Choose thousands of graphic design online course.',
  },
];

export const reviews = [
  {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x',
    },
    authorName: 'Veronica Adams',
    authorOccupation: 'Growth Marketer, Crealytics',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini@2x.jpg 2x',
    },
    authorName: 'Akachi Luccini',
    authorOccupation: 'Lead Generation, Alternative Capital',
    feedback:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/jack-smith@2x.jpg 2x',
    },
    authorName: 'Jack Smith',
    authorOccupation: 'Head of Operations, Parkfield Commerce',
    feedback:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];


export const work = [
  {
    title: 'Internship programs',
    description:
      'Achiever groups provide internships with a regular guide. Mentors give you the means to have your questions asked and you have someone who can guide you in the right direction. When given the opportunity, take advantage of having a mentor and it will significantly enhance your internship experience.',
    name:'Apply',
    nav:'/internship',
      illustration:'https://hennge.com/global/img/gip/illust01.svg' ,
  },
  {
    label: 'Scholarship programs',
    title: 'Scholarship programs',
    description:
      'This is to notify all the students of any backgrounds who are keen and determined learners in the IT field that Achiever groups, a Software company is  regulaconducting a scholarship program for all those exceptional and deserving students and especially those students who are unable to continue the course of IT due to financial difficulties. We as achievers are ready to lend a helping hand to all those students to move forward to build their career in the field of IT.',
      name: 'Apply',
      nav:'/scholarship',
    illustration:  'https://www.verzeo.com/v3/images/internship/landing/Illustration.svg',
  },
];

export const workReviews = [
  {
    authorPhoto: {
      src: 'https://www.unifiedinfotech.net/assets/images/new-home/Sofy-portfolio@1.5x.jpg',
      srcSet: 'https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/35226243_855164508014935_2463990675784335360_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=92Fw06YAeKQAX-yGprt&_nc_oc=AQm2V3OUl_WRcSr4ywzA7n6yW8qstg6DwpnqYGT6gNKuD1yqMKcNyKoYx0DFa3Lci6w&_nc_ht=scontent.fktm8-1.fna&oh=3909dda07bffd291efd04652b0adb280&oe=614983FA',
    },
    authorName: `Pujan Shrestha`,
    authorReview: `I thoroughly enjoyed my internship and now have very valuable experience under my belt.I feel that quality internships are essential to develop key skills that we can't get in a classroom. While doing internship i learned more reactjs with backend implemented in Node.js and Mongoose as database, hosted on AWS. `,
    position:
      'intern',
  },
  {
    authorPhoto: {
      src: 'https://www.unifiedinfotech.net/assets/images/new-home/colorcon-portfolio@1.5x.jpg',
      srcSet: 'https://www.unifiedinfotech.net/assets/images/new-home/colorcon-portfolio@1x.jpg',
    },
    authorName: 'abc',
    authorReview: 'As consulting-led partners, we audited, re-designed and engineered a highly secure and gated ordering portal for Coloron’s customers to place, manage & track orders, while also managing their accounts, ledgers, order history, documents, compliances and other artifacts related to pharmaceutical components.',
    position:
''  },
  {
    authorPhoto: {
      src: 'https://www.unifiedinfotech.net/assets/images/new-home/Sofy-portfolio@1.5x.jpg',
      srcSet: 'https://www.unifiedinfotech.net/assets/images/new-home/Sofy-portfolio@1x.jpg',
    },
    authorName:'abc',
    authorReview: 'Unified Infotech designed and developed this highly sophisticated on-demand streaming platform for short movies, along with advanced AI capabilities and usage of big data.',
    position:''  },
];



export const process = [
  {
    icon: 'fas fa-brain',
    title: '1. Idea',
    description:
      'We meet with your team to know more about your idea, project and goal. After that, our team sits to create an action plan and proposal for your project.',
  },
  {
    icon: 'fas fa-mobile-alt',
    title: '2. Design',
    description:
      'We start by designing a mockup or prototype of your website/app, and present it to you. Once with the initial mockup, we start the revision process to perfect it.',
  },
  {
    icon: 'fas fa-laptop-code',
    title: '3. Development',
    description:
      'We develop your website using the best practices and standards, so you have a perfectly responsive, lightning fast, and super scalable website.',
  },
  {
    icon: 'fas fa-cogs',
    title: '4. Launch & Maintenance',
    description:
      'When the project is ready, we help you to launch it and push it live. After that, we meet with your team to train them on how to edit, update and scale it.',
  },
];

export const quikeStart = [
  {
    end:'100',
    suffix:'+',
    lable:'Placement',

  },
  {
    end:'5',
    suffix:'+',
    lable:'Technology export',
    
  },

  {
    end:'10',
    suffix:'+',
    lable:'Clients',
    
  },
  
];


export const response = [
  {
    name: 'Bidur parajuli',
    enroll: "React",
    review:"Currently, I enroll in Advanced react with modern react course in Achiever groups . The way of learning process is so   benefitted . Specially  access of LMS  credentials  help us to much for submitting assignment, recording video of of classes, discussion forum where we all participants can discuss about any course content. And after completion of course internship and job opportunities  from Achiever groups. Achiever groups is a good platform to build our professional career. "
  },
  {
    name: 'Pradip Paudel',
    enroll: "React",
    review:"Awesome, we  are gaining deep knowledge  in JavaScript and hope we will get more then this on React also. The very best part of this group is the way and technique of teaching as well as this LMS software which is using by this group is also very good and another best part is this group is developing the community of all students and developer of this institute which will be so helpful in future also."
  },
  {
    name: 'Bidur parajuli',
    enroll: "React",
    review:"Currently, I enroll in Advanced react with modern react course in Achiever groups . The way of learning process is so   benefitted . Specially  access of LMS  credentials  help us to much for submitting assignment, recording video of of classes, discussion forum where we all participants can discuss about any course content. And after completion of course internship and job opportunities  from Achiever groups. Achiever groups is a good platform to build our professional career. "
  },
  {
    name: 'Sujan chhengutala',
    enroll: "React",
    review:"Definitely one of the best programming courses. Challenging yet beginner friendly. Instructor explains every concept with passion and care. The assignments are difficult and interesting and more importantly, the assignment teaches the core of programming. I haven't finished so far, but I can't wait to give it a 5-star review. I really appreciate Achiver groups putting this course online. This course makes the world a better place!"
  },
  {
    name: 'Raj Chaulagain',
    enroll: "Flutter",
    review:"Achiever has implemented assignment and project led teaching-learning approach, which has personally helped me to learn new things fast. Teachers are supportive and friendly which made the experience here more enhancd. I must say that i am really impressed with how well integrated LMS is."
  },
  {
    name: 'Piyush Yadav',
    enroll: "Flutter",
    review:"I got enrolled in flutter development class and had an amazing experience through the teaching faculty."
  },
  {
    name: 'Salin Thapa',
    enroll: "Flutter",
    review:`The flutter classes are very useful and interesting. Our flutter sir is also very helpful friendly and is always ready to help.`
  },
  // {
  //   name: 'Utsav Gole',
  //   enroll: "Flutter",
  //   review:""
  // },
  {
    name: 'Kunjan Rajbhandari',
    enroll: "Flutter",
    review:"I have been studying in Achiever Group two months. Achiever Group is a great experience for me. All teachers and staff are professional, helpful, kind and friendly. I am lucky to be in Achiever Group. If you think to learn Flutter-Complete Application Development you should come Achiever Group."
  },
  {
    name: 'Santosh Nepal',
    enroll: "React",
    review:"Contact information and location of the institute can be provided in the site,Some word from  Alumnus should be added to the site and some words from the company head where the Alumnus work can also be added."
  }
]

export const success =[
  {
    name:'pujan Shrestha',
    description: `I thoroughly enjoyed my internship and now have very valuable experience under my belt.I feel that quality internships are essential to develop key skills that we can't get in a classroom. While doing internship i learned more reactjs with backend implemented in Node.js and Mongoose as database, hosted on AWS. `,
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg',
      
    },
  }
]


export const articles = [
  {
    cover: {
      src: 'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1@2x.jpg 2x',
    },
    title: 'Increasing Prosperity With Positive Thinking',
    author: 'By Maria Stone',
    date: '03 March, 2019',
  },
  {
    cover: {
      src: 'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery2.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery2@2x.jpg 2x',
    },
    title: 'Motivation Is The First Step To Success',
    author: 'By Georg Smith',
    date: '03 March, 2019',
  },
  {
    cover: {
      src: 'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery3.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery3@2x.jpg 2x',
    },
    title: 'Success Steps For Your Personal Or Business Life',
    author: 'By Alex Nesi',
    date: '03 March, 2019',
  },
  {
    cover: {
      src: 'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1@2x.jpg 2x',
    },
    title: 'Increasing Prosperity With Positive Thinking',
    author: 'By Maria Stone',
    date: '03 March, 2019',
  },
  {
    cover: {
      src: 'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery2.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery2@2x.jpg 2x',
    },
    title: 'Motivation Is The First Step To Success',
    author: 'By Georg Smith',
    date: '03 March, 2019',
  },
  {
    cover: {
      src: 'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery3.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery3@2x.jpg 2x',
    },
    title: 'Success Steps For Your Personal Or Business Life',
    author: 'By Alex Nesi',
    date: '03 March, 2019',
  },
];

export const clientReview = [
  {
    name: '',
    review: `We at Achiever's have a really relaxed but professional environment. We worked together as a family and team members. They not only showed their commitment and hard work in our project but also helped us take care of some points that got missed by us and did not belong to their scope. I’m very happy to have been associated with them.`
  },
  {
    name: '',
    review: `Achiever's is a great place to work driven by passion to create and deliver new ideas that are reflected in their work. Our relationship has been really productive and we have collectively been able to achieve great results. And they treated each of their customers with delicate care making them an excellent management team to work with.`
  },
  {
    name: '',
    review: `It's always great to work with a professional and committed company. Achiever's has been a software company that understands the importance of supporting and investing in their people. Our work relation has been productive So, I truly enjoyed my working with them and therefore have highest regards for this team and would highly recommend them.`
  },
  {
    name: '',
    review: `Achiever's is a great place which impacted my learning experience for good. I am grateful to be a part of this profoundly experienced team where I shared my thoughts with the open management team and passionate colleagues. What I really liked about Achiever's is the specific hosting platform that they use making it unique than any other software companies.`
  },
  {
    name: '',
    review: `I find myself very lucky to have been part of this amazing team who share their experience and work together in the spirit of mutual benefit. The best part that I found while working here was the work life balance providing me with various opportunities and care that they put into every request that I had made. We look forward to working with them as we grow.`
  }
]