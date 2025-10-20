import video1 from "@/assets/video-1.mp4";
import video2 from "@/assets/video-2.mp4";
import video3 from "@/assets/video-3.mp4";

const VideoCard = ({ video, className = "" }: { video: string; className?: string }) => {
  return (
    <div className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${className}`}>
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export const VideoShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Hero Video - Takes 2 columns and 2 rows on desktop */}
          <VideoCard 
            video={video1} 
            className="md:col-span-2 md:row-span-2 h-[400px] md:h-[600px]"
          />
          
          {/* Supporting Video 1 */}
          <VideoCard 
            video={video2} 
            className="h-[300px] md:h-[291px]"
          />
          
          {/* Supporting Video 2 */}
          <VideoCard 
            video={video3} 
            className="h-[300px] md:h-[291px]"
          />
        </div>
      </div>
    </section>
  );
};
