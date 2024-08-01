function Card(props) {

    return (
        <div class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 m-7">
            <div class="px-4 py-2">
                <h1 class="text-xl font-bold text-gray-800 uppercase dark:text-white">{props.title}</h1>
                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{props.description}</p>
            </div>
        </div>
    )
}

export default Card;