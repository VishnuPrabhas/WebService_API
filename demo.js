// Web Server Using Express

const express = require('express');
const app = express();

// create a middleware and use
app.use(express.json());

const movies = {
    "Movies" : [
      {
        "ID": 1,
        "Name": "Interstellar",
        "Director": "Christopher Nolan",
        "Wiki": "https://en.wikipedia.org/wiki/Christopher_Nolan",
        "Description": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
        "IMDB Rating": 8.6  
        
      },

      {
        "ID": 2,
        "Name": "Varnam Ayiram",
        "Director": "Gautham Vasudeva Menon",
        "Wiki": "https://en.wikipedia.org/wiki/Vaaranam_Aayiram",
        "Description": "Surya, an NSG official, is on a mission to rescue someone when he gets the news of his father's demise. He starts reminiscing about the bond he shared with his father and the stories related to him.",
        "IMDB Rating": 8.2     
        
      },

      {
        "ID": 3,
        "Name": "Rangitaranga",
        "Director": "Anup Bhandari",
        "Wiki": "https://en.wikipedia.org/wiki/RangiTaranga",
        "Description": "Gautam, a novelist, and his wife, Indhu, visit her ancestral house after she experiences repetitive nightmares. Subsequently, some unnatural occurrences unfold a mystery about Gautam's forgotten past.",
        "IMDB Rating": 8.2     
        
      },

      {
        "ID": 4,
        "Name": "Dangal",
        "Director": "Nitesh Tiwari",
        "Wiki": "https://en.wikipedia.org/wiki/Dangal_(film)",
        "Description": "Mahavir Singh Phogat, a former wrestler, decides to fulfil his dream of winning a gold medal for his country by training his daughters for the Commonwealth Games despite the existing social stigmas.",
        "IMDB Rating": 8.4     
        
      },

      {
        "ID": 5,
        "Name": "Never Back Down",
        "Director": "Jeff Wadlow",
        "Wiki": "https://en.wikipedia.org/wiki/Never_Back_Down",
        "Description": "A frustrated and conflicted teenager arrives at a new high school to discover an underground fight club and meet a classmate who begins to coerce him into fighting.",
        "IMDB Rating": 7.6      
        
      }
      
    ]
  }

app.get('/', (req, res) => {
    res.send('Hello Folks, Some Movies Here!');
});

app.get('/movies', (req, res) => {
    res.send(movies);
});

// /movies/n
app.get('/movies/:ID', (req, res) => {
    let movies = movies.find(c => c.id === parseInt(req.params.id));
    if (!movies) res.status(404).send('The movie with the given ID was not found.');
    res.send(movies);
});


// Listening to port / env
const port = process.env.PORT || 3000;
app.listen(port, 
    () => console.log(`Running on port ${port}...`));








