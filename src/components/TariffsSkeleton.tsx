interface TariffsSkeletonProps {
  variant: "large" | "small";
}

export const TariffsSkeleton = ({ variant }: TariffsSkeletonProps) => {
  if (variant === "large") {
    return (
      <div
        className="
          w-full md:w-[748px]
          min-h-[150px] md:min-h-[190px]
          relative bg-gray-700 rounded-[20px] md:rounded-[34px]
          animate-pulse
        "
      />
    );
  }

  // small variant
  return (
    <div
      className="
        relative rounded-[20px] md:rounded-4xl
        border bg-gray-700 p-3 md:p-4
        text-sm md:text-base
        flex flex-col animate-pulse
        min-h-[120px] md:min-h-[150px]
      "
    />
  );
};
