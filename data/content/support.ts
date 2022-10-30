type Testimonial = {
  quote: string;
  count: number;
  custom: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote: "Love your work. Let's have a cup of coffee together.",
    count: 0.01,
    custom: false,
  },
  {
    quote: "Love your work. Let's have a cup of tea together.",
    count: 0.1,
    custom: false,
  },
  {
    quote: "Contact me for any questions and support.",
    count: 0.1,
    custom: true,
  },
];
