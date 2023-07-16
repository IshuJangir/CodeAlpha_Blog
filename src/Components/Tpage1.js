import React from "react";
import t1 from "../assets/t1.jpg";

export default function Tpage1() {
  return (
    <div>
      <img className="w-[65%] mx-auto h-[30%]" src={t1} alt="" />
      <p className="w-[80%] text-slate-600 mt-10 mx-auto">
        Earlier this month, people in Algeria might have felt like they’d woken
        up in a different era as they struggled to conduct their daily online
        lives. The government had ordered Internet Service Providers (ISPs) to
        block certain websites, including news and social media services,
        rendering large parts of the Internet inaccessible to everyone. <br />{" "}
        The orders were given by local authorities, as part of efforts to curb
        cheating during the national baccalaureate exams held from 11-15 June.{" "}
        <br /> <br />{" "}
        <span className="text-lg font-bold">
          Economic Impact on Local Citizens
        </span>{" "}
        <br /> Mehdi Dahhak, a journalist and director of Desert Foot, told
        Internet Society partner Social Media Exchange (SMEX), “This reality
        disrupts our work significantly, especially since most of our readers
        are Facebook and Twitter users, which leads to a decrease in readability
        rates and this affects us economically.” <br /> Sarah Zahaf, a manager
        at a tourism agency in Algiers, also told SMEX that tourism businesses
        are among the biggest losers due to the interruption of Internet access.
        “[The Internet disruptions] hindered our communication with our
        customers outside the country, and our agency suffered material losses
        estimated at 10% per day due to [missing] ticket reservation
        [deadlines], in addition to our inability to meet the requests of
        customers arriving due to the interruption of the network.” <br />{" "}
        Measuring the economic impact of Internet shutdowns like the ones that
        happened in Algeria, as well as the other 18 shutdowns that Internet
        Society Pulse has tracked in the month of June alone, has been a
        challenge outside of these personal accounts. Until now. <br />{" "}
        <span className="text-lg font-bold">
          Introducing the NetLoss Calculator
        </span>{" "}
        <br />
        The NetLoss calculator is a new tool that estimates the economic cost of
        Internet shutdowns by way of a rigorous methodology.
      </p>
      <p className="w-[80%] mx-auto mt-5 text-2xl font-bold">
        By SRobert Mitchell
      </p>
    </div>
  );
}
