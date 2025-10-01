"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
];

const GalleryPage = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="relative font-sans bg-sky-50 text-gray-800">
            {/* Banner */}
            <div className="relative w-full h-[50vh] md:h-[45vh] flex items-center justify-center overflow-hidden">
                <Image
                   
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/gallery-banner.jpg`}
                    fill
                    priority
                    alt="Galéria - rendelő és kezelések"
                    className="absolute inset-0 object-cover object-center opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-900/50 to-transparent" />
                <div className="relative z-10 max-w-5xl w-full px-6 text-center md:text-left">
                    <p className="text-blue-100 uppercase tracking-wider text-sm">Galéria</p>
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight">
                        Tekintsen be rendelőnk <span className="text-blue-200">galériájába</span>
                    </h1>
                    <p className="mt-3 text-blue-50 max-w-2xl">
                        Pillantson be rendelőnk világába és ismerje meg a modern környezetet, ahol pácienseink mosolya születik.
                    </p>
                </div>
                <div className="poly bg-sky-50" />
            </div>

            {/* Galéria */}
            <div className="max-w-6xl mx-auto px-6 pt-20 pb-40">
                <h2 className="text-3xl font-bold text-blue-700 text-center mb-12">Galéria</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
                            onClick={() => setSelectedImage(img)}
                        >
                            <Image

                                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${img}`}
                                alt={`Galéria kép ${idx + 1}`}
                                width={600}
                                height={400}
                                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 transition-opacity"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl w-full px-4" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-blue-400 transition"
                        >
                            ✕
                        </button>
                        <Image

                            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${selectedImage}`}
                            alt="Kép nagyban"
                            width={1200}
                            height={800}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            )}
            <div className="poly-reverse bg-blue-500" />
        </section>
    );
};

export default GalleryPage;
