//trainers data
export const trainers = [
    {
        image: "/Trainers/t1.jpeg",
        name: "Marcus Johnson",
        specialty: "Strength Training",
        socials: {
            instagram: "#",
            facebook: "#",
            twitter: "#",
        },
    },
    {
        image: "/Trainers/t2.jpeg",
        name: "Sarah Williams",
        specialty: "Personal Training",
        socials: {
            instagram: "#",
            facebook: "#",
            twitter: "#",
        },
    },
    {
        image: "/Trainers/t3.jpeg",
        name: "Emma Rodriguez",
        specialty: "Yoga & Flexibility",
        socials: {
            instagram: "#",
            facebook: "#",
            twitter: "#",
        },
    },
    {
        image: "/Trainers/t4.jpeg",
        name: "David Chen",
        specialty: "Cardio & Conditioning",
        socials: {
            instagram: "#",
            facebook: "#",
            twitter: "#",
        },
    },
];

// StatCard data

export const statistics = [
    { endValue: 500, delay: 0.2 },
    { endValue: 20, delay: 0.4 },
    { endValue: 10, delay: 0.6 },
];

// about stats data

export const aboutStats = [
  { value: '500+', label: 'Members' },
  { value: '20+', label: 'Trainers' },
  { value: '10+', label: 'Years' },
];

// skills data

export const skills = [
    { name: "Strength Training", percentage: 90 },
    { name: "Cardio Fitness", percentage: 85 },
    { name: "Nutrition Coaching", percentage: 75 },
    { name: "Yoga & Flexibility", percentage: 80 },
];

// membership plans data

export const plans = [
    {
      name: 'Basic',
      price: '$29',
      period: '/month',
      features: [
        'Access to gym equipment',
        'Locker room access',
        'Open gym hours',
        'Free fitness assessment',
      ],
      highlighted: false,
    },
    {
      name: 'Premium',
      price: '$59',
      period: '/month',
      features: [
        'All Basic features',
        'Unlimited group classes',
        '2 personal training sessions',
        'Nutrition consultation',
        'Guest privileges',
      ],
      highlighted: true,
    },
    {
      name: 'Elite',
      price: '$99',
      period: '/month',
      features: [
        'All Premium features',
        'Unlimited personal training',
        'Custom meal planning',
        'Priority class booking',
        'Sauna & spa access',
      ],
      highlighted: false,
    },
  ];