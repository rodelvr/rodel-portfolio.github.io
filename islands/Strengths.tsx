import Wave from "../components/Wave.tsx";

interface Strength {
  title: string;
  description: string;
  image: string;
}

export default function Strengths() {
  const values: Strength[] = [
    {
      title: "Passion for writing content",
      description:
        "I enjoy writing blogs and other material to share my knowledge and experience.",
      image: "/img/writing.webp",
    },
    {
      title: "Various perspectives",
      description:
        "I have worked in different environments (start-up, scale-up, corporates) and roles (engineer, tech lead, manager).",
      image: "/img/perspectives.webp",
    },
    {
      title: "Innovation through persistence",
      description:
        "I excel in coming up with innovative solutions and tackling difficult problems.",
      image: "/img/climbing.webp",
    },
  ];

  return (
    <>
      <Wave flip={false} />
      <section class="p-4 flex justify-center items-center gap-4 flex-wrap bg-primary">
        {values.map((value, i) => (
          <div
            class={"card md:h-auto md:max-w-64 bg-base-100 flex-row md:flex-col shadow-lg" +
              (i % 2 ? " md:-translate-y-8" : "")}
          >
            <figure class="w-1/3 md:h-48 md:w-auto rounded-none rounded-l-box md:rounded-none md:rounded-t-box">
              <img
                class="w-full h-full object-cover"
                src={value.image}
                alt={value.title}
              />
            </figure>
            <div class="card-body w-2/3 md:w-auto">
              <h2 class="card-title">{value.title}</h2>
              <p>{value.description}</p>
            </div>
          </div>
        ))}
      </section>
      <Wave flip={true} />
    </>
  );
}
