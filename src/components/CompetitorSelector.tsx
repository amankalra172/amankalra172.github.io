import React from 'react';
import type { Provider } from '../data/pricing';
import { ChevronDown } from 'lucide-react';

interface CompetitorSelectorProps {
    selectedProvider: Provider;
    onProviderChange: (provider: Provider) => void;
}



const providerNames: Record<Exclude<Provider, 'STACKIT'>, string> = {
    'GCP': 'Google Cloud',
    'AWS': 'Amazon Web Services',
    'Azure': 'Microsoft Azure',
};

export const CompetitorSelector: React.FC<CompetitorSelectorProps> = ({ selectedProvider, onProviderChange }) => {
    const competitors: Exclude<Provider, 'STACKIT'>[] = ['GCP', 'AWS', 'Azure'];

    return (
        <div className="relative min-w-[240px]">
            <select
                value={selectedProvider}
                onChange={(e) => onProviderChange(e.target.value as Provider)}
                className="w-full appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg pl-4 pr-10 py-2.5 text-sm font-medium text-gray-900 dark:text-white transition-all cursor-pointer hover:border-stackit-primary dark:hover:border-stackit-300 focus:outline-none focus:ring-2 focus:ring-stackit-primary/20 focus:border-stackit-primary"
            >
                {competitors.map((provider) => (
                    <option key={provider} value={provider}>
                        {provider} - {providerNames[provider]}
                    </option>
                ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400 pointer-events-none" />
        </div>
    );
};
