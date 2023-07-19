import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from './styles.module.css';

type TestimonialItem = {
  name: string;
  role: string;
  image: string;
  testimonial: string;
};

const TestimonialList: TestimonialItem[] = [
  {
    name: 'John Doe',
    role: 'CEO at Larry the Bird',
    image: require('@site/static/img/john_doe.jpg').default,
    testimonial: 'Dlvr has transformed the way our team works. We are now more efficient and collaborative.',
  },
  {
    name: 'Jane Smith',
    role: 'Project Manager at some very famous company',
    image: require('@site/static/img/jane_smith.jpg').default,
    testimonial: 'With Dlvr, we can easily track our project progress and ensure everyone is on the same page.',
  },
  {
    name: 'Robert Johnson',
    role: 'Software Engineer at Tech Corp',
    image: require('@site/static/img/robert_johnson.jpg').default,
    testimonial: 'Dlvr has significantly improved our productivity. The interface is intuitive and easy to use.',
  },
  {
    name: 'Emily Davis',
    role: 'Product Manager at Creative Solutions',
    image: require('@site/static/img/emily_davis.jpg').default,
    testimonial: 'The collaboration features in Dlvr are top-notch. It has made remote work a breeze for our team.',
  },
  {
    name: 'Michael Brown',
    role: 'CTO at Future Technologies',
    image: require('@site/static/img/michael_brown.jpg').default,
    testimonial: 'Dlvr is a game-changer. It has all the tools we need to manage our projects effectively.',
  },
];

const Testimonial = ({name, role, image, testimonial}: TestimonialItem): JSX.Element => {
  return (
    <div className={styles.testimonial}>
      <img className={styles.testimonialImage} src={image} alt={name} />
      <h3>{name}</h3>
      <p><i>{role}</i></p>
      <p>"{testimonial}"</p>
    </div>
  );
}

const HomepageTestimonials = (): JSX.Element => {
  useEffect(() => {
    const arrows = document.querySelectorAll('.control-arrow');
    arrows.forEach(arrow => {
      arrow.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        target.classList.add('control-arrow-clicked');
        setTimeout(() => {
          target.classList.remove('control-arrow-clicked');
        }, 300); // adjust delay as needed
      });
    });
  }, []);
  return (
    <section className={styles.testimonials}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        {TestimonialList.map((props, idx) => (
          <Testimonial key={idx} {...props} />
        ))}
      </Carousel>
    </section>
  );
}

export default HomepageTestimonials;
