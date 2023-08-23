import { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import Footer from "./footer";
import Header from "./header";
import CursorCircle from "./cursorCircle";
const montserrat = Montserrat({ subsets: ['latin'] })

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className={`${montserrat.className}`}>
                <Header/>
                <main>
                    {children}
                </main>
                <Footer/>
            </div>
            <CursorCircle/>
        </>
    );
}