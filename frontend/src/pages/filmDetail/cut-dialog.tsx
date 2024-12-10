import { Heart } from 'lucide-react';
import { Cut, Film } from '@shared/lib/gql';
import { AspectRatio } from '@shared/ui/aspect-ratio';
import { Button } from '@shared/ui/button';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@shared/ui/dialog';

interface CutDialogProps {
	cut: Omit<Cut, 'filmId' | 'film'> & { film: Pick<Film, 'title'> };
	children: React.ReactNode;
}

export const CutDialog = ({ cut, children }: CutDialogProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className="w-[600px]">
				<DialogHeader>
					<DialogTitle>{cut.film.title}</DialogTitle>
					<DialogClose />
				</DialogHeader>
				<AspectRatio
					ratio={1.7 / 1}
					className="w-full bg-gray-200 rounded-xl overflow-hidden"
				>
					<img
						src={cut.src}
						alt={cut.id.toString()}
						className="w-full h-full object-cover"
					/>
				</AspectRatio>
				<DialogFooter>
					<div className="w-full flex justify-between items-center">
						<p className="font-semibold">{cut.id}번째 사진</p>
						<div className="flex gap-2">
							<Button
								variant="outline"
								size="icon"
							>
								<Heart />
							</Button>
							<Button>감상 남기기</Button>
						</div>
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
