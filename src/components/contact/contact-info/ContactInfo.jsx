import "./contactInfo.css";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";

// contact me left component
const ContactInfo = () => {
  return (
    <>
      <div className="lg:w-1/2 lg:mx-6 lg:mt-4">
        <h1 className="text-md  text-center lg:text-left  text-white lg:text-3xl ">
          If you'd like to talk about a project or have any freelance projects,
          just drop me a message. I'm currently Open for freelance,
          collaboration & open-source for any frontend web projects.
        </h1>
        <div className="mt-6 space-y-8 md:mt-8">
          <p className="flex items-start">
            <HiLocationMarker className="w-6 h-6  mx-2" color="var(--white)" />
            <span className="mx-2 text-gray-400 truncate w-72">
              Pilani, Rajasthan
            </span>
          </p>
          <p className="flex items-start">
            <MdEmail className="w-6 h-6  mx-2" color="var(--white)" />
            <span className="mx-2 text-gray-400 truncate w-72">
              <a href="mailto:shubhambhoj3@example.com">
                shubhambhoj3@gmail.com
              </a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
