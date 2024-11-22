import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward=()=> {
        if(tx> -50){
            tx-=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }
    const slideBackward=()=> {
        if(tx< 0){
            tx+=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }

  return (
    <div className="testimonials">
      <img src={next_icon} alt="Next" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="Back" className="back-btn" onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          {/* User 1 */}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="William Jackson" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, repellat
                vitae voluptatibus sint ut labore rerum suscipit, placeat voluptates modi
                veniam corporis ipsam autem corrupti quam earum sit eligendi quae.
              </p>
            </div>
          </li>
          {/* User 2 */}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="Emily Davis" />
                <div>
                  <h3>Emily Davis</h3>
                  <span>Learnify, Canada</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus cum
                blanditiis recusandae at exercitationem, architecto quas autem nulla
                voluptate sequi fuga enim quod omnis! Nihil, labore dolores. Veritatis,
                modi eos.
              </p>
            </div>
          </li>
          {/* User 3 */}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="Michael Lee" />
                <div>
                  <h3>Michael Lee</h3>
                  <span>TechSphere, Australia</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel laudantium
                obcaecati quibusdam reprehenderit deserunt nostrum modi veritatis ex
                asperiores, odio repellat soluta tempore maiores non corporis, amet
                officiis dignissimos necessitatibus.
              </p>
            </div>
          </li>
          {/* User 4 */}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="Sophia Martinez" />
                <div>
                  <h3>Sophia Martinez</h3>
                  <span>BrightMind, UK</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquid
                repellendus deleniti, doloremque accusamus cupiditate libero itaque optio
                commodi! Quo tempore consectetur praesentium corrupti atque, nisi quis
                reprehenderit eaque doloremque.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
