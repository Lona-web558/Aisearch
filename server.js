const express = require("express");
const cors = require("cors");

const app = express();

const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));



// Local news database
const newsDatabase = [

    {
        title: "BBC News",
        description: "Latest world news, politics, technology, business, science and more.",
        category: "World News",
        url: "https://www.bbc.com/news"
    },

    {
        title: "CNN Breaking News",
        description: "Breaking news, live updates, politics, business and international stories.",
        category: "Breaking News",
        url: "https://www.cnn.com"
    },

    {
        title: "Reuters News",
        description: "Global news covering markets, technology, business and world events.",
        category: "Business News",
        url: "https://www.reuters.com"
    },

    {
        title: "TechCrunch",
        description: "Technology news, startups, artificial intelligence and innovation.",
        category: "Technology",
        url: "https://techcrunch.com"
    },

    {
        title: "The Guardian",
        description: "International news, culture, environment and opinion articles.",
        category: "World News",
        url: "https://www.theguardian.com"
    },

    {
        title: "Al Jazeera English",
        description: "International news and current affairs from around the world.",
        category: "World News",
        url: "https://www.aljazeera.com"
    },

    {
        title: "NASA News",
        description: "Space exploration, astronomy and science updates.",
        category: "Science",
        url: "https://www.nasa.gov/news/"
    },

    {
        title: "ESPN News",
        description: "Sports news, scores, analysis and live updates.",
        category: "Sports",
        url: "https://www.espn.com"
    }

];


// Search API
app.post("/search", (req,res)=>{

    const query = req.body.query.toLowerCase();


    const results = newsDatabase.filter(news =>

        news.title.toLowerCase().includes(query) ||

        news.description.toLowerCase().includes(query) ||

        news.category.toLowerCase().includes(query)

    );


    res.json(results);

});


// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Start server
app.listen(3000,()=>{

    console.log(
        "AI News Search Engine running at http://localhost:3000"
    );

});
