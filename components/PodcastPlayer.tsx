import React, { useState, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';

interface PodcastEpisode {
    id: string;
    title: string;
    description: string;
    duration: string;
    audioUrl: string;
    thumbnailUrl?: string; // Optional if we want cover art
}

interface PodcastPlayerProps {
    currentEpisode: PodcastEpisode;
    episodes: PodcastEpisode[];
    onEpisodeSelect: (episode: PodcastEpisode) => void;
}

const PodcastPlayer: React.FC<PodcastPlayerProps> = ({ currentEpisode, episodes, onEpisodeSelect }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const skipForward = () => {
        if (audioRef.current) audioRef.current.currentTime += 10;
    };

    const skipBack = () => {
        if (audioRef.current) audioRef.current.currentTime -= 10;
    };

    return (
        <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Cover Art / Visual */}
                <div className="w-full md:w-1/3 aspect-square bg-gradient-to-br from-blue-600 to-indigo-900 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                    {/* Placeholder Icon if no image */}
                    <Volume2 className="w-16 h-16 text-white/50" />
                </div>

                {/* Player Controls */}
                <div className="w-full md:w-2/3 space-y-6">
                    <div>
                        <span className="text-blue-500 text-sm font-bold tracking-wider uppercase mb-2 block">Now Playing</span>
                        <h3 className="text-2xl md:text-3xl font-black text-white mb-2">{currentEpisode.title}</h3>
                        <p className="text-slate-400">{currentEpisode.description}</p>
                    </div>

                    {/* Audio Element */}
                    <audio
                        ref={audioRef}
                        src={currentEpisode.audioUrl}
                        onEnded={() => setIsPlaying(false)}
                        className="hidden"
                    />

                    {/* Controls */}
                    <div className="flex items-center gap-6">
                        <button onClick={skipBack} className="p-3 rounded-full hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
                            <SkipBack size={24} />
                        </button>
                        <button
                            onClick={togglePlay}
                            className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center transition-transform hover:scale-105 shadow-lg shadow-blue-600/20"
                        >
                            {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
                        </button>
                        <button onClick={skipForward} className="p-3 rounded-full hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
                            <SkipForward size={24} />
                        </button>
                    </div>

                    {/* Episodes List - Quick Links */}
                    <div className="pt-6 border-t border-white/5">
                        <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Up Next</h4>
                        <div className="space-y-3">
                            {episodes.map((ep) => (
                                <button
                                    key={ep.id}
                                    onClick={() => {
                                        onEpisodeSelect(ep);
                                        setIsPlaying(false); // Reset play state when switching
                                        // Auto play could be optional here
                                    }}
                                    className={`w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors text-left group ${currentEpisode.id === ep.id ? 'bg-white/5 ring-1 ring-blue-500/50' : ''}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs text-slate-500 group-hover:text-blue-400">
                                            {ep.id}
                                        </div>
                                        <span className={`text-sm font-medium ${currentEpisode.id === ep.id ? 'text-blue-400' : 'text-slate-300 group-hover:text-white'}`}>
                                            {ep.title}
                                        </span>
                                    </div>
                                    <span className="text-xs text-slate-500">{ep.duration}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PodcastPlayer;
