import mongoose from"mongoose"; 

const cityschema = mongoose.Schema(
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
      required: false,
    },
    Details: {
      type: String,
      required: false,
    },
    user: {
      type: String,
      required: true,
    },
    Rlink: {
      type: String,
      required: false,
      validate: {
        validator: function(v) {
            // Using a regex to validate the URL format
            return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
        },
        message: props => `${props.value} is not a valid URL!`
      }
    }
  },
  {
    timestamps: true,
  }
);




//dynamically specifying colleciton name- city name
export const City= (YourCity) => {
  return mongoose.model('City', cityschema, `${YourCity}`);
};


// 1st parameter gives the model name
// 2nd parameter specifies the schema name, used abover= to declare the model
// 3rd parameter of model() function specifies collection name, if left empty: By default, Mongoose will use the pluralized, lowercased version of your model name as the collection name.

