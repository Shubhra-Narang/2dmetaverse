
# VoiceOver

VoiceOver is a voice-based social application that allows users to communicate in real-time through live rooms. Built using React, TypeScript, and Vite, this project leverages WebRTC for voice communication and WebSocket for real-time messaging.

## Features

- Real-time voice communication between users
- Join and leave rooms dynamically
- User movement tracking in a 2D space
- Simple and intuitive user interface

## Technologies Used

- **Frontend**: React, TypeScript, Vite
- **Backend**: Node.js, WebSocket
- **Voice Communication**: WebRTC, Simple-Peer
- **Database**: Prisma with PostgreSQL

## Getting Started

### Prerequisites

- Node.js (>= 18)
- npm or yarn
- PostgreSQL database

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/voiceover.git
   cd voiceover
   ```

2. **Install dependencies for the backend**:

   Navigate to the WebSocket server directory and install dependencies:

   ```bash
   cd apps/ws
   npm install
   ```

3. **Install dependencies for the frontend**:

   Navigate to the frontend directory and install dependencies:

   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up the database**:

   Ensure you have a PostgreSQL database set up. Update the database connection string in your environment variables or configuration files as needed.

### Running the Project

1. **Start the WebSocket server**:

   Navigate to the WebSocket server directory and run:

   ```bash
   cd apps/ws
   npm run start
   ```

2. **Start the frontend development server**:

   Navigate to the frontend directory and run:

   ```bash
   cd ../frontend
   npm run dev
   ```

3. **Open your browser**:

   Go to `http://localhost:3000` to access the application.

## Usage

- Users can join a room by providing a token and space ID.
- Use the arrow keys to move your avatar within the 2D space.
- Speak into your microphone to communicate with other users in the room.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the contributors and the open-source community for their support and resources.
