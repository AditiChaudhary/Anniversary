import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="div-home">
      <br />
      <h1 className="h1-home">Happy One Year❤️</h1>
      <br />
      <br />
      <p className="p-home">
        Here's to the one person who has been the best part of my life right
        from the moment we met❣ One year of memories, so yeah it's been an year.
        Every moment with you has been very special. Life could not be half as
        beauiful without you. Good times pass away so fast, no. Abhi thode se
        time phle hi to mile thhe hm, when you asked me if I was Vikash Sir ki
        sis. And see, now my life seems incomplete without you. There was this
        bonding and understanding from the very first day, and it's getting
        better everyday. Okay we do fight sometimes, but I promise, you will
        always find me by your side, in any situation whatsoever.Thoda aap meko
        tolerate kr liyo, thoda m aapko kr lunga, kat jaegi jindagi ese hi😅 I
        miss Amul wali ice-cream, hobbies club wala garden, Ganga Canal, and
        what not, and I miss you. Bc ek sal me se bhi 7 mhine to ghar pe rh
        liye...😂 Kismat hi khrab h apni to. But koi naa, seh lenge thoda. Well
        I hate you anyways☹️
      </p>
      <button className="button-home">
        <Link to="images">There's something more ahead!! </Link>
      </button>
    </div>
  );
}

export default Home;
