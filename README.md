# Netflix Gpt

Netflix Gpt is an advanced, interactive movie and TV show recommendation platform inspired by Netflix, powered by Google's Gemini AI technology. Built with modern JavaScript, HTML, and CSS, this project demonstrates a seamless integration of AI-driven search, user authentication, and an immersive UI/UX reminiscent of the Netflix experience.

## 🚀 Features

- **AI-Powered Search:**  
  Utilizes Google Gemini API to provide intelligent movie and TV show recommendations based on user queries and preferences.

- **Modern Authentication:**  
  Secure login and registration flows with robust session management.

- **Dynamic Home Page:**  
  Showcases trending, upcoming, and top-rated content with visually engaging carousels and banners.

- **Personalized Experience:**  
  Users receive tailored suggestions, can manage their watchlists, and revisit previous searches.

- **Responsive & Intuitive UI:**  
  Clean, modern Netflix-inspired design that works flawlessly on desktop and mobile devices.

- **Seamless API Integration:**  
  Fetches real-time content data from TMDB (The Movie Database) and other sources.

- **Performance Optimized:**  
  Fast load times and smooth interactions, leveraging best practices in frontend development.

## 🛠️ Tech Stack

- **Frontend:** JavaScript, HTML5, CSS3
- **Frameworks/Libraries:** React (or Vanilla JS if not React), Axios, Google Gemini API, TMDB API
- **Authentication:** Custom JWT or Firebase Auth (specify implementation)
- **Styling:** CSS modules, Flexbox, Grid, Netflix-style layouts

## 📸 Screenshots

<!-- Insert screenshots here when available -->

## 🌟 Getting Started

### Prerequisites

- Node.js & npm
- API Keys for [Google Gemini](https://ai.google.dev/gemini-api/docs/get-started) and [TMDB](https://www.themoviedb.org/documentation/api)

### Installation

```bash
git clone https://github.com/realgenes/netflix_gpt.git
cd netflix_gpt
npm install
```

### Configuration

1. Create a `.env` file in the project root:
    ```env
    REACT_APP_GEMINI_API_KEY=your_gemini_key
    REACT_APP_TMDB_API_KEY=your_tmdb_key
    ```

2. Start the development server:
    ```bash
    npm start
    ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🧠 How It Works

- **Recommendation Engine:**  
  User queries are sent to Google's Gemini AI model, which interprets preferences and returns intelligent suggestions.
- **Content Fetching:**  
  The app queries TMDB for the latest titles, summaries, and artwork, providing a rich and up-to-date catalog.
- **User Sessions:**  
  Secure authentication keeps user data private and enables personalized features.

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for any features, bugs, or ideas.


**Netflix Gemini** — Bringing next-generation AI to your movie nights.
