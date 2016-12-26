const query = "(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)";

window.matchMedia = window.matchMedia || function() { // window so we can test it
    return {
        matches : false,
        addListener : function() {},
        removeListener: function() {}
    };
};

const isRetina = window.matchMedia(query).matches // check if its retina, used when needed to apply retina image directly on the node

export default isRetina
