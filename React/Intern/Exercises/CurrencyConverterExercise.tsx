import React, { useState, useEffect } from 'react';

/**
 * Exercise: Currency Converter
 * 
 * Task: Create a simple currency conversion application
 * 
 * Requirements:
 * 1. Fetch current exchange rates from a free API
 *    - Use exchangerate-api.com or similar free service
 *    - Support conversion between major currencies
 * 
 * 2. Create conversion interface with:
 *    - Input for amount
 *    - Dropdown for source currency
 *    - Dropdown for target currency
 * 
 * 3. Implement conversion logic:
 *    - Calculate converted amount
 *    - Display conversion result
 *    - Handle potential errors
 * 
 * Hints:
 * - Use useState for managing form state
 * - Use useEffect for fetching exchange rates
 * - Create interfaces for exchange rate data
 * - Handle loading and error states
 */

interface ExchangeRates {
  [key: string]: number;
}

function CurrencyConverterExercise() {
  // TODO: Create state for:
  // - Amount to convert
  // - Source currency
  // - Target currency
  // - Exchange rates
  // - Converted amount
  // - Loading state
  // - Error state

  // TODO: Implement function to fetch exchange rates

  // TODO: Implement conversion calculation function

  // TODO: Implement currency selection handlers

  // TODO: Use useEffect to fetch rates on component mount

  return (
    <div>
      {/* TODO: Create input for amount */}
      {/* TODO: Create currency selection dropdowns */}
      {/* TODO: Display conversion result */}
      {/* TODO: Handle loading and error states */}
    </div>
  );
}

export default CurrencyConverterExercise; 