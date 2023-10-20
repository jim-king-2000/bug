import { CustomLocalizationProvider } from '../../components/localization-provider';

export function generateStaticParams() {
	return [{ locale: 'en' }, { locale: 'cn' }];
}

export default async function RootLayout({ children }) {
	return (
		<html>
			<body>
				<CustomLocalizationProvider>{children}</CustomLocalizationProvider>
			</body>
		</html>
	);
}
