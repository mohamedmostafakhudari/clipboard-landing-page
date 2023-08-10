import {
  BackgroundHeaderDesktop,
  BackgroundHeaderMobile,
  BlacklistIcon,
  FacebookIcon,
  InstagramIcon,
  PreviewIcon,
  TextIcon,
  TwitterIcon,
  ComputerImage,
  DevicesImage,
  GoogleLogo,
  HpLogo,
  IbmLogo,
  MicrosoftLogo,
  VectorLogo,
  Logo,
} from "../assets";
const snippet = {
  title: "Keep track of your snippets",
  text: "Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.",
  img: ComputerImage,
  points: [
    {
      title: "Quick Search",
      text: "Easily search your snippets by content, category, web address, application, and more.",
    },
    {
      title: "iCloud Sync",
      text: "Instantly saves and syncs snippets across all your devices.",
    },
    {
      title: "Complete History",
      text: "Retrive any snippets from the first moment you started using the app.",
    },
  ],
};
const clipboard = {
  title: "Access Clipboard anywhere",
  text: "Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.",
  img: DevicesImage,
};
const workflow = {
  title: "Supercharge your workflow",
  text: "We've got the tools to boost your productivity.",
  points: [
    {
      title: "Create blacklists",
      text: "Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
      icon: BlacklistIcon,
    },
    {
      title: "Plain text snippets",
      text: "Remove unwanted formatting from copied text for a consistent look.",
      icon: TextIcon,
    },
    {
      title: "Sneak preview",
      text: "Quick preview of all snippets on your Clipboard for easy access.",
      icon: PreviewIcon,
    },
  ],
};
const clients = {
  logos: [GoogleLogo, IbmLogo, MicrosoftLogo, HpLogo, VectorLogo],
};
const footer = {
  logo: Logo,
  links: ["FAQs", "Privacy Policy", "Install Guide", "Contact Us", "Press Kit"],
  socials: [FacebookIcon, TwitterIcon, InstagramIcon],
};
export { snippet, clipboard, workflow, clients, footer };
