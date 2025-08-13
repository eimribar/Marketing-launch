

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  LayoutGrid,
  FolderKanban,
  Users,
  BookCopy,
  Settings,
  Sparkles,
  GanttChartSquare,
  GitMerge,
  Menu,
  Rocket,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import { createPageUrl } from '@/utils';

const navigationItems = [
  { name: 'Dashboard', href: 'Dashboard', icon: LayoutGrid },
  { name: 'Marketing Tasks', href: 'Deliverables', icon: FolderKanban },
  { name: 'Launch Timeline', href: 'Timeline', icon: GanttChartSquare },
  { name: 'Budget Tracker', href: 'OutofScope', icon: DollarSign },
  { name: 'Team', href: 'Team', icon: Users },
  { name: 'Analytics', href: 'Brandbook', icon: TrendingUp },
  { name: 'Admin', href: 'Admin', icon: Settings },
];

export default function Layout({ children, currentPageName }) {
    const location = useLocation();

    return (
        <div className="min-h-screen flex w-full">
            {/* Sidebar */}
            <div className="hidden md:flex md:w-64 md:flex-col">
                <div className="flex flex-col flex-grow border-r border-gray-200/60 bg-white/80 backdrop-blur-xl">
                    {/* Logo Header */}
                    <div className="border-b border-gray-100/80 p-6">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-sm">
                                    <Rocket className="w-6 h-6 text-white" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                                    <Sparkles className="w-2 h-2 text-white" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900 tracking-tight">Yess.ai</h2>
                                <p className="text-xs text-gray-500 font-medium">Marketing Launch</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Navigation */}
                    <nav className="flex-1 px-4 py-6 space-y-2">
                        {navigationItems.map((item) => {
                            const isActive = location.pathname === createPageUrl(item.href) || 
                                           location.pathname.startsWith(createPageUrl(item.href) + '/');
                            return (
                                <Link
                                    key={item.href}
                                    to={createPageUrl(item.href)}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                        isActive
                                            ? 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                    }`}
                                >
                                    <item.icon className="w-4 h-4" />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Footer */}
                    <div className="p-6 mt-auto border-t border-gray-100/80">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                                <span className="text-white font-semibold text-sm">MT</span>
                            </div>
                            <div>
                                <p className="font-semibold text-sm">Marketing Team</p>
                                <p className="text-xs text-gray-500">team@yess.ai</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Mobile header */}
                <header className="md:hidden bg-white border-b border-gray-200 px-4 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                                <Rocket className="w-5 h-5 text-white" />
                            </div>
                            <h1 className="text-lg font-semibold text-gray-900">Yess.ai Launch</h1>
                        </div>
                        <Button variant="ghost" size="sm">
                            <Menu className="w-5 h-5" />
                        </Button>
                    </div>
                </header>
                
                {/* Page Content */}
                <main className="flex-1 overflow-y-auto bg-slate-50">
                    {children}
                </main>
            </div>
        </div>
    );
}

