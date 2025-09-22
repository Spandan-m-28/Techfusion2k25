export default function Footer() {
  return (
    <footer className="bg-[#1b1b1b] text-white py-8 ">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Sponsors Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="orbitron-font text-lg font-semibold mb-4 text-center">
            Our Sponsors
          </h3>
          <div className="flex gap-6 justify-center flex-wrap">
            {/* Replace with sponsor SVGs */}
            <img
              src="https://res.cloudinary.com/dmeicehn2/image/upload/v1758564059/bfc31d2f-a1e5-4c51-bbdd-5f970708abc1_qfofh5.jpg"
              alt="Sponsor 1"
              className="h-28 rounded-full"
            />
            <img
              src="https://res.cloudinary.com/dmeicehn2/image/upload/v1758560584/DINNCH_LOGO_MAIN_FILE_m730eh.png"
              alt="Sponsor 2"
              className="h-28 rounded-full"
            />
            <img
              src="https://res.cloudinary.com/dmeicehn2/image/upload/v1758560490/WhatsApp_Image_2025-09-22_at_22.17.30_1f9323b2_ly3ogs.jpg"
              alt="Sponsor 3"
              className="h-28 rounded-full"
            />
          </div>
        </div>

        {/* Social Section */}
        <div className="flex flex-col items-start text-left ml-12 md:ml-32 justify-center">
          <h3 className="text-lg font-semibold mb-2 orbitron-font">
            Stay Tuned!
          </h3>
          <div className="flex gap-5 items-center">
            {/* Replace with your SVGs for Instagram, LinkedIn, GitHub, Twitter (X), Discord */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-9 h-9 fill-current cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/wce_sait/?igshid=MWZjMTM2ODFkZg",
                  "_blank"
                )
              }
            >
              <path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-11 h-11 cursor-pointer"
              fill="currentColor"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/wcesait?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                  "_blank"
                )
              }
            >
              <path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-10 h-10 fill-current cursor-pointer"
              onClick={() =>
                window.open("https://www.youtube.com/@wcesait5335", "_blank")
              }
            >
              <path d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z" />
            </svg>
            <img
              src="https://res.cloudinary.com/dmeicehn2/image/upload/v1758469447/1dfdabd2-d4e3-4dcf-8f9c-1406651f3b3c_c5rsvw.png"
              alt="SAIT"
              className="h-12 cursor-pointer"
              onClick={() => window.open("https://www.wcesait.in", "_blank")}
            />
          </div>
          <p className="exo-2-font text-sm text-gray-500 mt-4">
            © 2025 WCESAIT, ALL RIGHTS RESERVED
          </p>
        </div>

        {/* Contact Section (replacing SAIT logo) */}
        <div className="flex flex-col items-center md:items-start md:ml-20 text-center md:text-left gap-1">
          <h3 className="orbitron-font text-lg font-semibold mb-4">
            Contact Us
          </h3>
          <p className="exo-2-font text-sm">Upanishad Kachroo - +91 7683005944</p>
          <p className="exo-2-font text-sm">Sai Badave - +91 9322595377</p>
          <p className="exo-2-font text-sm">
            Email:{" "}
            <a
              href="mailto:wce.sait@walchandsangli.ac.in"
              className="text-blue-400 hover:underline"
            >
              wce.sait@walchandsangli.ac.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
