export function ProjectGallery() {
    const images = [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mockup-fundation-A.jpg-FLv18JOPrdGC3yX8R2oS9gdDO65YSW.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mockup-fundation-B.jpg", // Update with the correct second image
    ];

    return (
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8">Project Gallery:</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="aspect-video relative rounded-lg overflow-hidden"
                    >
                        <img
                            src={src}
                            alt={`Project image ${index + 1}`}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <img
                    src="/placeholder.svg"
                    alt="Placeholder Logo"
                    className="h-[60px] w-[200px] object-contain"
                />
            </div>
        </section>
    );
}
