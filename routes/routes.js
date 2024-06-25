import express from "express";
import { NewCard } from '../models/modelcard.js'
import { City } from '../models/modelcity.js'

const router = express.Router();



// Route for each city's home page
router.get('/:YourCity', async (request, response) => {
  try {
    const { YourCity } = request.params;

    const info = await City(YourCity).find({});
    console.log(info)
    
    // return response.status(200).json({
    //   count: info.length,
    //   data: info,
    // });

    if (info.length > 0) {
      return response.status(200).json({
        count: info.length,
        data: info,
      });
    } else {
      return response.status(404).json({
        message: 'No data found for the specified city',
      });
    }

  } catch (error) {
    console.log(error.message);
    response.status(500).send({ messssage: error.message });
  }
});









// Route for Save a new Book------------------------------------------------
router.post('/addNewCard', async (request, response) => {
  try {

    if ( !request.body.City ||!request.body.Type ||!request.body.Name ||!request.body.Speciality) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }

    const City = request.body.City;
    const Name = request.body.Name;
    const user = request.body.user

    const newCard = {
      City: request.body.City,
      Type: request.body.Type,
      Name: request.body.Name,
      Speciality: request.body.Speciality,
      Details: request.body.Details,
      Locatioon: request.body.Locatioon,
      user: request.body.user,
      Rlink: request.body.Rlink ? request.body.Rlink : `https://www.google.com/search?q=${encodeURIComponent(Name)}+${encodeURIComponent(City)}`,
    };

    console.log(user)
    console.log(2+3)

    console.log(newCard)

    // const City = request.body.City
    const book = await NewCard(City).create(newCard);

    return response.status(201).send(book);
  }
   catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});







// Route for Get documents of respective city, of type Food------------------------------------------------------------
router.get('/:YourCity/food', async (request, response) => {
  try {
    const { YourCity, Name } = request.params;


    const info = await City(YourCity).find({Type:'Food'});
    console.log(info)
    
    // return response.status(200).json({
    //   count: info.length,
    //   data: info,
    // });

    if (info.length > 0) {
      return response.status(200).json({
        count: info.length,
        data: info,
      });
    } else {
      return response.status(404).json({
        message: 'No data found for the specified city',
      });
    }



  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});




// // Route for Get documents of respective city, of type Stay------------------------------------------------------------
router.get('/:YourCity/hotel', async (request, response) => {
  try {
    const { YourCity } = request.params;

    const info = await City(YourCity).find({Type:'Hotel'});
    console.log(info)
    
    // return response.status(200).json({
    //   count: info.length,
    //   data: info,
    // });

    if (info.length > 0) {
      return response.status(200).json({
        count: info.length,
        data: info,
      });
    } else {
      return response.status(404).json({
        message: 'No data found for the specified city',
      });
    }




  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});




// // Route for Get documents of respective city, of type Travel------------------------------------------------------------
router.get('/:YourCity/travel', async (request, response) => {
  try {
    const { YourCity } = request.params;

    const info = await City(YourCity).find({Type:'Travel'});
    console.log(info)
    
    // return response.status(200).json({
    //   count: info.length,
    //   data: info,
    // });

    if (info.length > 0) {
      return response.status(200).json({
        count: info.length,
        data: info,
      });
    } else {
      return response.status(404).json({
        message: 'No data found for the specified city',
      });
    }




  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});




// // Route for Get documents of respective city, of type Siteseeing------------------------------------------------------------
router.get('/:YourCity/siteseeing', async (request, response) => {
  try {
    const { YourCity } = request.params;

    const info = await City(YourCity).find({Type:'Siteseeing'});
    console.log(info)
    
    // return response.status(200).json({
    //   count: info.length,
    //   data: info,
    // });

    if (info.length > 0) {
      return response.status(200).json({
        count: info.length,
        data: info,
      });
    } else {
      return response.status(404).json({
        message: 'No data found for the specified city',
      });
    }




  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});







  
// Route for Get One Book from database by id
// router.get('/:id', async (request, response) => {
//   try {
//     const { id } = request.params;

//     const book = await Card.findById(id);

//     return response.status(200).json(book);
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });
  
// // Route for Update a Book
// router.put('/:id', async (request, response) => {
//   try {
//     if (
//       !request.body.title ||
//       !request.body.author ||
//       !request.body.publishYear
//     ) {
//       return response.status(400).send({
//         message: 'Send all required fields: title, author, publishYear',
//       });
//     }

//     const { id } = request.params;

//     const result = await Card.findByIdAndUpdate(id, request.body);

//     if (!result) {
//       return response.status(404).json({ message: 'Book not found' });
//     }

//     return response.status(200).send({ message: 'Book updated successfully' });
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

// // Route for Delete a book
// router.delete('/:id', async (request, response) => {
//   try {
//     const { id } = request.params;

//     const result = await Card.findByIdAndDelete(id);

//     if (!result) {
//       return response.status(404).json({ message: 'Book not found' });
//     }

//     return response.status(200).send({ message: 'Book deleted successfully' });
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

export default router