import { useEffect, useState } from "react"
import ImagesBox from "./ImagesBox";

const PIXA_BAY_API_KEY = "0Jmx0u_PaPLu3jny9vzfmNiMc36hogaa4f8m3bCyOy0";

function App() {
  const [images, setImages] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState('');
  const [page, setPage] = useState(1);
  const [searchImg, setSearchImg] = useState('cat');

  const handleSearch = () => {
    setSearchImg(term);
  }

  const handlePage = () => {
    setPage((page) => page + 1);
    console.log(page);
  }

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${searchImg}&client_id=${PIXA_BAY_API_KEY}`)
      .then(res => res.json())
      .then((data) => {
        setImages(data.results);
      })
      .catch((err) => console.log(err));

  }, [searchImg, page]);


  return (
    <>
      <div className="text-center mt-4">
        <div>
          <input type="text" className="border-2 rounded border-gray-400" onChange={(e) => setTerm(e.target.value)} value={term} />
          <button className="bg-gray-400 border-2 rounded border-gray-400 mx-4 px-2" onClick={handleSearch}>Search</button>
        </div>
       <div className="flex flex-wrap space-x-4 justify-center w-full px-4 sm:px-0 md:px-0 xl:px-0 2xl:px-0 py-4">
       {
          images.map((image) => {
            const { id, urls, result, likes, tags } = image;
            return (
              <ImagesBox key={id} result={result} urls={urls} likes={likes} tags={tags} />
            );
          })
       }
       </div>
      </div>
      {page === 1 ? '' : <div className="text-center my-2">
        <button onClick={() => handlePage()} className="bg-blue-400 px-4 rounded">Show More</button>
      </div>}
    </>
  )
}

export default App
