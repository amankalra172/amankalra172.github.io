import React from 'react';
import type { CostResult } from '../utils/calculator';
import { CheckCircle2 } from 'lucide-react';
import { clsx } from 'clsx';

interface ComparisonResultProps {
    results: CostResult[];
}

export const ComparisonResult: React.FC<ComparisonResultProps> = ({ results }) => {
    // Safety check for empty results
    if (!results || results.length < 2) {
        return (
            <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <p className="text-gray-600 dark:text-gray-400">Loading cost comparison...</p>
            </div>
        );
    }

    const sortedResults = [...results].sort((a, b) => parseFloat(a.monthlyCost) - parseFloat(b.monthlyCost));
    const winner = sortedResults[0];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map((result) => {
                const isWinner = result.provider === winner.provider;

                return (
                    <div
                        key={result.provider}
                        className={clsx(
                            'relative p-6 rounded-xl border-2 transition-all',
                            isWinner
                                ? 'border-green-500 dark:border-green-400 bg-gradient-to-br from-green-50 to-white dark:from-green-900/20 dark:to-gray-900'
                                : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'
                        )}
                    >
                        {isWinner && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-green-500 dark:bg-green-400 text-white dark:text-gray-900 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                                <CheckCircle2 className="w-4 h-4" />
                                Best Value
                            </div>
                        )}

                        {/* Logo - Theme aware for STACKIT */}
                        <div className="flex justify-center mb-6">
                            {result.provider === 'STACKIT' ? (
                                <>
                                    <img
                                        src="/logos/stackit-logo-light.png"
                                        alt="STACKIT logo"
                                        className="h-16 object-contain dark:hidden"
                                    />
                                    <img
                                        src="/logos/stackit-logo-dark.png"
                                        alt="STACKIT logo"
                                        className="h-16 object-contain hidden dark:block"
                                    />
                                </>
                            ) : (
                                <img
                                    src={result.provider === 'GCP' ? '/logos/gcp.png' :
                                        result.provider === 'AWS' ? '/logos/aws.png' :
                                            '/logos/azure.png'}
                                    alt={`${result.provider} logo`}
                                    className="h-16 object-contain"
                                />
                            )}
                        </div>

                        <div className="text-center">
                            <div className="mb-2">
                                <span className="text-4xl font-bold text-gray-900 dark:text-white">€{result.monthlyCost}</span>
                                <span className="text-gray-500 dark:text-gray-400">/mo</span>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                €{result.yearlyCost} / year
                            </p>
                        </div>

                        <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-300">Compute</span>
                                <span className="font-medium dark:text-white">€{result.breakdown.compute}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-300">Storage</span>
                                <span className="font-medium dark:text-white">€{result.breakdown.storage}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-300">Transfer</span>
                                <span className="font-medium dark:text-white">€{result.breakdown.transfer}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div >
    );
};
