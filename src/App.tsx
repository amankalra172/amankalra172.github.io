import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { PRICING_MODELS, NOTEBOOK_PRICING, WORKFLOW_PRICING, DREMIO_PRICING } from './data/pricing';
import type { Provider, PricingModel } from './data/pricing';
import { ThemeToggle } from './components/ThemeToggle';
import { CalculatorPage } from './pages/CalculatorPage';
import { ConfigPage } from './pages/ConfigPage';
import { WorkflowsPage } from './pages/WorkflowsPage';
import { NotebooksPage } from './pages/NotebooksPage';
import { DremioPage } from './pages/DremioPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { SovereigntyAssessmentPage } from './pages/SovereigntyAssessmentPage';
import { AssessmentResultsPage } from './pages/AssessmentResultsPage';
import { Footer } from './components/Footer';

function AppContent() {
  const [pricingModels, setPricingModels] = useState(PRICING_MODELS);
  const [selectedCompetitor, setSelectedCompetitor] = useState<Provider>(() => {
    const saved = localStorage.getItem('selectedCompetitor');
    return (saved as Provider) || 'GCP';
  });

  // Load pricing from localStorage or use defaults
  const [notebookPricing, setNotebookPricing] = useState(() => {
    const saved = localStorage.getItem('notebookPricing');
    return saved ? JSON.parse(saved) : NOTEBOOK_PRICING;
  });

  const [workflowPricing, setWorkflowPricing] = useState(() => {
    const saved = localStorage.getItem('workflowPricing');
    return saved ? JSON.parse(saved) : WORKFLOW_PRICING;
  });

  const [dremioPricing, setDremioPricing] = useState(() => {
    const saved = localStorage.getItem('dremioPricing');
    return saved ? JSON.parse(saved) : DREMIO_PRICING;
  });

  // Update pricing handlers with localStorage persistence
  const handleUpdateNotebookPricing = (newPricing: typeof notebookPricing) => {
    setNotebookPricing(newPricing);
    localStorage.setItem('notebookPricing', JSON.stringify(newPricing));
  };

  const handleUpdateWorkflowPricing = (newPricing: typeof workflowPricing) => {
    setWorkflowPricing(newPricing);
    localStorage.setItem('workflowPricing', JSON.stringify(newPricing));
  };

  const handleUpdateDremioPricing = (newPricing: typeof dremioPricing) => {
    setDremioPricing(newPricing);
    localStorage.setItem('dremioPricing', JSON.stringify(newPricing));
  };

  const handleUpdatePricing = (newModels: PricingModel[]) => {
    setPricingModels(newModels);
    localStorage.setItem('pricingModels', JSON.stringify(newModels));
  };

  const handleResetDefaults = () => {
    // Reset TCO pricing
    setPricingModels(PRICING_MODELS);
    localStorage.removeItem('pricingModels');

    // Reset Notebooks pricing
    setNotebookPricing(NOTEBOOK_PRICING);
    localStorage.removeItem('notebookPricing');

    // Reset Workflows pricing
    setWorkflowPricing(WORKFLOW_PRICING);
    localStorage.removeItem('workflowPricing');

    // Reset Dremio pricing
    setDremioPricing(DREMIO_PRICING);
    localStorage.removeItem('dremioPricing');

    alert('All pricing reset to defaults!');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-stackit-primary border-b border-gray-200 dark:border-stackit-600 sticky top-0 z-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="h-8 w-auto">
              {/* Light Mode Logo (Navy Blue) - Shown when NOT dark */}
              <img
                src={`${import.meta.env.BASE_URL}logos/stackit-logo-light.png`}
                alt="STACKIT Logo"
                className="h-full w-auto object-contain block dark:hidden"
              />
              {/* Dark Mode Logo (White) - Shown when dark */}
              <img
                src={`${import.meta.env.BASE_URL}logos/stackit-logo-dark.png`}
                alt="STACKIT Logo"
                className="h-full w-auto object-contain hidden dark:block"
              />
            </Link>
            <Link to="/" className="text-xl font-bold text-stackit-primary dark:text-white ml-2 hover:opacity-80 transition-opacity">
              Cloud TCO Calculator
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </header >

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<CalculatorPage selectedCompetitor={selectedCompetitor} onCompetitorChange={setSelectedCompetitor} />} />
          <Route path="/workflows" element={<WorkflowsPage selectedCompetitor={selectedCompetitor} pricing={workflowPricing} />} />
          <Route path="/notebooks" element={<NotebooksPage selectedCompetitor={selectedCompetitor} pricing={notebookPricing} />} />
          <Route path="/dremio" element={<DremioPage selectedCompetitor={selectedCompetitor} pricing={dremioPricing} />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/assessment" element={<Navigate to="/sovereignty-assessment" replace />} />
          <Route path="/sovereignty-assessment" element={<SovereigntyAssessmentPage />} />
          <Route path="/assessment-results" element={<AssessmentResultsPage />} />
          <Route
            path="/config"
            element={
              <ConfigPage
                pricingModels={pricingModels}
                notebookPricing={notebookPricing}
                workflowPricing={workflowPricing}
                dremioPricing={dremioPricing}
                onUpdatePricing={handleUpdatePricing}
                onUpdateNotebookPricing={handleUpdateNotebookPricing}
                onUpdateWorkflowPricing={handleUpdateWorkflowPricing}
                onUpdateDremioPricing={handleUpdateDremioPricing}
                onResetDefaults={handleResetDefaults}
              />
            }
          />
        </Routes>
      </main>

      <Footer />
    </div >
  );
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <AppContent />
    </Router>
  );
}

export default App;
