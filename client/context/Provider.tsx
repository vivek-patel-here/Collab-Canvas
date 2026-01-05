"use client"

import { ThemeProvider } from "next-themes"
import { SnackbarProvider } from "notistack"
import { StoreProvider } from "@/context/globalContext";
import Footer from "@/components/custom/Footer";


export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} >
            <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
                <StoreProvider>
                    {children}
                    <Footer/>
                </StoreProvider>
            </SnackbarProvider>
        </ThemeProvider>
    )
}
