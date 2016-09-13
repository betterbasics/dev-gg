var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var brandSchema = new mongoose.Schema({
	charity: {
        type: String
    },
	description: {
        type: String
    },
	headerVideo: {
        type: String
    },
	hidden: {
        type: Boolean
    },
	image: {
        type: Object,
        properties: {
            image: {
                type: String
            },
            large: {
                type: String
            },
            original: {
                type: String
            },
            thumbnail: {
                type: String
            }
        }
    },
	lockedBy: {
        type: String
    },
	name: {
        type: String
    },
	shortDescription: {
        type: String
    },
	tagline: {
        type: String
    },
	tileDescription: {
        type: String
    },
	tileImage: {
        type: Object,
        properties: {
            image: {
                type: String
            },
            large: {
                type: String
            },
            original: {
                type: String
            },
            thumbnail: {
                type: String
            }
        }
    }
})

mongoose.model('Brand', brandSchema);
