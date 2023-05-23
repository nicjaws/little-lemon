import React from "react";
import { Carousel } from "react-responsive-carousel";
import GreekSalad from "../../../assets/food/greek-salad.webp";
import Bruschetta from "../../../assets/food/bruschetta.jpeg";
import LemonDessert from "../../../assets/food/lemon-dessert.webp";
import SpecialCard from "./CardInfo/SpecialCard";

export default function CarouselPage() {
  return (
    <Carousel
      infiniteLoop={true}
      autoPlay={true}
      Interval={5000}
      showStatus={false}
    >
      <SpecialCard
        image={GreekSalad}
        name="Mediterranean Salad"
        price="$12.99"
        description="Feta Cheese, tomato, lettuce"
      />
      <SpecialCard
        image={Bruschetta}
        name="Toast vegetables & cheese"
        price="$16.99"
        description="Bread, zuchinni, paprika, green onions"
      />
      <SpecialCard
        image={LemonDessert}
        name="Lemon Dessert"
        price="$8.50"
        description="Lemon bread, vanilla Icing"
      />
    </Carousel>
  );
}
