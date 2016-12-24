const query = "(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)";

const isRetina = matchMedia(query).matches

export default isRetina
