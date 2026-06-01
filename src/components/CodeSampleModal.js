import React, { useCallback, useEffect, useState } from 'react';
import { FaTimes, FaCopy, FaCheck } from 'react-icons/fa';

export default function CodeSampleModal({ sample, onClose }) {
    const [activeFileIndex, setActiveFileIndex] = useState(0);
    const [copied, setCopied] = useState(false);

    const handleClose = useCallback(() => {
        onClose();
    }, [onClose]);

    useEffect(() => {
        if (!sample) return undefined;

        setActiveFileIndex(0);
        setCopied(false);

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [sample, handleClose]);

    if (!sample) return null;

    const activeFile = sample.files[activeFileIndex];

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(activeFile.code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            setCopied(false);
        }
    };

    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            handleClose();
        }
    };

    return (
        <div
            className="code-sample-overlay"
            onClick={handleBackdropClick}
            role="presentation"
        >
            <div
                className="code-sample-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="code-sample-title"
            >
                <div className="code-sample-header">
                    <div>
                        <h3 id="code-sample-title">{sample.title}</h3>
                        <p className="code-sample-summary">{sample.summary}</p>
                    </div>
                    <button
                        type="button"
                        className="code-sample-close"
                        onClick={handleClose}
                        aria-label="Fechar amostra de código"
                    >
                        <FaTimes />
                    </button>
                </div>

                {sample.files.length > 1 && (
                    <div className="code-sample-tabs" role="tablist">
                        {sample.files.map((file, index) => (
                            <button
                                key={file.name}
                                type="button"
                                role="tab"
                                aria-selected={activeFileIndex === index}
                                className={`code-sample-tab ${activeFileIndex === index ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveFileIndex(index);
                                    setCopied(false);
                                }}
                            >
                                {file.name}
                            </button>
                        ))}
                    </div>
                )}

                <div className="code-sample-body">
                    <div className="code-sample-toolbar">
                        <span className="code-sample-filename">{activeFile.name}</span>
                        <button
                            type="button"
                            className="code-sample-copy"
                            onClick={handleCopy}
                        >
                            {copied ? <FaCheck /> : <FaCopy />}
                            {copied ? 'Copiado!' : 'Copiar'}
                        </button>
                    </div>
                    <pre className="code-sample-pre">
                        <code className={`language-${activeFile.language}`}>
                            {activeFile.code}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    );
}
