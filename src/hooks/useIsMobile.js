import { useEffect, useState } from 'react';

export function useIsMobile(width = 1200) {
	const [isMobileState, setIsMobile] = useState(window.innerWidth < width);

	useEffect(() => {
		function handleResize() {
            setIsMobile(window.innerWidth < width);
		}

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	return isMobileState;
}
