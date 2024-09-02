

function Video() {
  return (
    <div className="relative z-20 w-full max-w-7xl mx-auto mb-8 mt-24">
        <video
          className="w-full h-auto rounded-lg border-2 border-green-200 object-contain"
          autoPlay
          loop
          muted
        >
          <source
            src="https://cdn.dribbble.com/userupload/11513583/file/original-e9b9b54aacb5ff250094b368138368ab.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
  )
}

export default Video