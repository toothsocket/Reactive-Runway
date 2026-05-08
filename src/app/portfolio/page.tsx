import Link from "next/link";

export default function Portfolio() {
  const videos = [
    {
      title: "Heat Color Changing Dress",
      url: "https://www.youtube.com/embed/eDy5w9KRKsE",
    },
    {
      title: "Luminescent Gown",
      url: "https://www.youtube.com/embed/zPmcesUHktU",
    },
    {
      title: "Messages For A Grad",
      url: "https://www.youtube.com/embed/i3w5-DLaVn0",
    },
  ];

  return (
    <div className="portfolio-page">
      <h1
        className="font-serif text-center mb-8"
        style={{ fontSize: "3rem" }}
      >
        Portfolio & Process
      </h1>

      <section className="portfolio-gallery mb-8">
        <h2
          className="font-serif mb-4"
          style={{ fontSize: "2rem", textAlign: "center" }}
        >
          My Work
        </h2>

        <div className="grid">
          {videos.map((video, index) => (
            <div
              key={index}
              className="portfolio-item"
              style={{
                borderRadius: "4px",
                overflow: "hidden",
                background: "var(--surface-light)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "177.78%", // 9:16 aspect ratio for YouTube Shorts
                }}
              >
                <iframe
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                />
              </div>

              <div style={{ padding: "1rem" }}>
                <h3
                  className="font-serif"
                  style={{ fontSize: "1.2rem" }}
                >
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr
        style={{
          borderColor: "var(--border)",
          marginBottom: "4rem",
        }}
      />

      <section className="process-section">
        <h2
          className="font-serif mb-4 text-center"
          style={{ fontSize: "2rem" }}
        >
          My Creative Process
        </h2>

        <div className="grid">
          <div
            className="process-step"
            style={{
              padding: "2rem",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "4px",
            }}
          >
            <h3
              className="font-serif mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              Consultation
            </h3>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.9rem",
                lineHeight: "1.5",
              }}
            >
              We will discuss your vision, deadlines, and look over any
              inspiration photos you bring.
            </p>
          </div>

          <div
            className="process-step"
            style={{
              padding: "2rem",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "4px",
            }}
          >
            <h3
              className="font-serif mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              Gathering Materials & Making Tech
            </h3>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.9rem",
                lineHeight: "1.5",
              }}
            >
              We will be in discussion about how we can make this vision come to
              life, and I will begin researching and implementing the
              electronics, dyes, or any other unique features.
            </p>
          </div>

          <div
            className="process-step"
            style={{
              padding: "2rem",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "4px",
            }}
          >
            <h3
              className="font-serif mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              Construction & Fitting
            </h3>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.9rem",
                lineHeight: "1.5",
              }}
            >
              Once it is determined how we will make this vision come to life, I
              will construct the garment after taking your measurements and we
              will do a final fitting!
            </p>
          </div>
        </div>
      </section>

      <div className="text-center mt-8">
        <Link href="/commission" className="btn btn-primary">
          Commission a Piece
        </Link>
      </div>
    </div>
  );
}