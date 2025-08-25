import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const QuickLinks = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to navigate to home and scroll to section
  const handleRedirect = (e, id) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // Already on home, just scroll
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    } else {
      // Navigate to home and pass section id in state
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <div className="flex flex-col items-start px-4 sm:px-6 md:px-0">
      <h3 className="text-white font-semibold mb-3">Quick Links</h3>
      <ul className="space-y-2">
        <li>
          <a
            href="/#howitworks"
            className="text-gray-400 hover:text-white text-base transition-colors"
            onClick={e => handleRedirect(e, "howitworks")}
          >
            How It Works
          </a>
        </li>
        <li>
          <a
            href="/#ourvision"
            className="text-gray-400 hover:text-white text-base transition-colors"
            onClick={e => handleRedirect(e, "ourvision")}
          >
            Our Vision
          </a>
        </li>
        <li>
          <a
            href="/#faq"
            className="text-gray-400 hover:text-white text-base transition-colors"
            onClick={e => handleRedirect(e, "faq")}
          >
            FAQ
          </a>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
