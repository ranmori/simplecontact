import React, { useState } from "react";
import SubscriptionConfirmation from './SubscriptionConfirmation';
import NewsletterForm from './NewsletterForm';

function App() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleFormSubmit = () => {
    setShowConfirmation(true); // Show confirmation message after form submission
  };

  const handleDismissConfirmation = () => {
    setShowConfirmation(false); // Hide confirmation message
  };

  return (
    <div>
      {!showConfirmation && (
        <NewsletterForm onSubmit={handleFormSubmit} />
      )}

      {showConfirmation && (
        <SubscriptionConfirmation onDismiss={handleDismissConfirmation} />
      )}
    </div>
  );
}

export default App;
