//https://velog.io/@raverana96/React-How-to-use-Google-Analytics-with-React
import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const TRACKING_ID = "UA-216505646-3";

const useGAPageTracking = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  /* localhost는 인지 못하게  */
  useLayoutEffect(() => {
    if (!window.location.href.includes("localhost")) {
      ReactGA.initialize(TRACKING_ID);
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [initialized, location]);
};

export default useGAPageTracking;
