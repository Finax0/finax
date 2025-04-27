"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import ThemeButton from "./theme-button"
import { ThemeSwitcher } from "./theme-switcher"

export default function ResponsiveHeader() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const pathname = usePathname()

    const NavItem = ({ href, pathname, children }: { href: string; pathname: string; children: React.ReactNode }) => {
        const isActive = pathname === href;

        return (
            <Link
                href={href}
                className={`p-1 flex items-center
                            font-semibold
                            transition-all text-[#fbfee6] ${isActive ? "border-b border-[#fbfee6]" : ""}
                `}
            >
                <span className={`${isActive ? "" : ""}`}>
                    {children}
                </span>

            </Link>
        );
    }
    // Handle scroll effect
    useEffect(() => {
        setIsMounted(true)

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        // Only add event listener client-side
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { name: "Ana Sayfa", href: "/home" },
        { name: "Tasarruflarim", href: "/savings" },
        { name: "Yesil Puanlarim", href: "/greenpoint" },
    ]

    // If not mounted yet, render a simpler version to avoid hydration issues
    if (!isMounted) {
        return (
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#8ec291] backdrop-blur-md border-b border-border">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="mx-4 text-[#fbfee6] font-bold text-xl">Finax</div>
                        <div className="hidden md:block">
                            <div className="font-bold">Finax</div>
                            <div className="text-xs text-muted-foreground">Tasarruf Yap</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="h-9 w-9"></div> {/* Placeholder for theme toggle */}
                        <div className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

    return (
        <header
            className={
                `fixed top-0 left-0 right-0 z-50 transition-all duration-300
                ${isScrolled ? "bg-[#8ec291]/50 backdrop-blur-md" : "bg-[#8ec291]"}`
            }
        >
            <div className="flex h-16 items-center justify-between px-4">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2"
                >
                    <div className="hidden md:block">
                        <Image src="/finax.svg" alt="Logo" width={160} height={100} className="p-2 rounded-xl bg-[#fbfee6]" />
                    </div>
                </motion.div>

                <nav className="hidden md:flex items-center gap-8 lg:gap-12 text-sm">
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <div className="relative transition-colors hover:text-primary">
                                <NavItem href={item.href} pathname={pathname}>
                                    {item.name}
                                </NavItem>
                            </div>
                        </motion.div>
                    ))}
                </nav>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    className="hidden md:flex items-center space-x-3"
                >
                    <Link href="/login" className="text-[#8ec291] bg-[#fbfee6] rounded-md hover:opacity-80">
                        <Button className="font-bold">Login</Button>
                    </Link>
                    <ThemeButton />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-row w-screen justify-between items-center space-x-3 md:hidden"
                >
                    <Image src="/finax.svg" alt="Logo" width={160} height={100} className="p-2 rounded-xl bg-[#fbfee6]" />
                    <section className="flex flex-row items-center justify-between space-x-3">
                        <Link href="/login" className="text-[#8ec291] bg-[#fbfee6] rounded-md">
                            <Button className="font-bold">Login</Button>
                        </Link>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {mobileMenuOpen ? <X color="#fbfee6" className="h-5 w-5" /> : <Menu color="#fbfee6" className="h-5 w-5" />}
                        </Button>
                    </section>
                </motion.div>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col space-y-3 p-4">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <Link
                                        href={item.href}
                                        className="block py-2 text-[#fbfee6] hover:text-primary transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <div className="pt-2 border-t border-[#fbfee6]">
                                <div className="flex flex-row items-center space-x-3">
                                    <ThemeButton />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header >
    )
}
