import Navigation from "./Navigation";

import Content from "./Content";

import "./App.scss";

const LINKS = [
  { label: "About", to: "http://localhost:3000/" },
  { label: "How it works", to: "https://" + window.location.host },
  { label: "Contact", to: "#" },
];

export default function App() {
  return (
    <div className="boxWrapper">
      <div className="box">
        <Navigation links={LINKS} />
        <Content />
      </div>
      <div className="desktopImage"></div>
    </div>
  );
}
