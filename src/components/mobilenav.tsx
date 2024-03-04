'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Home, UserPlus, HelpCircle, User, ChevronUp, Compass, Clock, Award, BarChart2, BookOpen, Users, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { href: '/explore', icon: Compass, label: 'Explore' },
    { href: '/timeline', icon: Clock, label: 'Timeline' },
    { href: '/awards', icon: Award, label: 'Awards' },
    { href: '/results', icon: BarChart2, label: 'Results' },
    { href: '/resources', icon: BookOpen, label: 'Resources' },
    { href: '/alumni', icon: Users, label: 'Alumni' },
];

const Mobilenav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => setIsOpen(!isOpen);

    return (
        <div>
            <nav className='flex fixed inset-x-0 bottom-0 z-50 flex-row justify-around pb-4 bg-white/95 backdrop-blur-lg py-3 px-4 lg:hidden shadow-lg rounded-t-2xl text-slate-700'>
                <Link href="/" passHref>
                    <div className="flex flex-col items-center space-y-1 cursor-pointer">
                        <Home size={24} className="text-slate-700" />
                        <span className="text-sm">Home</span>
                    </div>
                </Link>
                <Link href="https://www.noi.lk/register" passHref>
                    <div className="flex flex-col items-center space-y-1 cursor-pointer">
                        <UserPlus size={24} className="text--slate-700" />
                        <span className="text-sm">Register Now</span>
                    </div>
                </Link>
                <Link href="/howtocompete" passHref>
                    <div className="flex flex-col items-center space-y-1 cursor-pointer">
                        <HelpCircle size={24} className="text-y-slate-700" />
                        <span className="text-sm">Compete</span>
                    </div>
                </Link>
                <Link href="/profile" passHref>
                    <div className="flex flex-col items-center space-y-1 cursor-pointer">
                        <User size={24} className="text-p-slate-700" />
                        <span className="text-sm">Profile</span>
                    </div>
                </Link>
                <div onClick={toggleNav} className="flex flex-col items-center space-y-1 cursor-pointer">
                    <ChevronUp size={24} className="text-slate-700" />
                    <span className="text-sm">More</span>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ type: 'spring', stiffness: 155, damping: 20 }}
                        className="fixed bottom-16 inset-x-0 z-30 grid place-items-center bg-white p-4 rounded-t-2xl lg:hidden"
                        style={{ gridTemplateRows: 'auto 1fr auto' }}
                    >
                        {/* Close Icon at the top */}
                        <div className="self-end w-full text-right pt-2 pr-2">
                            <XCircle size={32} className="text-red-500 cursor-pointer" onClick={toggleNav} />
                        </div>

                        {/* Nav Items in a grid, adjusting for 3 items per row */}
                        <div className="w-full">
                            <div className="grid gap-4 grid-cols-3 p-4">
                                {navItems.map(({ href, icon: Icon, label }) => (
                                    <Link key={href} href={href} passHref>
                                        <motion.div whileTap={{ scale: 0.95 }} className="flex flex-col items-center space-y-2 cursor-pointer p-2 border-2 border-gray-200 rounded-lg">
                                            <Icon size={24} className="text-slate-700" />
                                            <span className="text-sm">{label}</span>
                                        </motion.div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div >
    );
};

export default Mobilenav;