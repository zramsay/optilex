import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitMainImg from "../../public/img/benefitMain.png";
import benefitOneImg from "../../public/img/benefitOne.png";
import benefitTwoImg from "../../public/img/benefitTwo.png";

const benefitMain = {
  title: "(code) x (law)",
  desc: "CryptoLawyer.net combines smart contract-based legal automation with compliant viral marketing strategies to scale your business efficiently and securely.",
  image: benefitMainImg,
  bullets: [
    {
      title: "Smart Contract Legal Automation",
      desc: "",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Viral Marketing with Tap-to-Earn",
      desc: "",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Incentivized Referrals for Exponential Expansion",
      desc: "",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitOne = {
  title: "Go To Market Quickly & Efficiently",
  desc: "Our platform integrates marketing with multi-jurisdictional compliance, enabling businesses to operate seamlessly across borders while maintaining legal integrity.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Multi-Jurisdictional Compliance Automation",
      desc: "",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Provable Compliance in Every Campaign",
      desc: "",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Customized Smart Contracts for Global Operations",
      desc: "",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Exponential Benefits",
  desc: "Increase Engagement, Reducing Risk & Enhancing Profitability with Gamified Legal Tech.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Engagement Fostered by Games",
      desc: "",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Compliance Enhanced by Smart Contracts",
      desc: "",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Scalable Global Operations",
      desc: "",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo, benefitMain };
