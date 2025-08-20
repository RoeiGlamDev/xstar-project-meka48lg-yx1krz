import { useEffect, useState } from 'react';

// Utility function to format currency
export const formatCurrency = (amount: number): string => {
    return `$${amount.toFixed(2)}`; // Format to two decimal places
};

// Custom hook to manage local storage state
export const useLocalStorage = (key: string, initialValue: any) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === 'undefined') return initialValue; // Check for SSR
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue; // Parse stored value
        } catch (error) {
            console.error(error);
            return initialValue; // Return initial value on error
        }
    });

    const setValue = (value: any) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value; // Handle function updates
            setStoredValue(valueToStore);
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore)); // Store in local storage
            }
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue]; // Return stored value and setter
};

// Function to debounce input changes
export const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout; // Timeout ID for debounce
    return (...args: any) => {
        clearTimeout(timeoutId); // Clear previous timeout
        timeoutId = setTimeout(() => {
            func(...args); // Call the function after delay
        }, delay);
    };
};

// Function to generate a random unique ID
export const generateUniqueId = (): string => {
    return 'id-' + Math.random().toString(36).substr(2, 9); // Generate unique ID
};

export default {
    formatCurrency,
    useLocalStorage,
    debounce,
    generateUniqueId,
};