import React from "react";
import Container from "../Container";
import Accordion, { AccordionItem } from "../Accordion";
import { Link } from "react-router";

const Faq = () => {
  return (
    <Container className="mt-36">
      <h2 className="text-center text-3xl max-w-96 mx-auto mb-12 font-semibold">
        Why you should choose Steadfast?
      </h2>

      {/* Accordion */}
      <Accordion>
        <AccordionItem value="1" trigger="Why SteadFast Courier?">
          SteadFast Courier stands out for its commitment to delivering parcels
          nationwide on time and without any hassle. We pride ourselves on
          offering fast payment, easy tracking, a dedicated customer service
          team, and ensuring the safe delivery of your parcels.
        </AccordionItem>
        <AccordionItem
          value="2"
          trigger="What is the coverage area of steadfast Courier?"
        >
          SteadFast Courier extends its services across 8 divisions, 495
          Upazilas, and 330 Municipal Corporations. Click here for a
          comprehensive list of detailed service locations.
        </AccordionItem>
        <AccordionItem
          value="3"
          trigger="What services does Steadfast Courier provide?"
        >
          Revel in the excellence of E-commerce delivery, pick-and-drop ,
          cutting-edge warehousing, entrust your goods to our state-of-the-art
          warehousing, and witness perfection in packaging solutions.
        </AccordionItem>
        <AccordionItem
          value="4"
          trigger="Want to know about your delivery charges ?"
        >
          Discover our delivery charges, which are determined by the weight of a
          1 kg parcel:
          <ul className="my-3 space-y-1">
            <li className="flex items-center">
              <span className="text-4xl leading-0 mr-2 text-primary">•</span>
              <span>Inside Dhaka: 70</span>
            </li>
            <li className="flex items-center">
              <span className="text-4xl leading-0 mr-2 text-primary">•</span>
              <span>Dhaka Suburban: 100</span>
            </li>
            <li className="flex items-center">
              <span className="text-4xl leading-0 mr-2 text-primary">•</span>
              <span>Outside Dhaka: 130</span>
            </li>
          </ul>
          For a more detailed breakdown, utilize our Price Calculation Option by{" "}
          <br />
          <Link to={"/pricing"} className="text-primary link">
            Click here
          </Link>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

export default Faq;
