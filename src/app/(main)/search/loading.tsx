import Skeleton from "@/components/ui/Skeleton";

export default function SearchLoading() {
  return (
    <div className="px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <Skeleton className="mb-6 h-6 w-48" />
      <div className="grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <Skeleton key={i} className="aspect-2/3 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px]" />
        ))}
      </div>
    </div>
  );
}
