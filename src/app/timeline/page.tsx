"use client";
import React, { createContext } from "react";
import { useSession } from "next-auth/react";
import Navbar from "@/components/navbar";
// import { motion } from "framer-motion";
import Image from "next/image";
import awardImages from "@/assets/img/GoldSilverBronze.png";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import "./Timeline.css";
import NOIMask from "@/assets/img/NOIMask.svg";
import Footer from "@/components/footer";

const Page: React.FC = () => {
  let items = [
    {
      date: "18 th JAN 2024",
      event: "Scholarship Awareness Session",
      description:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
    {
      date: "20 th JAN 2024",
      event: "Opening Registrations",
      description:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
    {
      date: "10th FEB 2024",
      event: "Closing Registrations",
      description:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
    {
      date: "15th FEB 2024",
      event: "Proposal Submissions Ending",
      description:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
    {
      date: "20th FEB 2024",
      event: "Announcing Finalists",
      description:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
    {
      date: "Will Announce Soon",
      event: "Final Hackathon & Award Ceremony",
      description:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
  ];
  function timelineItem(
    date: string,
    event: string,
    description: string,
    index: number
  ) {
    return (
      <div
        className={`timeline-4 ${index % 2 === 0 ? "left" : "right"}-4`}
        key={index}
      >
        <div
          className={` opacity-90 rounded card gradient-custom${
            index % 2 === 0 ? "-4" : ""
          }`}
        >
          <div className="card-body p-4">
            <i className="fas fa-brain fa-2x mb-3"></i>
            <b>
              <h4 className="text-gold">{event}</h4>
            </b>
            <p className="text-white">{description}</p>
            <p className="text-gold">{date}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="min-h-full w-full flex flex-col items-left justify-center text-left text-white overflow-hidden bg-gradient-to-br from-black to-darkgreen">
        <Navbar />
        <motion.main
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col justify-center items-center pb-10"
        >
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-col justify-center items-center">
              <Image
                className="hover:scale-105 transition-transform duration-300"
                src={NOIMask}
                alt="maskImage"
                width={700}
                height={500}
              />
            </div>
            <h1 className="text-2xl font-bold text-gold text-center mt-10">
              NOI 2024 Timeline
            </h1>
            <div className="flex flex-col w-4/5 mb-10">
              <div className="timeLineContainorOuter w-full">
                <div className="timeLineContainor  w-full">
                  <div className="row py-4 w-full">
                    <div
                      className="col-lg-4"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <div className="site-section-heading"></div>
                    </div>
                  </div>
                  <div
                    className="main-timeline-4 text-white w-full"
                    id="timeLineComponentDiv"
                  >
                    {items.map((item, index) => {
                      return timelineItem(
                        item.date,
                        item.event,
                        item.description,
                        index
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.main>
        <Footer/>
      </div>
    </>
  );
};

export default Page;
