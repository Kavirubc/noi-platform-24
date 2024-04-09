"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
// import Mobilenav from "@/components/mobilenav";
// import LoadingScreen from "@/components/loadingscreen";
import Image from "next/image";
import img2023 from "@/assets/img/2023-team.jpg";
import img2022 from "@/assets/img/2022-team.jpg";
import img2021 from "@/assets/img/2021-team.jpg";
import img2020 from "@/assets/img/2020-team.png";
import img2019 from "@/assets/img/2019-team.jpg";
import cplusplus from "@/assets/img/cplusplus.png";
import NOIMask from "@/assets/img/NOIMask.svg";
import Footer from "@/components/footer";
// import java from "@/assets/img/java.png";

const HowToCompete: React.FC = () => {
  const { data, status } = useSession();

  const profileData = data?.user?.profile;

  return (
    <>
      <motion.main
        // initial={{ opacity: 0, y: 50 }}
        // animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0, y: -50 }}
        // transition={{ duration: 0.5 }}
        className="min-h-full flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-black to-darkgreen"
      >
        <Navbar />
        <div className="mt-8 w-full bg-blacky-400 sm:w-3/4">
          <motion.main
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full flex flex-col justify-center items-center">
              <Image
                className="hover:scale-105 transition-transform duration-300"
                src={NOIMask}
                alt="maskImage"
                width={700}
                height={500}
              />
            </div>
            <h1 className="text-2xl text-center font-bold text-gold sm:w-full">
              How to Compete | තරඟ වදින ආකාරය
            </h1>
          </motion.main>
        </div>
        <div className="mt-8 text-center lg:w-3/4 md:w-3/4 w-3/4 mx-auto h-120">
          <motion.main
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg font-semibold mb-4 text-gold w-full text-center sm:text-center md:text-center lg:text-center">
              Eligibility | සුදුසුකම්
            </h2>
            <p className="text-white w-full sm:w-full md:w-full lg:w-full text-justify sm:text-justify md:text-justify lg:text-justify mt-5">
              The National Olympiad in Informatics program is for secondary
              school students, and contestants should be enrolled in a school.
              Contestants should be not older than twenty years on the 1st of
              July 2024.
            </p>
          </motion.main>
        </div>
        <motion.main
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col justify-center items-center "
        >
          <div className="lg:flex lg:flex-row md:flex-col sm:flex-col md-flex-row w-3/4 justify-center items-center h-auto md:h-90 py-4 mt-10">
            <div className="flex-none w-full sm:w-full md:w-1/4 lg:w-1/4 flex justify-center items-center mb-5 sm:mb-5 lg:mb-0">
              <Image src={img2023} alt="Image 1" width={200} height={200} />
            </div>
            <div className="flex-none w-full sm:w-full md:w-1/4 lg:w-1/4 flex justify-center items-center mb-5 sm:mb-5 lg:mb-0">
              <Image src={img2022} alt="Image 2" width={200} height={200} />
            </div>
            <div className="flex-none w-full sm:w-full md:w-1/4 lg:w-1/4 flex justify-center items-center mb-5 sm:mb-5 lg:mb-0">
              <Image src={img2021} alt="Image 3" width={200} height={200} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full justify-center items-center h-auto md:h-90 py-0 mb:py-10">
            <div className="flex-none w-full sm:w-full md:w-1/4 lg:w-1/4 flex justify-center items-center mb-5 sm:mb-5 lg:mb-0">
              <Image src={img2020} alt="Image 4" width={200} height={200} />
            </div>
            <div className="flex-none w-full sm:w-full md:w-1/4 lg:w-1/4 flex justify-center items-center mb-5 sm:mb-5 lg:mb-0">
              <Image src={img2019} alt="Image 5" width={200} height={200} />
            </div>
          </div>
        </motion.main>
        <motion.main
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col justify-center items-center mb-10"
        >
          <div className="container mx-auto text-left flex flex-col justify-center items-center sm:justify-center sm:items-center  md:justify-left md:items-center lg:justify-left md:items-center px-4 py-8 w-3/4 sm:w-3/4 lg:w-3/4 md:w-3/4  w-full text-white mt-10 mb-10">
            <h1 className="text-lg font-bold mb-5 text-gold text-center sm:text-center md:text-center lg:text-center text-gold w-full sm:w-3/4 md:w-3/4 lg:w-full mb-5">
              Process of the competition | තරඟ ක්‍රියාවලිය
            </h1>
            <p className="text-white w-3/4 sm:w-3/4 md:w-3/4 lg:w-full mb-2 text-justify sm:text-justify md:text-justify lg:text-justify">
              Upon registering at the NOI website, you will be able to sign into
              the NOI portal using the email and password provided at
              registration. The NOI portal is the dashboard that contains
              information regarding upcoming competitions, training sessions,
              homework, etc. personalized for you. If you`re new to programming,
              you can start off with the training material provided in the NOI
              portal.
            </p>
            <h2 className="text-lg font-semibold mb-4 text-gold w-full text-center sm:text-center md:text-center lg:text-center mt-5">
              Division B Program
            </h2>
            <p className="text-white w-3/4 sm:w-3/4 md:w-3/4 lg:w-full mb-2 text-justify sm:text-justify md:text-justify lg:text-justify">
              All newly registered contestants will be added to the Division B
              program as stated earlier. The monthly practice contests for the
              Division B contestants commenced on the 25th of November 2024.
              Contestants in this division have to face monthly practice
              contests hosted by the ACM Student Chapter of UCSC in
              collaboration with the Scientific Committee of NOI and these will
              be notified to the participants by the event coordinators. At the
              end of each monthly contest, the top two contestants of the
              Division B program will be promoted to the Division A program.
            </p>
            <h2 className="text-lg font-semibold mb-4 text-gold w-full text-center sm:text-center md:text-center lg:text-center mt-5 ">
              Division A Program
            </h2>
            <div className="flex justify-center">
              <div className="w-3/4 sm:w-3/4 md:w-full lg:w-full">
                <p className="text-white mb-5 text-justify sm:text-justify md:text-justify lg:text-justify">
                  The initial 8 contestants of the division A program have
                  already been selected from the NOI 2021 competition after
                  taking their final scores into consideration. With the initial
                  8 contestants, the Division A training program commenced in
                  November 2024. Participants who enter this division will
                  remain in this division until the end of the next Division B
                  monthly practice contest. Contestants will have to participate
                  in a set of competitions every month.
                </p>
                <p className="text-white mb-5 text-justify sm:text-justify md:text-justify lg:text-justify">
                  The score of the participants in the division A program will
                  be calculated based on the score obtained by participating in
                  contests instructed by the program organizers. (Eg: A
                  coordinator may instruct you to take part the codeforces
                  contests along with other international contests)
                </p>
                <p className="text-white mb-5 text-justify sm:text-justify md:text-justify lg:text-justify">
                  Contestants in the division A program are allowed to compete
                  in NOI monthly contests, but their results wouldn`t be counted
                  for the final leaderboard of the contest. At the end of each
                  monthly Division B contest, the last ranking two members of
                  the Division A program will be demoted to the Division B
                  program.
                </p>
              </div>
            </div>

            <div className="flex flex-col w-full h-400 mt-5">
              <h1 className="text-lg font-semibold mb-4 text-gold w-full text-center sm:text-center md:text-center lg:text-center">
                Eligible Languages | භාවිත කළ හැකි භාෂා
              </h1>
              <div className="flex flex-row w-full justify-left items-center">
                <a
                  href="https://cplusplus.com/doc/tutorial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" w-1/4"
                >
                  <div className="mx-2 flex justify-center items-center">
                    <Image src={cplusplus} alt="C++" width={100} height={100} />
                  </div>
                </a>

                {/* <div className="mx-2">
                  <Image src={java} alt="Java" width={200} height={200} />
                </div> */}
                <p className="mb-8 text-white w-1/2 sm:w-1/2 md:w-1/2 lg:w-3/4 pt-7 text-justify sm:text-justify md:text-justify lg:text-justify">
                  C++ is commonly used in the development of system software,
                  such as operating systems and device drivers, and in game
                  development
                </p>
              </div>
            </div>
            <h1 className="text-lg font-semibold mb-4 text-gold w-full text-center sm:text-center md:text-center lg:text-center">
              About the Competition | තරගාවලිය පිළිබඳව
            </h1>
            <p className="mb-8 text-white w-3/4 sm:w-3/4 md:w-3/4 lg:w-full mb-5 text-justify sm:text-justify md:text-justify lg:text-justify">
              The main competition (or the National Olympiad in Informatics)
              will take place at the University of Colombo. The 8 contestants of
              Division A by April 2024 will be straight away participating in
              the main competition. In addition to that, there will be an online
              Qualifier Round which is open to any school student who meets the
              eligibility criteria. The top-ranking 8 students selected from
              this Qualifier Round will be given the chance to compete in the
              main competition. All registered contestants are invited to take
              part in the Qualifier Round.
            </p>

            <p className="text-gold w-3/4 sm:w-3/4 md:w-3/4 lg:w-full mb-5 text-justify sm:text-justify md:text-justify lg:text-justify">
              Four contestants will be selected based on their performance at
              the main competition to represent Sri Lanka at the International
              Olympiad in Informatics 2024 program, hosted by Egypt.
            </p>
          </div>
        </motion.main>
        <Footer />
      </motion.main>
    </>
  );
};

export default HowToCompete;
