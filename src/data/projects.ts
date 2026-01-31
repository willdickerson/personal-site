export interface Project {
  id: string;
  name: string;
  description: string;
  github?: string;
  live?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'chord-flow',
    name: 'chord-flow',
    description: 'Interactive tool for exploring chord progressions with optimal voice leading visualization.',
    github: 'https://github.com/willdickerson/chord-flow',
    live: 'https://www.chordflow.net/',
    tags: ['music', 'react', 'typescript'],
  },
  {
    id: 'optimal-voice-leading',
    name: 'optimal-voice-leading',
    description: 'Algorithm for computing smooth voice leading between jazz chords using graph theory.',
    github: 'https://github.com/willdickerson/optimal-voice-leading',
    tags: ['music', 'python', 'algorithms'],
  },
  {
    id: 'hangboard',
    name: 'hangboard timer',
    description: 'Minimalist interval timer for climbing hangboard training sessions.',
    github: 'https://github.com/willdickerson/hangboard-timer',
    live: 'https://www.hangboard.net/',
    tags: ['climbing', 'react'],
  },
  {
    id: 'waco-surf-watcher',
    name: 'waco surf watcher',
    description: 'Automated availability checker for surf sessions at Waco Surf.',
    github: 'https://github.com/willdickerson/waco-surf-watcher',
    tags: ['automation', 'python'],
  },
];
