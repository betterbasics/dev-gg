var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var productSchema = new mongoose.Schema({
    amazonVideo: {
      type: "string",
    },
    brand: {
      type: "string",
    },
    cardVideo: {
      type: "string",
    },
    displayGuide: {
      type: "boolean",
    },
    frontman: {
      type: "string",
    },
    gettingStartedPdf: {
      type: "string",
    },
    gettingStartedSteps: {
      type: "array",
      items: {
        type: "object",
        properties: {
          _id: {
            type: "string",
          },
          description: {
            type: "string",
          },
          name: {
            type: "string",
          }
        }
      }
    },
    groups: {
      type: "array",
    },
    hideSale: {
      type: "boolean",
    },
    htmlGuide: {
      type: "string",
    },
    name: {
      type: "string",
    },
    shownOn: {
      type: "array",
    },
    videoPoster: {
      type: "object",
      properties: {
        image: {
          type: "string",
        },
        thumbnail: {
          type: "string",
        }
      }
    },
    video: {
      type: "string",
    },
    webVideoPoster: {
      type: "object",
      properties: {
        image: {
          type: "string",
        },
        thumbnail: {
          type: "string",
        }
      }
    }
});

mongoose.model('Product', productSchema);
