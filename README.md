# Aisearch

# 🤖 AI News Search Engine

A simple AI-style news search engine built with:

- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- Node.js
- Express.js

The application uses a local news database and provides a fast search interface.

---

## 🚀 Features

✅ Responsive Bootstrap user interface  
✅ Search news articles by keyword  
✅ Local news database  
✅ Express.js backend API  
✅ Clean HTML5/CSS3 design  
✅ Opens news websites directly from results  

---

## 📁 Project Structure

```
ai-search-engine/

│
├── server.js
├── package.json
├── README.md
│
└── public/
    ├── index.html
    ├── style.css
    └── app.js
```

---

## ⚙️ Installation

Clone or download the project:

```bash
git clone your-project-url
```

Go into the project folder:

```bash
cd ai-search-engine
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Run Application

Start the server:

```bash
npm start
```

Open your browser:

```
http://localhost:3000
```

---

## 🔍 Example Searches

Try searching:

```
technology
AI
science
sports
business
world
space
```

---

## 🛠 How It Works

```
User
 |
 |
Search Box
 |
 |
JavaScript Fetch API
 |
 |
Express.js Server
 |
 |
Local News Database
 |
 |
Search Results
```

---

## 📡 API Endpoint

### Search News

**POST**

```
/search
```

Request:

```json
{
  "query": "technology"
}
```

Response:

```json
[
  {
    "title": "TechCrunch",
    "description": "Technology news and innovation.",
    "category": "Technology",
    "url": "https://techcrunch.com"
  }
]
```

---

## 🔮 Future Improvements

- Connect to live news APIs
- Add AI-generated summaries
- Add voice search
- Add user accounts
- Add search history
- Add MongoDB database
- Add news ranking algorithm
- Add image and video search
- Add web crawling

---

## 📜 License

MIT License

---

## 👨‍💻 Author
Lona Matshingana 
