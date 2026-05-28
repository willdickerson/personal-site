const videos = [
  { id: 'oo27qUEZ8ec', title: 'Gypsy Jazz Medley', role: 'Blue Dot Swing' },
  { id: 'UbPGBlMfTTs', title: 'Paquito', role: 'Swing Theory' },
];

export function Music() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-[38px] tracking-[-0.025em] text-dark">music</h1>
        <p className="text-brown max-w-2xl">
          I play guitar with{' '}
          <a
            href="https://bluedotswing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-dark/40 hover:border-dark transition-colors duration-200"
          >
            Blue Dot Swing
          </a>
          , a jazz band based in Austin.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
        {videos.map((v) => (
          <div key={v.id} className="flex flex-col gap-3.5">
            <div className="aspect-video border border-dark/20 rounded-[4px] overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${v.id}`}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[15px] font-semibold tracking-[-0.005em] text-dark">{v.title}</span>
              <span className="font-mono text-xs text-brown">{v.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
