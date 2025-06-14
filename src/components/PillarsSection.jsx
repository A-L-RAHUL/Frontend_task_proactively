import React from 'react';
import '../styles/components/pillars.scss';

const pillars = [
  {
    id: 1,
    title: 'Nutrition',
    description: 'Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.',
    image: '/images/sample-nutrition.jpg',
    badge: { icon: '💙', value: '121/80', unit: 'mmHg' },
  },
  {
    id: 2,
    title: 'Physical activity',
    description: 'Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.',
    image: '/images/sample-activity.jpg',
    badge: { icon: '🧡', value: '32', unit: 'minutes' },
  },
  {
    id: 3,
    title: 'Restorative sleep',
    description: 'Consistent, quality sleep is essential for cognitive function and physical health.',
    image: '/images/sample-sleep.jpg',
    badge: { icon: '💚', value: '8', unit: 'hours' },
  },
  {
    id: 4,
    title: 'Stress management',
    description: 'Effective stress management techniques are crucial for mental well-being and overall health.',
    image: '/images/sample-stress.jpg',
    badge: { icon: '💙', value: '60', unit: 'bpm' },
  },
  {
    id: 5,
    title: 'Social connection',
    description: 'Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.',
    image: '/images/sample-social.jpg',
    badge: { icon: '🧡', value: 'Feeling better', unit: '' },
  },
  {
    id: 6,
    title: 'Substance abuse',
    description: 'Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.',
    image: '/images/sample-substance.jpg',
    badge: { icon: '💚', value: '62', unit: 'days' },
  },
];

const tags = [
  'Nutrition',
  'Physical activity',
  'Restorative sleep',
  'Stress management',
  'Social connection',
  'Substance abuse',
];

const PillarsSection = () => {
  return (
    <section className="pillars">
      <div className="pillars__header">
        <div className="pillars__how">HOW IT WORKS</div>
        <div className="pillars__title">
          <span>Lifestyle as medicine:</span> <span className="pillars__subtitle">The six pillars</span>
        </div>
        <div className="pillars__tags">
          {tags.map((tag, i) => (
            <button key={tag} className={`pillars__tag${i === 0 ? ' active' : ''}`}>{tag}</button>
          ))}
        </div>
        <div className="pillars__arrows">
          <button className="pillars__arrow">&#8592;</button>
          <button className="pillars__arrow">&#8594;</button>
        </div>
      </div>
      <div className="pillars__cards">
        {pillars.map((pillar) => (
          <div className="pillars__card" key={pillar.id}>
            <div className="pillars__img-wrap">
              <img src={pillar.image} alt={pillar.title} />
              <div className="pillars__badge">
                <span className="pillars__badge-icon">{pillar.badge.icon}</span>
                <span className="pillars__badge-value">{pillar.badge.value}</span>
                {pillar.badge.unit && <span className="pillars__badge-unit">{pillar.badge.unit}</span>}
              </div>
            </div>
            <div className="pillars__card-content">
              <div className="pillars__card-title">{pillar.title}</div>
              <div className="pillars__card-desc">{pillar.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PillarsSection; 