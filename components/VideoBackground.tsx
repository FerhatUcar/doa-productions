interface VideoBackgroundProps {
  src: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ src }) => {
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline className="video">
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
