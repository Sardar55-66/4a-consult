interface TariffsSkeletonProps {
  variant: "large" | "small";
}
export const TariffsSkeleton = ({ variant }: TariffsSkeletonProps) => {
  if (variant === "large") {
    return (
      <div className="w-[748px] min-h-[190px] relative bg-gray-700 rounded-[34px] animate-pulse" />
    );
  }

  // small variant
  return (
    <div className="relative rounded-4xl border bg-gray-700 p-4 text-sm flex flex-col animate-pulse min-h-[150px]" />
  );
};
