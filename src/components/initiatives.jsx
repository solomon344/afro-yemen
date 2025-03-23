import React from "react";
import { Image } from "antd";

const Portfolio = () => {
  return (
    <div className="flex flex-col gap-10 w-full items-center min-h-[50dvh] justify-center p-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold place-self-center uppercase underline underline-offset-8 decoration-amber-300">
          Our Initiatives
        </h1>

        <div className="grid grid-rows-1 lg:grid-cols-3 gap-14 lg:p-10 p-2">
          <div className="flex flex-col gap-2">
            <Image src="/img/p4.jpg" />

            <p className="text-gray-700 text-sm italic">
              <strong>
                Essa Barry a co-founder of Afro-Yemen Organisation
              </strong>
              - The Gambia. As our Diaspora Director, he is a dedicated young
              man whose passion to support people in need is inspiring. He
              resides in Germany and was a teacher in Gambia for over a decade
              and serves his community in different ways to improve lives and
              livelihood.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Image src="/img/p9.jpg" className="h-[200px]" />

            <p className="text-gray-700 text-sm italic">
              <strong>
                Sulayman B Jammeh is a co- founder of the organisation
              </strong>
              - He is currently serving as a vice principal in Kairaba Upper and
              Senior Secondary School. He aslo double as the Country Director of
              Afro-Yemen Charity Organisation. Sulayman is a gentleman who
              believes in the power of education as a tool of liberating people.
              Therefore, he spent all his time and energy in helping to
              shape young minds.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Image src="/img/owner.jpg" className="h-[200px]" />

            <p className="text-gray-700 text-sm italic">
              <strong>Dr. Al Zakami Ali</strong> was born in yemen 30th November, 1959. He is a general physician
              currently working in Heringsdorf Rehaklink in Germany. Al Zakami
              devoted his time, energy and resources to providing support to the
              poor, needy and the sick in the world. He is a co- founder of a
              humanitarian charity Organisation known as <strong>Afro-Yemen Charity
              Organisation</strong> and currently he is the Chief Executive Officer of the
              organisation and the main sponsor of the activities of the
              organisation. Dr. Al Zakami derived great pleasure in supporting
              health facilities that lack the basic materials that enable them
              to do their daily routine effectively and efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
