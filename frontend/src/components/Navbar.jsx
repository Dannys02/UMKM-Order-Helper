import { Search, Bell } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-10 px-6 py-3 flex justify-between items-center">
            <div className="flex items-center gap-4">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                        <Search size={18} />
                    </span>
                    <input  
                        type="text"
                        placeholder="Cari data..."
                        className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-500 w-64 transition-all"
                    />
                </div>
            </div>
            <div className="flex items-center gap-5">
                <button className="text-gray-500 hover:text-blue-600 relative">
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 bg-red-500 h-2 w-2 rounded-full border-2 border-white"></span>
                </button>
                <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
                    <div className="text-right">
                        <p className="text-sm font-semibold text-gray-800">
                            Admin Utama
                        </p>
                        <p className="text-xs text-gray-400">Superadmin</p>
                    </div>
                    <div className="h-9 w-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                        A
                    </div>
                </div>
            </div>
        </nav>
    
    );
}
