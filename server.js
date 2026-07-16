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
    }, 

 { title: "The New York Times", description: "US and international news, politics, business and opinion.", category: "World News", url: "https://www.nytimes.com" },
    { title: "The Washington Post", description: "Political news, investigations and analysis from Washington D.C.", category: "Politics", url: "https://www.washingtonpost.com" },
    { title: "Associated Press", description: "Wire service news covering breaking events worldwide.", category: "Breaking News", url: "https://apnews.com" },
    { title: "Bloomberg", description: "Financial markets, business news and economic analysis.", category: "Business News", url: "https://www.bloomberg.com" },
    { title: "Wall Street Journal", description: "Business, finance and economic news and analysis.", category: "Business News", url: "https://www.wsj.com" },
    { title: "Financial Times", description: "Global business, finance and economic news.", category: "Business News", url: "https://www.ft.com" },
    { title: "NPR News", description: "US news, politics, culture and in-depth reporting.", category: "World News", url: "https://www.npr.org" },
    { title: "CBS News", description: "US national news, politics and investigative journalism.", category: "Breaking News", url: "https://www.cbsnews.com" },
    { title: "NBC News", description: "Breaking news, politics and world events.", category: "Breaking News", url: "https://www.nbcnews.com" },
    { title: "ABC News", description: "US and world news, politics and features.", category: "Breaking News", url: "https://abcnews.go.com" },
    { title: "Fox News", description: "US politics, breaking news and opinion.", category: "Breaking News", url: "https://www.foxnews.com" },
    { title: "USA Today", description: "National news, sports, money and lifestyle coverage.", category: "World News", url: "https://www.usatoday.com" },
    { title: "Sky News", description: "UK and world news, politics and business.", category: "World News", url: "https://news.sky.com" },
    { title: "The Independent", description: "UK news, world affairs and opinion.", category: "World News", url: "https://www.independent.co.uk" },
    { title: "The Times", description: "UK news, politics and analysis.", category: "World News", url: "https://www.thetimes.co.uk" },
    { title: "Deutsche Welle", description: "German and international news in English.", category: "World News", url: "https://www.dw.com" },
    { title: "France 24", description: "International news from a French perspective.", category: "World News", url: "https://www.france24.com" },
    { title: "Euronews", description: "Pan-European news covering politics and business.", category: "World News", url: "https://www.euronews.com" },
    { title: "RT News", description: "International news from a Russian perspective.", category: "World News", url: "https://www.rt.com" },
    { title: "South China Morning Post", description: "Asia-Pacific news, business and politics.", category: "World News", url: "https://www.scmp.com" },
    { title: "Nikkei Asia", description: "Asian business, economy and politics news.", category: "Business News", url: "https://asia.nikkei.com" },
    { title: "The Japan Times", description: "Japan news, business and culture.", category: "World News", url: "https://www.japantimes.co.jp" },
    { title: "Times of India", description: "India news, politics and business coverage.", category: "World News", url: "https://timesofindia.indiatimes.com" },
    { title: "The Hindu", description: "Indian national and international news.", category: "World News", url: "https://www.thehindu.com" },
    { title: "Channel News Asia", description: "Singapore and Asia-Pacific news.", category: "World News", url: "https://www.channelnewsasia.com" },
    { title: "ABC News Australia", description: "Australian national news and current affairs.", category: "World News", url: "https://www.abc.net.au/news" },
    { title: "News24", description: "South African breaking news, politics and business.", category: "World News", url: "https://www.news24.com" },
    { title: "IOL", description: "South African news, business and lifestyle.", category: "World News", url: "https://www.iol.co.za" },
    { title: "Daily Maverick", description: "South African investigative journalism and analysis.", category: "World News", url: "https://www.dailymaverick.co.za" },
    { title: "Mail & Guardian", description: "South African news, politics and investigations.", category: "World News", url: "https://mg.co.za" },
    { title: "Fin24", description: "South African business and financial markets news.", category: "Business News", url: "https://www.news24.com/fin24" },
    { title: "Business Day", description: "South African business and economic news.", category: "Business News", url: "https://www.businesslive.co.za" },
    { title: "SABC News", description: "South African Broadcasting Corporation national news.", category: "World News", url: "https://www.sabcnews.com" },
    { title: "EWN (Eyewitness News)", description: "South African breaking news and current affairs.", category: "Breaking News", url: "https://ewn.co.za" },
    { title: "The Citizen", description: "South African news, politics and sport.", category: "World News", url: "https://www.citizen.co.za" },
    { title: "Moneyweb", description: "South African financial and investment news.", category: "Business News", url: "https://www.moneyweb.co.za" },
    { title: "TechCentral", description: "South African technology and telecoms news.", category: "Technology", url: "https://techcentral.co.za" },
    { title: "MyBroadband", description: "South African tech, telecoms and broadband news.", category: "Technology", url: "https://mybroadband.co.za" },
    { title: "AllAfrica", description: "Pan-African news aggregator covering all regions.", category: "World News", url: "https://allafrica.com" },
    { title: "Africanews", description: "Pan-African news in multiple languages.", category: "World News", url: "https://www.africanews.com" },
    { title: "The Nation Africa", description: "Kenyan and East African news.", category: "World News", url: "https://nation.africa" },
    { title: "Punch Nigeria", description: "Nigerian news, politics and business.", category: "World News", url: "https://punchng.com" },
    { title: "Vanguard Nigeria", description: "Nigerian breaking news and politics.", category: "World News", url: "https://www.vanguardngr.com" },
    { title: "Premium Times Nigeria", description: "Nigerian investigative journalism and news.", category: "World News", url: "https://www.premiumtimesng.com" },
    { title: "Ghana Web", description: "Ghanaian news, politics and business.", category: "World News", url: "https://www.ghanaweb.com" },
    { title: "The Verge", description: "Technology, gadgets, science and culture news.", category: "Technology", url: "https://www.theverge.com" },
    { title: "Ars Technica", description: "In-depth technology and science journalism.", category: "Technology", url: "https://arstechnica.com" },
    { title: "Wired", description: "Technology, business and culture news and analysis.", category: "Technology", url: "https://www.wired.com" },
    { title: "Engadget", description: "Consumer technology and gadget news.", category: "Technology", url: "https://www.engadget.com" },
    { title: "CNET", description: "Technology reviews, news and how-tos.", category: "Technology", url: "https://www.cnet.com" },
    { title: "ZDNet", description: "Enterprise technology and business tech news.", category: "Technology", url: "https://www.zdnet.com" },
    { title: "Gizmodo", description: "Technology, science and future-focused news.", category: "Technology", url: "https://gizmodo.com" },
    { title: "The Next Web", description: "Technology and startup news.", category: "Technology", url: "https://thenextweb.com" },
    { title: "VentureBeat", description: "Technology, AI and enterprise business news.", category: "Technology", url: "https://venturebeat.com" },
    { title: "Hacker News", description: "Technology and startup community news aggregator.", category: "Technology", url: "https://news.ycombinator.com" },
    { title: "MIT Technology Review", description: "Emerging technology and science research news.", category: "Technology", url: "https://www.technologyreview.com" },
    { title: "Ars CoinDesk", description: "Cryptocurrency, blockchain and Bitcoin news.", category: "Business News", url: "https://www.coindesk.com" },
    { title: "Cointelegraph", description: "Bitcoin, cryptocurrency and blockchain news.", category: "Business News", url: "https://cointelegraph.com" },
    { title: "Decrypt", description: "Cryptocurrency and Web3 news and analysis.", category: "Business News", url: "https://decrypt.co" },
    { title: "The Block", description: "Cryptocurrency and digital asset markets news.", category: "Business News", url: "https://www.theblock.co" },
    { title: "MarketWatch", description: "Stock market, investing and financial news.", category: "Business News", url: "https://www.marketwatch.com" },
    { title: "Yahoo Finance", description: "Stock markets, business and personal finance news.", category: "Business News", url: "https://finance.yahoo.com" },
    { title: "CNBC", description: "Business, markets and financial news.", category: "Business News", url: "https://www.cnbc.com" },
    { title: "Forbes", description: "Business, investing, entrepreneurship and leadership news.", category: "Business News", url: "https://www.forbes.com" },
    { title: "Fortune", description: "Business news, leadership and company rankings.", category: "Business News", url: "https://fortune.com" },
    { title: "Business Insider", description: "Business, tech and finance news.", category: "Business News", url: "https://www.businessinsider.com" },
    { title: "The Economist", description: "Global economics, politics and business analysis.", category: "Business News", url: "https://www.economist.com" },
    { title: "Investing.com", description: "Markets, stocks, forex and commodities news.", category: "Business News", url: "https://www.investing.com" },
    { title: "Kitco News", description: "Precious metals, gold and silver market news.", category: "Business News", url: "https://www.kitco.com/news" },
    { title: "FXStreet", description: "Forex market news and technical analysis.", category: "Business News", url: "https://www.fxstreet.com" },
    { title: "DailyFX", description: "Forex and currency market news and analysis.", category: "Business News", url: "https://www.dailyfx.com" },
    { title: "ScienceDaily", description: "Latest research news across all science fields.", category: "Science", url: "https://www.sciencedaily.com" },
    { title: "Scientific American", description: "Science news, research and discoveries.", category: "Science", url: "https://www.scientificamerican.com" },
    { title: "Nature News", description: "Peer-reviewed science research and news.", category: "Science", url: "https://www.nature.com/news" },
    { title: "Space.com", description: "Space exploration, astronomy and spaceflight news.", category: "Science", url: "https://www.space.com" },
    { title: "New Scientist", description: "Science and technology news and discoveries.", category: "Science", url: "https://www.newscientist.com" },
    { title: "Live Science", description: "Science news covering health, space and nature.", category: "Science", url: "https://www.livescience.com" },
    { title: "Phys.org", description: "Physics, science and technology research news.", category: "Science", url: "https://phys.org" },
    { title: "National Geographic", description: "Science, nature, exploration and environment news.", category: "Science", url: "https://www.nationalgeographic.com" },
    { title: "WHO News", description: "Global health news and disease outbreak updates.", category: "Health", url: "https://www.who.int/news" },
    { title: "Medical News Today", description: "Health news, research and medical breakthroughs.", category: "Health", url: "https://www.medicalnewstoday.com" },
    { title: "WebMD News", description: "Health and medical news and information.", category: "Health", url: "https://www.webmd.com/news" },
    { title: "STAT News", description: "Health, medicine and biotech news.", category: "Health", url: "https://www.statnews.com" },
    { title: "Sky Sports", description: "UK and international sports news and scores.", category: "Sports", url: "https://www.skysports.com" },
    { title: "BBC Sport", description: "UK and world sports news, scores and analysis.", category: "Sports", url: "https://www.bbc.com/sport" },
    { title: "Sports Illustrated", description: "US sports news, analysis and features.", category: "Sports", url: "https://www.si.com" },
    { title: "Goal.com", description: "Global football and soccer news.", category: "Sports", url: "https://www.goal.com" },
    { title: "Sporting News", description: "US and global sports news and scores.", category: "Sports", url: "https://www.sportingnews.com" },
    { title: "SuperSport", description: "South African sports news and coverage.", category: "Sports", url: "https://www.supersport.com" },
    { title: "Variety", description: "Entertainment industry news, film and TV.", category: "Entertainment", url: "https://variety.com" },
    { title: "The Hollywood Reporter", description: "Film, TV and entertainment industry news.", category: "Entertainment", url: "https://www.hollywoodreporter.com" },
    { title: "Entertainment Weekly", description: "Movies, TV, music and celebrity news.", category: "Entertainment", url: "https://ew.com" },
    { title: "Rolling Stone", description: "Music, culture and entertainment news.", category: "Entertainment", url: "https://www.rollingstone.com" },
    { title: "Billboard", description: "Music industry news and charts.", category: "Entertainment", url: "https://www.billboard.com" },
    { title: "Politico", description: "US politics, policy and government news.", category: "Politics", url: "https://www.politico.com" },
    { title: "The Hill", description: "US Congress, politics and policy news.", category: "Politics", url: "https://thehill.com" },
    { title: "Axios", description: "Concise news on politics, business and technology.", category: "Breaking News", url: "https://www.axios.com" },
    { title: "ProPublica", description: "Investigative journalism on public interest issues.", category: "World News", url: "https://www.propublica.org" },
    { title: "The Intercept", description: "Investigative and adversarial journalism.", category: "World News", url: "https://theintercept.com" },
    { title: "Vox", description: "Explanatory journalism on politics, policy and culture.", category: "World News", url: "https://www.vox.com" },
    { title: "The Atlantic", description: "Politics, culture and long-form journalism.", category: "World News", url: "https://www.theatlantic.com" }
    

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
