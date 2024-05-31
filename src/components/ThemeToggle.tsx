import { Switch } from '@headlessui/react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
    theme: boolean;
    handleToggle: () => void;
}

const ThemeToggle = ({ theme, handleToggle }: ThemeToggleProps) => {

    return (
        <div className="relative ">
            <div className="fixed z-[100] top-2 right-14 md:right-6 lg:right-10 flex gap-1 items-center mx-2 text-primary">
                <Switch
                    checked={theme}
                    onChange={handleToggle}
                    className="group inline-flex h-10 w-4.5 items-center rounded-full bg-gray-400 transition data-[checked]:bg-secondary">
                    <span className="size-4 translate-y-[-8px] tr rounded-full bg-white transition group-data-[checked]:translate-y-2" />
                </Switch>
                <div className="text-slate-200">{theme ? <Sun /> : <Moon />}</div>
            </div>
        </div>
    )
}

export default ThemeToggle;
