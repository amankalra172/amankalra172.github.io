import React from 'react';
import type { AssessmentQuestion } from '../data/assessment';
import { Info } from 'lucide-react';

interface QuestionCardProps {
    question: AssessmentQuestion;
    value: string | string[] | number | undefined;
    onChange: (value: string | string[]) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, value, onChange }) => {
    const renderInput = () => {
        switch (question.type) {
            case 'single':
                return (
                    <div className="space-y-3">
                        {question.options.map((option) => (
                            <label
                                key={option.value}
                                className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${value === option.value
                                    ? 'border-stackit-primary bg-stackit-50 dark:bg-stackit-900/20'
                                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name={question.id}
                                    value={option.value}
                                    checked={value === option.value}
                                    onChange={(e) => onChange(e.target.value)}
                                    className="w-4 h-4 text-stackit-primary focus:ring-stackit-primary"
                                />
                                <span className="ml-3 text-gray-900 dark:text-white font-medium">
                                    {option.label}
                                </span>
                            </label>
                        ))}
                    </div>
                );

            case 'multiple':
                const selectedValues = Array.isArray(value) ? value : [];
                return (
                    <div className="space-y-3">
                        {question.options.map((option) => {
                            const isChecked = selectedValues.includes(option.value);
                            return (
                                <label
                                    key={option.value}
                                    className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${isChecked
                                        ? 'border-stackit-primary bg-stackit-50 dark:bg-stackit-900/20'
                                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                                        }`}
                                >
                                    <input
                                        type="checkbox"
                                        value={option.value}
                                        checked={isChecked}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                onChange([...selectedValues, option.value]);
                                            } else {
                                                onChange(selectedValues.filter((v) => v !== option.value));
                                            }
                                        }}
                                        className="w-4 h-4 text-stackit-primary focus:ring-stackit-primary rounded"
                                    />
                                    <span className="ml-3 text-gray-900 dark:text-white font-medium">
                                        {option.label}
                                    </span>
                                </label>
                            );
                        })}
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {question.question}
                    {question.required && <span className="text-red-500 ml-1">*</span>}
                </h2>
                {question.tooltip && (
                    <div className="flex items-start gap-2 mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-blue-700 dark:text-blue-300">{question.tooltip}</p>
                    </div>
                )}
            </div>
            {renderInput()}
        </div>
    );
};
