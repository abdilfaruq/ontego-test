import React, { useEffect } from 'react';

function ScrollToTop() {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollToTopBtn = document.getElementById("gotoTop");
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="gotoTop"
      className="icon-angle-up"
      onClick={scrollToTop}
      style={{ display: "none", position: "fixed", bottom: "50px", right: "30px", cursor: "pointer" }}
    ></div>
  );
}

export default ScrollToTop;
