# 🎮 GameVerse

A modern, responsive video game discovery web application built with React, TypeScript, and Chakra UI. Browse thousands of games, filter by platform and genre, and discover your next favorite game!

![GameVerse](https://img.shields.io/badge/React-18.x-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Chakra UI](https://img.shields.io/badge/Chakra%20UI-2.x-teal)

## ✨ Features

- 🎯 **Browse Games**: Explore a vast collection of video games
- 🔍 **Search Functionality**: Find games by name with real-time search
- 🎨 **Dark Mode**: Toggle between light and dark themes
- 📱 **Responsive Design**: Seamless experience across all devices
- 🎮 **Platform Filtering**: Filter games by gaming platforms (PC, PlayStation, Xbox, etc.)
- 🏷️ **Genre Categories**: Browse games by genre (Action, RPG, Strategy, etc.)
- ⭐ **Critic Scores**: View Metacritic ratings for each game
- 🔄 **Sort Options**: Sort games by relevance, rating, release date, and more
- 😊 **Rating Emojis**: Visual rating indicators for quick game assessment

## 🚀 Demo

[Live Demo](https://your-demo-link.com) *(Add your deployment link here)*

## 📸 Screenshots

https://drive.google.com/file/d/1su2doQOq04Two4IAvk6tjs-lXYkpqlrz/view?usp=sharing

*Browse through thousands of games with beautiful card layouts and real-time filtering*

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Chakra UI** - Component library
- **Axios** - HTTP client
- **React Icons** - Icon library
- **Vite** - Build tool and dev server
- **RAWG API** - Game database API

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn package manager

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MD-Al-Fahad/GameVerse.git
   cd GameVerse
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_API_KEY=your_rawg_api_key_here
   ```
   
   Get your free API key from [RAWG.io](https://rawg.io/apidocs)

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/        # React components
│   ├── ColorModeSwitch.tsx
│   ├── CriticScore.tsx
│   ├── Emoji.tsx
│   ├── GameCard.tsx
│   ├── GameGrid.tsx
│   ├── GenreList.tsx
│   ├── Navbar.tsx
│   ├── PlatformSelector.tsx
│   ├── SearchInput.tsx
│   └── SortSelector.tsx
├── hooks/            # Custom React hooks
│   ├── useData.ts
│   ├── useGames.ts
│   ├── useGenres.ts
│   └── usePlatforms.ts
├── services/         # API services
│   ├── api-client.ts
│   └── image-url.ts
├── data/            # Static data
│   └── genres.ts
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
└── theme.ts         # Chakra UI theme configuration
```

## 🎯 Key Components

### GameGrid
Displays games in a responsive grid layout with loading skeletons.

### GenreList
Shows a list of game genres with images for filtering.

### PlatformSelector
Dropdown menu to filter games by gaming platform.

### SearchInput
Real-time search functionality for finding games by name.

### SortSelector
Allows sorting games by various criteria (rating, release date, etc.).

## 🔌 API Integration

This project uses the [RAWG Video Games Database API](https://rawg.io/apidocs) to fetch game data.

Key endpoints used:
- `/games` - Fetch games with filters and sorting
- `/genres` - Get list of game genres
- `/platforms/lists/parents` - Get gaming platforms

## 🎨 Theming

The application uses Chakra UI's theming system with custom color palette:

- Custom gray scale for dark mode optimization
- Dark mode as default
- Responsive breakpoints for mobile, tablet, and desktop

## 🚀 Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📦 Deployment

You can deploy this application to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the dist folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy the dist folder
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**MD Al Fahad**
- GitHub: [@MD-Al-Fahad](https://github.com/MD-Al-Fahad)

## 🙏 Acknowledgments

- [RAWG.io](https://rawg.io/) for providing the game database API
- [Chakra UI](https://chakra-ui.com/) for the component library
- [React Icons](https://react-icons.github.io/react-icons/) for the icon library

## 📧 Contact

For questions or feedback, please reach out via GitHub issues.

---

Made with ❤️ and React
