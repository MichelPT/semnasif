import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section
    className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
  >
    <div
      className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}
    >
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink, index) => (
          <div
            key={index}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-primary mb-4">
              {footerLink.title}
            </h4>
            <ul>
              {footerLink.links.map((link, index) => (
                <li
                  key={index}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-gray-500 hover:text-secondary cursor-pointer ${
                    index !== footerLink.links.length - 1
                      ? "mb-4"
                      : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
