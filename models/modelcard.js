import mongoose from"mongoose"; 

const cardschema = mongoose.Schema(
  {
    City: {
      type: String,
      required: true,
    },
    Type: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
    Speciality: {
      type: String,
      required: true,
    },
    Locatioon: {
      type: String,
      required: true,
    },
    Details: {
      type: String,
      required: false,
    },
    user: {
      type: String,
      required: false,
    },
    Rlink: {
      type: String,
      required: false,
      validate: {
        validator: function(v) {
            // Using a regex to validate the URL format
            // return /^(ftp|http|https):\/\/[^ "]+$/.test(v);

            //also allows spaces
            return /^(ftp|http|https):\/\/[^ "]+(\s[^ "]+)*$/.test(v);
        },
        message: props => `${props.value} is not a valid URL!`
      }
    }
    // Details:[
    //   { 
    //     name: String,
    //     rating: Number,
    //     speciality: String,
    //     Location: String,
    //     url: {
    //       type: String,
    //       required: true,
    //       validate: {
    //           validator: function(v) {
    //               // Using a regex to validate the URL format
    //               return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
    //           },
    //           message: props => `${props.value} is not a valid URL!`
    //       }
    //     }
    //   },
    // ]
  },
  {
    timestamps: true,
  }
);


//static way of specifying collection name
// export const Card = mongoose.model('Card', cardschema, 'hyderabad');




//dynamically specifying colleciton name- city name
export const NewCard= (City) => {
  return mongoose.model('NewCard', cardschema, `${City}`);
};


// 1st parameter gives the model name, should be same in decalring it(export const ......) and specifying it in model('.....',    ) function
// 2nd parameter specifies the schema name, used abover= to declare the model
// 3rd parameter of model() function specifies collection name, if left empty: By default, Mongoose will use the pluralized, lowercased version of your model name as the collection name.

