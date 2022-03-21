import { useState, useEffect } from 'react';

import Navbar from '../components/Navbar';
import Header from '../components/Header';

import styles from '../styles/Drumset.module.scss';

export default function Home() {
    const [width, setWidth] = useState(650);
    useEffect(() => {
        setWidth(window.innerWidth);
    });

  return (
    <div>
      <Header siteTitle={"Sam Learner - Drumset"} description={"Light Up Drumset Project Build/Video"}/>
      <Navbar />

        <div className="container">
            <h2 className={styles["title"]}>Light Up Drumset</h2>
            <div>
                <p>
                    Using an arduino, some disk vibration sensors, an 8-channel relay board, and some LEDs, a friend and I built a light-up drumset for Cleveland's Ingenuity Fest. 
                    We used two different sized buckets as toms, a large trash bin as a bass drum, and a wok from our kitchen as a cymbol. By attaching each to their own LED color, we 
                    were able to translate drum beats into something visual.
                </p>
            </div>
        </div>

        <hr></hr>

        <div className="container">
            <div className="row">
                <div className="caption">
                    <p>
                        Here's an early test of the sensor, relay, arduino, and light setup with the LEDs outside of the drumset. One of the early challenges was figuring out the right 
                        sensitivity for the disk sensors, so that they wouldn't fire off with light touches, but would reliably fire off when the bucket was hit with a drum stick. 
                    </p>
                </div>
                <video className="drumset-image" controls>
                    <source src="/img/drumset/drumset-build-1.mp4" type="video/mp4" alt="Testing the sensor/arduino/relay setup to make sure we could turn a drum hit into a light."></source>
                </video>
            </div>
            <div className="row">
                <div className="caption">
                    <p>
                        We taped the LEDs to the inside of the first bucket and we had our first light-up drum.
                    </p>
                </div>
                <video className="drumset-image" controls>
                    <source src="/img/drumset/drumset-build-2.mp4" type="video/mp4" alt="Testing the drum with the LED inside of it."></source>
                </video>
            </div>
            <div className="row">
                <div className="caption">
                    <p>
                        After wiring up our high tom (smaller bucket), bass drum (garbage bin), and cymbol (kitchen wok), we played around with some other light-up patterns, like having 
                        the lights stay on longer after a hit. It took some adjusting to get everything to fire correcty with the thicker surfaces and differnet materials. 
                        We also learned pretty quickly that the very cheap sensors we bought were prone to breaking/misfiring when hit hard, so we ended up having to fix/replace them pretty often.
                    </p>
                </div>
                <video className="drumset-image" controls>
                    <source src="/img/drumset/drumset-build-3.mp4" type="video/mp4" alt="Trying out the new additons to the drumset."></source>
                </video>
            </div>
            <div className="row">
                <div className="caption">
                    <p>
                        Finally, we tested out the set in the Ingenuity Fest space. The dark warehouse at ended up being a perfect venue for the drumset and we were able to line some nearby 
                        window sills with some lights that were slower to power on, creating a kind of crescendo effect with repeated drum hits.
                    </p>
                </div>
                <video className="drumset-image" controls>
                    <source src="/img/drumset/drumset-play-short-1.mp4" type="video/mp4" alt="Testing out the light up drumset in the Ingenuity Fest warehouse."></source>
                </video>
            </div>
            <div className="row">
                <div className="caption">
                    <p>
                        Here's John making a hot fix to the set after we busted yet another sensor. Luckily these were relatively cheap and could usually be soldered back together pretty easily.
                    </p>
                </div>
                <img className="drumset-image" src="/img/drumset/drumset-fix.jpg" alt="Making a quick fix to the switch on the fly."/> 
            </div>
        </div> 

        <hr></hr>
        
        <div className="container">
            <p>
                Some footage of people using the finished drumset throughout the weekend:
            </p>
            <div className="gallery">
                <video className="drumset-image" controls>
                        <source src="/img/drumset/drumset-play-short-2.mp4" type="video/mp4" alt="Testing out the light up drumset in the Ingenuity Fest warehouse."></source>
                </video>
                <video className="drumset-image" controls>
                        <source src="/img/drumset/drumset-play-short-4.mp4" type="video/mp4" alt="Testing out the light up drumset in the Ingenuity Fest warehouse."></source>
                </video>
                <video className="drumset-image" controls>
                        <source src="/img/drumset/drumset-play-short-3.mp4" type="video/mp4" alt="Testing out the light up drumset in the Ingenuity Fest warehouse."></source>
                </video>
            </div>

            <iframe className="solo-image" src="https://player.vimeo.com/video/536435125" width={width < 700 ? "380" : "640"} height={width < 700 ? "210" : "360"} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        </div>
    </div>
  )
}
