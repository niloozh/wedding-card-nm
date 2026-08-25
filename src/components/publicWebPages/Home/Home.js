import { useEffect, useState } from "react";
import cx from "classnames";
import Div from "@/baseComponents/Div";
import Button from "@/baseComponents/Button";
import AppImage from "@/baseComponents/AppImage";
import Icon from "@/baseComponents/Icon/Icon";

import { COLORS } from "@/constants/vars";

import styles from "./Home.module.scss";
import NewWeddingCardImg from "../../../assets/styles/Images/card-new.png";
import LocationPhoto from "../../../assets/styles/Images/location.jpeg";
import audioFile from "../../../assets/styles/music/yar-mobarak-bada.mp3";
import CardContent from "./CardContent";

const Home = ({ guest }) => {
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const audioInstance = new Audio(audioFile);
      setAudio(audioInstance);

      audioInstance.addEventListener("ended", () => setIsPlaying(false));

      return () => {
        audioInstance.removeEventListener("ended", () => setIsPlaying(false));
      };
    }
  }, []);

  const handleClick = () => {
    if (audio) {
      audio.load();
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Audio playback failed:", error);
        });
    }
    setIsCardOpened(true);
  };

  const toggleAudio = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play().catch((error) => {
          console.error("Audio playback failed:", error);
        });
        setIsPlaying(true);
      }
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {!isCardOpened && (
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className={cx(
            "width-per-100 p-l-temp-6 mouse-hand min-height-vh-full",
            styles.cardContainer
          )}
        >
          <Div className="pos-rel">
            <Div
              type="flex"
              direction="vertical"
              hAlign="end"
              className="pos-abs text-black z-10 width-px-200"
              style={{ top: "90px", left: "50px" }}
            >
              {" "}
              :حضور محترم
            </Div>
            <Div
              type="flex"
              direction="vertical"
              hAlign="end"
              className="pos-abs text-theme-one z-10 width-px-200"
              style={{ top: "130px", left: "50px" }}
            >
              {guest?.guest_name}
            </Div>
            <AppImage
              src={NewWeddingCardImg}
              width={360}
              heightOverWidthAsprctRatio={1.5}
              className="br-rad-md of-hidden"
              onClick={handleClick}
            />
            <Div type="flex" hAlign="center" className="m-t-10 text-theme-one">
              برای اطلاعات بیشتر روی کارت کلیک کنید
            </Div>
          </Div>
        </Div>
      )}
      {isCardOpened && (
        <Div
          type="flex"
          direction="vertical"
          hAlign="center"
          className={cx("p-all-temp-10 text-black", styles.container)}
        >
          <CardContent />
          <Div
            type="flex"
            hAlign="start"
            className="m-t-auto width-per-100"
            style={{ position: "fixed", bottom: "10px", right: "-30px" }}
          >
            <Div
              type="flex"
              vAlign="center"
              onClick={toggleAudio}
              className={"m-r-10"}
            >
              {isPlaying ? (
                <Icon type="pause" color={"#680000"} scale={3} />
              ) : (
                <Icon type="play" color={"#680000"} scale={3} />
              )}
            </Div>

            <Button onClick={toggleModal} className={"height-px-50 m-l-20"}>
              نمایش نقشه
            </Button>
          </Div>
        </Div>
      )}
      {isModalOpen && (
        <Div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Div
            type="flex"
            direction="vertical"
            hAlign="center"
            className={cx(styles.modal)}
            style={{
              // backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "80%",
              maxWidth: "600px",
            }}
          >
            <Div type="flex" hAlign="end" className="width-per-100">
              <Div className="m-r-temp-5">نقشه مکانی</Div>
              <Div onClick={toggleModal}>☓</Div>
            </Div>

            {/* <Button onClick={toggleModal} className={"m-t-temp-5"}></Button> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4945.434222326782!2d52.371545905082066!3d29.841770708082006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDUwJzI5LjgiTiA1MsKwMjInMjQuNSJF!5e0!3m2!1sen!2s!4v1759073838852!5m2!1sen!2s"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <Div className="m-t-temp-3">: کروکی آدرس</Div>
            <AppImage
              src={LocationPhoto}
              width={290}
              heightOverWidthAsprctRatio={0.5}
              className="br-rad-md of-hidden"
              onClick={handleClick}
            />
          </Div>
        </Div>
      )}
    </>
  );
};

export default Home;
