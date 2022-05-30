import { posts } from "./posts"

export const SucessStories = () => {
  return (
    <section className="bg-screen">

        <div className="relative px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
            <div className="mx-auto sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <p className='text-md tracking-tight text-accent pb-5'>
                    ¿CÓMO LO HACEMOS?
                    </p>
                    <p className="text-md tracking-tight text-dark">
                    Qué dicen otros retailers y merchants sobre Deliverea
                    </p>
                </div>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {posts.map((post, idx) => (
                    <div key={idx} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0 p-4 bg-white">
                        <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div className="flex-1">
                        <a href={post.href} className="block mt-2">
                            <p className="mt-3 text-base text-gray-500">{post.description}</p>
                        </a>
                        </div>
                        <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                            <a href={post.author.href}>
                            <span className="sr-only">{post.author.name}</span>
                            <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                            </a>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">
                            <a href={post.author.href} className="hover:underline">
                                {post.author.name}
                            </a>
                            </p>
                            <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime={post.datetime}>{post.date}</time>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>

    </section>
  )
}

export default SucessStories