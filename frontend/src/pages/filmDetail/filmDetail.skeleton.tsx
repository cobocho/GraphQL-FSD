import { Skeleton } from '@shared/ui/skeleton';

export const FilmDetailPageSkeleton = () => {
	return (
		<div>
			<div className="flex gap-8 items-center">
				<Skeleton className="rounded-xl h-[400px] w-[280px]" />
				<div className="flex flex-col">
					<ul className="flex gap-2 mb-3">
						{Array.from({ length: 3 }).map((_, index) => (
							<li
								key={index}
								className="bg-gray-200 px-1 rounded-md"
							>
								<Skeleton className="w-10 h-4" />
							</li>
						))}
					</ul>
					<Skeleton className="w-80 h-10 mb-4" />
					<Skeleton className="w-60 h-6 mb-2" />
					<div className="flex gap-1 text-gray-500 mb-4">
						<Skeleton className="w-20 h-4" />
						<p> | </p>
						<Skeleton className="w-10 h-4" />
					</div>
					<div className="w-full h-32">
						<Skeleton className="w-full h-full" />
					</div>
				</div>
			</div>
		</div>
	);
};
