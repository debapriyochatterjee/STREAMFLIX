import Skeleton from "@/components/ui/Skeleton";

export default function BrowseLoading() {
  return (
    <div>
      <Skeleton className="h-[65vh] min-h-[420px] w-full rounded-none sm:h-[75vh] sm:min-h-[520px] lg:h-[85vh]" />

      <div className="space-y-6 px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        {Array.from({ length: 4 }).map((_, rowIndex) => (
          <div key={rowIndex} className="space-y-3">
            <Skeleton className="h-5 w-40" />
            <div className="flex gap-3 overflow-hidden">
              {Array.from({ length: 6 }).map((_, cardIndex) => (
                <Skeleton
                  key={cardIndex}
                  className="aspect-2/3 w-[140px] shrink-0 sm:w-[160px] md:w-[180px] lg:w-[200px]"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
