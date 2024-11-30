import { Menu } from "lucide-react";
import { Sidebar } from "./sidebar";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-white"/>
            </SheetTrigger>
            <SheetContent>
                <Sidebar/>
            </SheetContent>
        </Sheet>
    );
}