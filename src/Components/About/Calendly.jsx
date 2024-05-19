import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const CalendlyBadge = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Helmet>
      <div id="calendly-badge-container"></div>
      <script type="text/javascript">
        {`
          window.onload = function() {
            Calendly.initBadgeWidget({
              url: 'https://calendly.com/prashantvashisth53/prashant-sharma-s-services',
              text: 'Schedule time with me',
              color: '#c9f31d',
              textColor: '#000000',
              branding: undefined
            });
          }
        `}
      </script>
    </>
  );
};

export default CalendlyBadge;
