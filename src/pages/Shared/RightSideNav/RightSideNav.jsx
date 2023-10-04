import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-2xl">Login with</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Github
        </button>
      </div>
      <div className="p-4  mb-6">
        <h2 className="text-2xl">Find Us On</h2>
        <a className="p-4 flex items-center gap-3 border rounded-t-lg" href="">
          <FaFacebook></FaFacebook> Facebook
        </a>
        <a className="p-4 flex items-center gap-3 border-x " href="">
          <FaTwitter></FaTwitter> Twitter
        </a>
        <a className="p-4 flex items-center gap-3 border rounded-b-lg" href="">
          <FaInstagram></FaInstagram> instagram
        </a>
      </div>

      {/* q zone  */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-2xl">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
