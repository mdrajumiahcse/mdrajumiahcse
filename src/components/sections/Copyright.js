const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} || Md. Raju Miah ||</span>
        <span>
         All Rights Reserved
        </span>
        <ul>
          <li>
            <a href="https://github.com/mdrajumiahcse">
              <i className="fa-brands fa-github" />
            </a>
          </li>
          <li>
            <a href="https://x.com/mdrajumiahcse">
              <i className="fa-brands fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mdrajumiahcse/">
              <i className="fa-brands fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/mdrajumiahcse">
              <i className="fa-brands fa-facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/mdrajumiahcse">
              <i className="fa-brands fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@dependtechbd">
              <i className="fa-brands fa-youtube" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
