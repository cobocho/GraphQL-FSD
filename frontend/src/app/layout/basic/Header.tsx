import { Link } from 'react-router-dom';
import { Button } from '@shared/ui/button';

export const Header = () => {
	return (
		<header className="flex fixed top-0 left-0 items-center w-full bg-white px-10 py-4 justify-between border-b-[1px] border-b-gray-200 border-solid">
			<Link to="/">
				<p className="font-bold">GhibliBestCut</p>
			</Link>
			<div className="flex gap-2">
				<Button>로그인</Button>
				<Button variant="secondary">시작하기</Button>
			</div>
		</header>
	);
};
