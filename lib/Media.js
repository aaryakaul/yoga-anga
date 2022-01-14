import { createMedia } from '@artsy/fresnel';

const AppMedia = createMedia({
  breakpoints: {
    xs: 0,
    smallMobile: 480,
    mobile: 767,
    tablet: 992,
    customSize: 542,
    customSizemobile: 1056,
    customSizeFormobile: 860,
    // computer: 1199,
    largeScreen: 1200,
    siteWidth: 1440,
  },
});

// Make styles for injection into the header of the page
export const mediaStyles = AppMedia.createMediaStyle();

export const { Media, MediaContextProvider } = AppMedia;
