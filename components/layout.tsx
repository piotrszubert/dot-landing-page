import { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import Footer from "./footer";
const montserrat = Montserrat({ subsets: ['latin'] })

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className={`${montserrat.className}`}>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    );
}