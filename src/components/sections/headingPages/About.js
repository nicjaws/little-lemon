export default function About() {
  return (
    <article className="about-us">
      <section className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Madrid</h2>
        <p className="about-subtext">
          Little Lemon opened in 1995 by two Spanish twin brothers, Christian
          and Nicolaa. Despite the city's diversity, the two brothers recognized
          the lack of Mediterranean cuisine in Madrid, and were inspired to
          bring the flavors of their hometown in Spain to the people of Madrid.
          The two brothers continue to oversee the Little Lemon restaurant,
          nearly thirty years later.
        </p>
      </section>

      <section className="double-image">
        <img
          className="about-1"
          src={require("../../../assets/food/food3.jpeg")}
          alt="Little Lemon restaurant cuisine 1"
        ></img>
        <img
          className="about-2"
          src={require("../../../assets/food/food2.jpeg")}
          alt="Little Lemon restaurant cuisine 2"
        ></img>
      </section>
    </article>
  );
}
