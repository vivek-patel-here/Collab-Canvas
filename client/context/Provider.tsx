"use client"

import { ThemeProvider } from "next-themes"
import { SnackbarProvider } from "notistack"
import { StoreProvider } from "@/context/globalContext";


export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} >
            <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
                <StoreProvider>
                    {children}
                    
                </StoreProvider>
            </SnackbarProvider>
        </ThemeProvider>
    )
}
