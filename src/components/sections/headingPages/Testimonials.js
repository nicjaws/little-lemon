import Carousel from "./TestimonialCarousel";
import TestimonialCard from "./CardInfo/TestimonialCard";
export default function Testimonials() {
  return (
    <section className="testimonials">
      <article className="testimonials-topbar">
        <h1>Testimonials</h1>
      </article>

      <section className="testimonials-cards">
        <TestimonialCard
          name="Michael Page"
          description="This is the best Mediterranean food that I've ever had!"
        />
        <TestimonialCard
          name="Mario Casares"
          description="My Wife, Selena, really loved the cozy vibes and 
                delicious food here."
        />
        <TestimonialCard
          name="Antonio Banderas"
          description="I've had some great Mediterranean food before."
        />
        <TestimonialCard
          name="John Smith"
          description="Great food, welcoming staff, cozy atmosphere."
        />
        <TestimonialCard
          name="Jim carrey"
          description="The food here really refreshed me after a late night shift."
        />
        <TestimonialCard
          name="Brian Reynolds"
          description="I came to Little Lemon after a nice football match."
        />
        <TestimonialCard
          name="Tyler Rake"
          description="The food here was fire!! Everyone should try this place
                 out at least once."
        />
        <TestimonialCard
          name="Jack Ripper"
          description="This restaurant served as a perfect dinner for me!"
        />
      </section>

      <section className="testimonials-carousel">
        <Carousel />
      </section>
    </section>
  );
}
