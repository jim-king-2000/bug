'use client';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export function CustomLocalizationProvider({ children }) {
	return <LocalizationProvider dateAdapter={AdapterDateFns}>{children}</LocalizationProvider>;
}
