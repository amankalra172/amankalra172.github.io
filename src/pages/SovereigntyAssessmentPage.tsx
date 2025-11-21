import React, { useState, useEffect } from 'react';
import { QuestionCard } from '../components/QuestionCard';
import { ASSESSMENT_QUESTIONS, calculateSovereigntyScore, type AssessmentAnswers } from '../data/assessment';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const SovereigntyAssessmentPage: React.FC = () => {
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<AssessmentAnswers>(() => {
        const saved = localStorage.getItem('assessmentAnswers');
        return saved ? JSON.parse(saved) : {};
    });

    const currentQuestion = ASSESSMENT_QUESTIONS[currentQuestionIndex];
    const totalQuestions = ASSESSMENT_QUESTIONS.length;
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

    // Save answers to localStorage
    useEffect(() => {
        localStorage.setItem('assessmentAnswers', JSON.stringify(answers));
    }, [answers]);

    const handleAnswer = (value: string | string[]) => {
        setAnswers((prev) => ({
            ...prev,
            [currentQuestion.id]: value,
        }));
    };

    const handleNext = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        } else {
            // Calculate score and navigate to results
            const score = calculateSovereigntyScore(answers);
            localStorage.setItem('assessmentScore', JSON.stringify(score));
            navigate('/assessment-results');
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prev) => prev - 1);
        }
    };

    const isAnswered = () => {
        const answer = answers[currentQuestion.id];
        if (!answer) return false;
        if (Array.isArray(answer)) return answer.length > 0;
        return true;
    };

    return (
        <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    How Sovereign Are You?
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Discover your cloud sovereignty requirements in just a few minutes
                </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Section {currentQuestion.section} - {currentQuestion.sectionTitle}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Question {currentQuestionIndex + 1} of {totalQuestions}
                    </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                        className="bg-stackit-primary dark:bg-stackit-300 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            {/* Question */}
            <QuestionCard
                question={currentQuestion}
                value={answers[currentQuestion.id]}
                onChange={handleAnswer}
            />

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
                <button
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    <ChevronLeft className="w-5 h-5" />
                    Previous
                </button>

                <button
                    onClick={handleNext}
                    disabled={!isAnswered() && currentQuestion.required}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-stackit-primary hover:bg-stackit-600 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    {currentQuestionIndex === totalQuestions - 1 ? 'See Results' : 'Next'}
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Save & Resume Notice */}
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
                Your progress is automatically saved. You can resume anytime.
            </p>
        </div>
    );
};
