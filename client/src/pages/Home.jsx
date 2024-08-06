import React from "react";
import Navbar from "../components/Navbar";

import ELementOne from "../assets/element-1.png";
import ELementTwo from "../assets/element-2.png";
import EpisodeOne from "../assets/episode/one.jpg";
import EpisodeTwo from "../assets/episode/two.jpg";
import EpisodeThree from "../assets/episode/three.jpg";
import EpisodeFour from "../assets/episode/four.jpg";
import EpisodeFive from "../assets/episode/six.jpg";
import Spotify from "../assets/logo/spotify.png";
import Amazon from "../assets/logo/amazon-music.png";
import ITunes from "../assets/logo/itunes.png";
import KUKUFM from "../assets/logo/kukufm.png";
import YTMusic from "../assets/logo/ytmusic.png";

function Home() {

    const SpotifyLink = () => {
        window.open("https://open.spotify.com/show/7mE3wdeVBEabTRoYfUMWix?si=e33b71128aed4fba", "_blank");
    }

    const AmazonLink = () => {
        window.open("https://music.amazon.com/podcasts/919561e4-f5b7-46f9-87da-86999b25d0cd/enna-da-podcast", "_blank");
    }

    const ITunesLink = () => {
        window.open("https://podcasts.apple.com/us/podcast/enna-da-podcast/id1661398884", "_blank");
    }

    const YTMusicLink = () => {
        window.open("https://music.youtube.com/playlist?list=PLHmczduBpvVAbGsE86MVaX6O7mSw2BmFi&si=twkFoch23XadOTXN", "_blank");
    }

    const KuKuFMLink = () => {
        window.open("https://music.youtube.com/playlist?list=PLHmczduBpvVAbGsE86MVaX6O7mSw2BmFi&si=twkFoch23XadOTXN", "_blank");
    }

  return (
    <>
      <Navbar />
      <div className="home-page-area">
        <div className="home-page-area-top-hero-section">
          <div className="home-page-element-one-area">
            <img src={ELementTwo} alt="" />
          </div>
          <div className="home-page-content-area">
            <h1>
              Enna da <span>Podcast</span>
            </h1>
            <p>
              Vanakam Makaley Pesitu irupathu{" "}
              <span className="rj">RJ Prasanthu</span> neegal katutu irupathu
              Enna da Podcast. In this podcast nanga ellarum different topics ah
              different point of view la share pana porom, so don&apos;t forget to
              share with your friends.
            </p>
            <button onClick={SpotifyLink}>Subscribe</button>
          </div>
          <div className="home-page-element-two-area">
            <img src={ELementOne} alt="" />
          </div>
        </div>
        <div className="home-page-area-top-episodes-area">
          <div className="top-episode-one">
            <img src={EpisodeOne} alt="" />
            <button className="view-now-button-one">Listen Now</button>
          </div>
          <div className="top-episode-one">
            <img src={EpisodeTwo} alt="" />
            <button className="view-now-button-two">Listen Now</button>
          </div>
          <div className="top-episode-one">
            <img src={EpisodeThree} alt="" />
            <button className="view-now-button-three">Listen Now</button>
          </div>
          <div className="top-episode-one">
            <img src={EpisodeFour} alt="" />
            <button className="view-now-button-four">Listen Now</button>
          </div>
          <div className="top-episode-one">
            <img src={EpisodeFive} alt="" />
            <button className="view-now-button-five">Listen Now</button>
          </div>
        </div>
        <div className="home-page-supported-by-area">
          <div className="supported-by-area">
            <div className="supported-by-text-area">
              <p>Available on :</p>
            </div>
            <div className="supported-by-podcast-logo-area">
              <img src={Spotify} alt="" className="spotify" onClick={SpotifyLink} />
              <img src={Amazon} alt="" className="amazon" onClick={AmazonLink} />
              <img src={YTMusic} alt="" className="ytmusic" onClick={YTMusicLink} />
              <img src={KUKUFM} alt="" className="kukufm" />
              <img src={ITunes} alt="" className="itunes" onClick={ITunesLink} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
