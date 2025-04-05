import React from "react";
import "./Linktree.css";

const links = [
  { title: "Instagram:raphaaa", url: "https://www.instagram.com/raphaaaofficial?igsh=MWh5YWpzejQ3NA%3D%3D&utm_source=qr" },
  { title: "Instagram:Citimart", url: "https://www.instagram.com/citimart_official?igsh=MWx1Mnc1aTl2cnFpdg==" },
  { title: "Facebook:Citimart", url: "https://facebook.com/share/16R31P8msU/?mibextid=wwXlfr" },
  { title: "WhatsApp:Citimart", url: "https://wa.me/message/OICUI7ZYGK76I1" },
//   { title: "Blog", url: "https://your-blog.com/" }
];

const Linktree = () => {
  return (
    <div className="container">
      <div className="linktree-box">
        <h1 className="title">In house Linktree</h1>
        <div className="links">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Linktree;
