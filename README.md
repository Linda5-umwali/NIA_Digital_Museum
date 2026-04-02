# NIA_Digital_Museum
## Overview 
Nia Digital Museum is a web platform designed to showcase and sell original artworks in a digital museum-like experience. The platform connects artists with buyers and potential partners such as interior designers, cafes, hotels, and other art enthusiasts.

## Project Goal
To create a visually engaging online space where art is not just displayed, but experienced, while also enabling artists to earn directly from their work.

## Target Users
- Art buyers
- Art enthusiasts
- Interior designers & architects
- Local businesses (cafes, hotels, galleries)

## System Design
The system structure and interactions are modeled using UML diagrams to ensure clarity in:
- User interactions
- System flow
- Component relationships

## System Architecture

### Project Structure
```
nia-digital-museum/
│
├── frontend/
│   ├── index.html
│   ├── gallery.html
│   ├── artwork.html
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── app.js
│   └── assets/
│       └── images/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── artworks.js
│   ├── controllers/
│   │   └── artworksController.js
│   ├── models/
│   │   └── artworkModel.js
│   └── config/
│       └── db.js
│
├── docs/
│   └── uml-diagrams/
│
├── README.md
└── package.json
```
  ## Tech Stack
**Frontend:**
- HTML
- CSS
- JavaScript

**Backend:**
- Node.js

**Database:**
- MangoDB

## Setup Instructions
```
1. Clone the repository
git clone https://github.com/your-username/nia-digital-museum.git

2. Navigate to backend
cd Backend

3. Install dependencies
npm install

4. Create .env file
Add:
MONGO_URI=mongodb://Nia_db:6LEDLBgzOGzJbhL3@ac-eqkof4w-shard-00-00.gpgfftc.mongodb.net:27017,ac-eqkof4w-shard-00-01.gpgfftc.mongodb.net:27017,ac-eqkof4w-shard-00-02.gpgfftc.mongodb.net:27017/?ssl=true&replicaSet=atlas-6insen-shard-0&authSource=admin&appName=Cluster0
PORT=5000

5. Run backend
node server.js

6. Open frontend
Open index.html in browser
```

## Inspiration
The project is inspired by the need to create more opportunities for artists in Africa and provide them with platforms to monetize their passion. That's why the platform is named NIA meaning Purpose.

## Author
**Linda Umwali**
