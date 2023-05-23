import React from "react";
import { Carousel } from "react-responsive-carousel";
import TestimonialCard from "./CardInfo/TestimonialCard";
export default function CarouselPage() {
  return (
    <Carousel
      infiniteLoop={true}
      autoPlay={true}
      Interval={5000}
      showStatus={false}
    >
      <TestimonialCard
        name="Micheal Page"
        description="This is the best Mediterranean food that I've ever had!"
      />
      <TestimonialCard
        name="Mario Casares"
        description="My Shiba Inu, Mugi, really loved the cozy vibes and 
                delicious food here."
      />
      <TestimonialCard
        name="Antonio Banderas"
        description="I've had some great Mediterranean food before."
      />
      <TestimonialCard
        name="John Smith"
        description="Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids to."
      />
      <TestimonialCard
        name="Jim carrey"
        description="The food here really refreshed me after a late night shift
                at the local supply depot."
      />
      <TestimonialCard
        name="Brian Reynolds"
        description="I came to Little Lemon after a 5 hour flight from the East Coast.
                 The food here tasted so delicious after the trip here."
      />
      <TestimonialCard
        name="Tyler Rake"
        description="The food here was fire!! Everyone should try this place
                 out at least once if they live in Chicago."
      />
      <TestimonialCard
        name="Jack Ripper"
        description="This restaurant served as a perfect dinner for me after a 
                long night of studying. I would definitely order from here again!"
      />
    </Carousel>
  );
}
