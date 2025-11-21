import React from 'react';
import type { Provider } from '../data/pricing';
import { ChevronDown } from 'lucide-react';

interface ProviderSelectorProps {
    selectedProvider: Provider;
    onProviderChange: (provider: Provider) => void;
}

export const ProviderSelector: React.FC<ProviderSelectorProps> = ({ selectedProvider, onProviderChange }) => {
    const competitors: Provider[] = ['GCP', 'AWS', 'Azure'];

    return (
        <div className="relative">
            <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                Compare with:
            </label>
            <div className="relative">
                <select
                    value={selectedProvider}
                    onChange={(e) => onProviderChange(e.target.value as Provider)}
                    className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-gray-900 dark:text-white transition-colors cursor-pointer hover:border-stackit-primary dark:hover:border-stackit-300 focus:outline-none focus:ring-2 focus:ring-stackit-primary focus:border-stackit-primary"
                >
                    {competitors.map((provider) => (
                        <option key={provider} value={provider}>
                            {provider}
                        </option>
                    ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400 pointer-events-none" />
            </div>
        </div>
    );
};
