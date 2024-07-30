import whitebg from "../../assets/testimonBack.jpg";
import sakshiIngle from "../../assets/studentsImages/sakshiIngale.png";
import kartikeyan from "../../assets/studentsImages/kartikeyan.png";
import sumitGarad from "../../assets/studentsImages/sumitGarad.png";
import bhushanShinde from "../../assets/studentsImages/bhushanShinde.png";
import ratingStar from "../../assets/ratingStar.png";
import ratingStar4 from "../../assets/ratingStar4.png";

import "../home/Testimonials.css";

function Testimonials() {
  return (
    <div className="testimonials-section poppins-regular">
      <div>
        <p className="testimon-slider-title poppins-bold">
          <b>Testimonials</b>
        </p>
      </div>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide testimonials-slider"
      >
        <div id="testomon-indicators" className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div id="testimon-slider" className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img
              id="testimon-image"
              src={whitebg}
              className="d-block w-100"
              alt="..."
            />
            <div
              id="testimon-content"
              className="carousel-caption d-none d-md-block"
            >
              <div className="testimon-section">
                <div className="section-left">
                  <div className="testimon-Card">
                    <div className="testimon-profileImg">
                      <img id="testimon-profileImg" src={sakshiIngle} alt="" />
                    </div>
                    <div className="testimoncard-content">
                      <span id="testimon-name">Sakshi Ingale</span>
                      <br />
                      <span id="testimon-college">
                        Seth G S Medical College(KEM),Mumbai
                      </span>
                      <div id="testimon-text">
                        Career Niti helped me in proper per result procedures
                        like form filling was kept in batches so that students
                        don't have to wait for their turn to come n waste their
                        preparatory time. Many informative n guiding google
                        meets were arranged that kept me up to date with the
                        live notifications n I didn't have to keep searching.
                        After results admission related queries were solved
                        through google meetings. The round procedures were
                        smooth enough n the staff was always available for any
                        queries.
                      </div>
                      <img id="testimon-rating" src={ratingStar} alt="" />
                    </div>
                  </div>
                </div>

                <div className="section-right">
                  <div className="testimon-Card">
                    <div className="testimon-profileImg">
                      <img id="testimon-profileImg" src={kartikeyan} alt="" />
                    </div>
                    <div className="testimoncard-content">
                      <span id="testimon-name">Kartikeyan Rajan Kumar</span>
                      <br />
                      <span id="testimon-college">IIT Bhilai</span>
                      <div id="testimon-text">
                        I received assistance from Career Niti in understanding
                        appropriate procedures based on the results for form
                        filling. I was able to stay updated with live
                        notifications. They organized Google meets to resolve
                        the queries. The personnel was always willing to answer
                        any questions and the round procedures went smoothly.
                        They provide effective and beneficial guidance.
                      </div>
                      <img id="Idtestimon-rating" src={ratingStar} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <img
              id="testimon-image"
              src={whitebg}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <div className="testimon-section">
                <div className="section-left">
                  <div className="testimon-Card">
                    <div className="testimon-profileImg">
                      <img id="testimon-profileImg" src={sumitGarad} alt="" />
                    </div>
                    <div className="testimoncard-content">
                      <span id="testimon-name">Sumit Garad</span>
                      <br />
                      <span id="testimon-college">IIT Palakkad</span>
                      <div id="spltestimon-text">
                        From start to finish, CareerNiti demonstrated a
                        commitment to excellence that significantly eased the
                        often stressful journey of applying to colleges. The
                        team at CareerNiti is comprised of knowledgeable and
                        dedicated professionals who are well-versed in the
                        intricacies of the admission process. Their expertise
                        played a crucial role in helping me navigate through the
                        maze of college options and select the institutions that
                        best aligned with my academic and personal goals.
                      </div>
                      <img id="testimon-rating" src={ratingStar4} alt="" />
                    </div>
                  </div>
                </div>

                <div className="section-right">
                  <div className="testimon-Card">
                    <div className="testimon-profileImg">
                      <img
                        id="testimon-profileImg"
                        src={bhushanShinde}
                        alt=""
                      />
                    </div>
                    <div className="testimoncard-content">
                      <span id="testimon-name">Bhushan Shinde</span>
                      <br />
                      <span id="testimon-college">IISER Pune</span>
                      <div id="spltestimon-text">
                        Suraj sir from Career Niti provided valuable guidance on
                        medical field options and IISER, suggesting a career in
                        the research field. His professionalism, knowledge, and
                        experience in guiding students through the complex
                        admissions and counseling processes are commendable.
                        Career Niti's exceptional services are highly commended.
                        In conclusion, I would highly recommend Career Niti to
                        anyone seeking counselling services for their academic
                        or career goals.
                      </div>
                      <img id="testimon-rating" src={ratingStar} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
