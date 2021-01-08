import React, { Component } from "react";
import "../Events/event.css";

class Event extends Component {
  render() {
    return (
      <div class="container">
        <div class="card-media">
          <div class="card-media-object-container">
            <div
              class="card-media-object"
              style={{
                backgroundImage:
                  "url(" +
                  "https://media.discordapp.net/attachments/622255128950472730/748370138650378320/unknown.png" +
                  ")",
              }}
            ></div>
            <span class="card-media-object-tag subtle">Club Event!</span>
            <ul class="card-media-object-social-list">
              <li>
                {" "}
                <img
                  src="https://s10.postimg.cc/3rjjbzcvd/profile_f.jpg"
                  class=""
                ></img>
              </li>
              <li>
                <img
                  src="https://s16.postimg.cc/b0j0djh79/profile_0_f.jpg"
                  class=""
                ></img>
              </li>
              <li class="card-media-object-social-list-item-additional">
                <span>+2</span>
              </li>
            </ul>
          </div>

          <div class="card-media-body">
            <div class="card-media-body-top">
              <span class="subtle">Mon, APR 09, 7:00 PM</span>
              <div class="card-media-body-top-icons u-float-right">
                <svg
                  fill="#888888"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                </svg>

                <svg
                  fill="#888888"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </div>
            </div>

            <span class="card-media-body-heading">
              Graphics Club Meeting: Traditional Art
            </span>
            <div class="card-media-body-supporting-bottom">
              <span class="card-media-body-supporting-bottom-text subtle">
                CIS Training Lab, Robinson Hall.
              </span>
              <span class="card-media-body-supporting-bottom-text subtle u-float-right">
                Free of cost
              </span>
            </div>

            <div class="card-media-body-supporting-bottom card-media-body-supporting-bottom-reveal">
              <span class="card-media-body-supporting-bottom-text subtle">
                #CHIPS Interest Group #Graphical Design #Digital
              </span>
              <a
                href="#/"
                class="card-media-body-supporting-bottom-text card-media-link u-float-right"
              >
                VIEW POSTER
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
