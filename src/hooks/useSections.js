import { useState, useEffect } from 'react';
import SectionService from '../services/SectionService';

/**
 * Hook customizado para gerenciar as seções do portfólio
 * Segue o princípio Single Responsibility Principle (SRP)
 */
export const useSections = () => {
  const [sections, setSections] = useState([]);
  const [sectionsHeader, setSectionsHeader] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const sectionService = new SectionService();
      const sectionsData = sectionService.getSections();
      const headerData = sectionService.getSectionsHeader();
      
      setSections(sectionsData);
      setSectionsHeader(headerData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

  return {
    sections,
    sectionsHeader,
    loading,
    error
  };
};
