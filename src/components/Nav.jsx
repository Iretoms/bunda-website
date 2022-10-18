import { useState } from "react";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { motion } from "framer-motion";

const Nav = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);

  const onShow = () => {
    setShow(!show);
  };

  const mobileAnimation = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      x: 100,
    },
  };

  return (
    <StyledNav
      variants={mobileAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Container>
        <NavList>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li className={show ? "services show" : "services"} onClick={onShow}>
            <div>
              <p>Services</p>
              <FaAngleDown />
            </div>
            <div className="servicesList">
              <ul>
                <li>
                  <Link
                    to="/"
                    className={location.pathname === "/" && "active"}
                  >
                    Brand Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/software-development"
                    className={
                      location.pathname === "/software-development" && "active"
                    }
                  >
                    Software Development
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </NavList>
      </Container>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.blue};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 4rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
`;

const Container = styled.div`
  min-height: 60vh;
  width: 50%;
`;

const NavList = styled(motion.ul)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  li {
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    a {
      font-size: 1.2rem;
      color: #fff;
    }
  }

  .services {
    cursor: pointer;
    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      svg {
        transform: rotate(0);
        transition: transform 0.3s linear;
      }
    }

    .servicesList {
      margin-left: 1rem;
      margin-top: 0.5rem;
      overflow: hidden;
      ul {
        transform: translateY(-100%);
        transition: transform 0.3s linear;
        li {
          margin-bottom: 1rem;
        }
      }
    }

    &.show {
      div {
        svg {
          transform: rotate(180deg);
        }
      }

      .servicesList {
        ul {
          transform: translateY(0);
        }
      }
    }
  }

  .servicesList {
    li {
      a {
        &.active {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default Nav;
