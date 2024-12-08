import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const BasicLayout = () => {
	return (
		<div>
			<Header />
			<div className="max-w-[1200px] mx-auto py-32">
				<Outlet />
			</div>
		</div>
	);
};
