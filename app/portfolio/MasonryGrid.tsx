import React, { useMemo } from "react";

const MasonryGrid = () => {
  const images = [
    "/assets/l1.jpg",
    "/assets/l2.jpg",
    "/assets/l3.jpg",
    "/assets/l4.jpg",
    "/assets/l5.jpg",
    "/assets/l6.jpg",
    "/assets/l1.jpg",
    "/assets/l2.jpg",
    "/assets/l3.jpg",
    "/assets/l4.jpg",
    "/assets/l5.jpg",
    "/assets/l6.jpg",
  ];

  // Distribute images evenly across columns
  const distributeImages = (numColumns: number): string[][] => {
    const columns: string[][] = Array.from({ length: numColumns }, () => []);

    images.forEach((image, index) => {
      const columnIndex = index % numColumns;
      columns[columnIndex].push(image);
    });

    return columns;
  };

  // Responsive column distribution
  const columnLayout = useMemo(
    () => ({
      mobile: distributeImages(1),
      tablet: distributeImages(2),
      desktop: distributeImages(3),
    }),
    []
  );

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url("/assets/l6.jpg")',
          zIndex: -1,
        }}
      />

      {/* Main Content */}
      <div className="relative min-h-screen w-full bg-black/60">
        <div className="px-2 pb-2">
          {/* Mobile Layout (1 column) */}
          <div className="block sm:hidden">
            <div className="flex flex-col gap-2">
              {columnLayout.mobile[0].map((src, index) => (
                <img
                  key={`mobile-${index}`}
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="w-full rounded-lg shadow-lg"
                />
              ))}
            </div>
          </div>

          {/* Tablet Layout (2 columns) */}
          <div className="hidden sm:block md:hidden">
            <div className="grid grid-cols-2 gap-2">
              {columnLayout.tablet.map((column, colIndex) => (
                <div
                  key={`tablet-col-${colIndex}`}
                  className="flex flex-col gap-2"
                >
                  {column.map((src, imgIndex) => (
                    <img
                      key={`tablet-${colIndex}-${imgIndex}`}
                      src={src}
                      alt={`Image ${colIndex * column.length + imgIndex + 1}`}
                      className="w-full rounded-lg shadow-lg"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout (3 columns) */}
          <div className="hidden md:block">
            <div className="grid grid-cols-3 gap-2">
              {columnLayout.desktop.map((column, colIndex) => (
                <div
                  key={`desktop-col-${colIndex}`}
                  className="flex flex-col gap-2"
                >
                  {column.map((src, imgIndex) => (
                    <img
                      key={`desktop-${colIndex}-${imgIndex}`}
                      src={src}
                      alt={`Image ${colIndex * column.length + imgIndex + 1}`}
                      className="w-full rounded-lg shadow-lg"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasonryGrid;
