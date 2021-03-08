import Head from "next/head";
import { useState } from "react";
import Modal from "../components/Modal";
import Container from "../components/Container";
import Issue from "../views/Issue";

export default function ClimateChange() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Head>
        <title>Lake chad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Modal visible={visible} setVisible={setVisible} />
        <Container>
          <Issue
            title={"Lake Chad"}
            embedSrc={
              "https://lucid.app/documents/embeddedchart/133590cd-4ed1-4922-a1bc-255fd2a32970"
            }
            embedId={"KakiPE8dg_db"}
          >
            <div className="w-full mt-12">
              <p className="text-5xl text-gray-50 font-bold">
                Events related to people
              </p>
              <div className="flex text-gray-50 mt-8">
                <div className="w-1/3 text-left pl-24 pr-8">
                  <p>
                    The inhabitants of the countries surrounding Lake Chad have
                    been affected by the changing nature of the lake in various
                    ways. This is due to the fact that approximately 30 million
                    people are dependent on the lake and its resources (Ngatcha,
                    2009). However, the lake has become a non-sustainable source
                    of food and water, as the population has been growing at a
                    rate of 2 to 3 percent per year and the viability of
                    biological resources and water availability has decreased
                    drastically (Bdliya & Bloxom, 2010; Ngatcha, 2009).
                  </p>
                </div>
                <div className="w-1/3 text-left px-16">
                  <p>
                    This is most evident in the reduction of the fish
                    population, as the daily fish catch has decreased from
                    230,000 tonnes to 50,000 tonnes over a time span of 40 years
                    . Hence, many fisheries decided to switch to commercial
                    agriculture, often involving unsustainable farming practices
                    that contribute to the harmful effects on the environment of
                    the lake (Bdliya & Bloxom, 2010).
                  </p>
                </div>
                <div className="w-1/3 text-left pr-24 pl-8">
                  <p>
                    Consequently, this has led to a deepening of poverty,
                    partially because of a loss of livelihoods and the reduction
                    of available resources (Bdliya & Bloxom, 2010). This has led
                    to around 119 million people living in poverty in the Lake
                    Chad region, 46% of the entire population (Owonikoko &
                    Momodu, 2020). Furthermore, the economic growth is almost
                    stagnant, with the GDP growth varying between 1 to 2.4
                    percent since the 1980s (Bdliya & Bloxom, 2010).
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-2 border-primary w-5/6 mt-12" />

            <div className="w-full mt-12">
              <p className="text-5xl text-gray-50 font-bold">
                Effects on nature
              </p>
              <div className="flex text-gray-50 mt-8">
                <div className="w-1/2 text-left pl-48 pr-16">
                  <p>
                    The inhabitants of the countries surrounding Lake Chad have
                    been affected by the changing nature of the lake in various
                    ways. This is due to the fact that approximately 30 million
                    people are dependent on the lake and its resources (Ngatcha,
                    2009). However, the lake has become a non-sustainable source
                    of food and water, as the population has been growing at a
                    rate of 2 to 3 percent per year and the viability of
                    biological resources and water availability has decreased
                    drastically (Bdliya & Bloxom, 2010; Ngatcha, 2009).
                  </p>
                </div>
                <div className="w-1/2 text-left pl-16 pr-48">
                  <p>
                    This is most evident in the reduction of the fish
                    population, as the daily fish catch has decreased from
                    230,000 tonnes to 50,000 tonnes over a time span of 40 years
                    . Hence, many fisheries decided to switch to commercial
                    agriculture, often involving unsustainable farming practices
                    that contribute to the harmful effects on the environment of
                    the lake (Bdliya & Bloxom, 2010).
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-2 border-primary w-5/6 mt-12" />

            <div className="w-full mt-12">
              <p className="text-5xl text-gray-50 font-bold">
                The Shrinking lake
              </p>
              <div className="flex text-gray-50 mt-8">
                <div className="w-1/2 text-left pl-48 pr-16 flex flex-col">
                  <img src="/transformation.jpeg" className="w-3/4" />
                  <p className="italic">
                    A depiction of the shrinking of the lake that has happened
                    over the years (Owonikoko & Momodu, 2020).
                  </p>
                  <img src="/drainingrivers.jpg" className="w-1/2 mt-12" />
                  <p className="italic">
                    A depiction of the shrinking of the lake that has happened
                    over the years (Owonikoko & Momodu, 2020).
                  </p>
                </div>
                <div className="w-1/2 text-left pl-16 pr-48">
                  <p className="mt-8">
                    The Lake Chad Basin has been shrinking since the 1960s,
                    mainly due to the evaporation of the water, caused by severe
                    droughts and unfavourable lake bathymetry (Bdliya & Bloxom,
                    2010). Around 40 years ago the lake was 25,000 square km,
                    now it is around 500 square km (Murray, 2007).
                  </p>
                  <p className="mt-8">
                    A reason for the decreasing water levels and what caused the
                    split in Lake Chad in 1972, is that there is less inflow of
                    water from the rivers connected to the lake (Bdliya &
                    Bloxom, 2010; Gao et al., 2011). The biggest river
                    subsystems consist of the Chari-Logone, Komadugu-Yobe and
                    the Yedseram-Ngadda-Ebeji. These rivers also have created to
                    sub-basins in Nigeria which lead to lake chad: the
                    Yedseram/Ngadda sub-basin to the south and the
                    Hadejia/Jama'are-Komadougou/Yobe sub-basin to the north
                    (Frenken & Faurès, 1997). The decrease of water inflow has
                    happened due to the local diversion of flows brought on by
                    sedimentation and invasive species (Bdliya & Bloxom, 2010).
                    This has led to the desiccation of channels that hundreds of
                    thousands of people depended on, with on the other side of
                    this, the flooding of entire communities (Bdliya & Bloxom,
                    2010).
                  </p>
                  <p className="mt-8">
                    Another reason for the decrease of the lake volume is the
                    abstraction of water for human use, although the amount of
                    used water was mostly negligible compared to the volume of
                    the lake (Pham-Duc et al., 2020). However, the amount of
                    irrigation withdrawals was enough to cause the lake never to
                    merge again after the split, which would have happened in
                    1999 if those withdrawals had not taken place (Gao et al.,
                    2011).
                  </p>
                </div>
              </div>
            </div>
          </Issue>
        </Container>
      </div>
    </div>
  );
}
