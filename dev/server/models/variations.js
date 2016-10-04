var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var variationSchema = new mongoose.Schema({
    agent: {
      type: "object",
      properties: {
        email: {
          type: "string",
        },
        name: {
          type: "string",
        },
        phone: {
          type: "string",
        }
      }
    },
    autoresponders: {
      type: "object",
      properties: {
        discountOrderShipped: {
          type: "number",
        },
        discountThreshold: {
          type: "string",
        },
        fiveStar: {
          type: "number",
        },
        oneStar: {
          type: "number",
        },
        orderConfirmation: {
          type: "number",
        },
        productRegistration: {
          type: "number",
        },
        reviewUs: {
          type: "number",
        }
      }
    },
    brand: {
      type: "string",
    },
    canBeRegistered: {
      type: "boolean",
    },
    charity: {
      type: "string",
    },
    description: {
      type: "string",
    },
    displayFeatures: {
      type: "boolean",
    },
    featured: {
      type: "string",
    },
    features: {
      type: "array",
      items: {
        type: "object",
        properties: {
          _id: {
            type: "string",
          }
        }
      }
    },
    hidden: {
      type: "boolean",
    },
    hideSale: {
      type: "boolean",
    },
    image: {
      type: "object",
      properties: {
        image: {
          type: "string",
        },
        large: {
          type: "string",
        },
        original: {
          type: "string",
        },
        thumbnail: {
          type: "string",
        }
      }
    },
    msrp: {
      type: "number",
    },
    name: {
      type: "string",
    },
    orderConfirmationAutoresponderId: {
      type: "number",
    },
    product: {
      type: "string",
    },
    providers: {
      type: "object",
      properties: {
        amazon: {
          type: "object",
          properties: {
            link: {
              type: "string",
            },
            price: {
              type: "number",
            }
          }
        },
        bbb: {
          type: "object",
          properties: {
            link: {
              type: "null",
            },
            price: {
              type: "null",
            }
          }
        },
        target: {
          type: "object",
          properties: {
            price: {
              type: "number",
            }
          }
        }
      }
    },
    responders: {
      type: "object",
      properties: {
        "1and2Star": {
          type: "object",
          properties: {
            discount: {
              type: "object",
              properties: {
                amazon: {
                  type: "number",
                },
                real: {
                  type: "number",
                }
              }
            },
            nondiscount: {
              type: "object",
              properties: {
                amazon: {
                  type: "number",
                },
                real: {
                  type: "number",
                }
              }
            }
          }
        },
        "5starFollowup": {
          type: "object",
          properties: {
            discount: {
              type: "object",
              properties: {
                amazon: {
                  type: "number",
                },
                real: {
                  type: "number",
                }
              }
            },
            nondiscount: {
              type: "object",
              properties: {
                amazon: {
                  type: "number",
                },
                real: {
                  type: "number",
                }
              }
            }
          }
        },
        "5star": {
          type: "object",
          properties: {
            discount: {
              type: "object",
              properties: {
                amazon: {
                  type: "number",
                },
                real: {
                  type: "number",
                }
              }
            },
            nondiscount: {
              type: "object",
              properties: {
                amazon: {
                  type: "number",
                },
                real: {
                  type: "number",
                }
              }
            }
          }
        },
        orderDelivered: {
          type: "object",
          properties: {
            discount: {
              type: "object",
              properties: {
                amazon: {
                  type: "number",
                },
                real: {
                  type: "number",
                }
              }
            },
            nondiscount: {
              type: "object",
              properties: {
                amazon: {
                  type: "number",
                },
                real: {
                  type: "number",
                }
              }
            }
          }
        },
        orderShipped: {
          type: "object",
          properties: {
            discount: {
              type: "object",
              properties: {
                amazon: {
                  type: "number",
                },
                real: {
                  type: "number",
                }
              }
            },
            nondiscount: {
              type: "object",
              properties: {
                amazon: {
                  type: "number",
                },
                real: {
                  type: "number",
                }
              }
            }
          }
        },
        reviewUs: {
          type: "object",
          properties: {
            discount: {
              type: "object",
              properties: {
                amazon: {
                  type: "number",
                },
                real: {
                  type: "number",
                }
              }
            },
            nondiscount: {
              type: "object",
              properties: {
                amazon: {
                  type: "number",
                },
                real: {
                  type: "number",
                }
              }
            }
          }
        }
      }
    },
    reviewAutoresponderId: {
      type: "number",
    },
    reviewLink: {
      type: "string",
    },
    secondaryImages: {
      type: "array",
      items: {
        type: "object",
        properties: {
          _id: {
            type: "string",
          },
          image: {
            type: "string",
          },
          thumbnail: {
            type: "string",
          }
        }
      }
    },
    shownOn: {
      type: "array",
    },
    sku: {
      type: "string",
    },
    specs: {
      type: "array",
      items: {
        type: "array",
      }
    },
    subTitle: {
      type: "string",
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
    }
});

mongoose.model('Variation', variationSchema);
