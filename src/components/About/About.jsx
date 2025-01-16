import React from "react";
import experienceData from "@/content/experienceData";
import siteMetadata from "@/content/siteMetaData";
import skills from "@/content/skillMetadata";
import { CircleDashed } from "lucide-react";

const About = () => {
  return (
    <div className='mx-auto max-w-3xl xl:max-w-5xl px-4 xl:px-0 my-20'>
      <div className="mb-8  md:flex md:flex-row flex flex-col justify-between items-center">
        <div className="text-center md:text-left space-y-3">
          <h1 className="text-3xl md:text-5xl font-extrabold font-mono text-title dark:text-title">
            {siteMetadata.author}
          </h1>
          <h2 className="text-sm md:text-base font-semibold font-mono py-4">
            {siteMetadata.currentPosition} at{" "}
            {siteMetadata.currentWorkingCompanyName}
          </h2>
        </div>
        <div>
          <img
            alt={siteMetadata.author}
            loading="lazy"
            width="130"
            height="130"
            className="rounded-full grayscale"
            src="static/avatar.png"
          />
        </div>
      </div>

      {/* description */}
      <div>
        <p className="text-lg font-mono leading-relaxed text-justify">
        {siteMetadata.description}
        </p>
        <div className="font-mono">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-title dark:text-title my-10 ">
            Skills
          </h2>

          {skills &&
            skills?.map((skillsObj, index) => (
              <div key={index}>
                <div className="flex items-center gap-3">
                  <CircleDashed size={15} style={{ color: '#004AAD' }} />
                  <h3 className="font-bold text-title ">{skillsObj?.category}</h3>
                </div>
                <div className="mb-5 ps-7">
                  {skillsObj?.skills?.map((skill, idx) => (
                    <span key={idx}>{skill},&nbsp;</span>
                  ))}
                </div>
              </div>
            ))}
        </div>

        <div className="font-mono">
          <h2 className="font-bold text-lg md:text-xl lg:text-2xldark:text-title text-title my-10">
            Professional Expericence
          </h2>
          <div  >
            {experienceData.map((expItem, index) => (
             
              <div key={index} className="mb-12  flex flex-col  gap-5"  >
                
                <div className="flex items-center">
                  <a href={expItem.linkedIn} target="_blank">
                    <img
                      src={expItem.imageUrl}
                      alt={expItem.companyName}
                      className="w-14 h-14 rounded-full border border-[#ccc] dark:border-transparent"
                    />
                  </a>
                  <h2 className="font-bold text-lg md:text-xl lg:text-2xl dark:text-title text-title mb-2  ml-5 ">
                    <a href={expItem.linkedIn} target="_blank">
                      {expItem.companyName}
                    </a>
                  </h2>
                </div>

                {/* one or more company */}

                <div className="pl-8  mt-5">
                  {expItem?.experiences?.map((compItem, index) => (
                    <div className="timeline pt-5" key={index}>
                      <span className="timeline-dot "></span>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold mb-2">
                          {compItem.role}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {" "}
                          {compItem.employmentType} · {compItem.duration} ·{" "}
                          {compItem.location}
                        </p>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                          {compItem.description}
                        </p>
                        {compItem.skills && (
                          <div className="mt-4 pb-4" >
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-bold">
                              Skills:
                            </p>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {compItem.skills.map((skll, i) => (
                                <span
                                  key={i}
                                  className=" mr-2 text-sm border border-transparent hover:border-gray-300 dark:hover:border-gray-500
                                bg-[#cfe4ff] dark:bg-[#2e2e2e] text-gray-700 dark:text-gray-300 rounded-lg py-2 px-3 cursor-pointer"
                                >
                                  {skll}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
