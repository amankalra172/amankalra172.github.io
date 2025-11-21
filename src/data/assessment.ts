export type QuestionType = 'single' | 'multiple' | 'ranking' | 'scale';

export interface QuestionOption {
    value: string;
    label: string;
    weight?: number; // For scoring
}

export interface AssessmentQuestion {
    id: string;
    section: string;
    sectionTitle: string;
    question: string;
    type: QuestionType;
    options: QuestionOption[];
    dimension?: 'dataResidency' | 'compliance' | 'control' | 'independence' | 'transparency';
    required?: boolean;
    tooltip?: string;
}

export interface AssessmentAnswers {
    [questionId: string]: string | string[] | number;
}

export interface SovereigntyScore {
    total: number;
    maxScore: number;
    dimensions: {
        dataResidency: number;
        compliance: number;
        control: number;
        independence: number;
        transparency: number;
    };
    level: 'high' | 'moderate' | 'some' | 'flexible';
    recommendation: string;
}

// Assessment Questions
export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
    // Section 1: Your Organization
    {
        id: 'industry',
        section: '1',
        sectionTitle: 'Your Organization',
        question: 'Which industry sector best describes your organization?',
        type: 'single',
        required: true,
        options: [
            { value: 'healthcare', label: 'Healthcare', weight: 1 },
            { value: 'finance', label: 'Finance/Banking', weight: 1 },
            { value: 'government', label: 'Government/Public Sector', weight: 2 },
            { value: 'manufacturing', label: 'Manufacturing', weight: 0.5 },
            { value: 'technology', label: 'Technology', weight: 0 },
            { value: 'other', label: 'Other', weight: 0 },
        ],
        dimension: 'compliance',
    },
    {
        id: 'companySize',
        section: '1',
        sectionTitle: 'Your Organization',
        question: 'What is your company size?',
        type: 'single',
        required: true,
        options: [
            { value: 'small', label: 'Small (1-50 employees)' },
            { value: 'medium', label: 'Medium (51-500 employees)' },
            { value: 'large', label: 'Large (500+ employees)' },
        ],
    },
    {
        id: 'location',
        section: '1',
        sectionTitle: 'Your Organization',
        question: 'Where is your primary location?',
        type: 'single',
        required: true,
        options: [
            { value: 'germany', label: 'Germany', weight: 2 },
            { value: 'eu', label: 'European Union (other)', weight: 1 },
            { value: 'outside_eu', label: 'Outside EU', weight: 0 },
        ],
        dimension: 'dataResidency',
    },

    // Section 2: Data Sovereignty Requirements
    {
        id: 'dataLocation',
        section: '2',
        sectionTitle: 'Data Sovereignty Requirements',
        question: 'Where must your data be stored?',
        type: 'single',
        required: true,
        tooltip: 'Some regulations require data to stay within specific geographic boundaries.',
        options: [
            { value: 'germany', label: 'Data must remain in Germany', weight: 5 },
            { value: 'eu', label: 'Data must remain in EU', weight: 4 },
            { value: 'no_restriction', label: 'No geographic restrictions', weight: 0 },
            { value: 'unsure', label: 'Unsure', weight: 2 },
        ],
        dimension: 'dataResidency',
    },
    {
        id: 'compliance',
        section: '2',
        sectionTitle: 'Data Sovereignty Requirements',
        question: 'Which regulatory compliance standards apply to you?',
        type: 'multiple',
        required: true,
        tooltip: 'Select all that apply to your organization.',
        options: [
            { value: 'gdpr', label: 'GDPR', weight: 2 },
            { value: 'dsgvo', label: 'DSGVO (German GDPR)', weight: 3 },
            { value: 'bsi_c5', label: 'BSI C5', weight: 3 },
            { value: 'iso27001', label: 'ISO 27001', weight: 2 },
            { value: 'soc2', label: 'SOC 2', weight: 1 },
            { value: 'healthcare', label: 'Healthcare regulations', weight: 3 },
            { value: 'financial', label: 'Financial regulations (BaFin, etc.)', weight: 3 },
            { value: 'none', label: 'None specifically', weight: 0 },
        ],
        dimension: 'compliance',
    },
    {
        id: 'dataAccess',
        section: '2',
        sectionTitle: 'Data Sovereignty Requirements',
        question: 'How concerned are you about foreign government access to your data?',
        type: 'single',
        required: true,
        tooltip: 'Laws like the US CLOUD Act allow foreign government access to data.',
        options: [
            { value: 'very', label: 'Very concerned', weight: 5 },
            { value: 'moderate', label: 'Moderately concerned', weight: 3 },
            { value: 'not', label: 'Not concerned', weight: 0 },
            { value: 'unsure', label: 'Unsure', weight: 2 },
        ],
        dimension: 'control',
    },
    {
        id: 'encryption',
        section: '2',
        sectionTitle: 'Data Sovereignty Requirements',
        question: 'What are your encryption key management requirements?',
        type: 'single',
        required: true,
        options: [
            { value: 'full_control', label: 'Need full control of encryption keys', weight: 5 },
            { value: 'provider_managed', label: 'Cloud provider-managed keys acceptable', weight: 1 },
            { value: 'no_requirement', label: 'No specific requirements', weight: 0 },
        ],
        dimension: 'control',
    },

    // Section 3: Current Infrastructure
    {
        id: 'currentProvider',
        section: '3',
        sectionTitle: 'Current Infrastructure',
        question: 'Which cloud provider(s) do you currently use?',
        type: 'multiple',
        required: true,
        options: [
            { value: 'aws', label: 'AWS' },
            { value: 'gcp', label: 'Google Cloud (GCP)' },
            { value: 'azure', label: 'Microsoft Azure' },
            { value: 'other_hyperscaler', label: 'Other hyperscaler' },
            { value: 'onprem', label: 'On-premises', weight: 2 },
            { value: 'eu_provider', label: 'German/EU cloud provider', weight: 3 },
        ],
    },
    {
        id: 'vendorLockIn',
        section: '3',
        sectionTitle: 'Current Infrastructure',
        question: 'How would you describe your vendor lock-in concerns?',
        type: 'single',
        required: true,
        options: [
            { value: 'actively_reducing', label: 'Actively looking to reduce lock-in', weight: 5 },
            { value: 'concerned', label: 'Somewhat concerned', weight: 3 },
            { value: 'not_priority', label: 'Not a priority', weight: 0 },
            { value: 'unsure', label: 'Unsure', weight: 1 },
        ],
        dimension: 'independence',
    },
    {
        id: 'workloads',
        section: '3',
        sectionTitle: 'Current Infrastructure',
        question: 'Which workloads do you run or plan to run?',
        type: 'multiple',
        required: true,
        options: [
            { value: 'workflows', label: 'Data Workflows/Orchestration (Airflow)' },
            { value: 'notebooks', label: 'Jupyter Notebooks / Machine Learning' },
            { value: 'datalakes', label: 'Data Lakes / Analytics (Dremio)' },
            { value: 'compute', label: 'General compute' },
            { value: 'databases', label: 'Databases' },
            { value: 'other', label: 'Other' },
        ],
    },
    {
        id: 'cloudSpend',
        section: '3',
        sectionTitle: 'Current Infrastructure',
        question: 'What is your approximate monthly cloud spend?',
        type: 'single',
        required: false,
        options: [
            { value: 'under_1k', label: '< €1,000' },
            { value: '1k_5k', label: '€1,000 - €5,000' },
            { value: '5k_25k', label: '€5,000 - €25,000' },
            { value: '25k_100k', label: '€25,000 - €100,000' },
            { value: 'over_100k', label: '> €100,000' },
        ],
    },

    // Section 4: Sovereignty Priorities
    {
        id: 'priorities',
        section: '4',
        sectionTitle: 'Sovereignty Priorities',
        question: 'What matters most to your organization? (Select your top 3)',
        type: 'multiple',
        required: true,
        tooltip: 'Choose up to 3 priorities',
        options: [
            { value: 'data_residency', label: 'Data stays in Germany/EU', weight: 4 },
            { value: 'no_foreign_access', label: 'No US/foreign government access', weight: 5 },
            { value: 'transparency', label: 'Transparent operations', weight: 2 },
            { value: 'cost', label: 'Cost savings', weight: 0 },
            { value: 'no_lockin', label: 'Avoiding vendor lock-in', weight: 3 },
            { value: 'opensource', label: 'Open source technology', weight: 2 },
            { value: 'certifications', label: 'Strong compliance certifications', weight: 3 },
        ],
        dimension: 'transparency',
    },
    {
        id: 'sovereigntyKnowledge',
        section: '4',
        sectionTitle: 'Sovereignty Priorities',
        question: 'How familiar are you with digital sovereignty?',
        type: 'single',
        required: true,
        options: [
            { value: 'very', label: 'Very familiar with the concept' },
            { value: 'somewhat', label: 'Somewhat familiar' },
            { value: 'learning', label: 'Just learning about it' },
            { value: 'new', label: 'New to the concept' },
        ],
    },
];

