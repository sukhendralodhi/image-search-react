/* eslint-disable react/prop-types */

const ImagesBox = ({ urls, result, likes, tags}) => {
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg w-full text-center sm:w-3/5 md:w-2/5 xl:w-1/4 2xl:w-1/4">
                <img src={urls.small} className="w-full xl:h-56 md:h-56 object-cover  hover:scale-105 transition-all duration-100 delay-100 ease-in-out" alt={result} />
                <div className="px-6 py-4">
                    <div className="font-bold text-purple-500 text-xl mb-2">
                        Photo By John Doe
                    </div>
                    <ul>
                        <li>
                            <strong>Views:</strong>
                            3000
                        </li>

                        <li>
                            <strong>Downloads:</strong>
                            300
                        </li>

                        <li>
                            <strong>Likes:</strong>
                           {likes}
                        </li>
                    </ul>
                </div>
                <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        {tags[0].title}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        {tags[1].title}
                    </span>

                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    {tags[2].title}
                    </span>
                </div>
            </div>
        </>
    );
}

export default ImagesBox