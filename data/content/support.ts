type Testimonial = {
  quote: string;
  count: number;
  custom: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote: "Buy me a ☕️ of coffee.",
    count: 0.01,
    custom: false,
  },
  {
    quote: "What about 10x? ☕️ ✖️ 10 = 0.1 eth",
    count: 0.1,
    custom: false,
  },
];
