import "./projects.scss";
import { listProjects } from "./ProjectsData.jsx";
const marble = require("../../media/MeWithRobot.jpg");

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="title">
        <h1>MY</h1>
        <h2>PROJECTS.</h2>
      </div>
      <p>
        These are various projects I have worked on in school,
        extra-curriculars, and competitions. Hover to find out more!
      </p>
      <div className="card-wrapper">
        {listProjects.map((d) => (
          <div className="proj">
            <img src={d.img} alt="" className={d.class} />
            <div className="overlay">
              <h3>{d.title}</h3>
              <h4>{d.subtitle}</h4>
              <p>{d.description}</p>
              <div className="btn-container">
                <a href={d.button1Link} target="_blank" rel="noreferrer">
                  <i class={d.button1Type}></i>
                </a>
                <a href={d.button2Link} target="_blank" rel="noreferrer">
                  <i class={d.button2Type}></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hexagon-container">
        <ul id="categories" class="clr">
          <li class="pusher"></li>
          <li>
            <div>
              <img
                src="https://farm3.staticflickr.com/2878/10944255073_973d2cd25c.jpg"
                alt=""
              />
              <h1>This is a title a bit longer</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li class="pusher"></li>
          <li>
            <div>
              <img
                src="https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>

          <li>
            <div>
              <img
                src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li class="pusher"></li>
          <li>
            <div>
              <img
                src="https://farm7.staticflickr.com/6092/6227418584_d5883b0948.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://farm4.staticflickr.com/3766/12953056854_b8cdf14f21.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://farm7.staticflickr.com/6139/5986939269_10721b8017.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://farm4.staticflickr.com/3165/5733278274_2626612c70.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li class="pusher"></li>
          <li class="pusher"></li>
          <li>
            <div>
              <img
                src="https://farm8.staticflickr.com/7163/6822904141_50277565c3.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li class="pusher"></li>
          <li>
            <div>
              <img
                src="https://farm4.staticflickr.com/3771/13199704015_72aa535bd7.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li class="pusher"></li>
          <li class="pusher"></li>
          <li>
            <div>
              <img
                src="https://farm3.staticflickr.com/2878/10944255073_973d2cd25c.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li class="pusher"></li>
          <li>
            <div>
              <img
                src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li class="pusher"></li>
          <li>
            <div>
              <img
                src="https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li class="pusher"></li>
          <li class="pusher"></li>
          <li>
            <div>
              <img
                src="https://farm7.staticflickr.com/6092/6227418584_d5883b0948.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li class="pusher"></li>
          <li>
            <div>
              <img
                src="https://farm4.staticflickr.com/3766/12953056854_b8cdf14f21.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://farm3.staticflickr.com/2878/10944255073_973d2cd25c.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li class="pusher"></li>
          <li>
            <div>
              <img
                src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li class="pusher"></li>
          <li class="pusher"></li>
          <li>
            <div>
              <img
                src="https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li class="pusher"></li>
          <li class="pusher"></li>
          <li>
            <div>
              <img
                src="https://farm7.staticflickr.com/6092/6227418584_d5883b0948.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li class="pusher"></li>
          <li>
            <div>
              <img
                src="https://farm4.staticflickr.com/3766/12953056854_b8cdf14f21.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://farm7.staticflickr.com/6139/5986939269_10721b8017.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://farm4.staticflickr.com/3165/5733278274_2626612c70.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li class="pusher"></li>
          <li class="pusher"></li>
          <li>
            <div>
              <img
                src="https://farm8.staticflickr.com/7163/6822904141_50277565c3.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li class="pusher"></li>
          <li>
            <div>
              <img
                src="https://farm4.staticflickr.com/3771/13199704015_72aa535bd7.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li class="pusher"></li>
          <li>
            <div>
              <img
                src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://farm7.staticflickr.com/6139/5986939269_10721b8017.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li class="pusher"></li>
          <li>
            <div>
              <img
                src="https://farm4.staticflickr.com/3165/5733278274_2626612c70.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li class="pusher"></li>
          <li class="pusher"></li>
          <li>
            <div>
              <img
                src="https://farm8.staticflickr.com/7163/6822904141_50277565c3.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li class="pusher"></li>
          <li>
            <div>
              <img
                src="https://farm4.staticflickr.com/3771/13199704015_72aa535bd7.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li class="pusher"></li>
          <li>
            <div>
              <img
                src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg"
                alt=""
              />
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
