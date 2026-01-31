import { Card } from '../components';

const videoIds = ['oo27qUEZ8ec', 'UbPGBlMfTTs'];

export function Music() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl text-dark">music</h1>
        <p className="text-brown max-w-2xl">
          I play guitar with{' '}
          <a 
            href="https://bluedotswing.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-b border-brown hover:border-dark"
          >
            Blue Dot Swing
          </a>
          , a jazz and swing band based in Austin.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videoIds.map((id) => (
          <Card key={id}>
            <div className="aspect-video bg-dark/10 rounded overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title="Blue Dot Swing"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
