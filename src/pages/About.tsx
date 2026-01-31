export function About() {
  return (
    <div className="flex flex-col md:flex-row items-start gap-12">
      <div className="flex-shrink-0">
        <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-dark">
          <img 
            src="/photo.png" 
            alt="Will Dickerson" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-xl">
        <p className="text-xl text-brown leading-relaxed">
          Engineering manager at{' '}
          <a 
            href="https://www.arrivelogistics.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-dark border-b border-brown hover:border-dark"
          >
            Arrive Logistics
          </a>
          . I play jazz guitar with{' '}
          <a 
            href="https://bluedotswing.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-dark border-b border-brown hover:border-dark"
          >
            Blue Dot Swing
          </a>
          .
        </p>
      </div>
    </div>
  );
}
