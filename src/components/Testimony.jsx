import styled from "styled-components";
import { motion } from "framer-motion";
import { textAnimate } from "../animation";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ceo from "../assets/png/ceo.png";
import fola from "../assets/png/fola.png";
import qonvex from "../assets/png/qonvex.png";

const Testimony = () => {
  return (
    <Section>
      <Container id="testimonials">
        <motion.div
          initial="hide"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.h1 variants={textAnimate} className="head">
            Testimonials
          </motion.h1>
        </motion.div>
        <SwiperContainer
          initial="hide"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            grabCursor={true}
            navigation={{
              prevEl: ".swiper-custom-navigation-prev",
              nextEl: ".swiper-custom-navigation-next",
            }}
            pagination={true}
          >
            <SwiperSlide>
              <Card variants={textAnimate}>
                <div>
                  <img src={ceo} alt="" />
                </div>
                <h3>Gboyega Okegbenro</h3>
                <p>CEO, Peachtree Comms Ltd.</p>
                <q>
                  We needed SMS Marketing to generate revenue, We chose Bunda
                  digital solutions, We are glad we did because it was SMS
                  Marketing like no other.
                </q>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <div>
                  <img src={qonvex} alt="qonvex" />
                </div>
                <h3>Toyin Elefontuyi</h3>
                <p>Qonvex Tech Ltd</p>
                <q>
                  Bundakten was a real pleasure to work with and we look forward
                  to working with them again. they are definitely the kind of
                  designer you can trust with a project from start to finish.
                </q>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <div>
                  <img src={fola} alt="fola" />
                </div>
                <h3>Folakunle Gbadamosi</h3>
                <p>CEO, Fly Athletics, Uk</p>
                <q>
                  Bundakten digital solutions provided me with an exceptional
                  website. Their team is outstanding, talented, and hardworking.
                </q>
              </Card>
            </SwiperSlide>
          </Swiper>
        </SwiperContainer>
        <div className="swiper-custom-navigation swiper-custom-navigation-prev navigate backNavigate">
          <BsArrowLeft />
        </div>
        <div className="swiper-custom-navigation swiper-custom-navigation-next navigate frontNavigate">
          <BsArrowRight />
        </div>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  min-height: 70vh;
  background-color: ${(props) => props.theme.primaryBg};
  transition: background-color 0.3s ease-out;
`;

const Container = styled.div`
  width: 87%;
  margin: 0 auto;
  position: relative;
  padding: 4rem 0;
  .head {
    text-align: center;
    color: ${(props) => props.theme.text1};
    font-weight: bold;
    line-height: 2.7rem;
    font-size: 2.3rem;
    padding-bottom: 3rem;
  }

  .navigate {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 3.5rem;
    padding: 0.5rem;
    border-radius: 10px;
    color: #fff;
    background-color: ${(props) => props.theme.blue};
    position: absolute;
    cursor: pointer;
    svg {
      font-size: 1.5rem;
    }
  }

  .backNavigate {
    left: 5rem;
    top: 17rem;
  }

  .frontNavigate {
    right: 5.5rem;
    top: 17rem;
  }

  @media screen and (max-width: 40rem) {
    width: 90%;
    padding: 2rem 0;
    .head {
      font-size: 2rem;
    }
    .navigate {
      display: none;
    }
  }
`;

const SwiperContainer = styled(motion.article)`
  width: 50%;
  margin: 0 auto;
  .swiper-slide {
    height: 24rem;
  }

  .swiper-pagination-bullet-active {
    background-color: ${(props) => props.theme.blue};
  }

  @media screen and (max-width: 40rem) {
    width: 100%;
  }
`;

const Card = styled(motion.div)`
  width: 100%;
  height: 21rem;
  padding: 2.5rem 2rem;
  border-radius: 15px;
  background-color: ${(props) => props.theme.blue};
  color: #fff;
  transition: background-color 0.3s ease-out;
  div {
    margin: 0 auto;
    width: 5rem;
    height: 5rem;
    border: 2px solid #fff;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h3 {
    margin: 0.7rem 0 0.3rem;
    text-align: center;
  }
  p {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export default Testimony;
