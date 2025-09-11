import React, { useState, useEffect } from 'react';
import { FaCode, FaGitAlt, FaCalendarAlt } from 'react-icons/fa';

// Importar dados de versão diretamente (fallback para desenvolvimento)
let versionData = null;
try {
  versionData = require('../version.json');
} catch (error) {
  // Se não conseguir importar, versionData será null
}

export default function VersionComponent() {
  const [versionInfo, setVersionInfo] = useState({
    version: '1.0.0',
    commitCount: 1,
    buildDate: new Date().toISOString(),
    buildNumber: 1
  });

  useEffect(() => {
    // Tenta carregar informações da versão do arquivo version.json
    const loadVersionInfo = async () => {
      try {
        // Primeiro tenta carregar do public (produção)
        const response = await fetch('/version.json');
        if (response.ok) {
          const data = await response.json();
          setVersionInfo(data);
          return;
        }
      } catch (error) {
        console.log('Tentando carregar version.json do public...');
      }

      // Se não conseguir carregar via fetch, usa dados importados (desenvolvimento)
      if (versionData) {
        setVersionInfo(versionData);
        return;
      }

      // Se não conseguir carregar de nenhum lugar, usa informações padrão
      console.log('Arquivo version.json não encontrado, usando versão padrão');
      setVersionInfo({
        version: '1.0.0',
        commitCount: 1,
        buildDate: new Date().toISOString(),
        buildNumber: 1
      });
    };

    loadVersionInfo();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  return (
    <div className="version-info">
      <div className="version-item">
        <FaCode className="version-icon" />
        <span className="version-label">Versão:</span>
        <span className="version-value">v{versionInfo.version}</span>
      </div>
      
      <div className="version-item">
        <FaGitAlt className="version-icon" />
        <span className="version-label">Build:</span>
        <span className="version-value">#{versionInfo.buildNumber}</span>
      </div>
      
      <div className="version-item">
        <FaCalendarAlt className="version-icon" />
        <span className="version-label">Data:</span>
        <span className="version-value">{formatDate(versionInfo.buildDate)}</span>
      </div>
    </div>
  );
}
