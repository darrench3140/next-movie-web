import Image from "next/image";

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIEDB_API_KEY}`
  );
  const res = await data.json();
  return res.results.map((movie) => ({
    id: toString(movie.id),
  }));
}

export default async function MovieDetail({ params }) {
  const { id } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MOVIEDB_API_KEY}`
  );
  const res = await data.json();

  return (
    <div>
      <h1>{res.title}</h1>
      <h2>{res.release_date}</h2>
      <h2>Runtime: {res.runtime} minutes</h2>
      <h2 className="text-sm bg-green-600 inline-block my-2 py-1 px-2 rounded-md">
        {res.status}
      </h2>
      <Image
        className="my-12 w-full"
        src={imagePath + res.backdrop_path}
        width={600}
        height={600}
        alt={res.title}
        priority
      />
      <p>{res.overview}</p>
    </div>
  );
}
