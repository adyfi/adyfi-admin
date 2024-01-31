import React from 'react'

export const UploadBlogForm = () => {
    return (
        <>
        <form action="" className="s-full sm:w-[70%] py-20 rounded flex flex-col items-center">
            <h1 className='text-4xl text-center mb-2 text-primary font-extrabold'>Upload A Blog</h1>
            <div className="w-[150px] bg-primary h-1 rounded mb-10"></div>
            <div className="container w-full">
                <label
                    className="relative block mb-5"
                >
                    <input
                        type="text"
                        id="title"
                        name="title"
                        maxLength={200}
                        minLength={4}
                        className="peer w-full py-2 px-2 rounded-[4px] border border-1 border-gray-400 focus:outline-none focus:border-primary shadow-sm"
                        placeholder=""
                        // onChange={handleInputChange}
                        required
                    />
                    <span
                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs text-gray-400 peer-focus:text-primary"
                    >
                        Title
                    </span>
                </label>
            </div>
            <div className="container w-full">
                <label
                    className="relative block mb-5"
                >
                    <input
                        type="text"
                        id="subtitle"
                        name="subtitle"
                        maxLength={200}
                        minLength={4}
                        className="peer w-full py-2 px-2 rounded-[4px] border border-1 border-gray-400 focus:outline-none focus:border-primary shadow-sm"
                        placeholder=""
                        // onChange={handleInputChange}
                        required
                    />
                    <span
                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs text-gray-400 peer-focus:text-primary"
                    >
                        Subtitle
                    </span>
                </label>
            </div>
            <div className="container w-full">
                <label
                    className="relative block mb-5"
                >
                    <input
                        type="text"
                        id="date"
                        name="date"
                        maxLength={200}
                        minLength={4}
                        className="peer w-full py-2 px-2 rounded-[4px] border border-1 border-gray-400 focus:outline-none focus:border-primary shadow-sm"
                        placeholder=""
                        // onChange={handleInputChange}
                        required
                    />
                    <span
                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs text-gray-400 peer-focus:text-primary"
                    >
                        Date of upload
                    </span>
                </label>
            </div>
            <div className="container w-full">
                <label
                    className="relative block mb-5"
                >
                    <input
                        type="text"
                        id="slug"
                        name="slug"
                        maxLength={200}
                        minLength={4}
                        className="peer w-full py-2 px-2 rounded-[4px] border border-1 border-gray-400 focus:outline-none focus:border-primary shadow-sm"
                        placeholder=""
                        // onChange={handleInputChange}
                        required
                    />
                    <span
                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs text-gray-400 peer-focus:text-primary"
                    >
                        Slug
                    </span>
                </label>
            </div>
            <div className="container w-full">
                <label
                    className="relative block mb-5"
                >
                    <input
                        type="file"
                        id="thumbnail"
                        name="thumbnail"
                        maxLength={200}
                        minLength={4}
                        className="peer w-full py-4 px-2 rounded-[4px] border border-1 border-gray-400 focus:outline-none focus:border-primary shadow-sm"
                        placeholder=""
                        // onChange={handleInputChange}
                        required
                    />
                    <span
                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs text-gray-400 peer-focus:text-primary"
                    >
                        Thumbnail
                    </span>
                </label>
            </div>
        </form>
        
        </>
    )
}

