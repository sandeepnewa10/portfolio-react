import React from "react";
import "./Footer.css"

export const Footer = () => {
  return (
    <footer className="section-footer py-4">
      <div className="container">
        <section className="footer-bottom d-flex justify-content-lg-between">
          <p className="text-muted mb-0">
           
            © 2022 . All rights reserved.{" "}
          </p>
          <nav>
            <a href="#" className="px-2">
              Support
            </a>
            <a href="#" className="px-2">
              Accessibility
            </a>
          </nav>
        </section>
      </div>
    </footer>
  );
};
