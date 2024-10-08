interface Video {
  title: string;
  description: string;
  link: string;
  thumbnail: string;
  category: string;
}

export default function Videos() {
  const videos: Video[] = [
    {
      title: "Building Big Data Infrastructure (Spark + AI Summit 2019)",
      description:
        "How the data platform was built and how ML is managed at Adyen.",
      link: "https://www.youtube.com/watch?v=lirZVxWiczw",
      thumbnail: "img/thumbnail_youtube1.webp",
      category: "youtube",
    },
    {
      title: "Building a Data Platform from scratch (PyData Amsterdam 2024)",
      description:
        "Sharing my experience on building a data platform from scratch (video will follow).",
      link:
        "/docs/Building a Data Platform from scratch - PyData Amsterdam 2024.pdf",
      thumbnail: "img/pydata_2024.jpeg",
      category: "youtube",
    },
  ];

  return (
    <section className="p-4 my-8">
      <h1 className="text-3xl font-bold text-primary text-center mb-4">
        Videos
      </h1>
      <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
        {videos.map((video) => (
          <div
            key={video.link}
            className="card max-w-sm border border-gray-300 rounded-md overflow-hidden"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-48 object-cover"
            />
            <div className="card-body p-4">
              <h2 className="card-title text-xl font-semibold mb-2">
                {video.title}
              </h2>
              <p className="mb-4">{video.description}</p>
              <a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-base-100"
              >
                Watch Video
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
