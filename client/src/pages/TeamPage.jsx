import PropTypes from "prop-types";
import "@fortawesome/fontawesome-free/css/all.min.css";

const AboutPage = () => {
  // const message = "here i am going to write something";
  const customWidth = "80rem";
  return (
    <div className="flex justify-center items-center h-screen">
      <section className="bg-white py-16">
        {/* Top section */}
        <div className="containter-mx-auto">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 border-b-4 border-gray-800 pb-2 uppercase">
              Developer
            </h2>

            {/* <p className="text-gray-700 text-lg text-center mb-8">{message}</p> */}
          </div>
        </div>

        <div style={{ maxWidth: customWidth }} className="mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 ">
            <TeamMember
              imageSrc="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/322394746_542964617745358_5059457736338042076_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=teM9OBmHkp4AX_woeVl&_nc_ht=scontent.fktm8-1.fna&oh=00_AfA_e9ilQ_OJtlZQeVqgDsRBebm1hoZKwVTOlv6lv2EzTg&oe=65E66E83"
              name="Raj Kumar Paneru"
              role="Computer Engineering Student"
              description="Passionate Pulchowk Campus computer engineering student, fueled by a relentless pursuit of knowledge and innovation, ready to tackle any challenge in the ever-evolving tech landscape"
              FacebookLink="https://www.facebook.com/R.K.Paneru02"
              GitHubLink="https://github.com/Rajkumarpaneru18"
            />
            <TeamMember
              imageSrc="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/402480419_1487583435429789_3708230997483638665_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=l43tUxBGL3kAX8pNd4Y&_nc_ht=scontent.fktm8-1.fna&oh=00_AfCJWunvzoBaBMo6e3r-ypSBvUhKi0Mytd5lXqxpcDMq5w&oe=65E517E3"
              name="Subash Lamichhane"
              role="Computer Engineering Student"
              description="Pulchowk Campus student in computer engineering, committed to pushing boundaries, breaking barriers, and leaving a mark of excellence in the world of technology"
              GitHubLink="https://github.com/Subash-Lamichhane"
            />
            <TeamMember
              imageSrc="https://avatars.githubusercontent.com/u/83917129?v=4"
              name="Susheel Thapa"
              role="Computer Engineering Student"
              description="As a computer engineering student at Pulchowk Campus, I'm on a mission to harness the power of technology to solve complex problems, drive progress, and inspire positive change"
              GitHubLink="https://github.com/SusheelThapa"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
const TeamMember = ({
  imageSrc,
  name,
  role,
  description,
  FacebookLink,
  GitHubLink,
}) => {
  return (
    <div className="rounded-2xl shadow-lg p-8 bg-gray-100 hover:bg-blue-600 hover:text-white transition duration-200 transform hover:scale-110">
      <img
        src={imageSrc}
        className="team-img mx-auto h-40 mb-4 rounded-full"
        alt="rajphoto"
      />
      <h3 className="text-xl font-bold mb-2 text-center uppercase">{name}</h3>
      <div className="team-info mb-4 text-center">
        <p className="text-gray-600 text-sm italic">{role}</p>
      </div>
      <p className="text-gray-600 text-center">{description}</p>

      {/* Adding icons  */}
      <ul className="team-icon flex justify-center mt-4 space-x-4">
        <a href={FacebookLink} target="_blank">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="twitter.com/" className="twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href={GitHubLink} target="_blank" className="github">
          <i className="fab fa-github"></i>
        </a>
        <a href="instagram.com" className="instagram">
          <i className="fab fa-instagram"></i>
        </a>
      </ul>
    </div>
  );
};
TeamMember.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  FacebookLink: PropTypes.string.isRequired,
  GitHubLink: PropTypes.string.isRequired,
};

export default AboutPage;