export const calculateSovereigntyScore = (answers: AssessmentAnswers): SovereigntyScore => {
    const dimensionScores = {
        dataResidency: [] as number[],
        compliance: [] as number[],
        control: [] as number[],
        independence: [] as number[],
        transparency: [] as number[],
    };

    // Collect all scores for each dimension
    ASSESSMENT_QUESTIONS.forEach((question) => {
        const answer = answers[question.id];
        if (!answer || !question.dimension) return;

        if (question.type === 'single') {
            const option = question.options.find((opt) => opt.value === answer);
            if (option && option.weight !== undefined) {
                dimensionScores[question.dimension].push(option.weight);
            }
        } else if (question.type === 'multiple' && Array.isArray(answer)) {
            const selectedOptions = question.options.filter((opt) => answer.includes(opt.value));
            // For multiple choice, take the average of selected options (capped at 5)
            const avgWeight = selectedOptions.reduce((sum, opt) => sum + (opt.weight || 0), 0) / Math.max(selectedOptions.length, 1);
            dimensionScores[question.dimension].push(Math.min(avgWeight, 5));
        }
    });

    // Calculate average for each dimension and cap at 5.0
    const dimensions = {
        dataResidency: Math.min(
            dimensionScores.dataResidency.reduce((sum, val) => sum + val, 0) / Math.max(dimensionScores.dataResidency.length, 1) || 0,
            5
        ),
        compliance: Math.min(
            dimensionScores.compliance.reduce((sum, val) => sum + val, 0) / Math.max(dimensionScores.compliance.length, 1) || 0,
            5
        ),
        control: Math.min(
            dimensionScores.control.reduce((sum, val) => sum + val, 0) / Math.max(dimensionScores.control.length, 1) || 0,
            5
        ),
        independence: Math.min(
            dimensionScores.independence.reduce((sum, val) => sum + val, 0) / Math.max(dimensionScores.independence.length, 1) || 0,
            5
        ),
        transparency: Math.min(
            dimensionScores.transparency.reduce((sum, val) => sum + val, 0) / Math.max(dimensionScores.transparency.length, 1) || 0,
            5
        ),
    };

    const total = Object.values(dimensions).reduce((sum, val) => sum + val, 0);
    const maxScore = 25; // 5 dimensions × 5 points each

    let level: SovereigntyScore['level'];
    let recommendation: string;

    if (total >= 20) {
        level = 'high';
        recommendation = 'Your organization has high sovereignty requirements. STACKIT is the ideal choice for you.';
    } else if (total >= 15) {
        level = 'moderate';
        recommendation = 'Your organization has moderate sovereignty needs. STACKIT is highly recommended.';
    } else if (total >= 10) {
        level = 'some';
        recommendation = 'Your organization has some sovereignty considerations. STACKIT is worth exploring.';
    } else {
        level = 'flexible';
        recommendation = 'Your organization has flexible requirements. Compare all options to find the best fit.';
    }

    return {
        total,
        maxScore,
        dimensions,
        level,
        recommendation,
    };
};
