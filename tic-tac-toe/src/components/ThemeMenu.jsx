import React, { useEffect } from 'react';
import { themeChange } from 'theme-change';

export default function ThemeMenu() {
    useEffect(() => {
        themeChange(false)
        return () => {
            themeChange(false)
        }
    }, [])

    return (
        <div className="mt-3">
            <select 
            data-choose-theme
            className="cursor-pointer"
            
            >
                <option value="light">Default</option>
                <option value="dark">Dark</option>
                <option value="synthwave">Synthwave</option>
                <option value="cyberpunk">Cyberpunk</option>
                <option value="halloween">Halloween</option><option value="synthwave">Synthwave</option>
                <option value="valentine">Valentine</option>
                <option value="forest">Forest</option>
                <option value="night">Night</option>
                <option value="aqua">Aqua</option>
                <option value="dracula">Dracula</option>
                <option value="lemonade">Lemonade</option>
                <option value="retro">Retro</option>
              


            </select>
        </div>
    )
}