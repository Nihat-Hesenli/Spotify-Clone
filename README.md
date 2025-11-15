🎧 SpotifyClone

A modern, responsive music player web application built with React, designed to replicate core features of Spotify — including album browsing, song filtering, audio controls, and seamless navigation.

🔗 Live Demo: https://spotifyclone2003.vercel.app
🔗 GitHub Repository: https://github.com/Nihat-Hesenli/Spotify-Clone.git

🚀 Features
🎵 Music Player

Play / Pause

Next / Previous

Shuffle / Loop icons

Live progress bar with draggable seek function

Real-time current time & total duration tracking

🔍 Search

Dynamic search bar inside Sidebar

Instantly filters songs based on the search term

📁 Albums

Display list of albums

Clicking opens album details page

Custom background gradient per album

Displays songs of selected album

🎧 Song List

Shows Today’s Biggest Hits

Clicking a song starts playback instantly

Ability to filter songs only (All / Music tabs)

🎛 Navigation

Forward / Back page navigation

Responsive design (Sidebar hidden on mobile)

🌓 UI

Fully responsive

Modern Spotify-like theme

Smooth hover effects

TailwindCSS-powered design

🛠️ Technologies Used





Technology	             Description

            
React.js                 Frontend library
	           


React Router DOM         Multi-page navigation


	   
Tailwind CSS	          UI styling


       
Context API               	Global state management for Player


       
HTML5 Audio API     	     Song playback functionality




























📂 Project Structure
SpotifyClone/
│── src/
│   ├── assets/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Player.jsx
│   │   ├── Display.jsx
│   │   ├── DisplayHome.jsx
│   │   ├── DisplayAlbum.jsx
│   │   ├── AlbumItem.jsx
│   │   ├── SongItem.jsx
│   │   └── Navbar.jsx
│   ├── context/
│   │   └── PlayerContext.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx / index.jsx
│
└── README.md











⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/Nihat-Hesenli/Spotify-Clone.git

2️⃣ Navigate into the project
cd SpotifyClone

3️⃣ Install dependencies
npm install

4️⃣ Start the development server
npm run dev
