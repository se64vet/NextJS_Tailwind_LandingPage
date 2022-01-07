module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "homeDesktop": "url('/assets/home/background-home-desktop.jpg')",
        "homeTablet": "url('/assets/home/background-home-tablet.jpg')",
        "homeMobile": "url('/assets/home/background-home-mobile.jpg')",

        "desDesktop":
          "url('/assets/destination/background-destination-desktop.jpg')",
        "desTablet":
          "url('/assets/destination/background-destination-desktop.jpg')",
        "desMobile":
          "url('/assets/destination/background-destination-desktop.jpg')",

        "crewDesktop": "url('/assets/crew/background-crew-desktop.jpg')",
        "crewTablet": "url('/assets/crew/background-crew-desktop.jpg')",
        "crewMobile": "url('/assets/crew/background-crew-desktop.jpg')",

        "techDesktop":
          "url('/assets/technology/background-technology-desktop.jpg')",
        "techTablet":
          "url('/assets/technology/background-technology-desktop.jpg')",
        "techMobile":
          "url('/assets/technology/background-technology-desktop.jpg')",

        "vehicleLs":
          "url('/assets/technology/image-launch-vehicle-landscape.jpg')",
        "vehiclePt":
          "url('/assets/technology/image-launch-vehicle-portrait.jpg')",
      },
      fontFamily: {
        "sans": ['"Barlow Condensed"'],
        "serif": ["Bellefair"],
      },
    },
    plugins: [],
  },
};
