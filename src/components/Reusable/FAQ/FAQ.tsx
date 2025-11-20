import React from 'react'
import Container from '../Container/Container'
import SecondaryHeading from '../SecondaryHeading/SecondaryHeading'
import FAQCard from './FAQCard';

const FAQ = () => {
     const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We specialize in web and app development, UI/UX design, and digital solutions tailored for your business.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope, but most projects take between 4 to 8 weeks from concept to launch.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes, we provide maintenance, updates, and ongoing support to ensure your platform performs at its best.",
    },
  ];

  return (
    <div className='bg-neutral-10 py-10'>
        <Container>
            <SecondaryHeading title='Frequently Asked Questions (FAQs)' />
            <div className='mt-9'>{faqs.map((faq, index) => (
        <FAQCard key={index} question={faq.question} answer={faq.answer} />
      ))}</div>
             
        </Container>
    </div>
  )
}

export default FAQ;
