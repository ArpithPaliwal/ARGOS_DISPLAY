import React from 'react';
import { Link } from 'react-router-dom';

const games = {
    squid: {
        title: 'Squid Race',
        url: 'https://www.onlinegames.io/games/2021/unity3/squid-race-simulator/index.html'
    },
    four: {
        title: 'Four Colors',
        url: 'https://www.onlinegames.io/games/2023/code/four-colors/index.html'
    },
    draw: {
        title: 'Draw Here',
        url: 'https://www.onlinegames.io/games/2021/unity2/draw-here/index.html'
    }
};

const Fun_Mode = () => {
    const [activeGame, setActiveGame] = React.useState('squid');

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-6">
            <h1 className="text-3xl font-bold mb-6">🎮 Play Your Favorite Games</h1>

            {/* Tabs */}
            <div className="flex space-x-4 mb-6">
                {Object.entries(games).map(([key, game]) => (
                    <button
                        key={key}
                        onClick={() => setActiveGame(key)}
                        className={`px-4 py-2 rounded font-medium transition-all duration-200 ${activeGame === key
                                ? 'bg-blue-600 hover:bg-blue-700'
                                : 'bg-gray-700 hover:bg-gray-600'
                            }`}
                    >
                        {game.title}
                    </button>
                ))}
            </div>

            {/* Game iframe */}
            <div className="w-full max-w-7xl aspect-video border-4 border-white rounded overflow-hidden">
                <iframe
                    key={activeGame}
                    src={games[activeGame].url}
                    title={games[activeGame].title}
                    className="w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
                
            </div>
            <div className='text-center mt-15'>
                <button className="  bg-[#0073e6]  text-2xl outline-2  outline-white text-white p-3 rounded-2xl w-40 ">
                      
                      {/*<Link to="/Minds_Behind_Argos">Explore</Link>*/}
                      <Link to="/Landing_page">Back</Link>
                </button>
            </div>
        </div>


    );
};

export default Fun_Mode;
