import { Fragment } from 'react';

/**
 * Renderiza texto com destaques a partir de um array:
 *   'texto' | { b: 'negrito' } | { em: 'destaque em serifa' }
 * Mantém o conteúdo traduzível sem JSX dentro dos dicionários.
 */
export default function Rich({ parts }) {
  if (typeof parts === 'string') return parts;

  return parts.map((part, i) => {
    if (typeof part === 'string') return <Fragment key={i}>{part}</Fragment>;
    if (part.b) return <b key={i}>{part.b}</b>;
    if (part.em) return <em key={i} className="serif">{part.em}</em>;
    return null;
  });
}
