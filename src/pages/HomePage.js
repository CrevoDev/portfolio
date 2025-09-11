import React from 'react';
import SectionListComponent from '../components/SectionListComponent';
import PageLayout from '../layouts/PageLayout';
import { useSections } from '../hooks/useSections';

/**
 * Página inicial do portfólio
 * Segue o princípio Single Responsibility Principle (SRP)
 * Responsável apenas pela exibição da página inicial
 */
const HomePage = () => {
  const { sections } = useSections();

  return (
    <PageLayout>
      <SectionListComponent sections={sections} />
    </PageLayout>
  );
};

export default HomePage;
