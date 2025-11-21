import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { SovereigntyScore } from '../data/assessment';
import { CheckCircle, Award, TrendingUp, Download, ArrowRight } from 'lucide-react';

export const AssessmentResultsPage: React.FC = () => {
    const navigate = useNavigate();
    const [score, setScore] = useState<SovereigntyScore | null>(null);

    useEffect(() => {
        const savedScore = localStorage.getItem('assessmentScore');
        if (savedScore) {
            setScore(JSON.parse(savedScore));
        } else {
            // No score found, redirect to assessment
            navigate('/assessment');
        }
    }, [navigate]);

    if (!score) {
        return <div>Loading...</div>;
    }

    const scorePercentage = (score.total / score.maxScore) * 100;

    const getLevelColor = (level: SovereigntyScore['level']) => {
        switch (level) {
            case 'high':
                return 'text-green-600 dark:text-green-400';
            case 'moderate':
                return 'text-blue-600 dark:text-blue-400';
            case 'some':
                return 'text-yellow-600 dark:text-yellow-400';
            case 'flexible':
                return 'text-gray-600 dark:text-gray-400';
        }
    };

    const getLevelBadgeColor = (level: SovereigntyScore['level']) => {
        switch (level) {
            case 'high':
                return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border-green-300 dark:border-green-700';
            case 'moderate':
                return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700';
            case 'some':
                return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 border-yellow-300 dark:border-yellow-700';
            case 'flexible':
                return 'bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700';
        }
    };

    const dimensionLabels = {
        dataResidency: 'Data Residency',
        compliance: 'Compliance',
        control: 'Data Control',
        independence: 'Vendor Independence',
        transparency: 'Transparency',
    };

    return (
        <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                    <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Assessment Complete!
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Here's your sovereignty profile
                </p>
            </div>

            {/* Score Card */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 mb-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Score Circle */}
                    <div className="relative w-48 h-48">
                        <svg className="transform -rotate-90 w-48 h-48">
                            <circle
                                cx="96"
                                cy="96"
                                r="88"
                                stroke="currentColor"
                                strokeWidth="12"
                                fill="transparent"
                                className="text-gray-200 dark:text-gray-700"
                            />
                            <circle
                                cx="96"
                                cy="96"
                                r="88"
                                stroke="currentColor"
                                strokeWidth="12"
                                fill="transparent"
                                strokeDasharray={`${2 * Math.PI * 88}`}
                                strokeDashoffset={`${2 * Math.PI * 88 * (1 - scorePercentage / 100)}`}
                                className={getLevelColor(score.level)}
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className={`text-5xl font-bold ${getLevelColor(score.level)}`}>
                                {score.total}
                            </span>
                            <span className="text-gray-500 dark:text-gray-400 text-sm">
                                out of {score.maxScore}
                            </span>
                        </div>
                    </div>

                    {/* Score Info */}
                    <div className="flex-1 text-center md:text-left">
                        <div className={`inline-block px-4 py-2 rounded-full border-2 mb-4 ${getLevelBadgeColor(score.level)}`}>
                            <span className="font-semibold uppercase text-sm">
                                {score.level} Sovereignty Needs
                            </span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                            Your Sovereignty Score
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                            {score.recommendation}
                        </p>
                    </div>
                </div>
            </div>

            {/* Dimension Breakdown */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <Award className="w-6 h-6 text-stackit-primary" />
                    Sovereignty Dimensions
                </h3>
                <div className="space-y-4">
                    {Object.entries(score.dimensions).map(([key, value]) => (
                        <div key={key}>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {dimensionLabels[key as keyof typeof dimensionLabels]}
                                </span>
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                    {value.toFixed(1)} / 5.0
                                </span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <div
                                    className="bg-stackit-primary dark:bg-stackit-300 h-2 rounded-full transition-all"
                                    style={{ width: `${(value / 5) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why STACKIT */}
            <div className="bg-gradient-to-br from-stackit-50 to-blue-50 dark:from-stackit-900/20 dark:to-blue-900/20 p-8 rounded-xl border border-stackit-200 dark:border-stackit-700 mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-stackit-primary" />
                    Why STACKIT is Right for You
                </h3>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                            <strong>100% German Infrastructure</strong> - Full data sovereignty with servers exclusively in Germany
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                            <strong>No US CLOUD Act exposure</strong> - Your data is protected from foreign government access
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                            <strong>Full compliance coverage</strong> - GDPR, DSGVO, BSI C5, ISO 27001 certified
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                            <strong>Open source foundation</strong> - Avoid vendor lock-in with portable solutions
                        </span>
                    </li>
                </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
                <button
                    onClick={() => navigate('/')}
                    className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-stackit-primary hover:bg-stackit-600 text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
                >
                    Compare Costs Now
                    <ArrowRight className="w-5 h-5" />
                </button>
                <button
                    onClick={() => window.print()}
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold text-lg transition-all"
                >
                    <Download className="w-5 h-5" />
                    Download Report
                </button>
            </div>

            {/* Restart Assessment */}
            <div className="text-center mt-8">
                <button
                    onClick={() => {
                        localStorage.removeItem('assessmentAnswers');
                        localStorage.removeItem('assessmentScore');
                        navigate('/assessment');
                    }}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white underline"
                >
                    Retake Assessment
                </button>
            </div>
        </div>
    );
};
