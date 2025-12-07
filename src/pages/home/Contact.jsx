import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {

  // footer xl:px-24 py-10 px-4 text-base-content
  return (
    <div className=' max-w-screen-2xl container mx-auto xl:px-24 px-4 py-28'>
      <div>
        <section class="page-heading">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1 className='title' ><b> <span className='text-green'>The</span> Montessa Restuarant</b></h1>
                <p>Whatever drinking vinegar hella fingerstache shoreditch kickstarter kitsch. La croix hella iceland flexitarian letterpress.</p>
                <hr />
              </div>
            </div>
          </div>
          <hr />
        </section>

      </div>

      <div className='footer flex flex-col sm:flex-row justify-start items-start gap-8 '>
        <nav className=' item-center xl:px-24 px-4 py-4 mt-2'>
        <section className="map ">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7441.630407354879!2d72.83883427471785!3d21.159751283267614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e2fe47b1ee1%3A0x504c1d61b4e6e422!2sUCCC%20%26%20SPBCBA%20%26%20SDHGCBCA%20%26%20IT%20College!5e0!3m2!1sen!2sus!4v1712124211348!5m2!1sen!2sus"
                width="150%"
                height="200"
                frameborder="0"
                style={{ border: '0' }}
                allowfullscreen
                title="Map"
              ></iframe>
            </div>
          </div>
          <br />
          <p> <FaLocationDot /> Udhana Citizen College </p>
        </div>
      </div>
     </section>
          <header className="subtitle">Contact</header>
          <a className="link link-hover" href=''>themontessa@email.com</a>
          <a className="link link-hover" href="tel:+918511063982">Call me +91 85110 63982</a>
          <a className="link link-hover" href="tel:+916352890443">Call me+91 6352890443</a>
          <a className="">Social media</a>
          <a href="https://www.instagram.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
          </a>
        </nav>
        </div>
        <br />
    </div>
     

     




  );
};


export default Contact