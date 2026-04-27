import { useState, Fragment } from 'react';
import './Transparencia.css';

const dashboardDataModel = {
  summary: {
    projectName: 'Transparência Agrícola - Programa de Safra 2024',
    period: 'Jan 2024 - Dez 2024',
    planned: 520000,
    executed: 387500,
    status: 'Em execução',
    statusLabel: 'Operacional',
    statusColor: 'green',
  },
  protocols: [
    {
      id: 'PROT-2024-001',
      date: '2024-01-18',
      category: 'Infraestrutura',
      value: 140000,
      approvedBy: 'Diretoria Técnica',
      note: 'Aprovação de aquisição de bomba de irrigação e tubulação reforçada.',
      linkedExpenses: ['EXP-001', 'EXP-002'],
    },
    {
      id: 'PROT-2024-002',
      date: '2024-02-09',
      category: 'Saúde do Solo',
      value: 78000,
      approvedBy: 'Comitê de Sustentabilidade',
      note: 'Aplicação de adubo orgânico e análise de textura do solo.',
      linkedExpenses: ['EXP-005'],
    },
    {
      id: 'PROT-2024-003',
      date: '2024-03-22',
      category: 'Mão de Obra',
      value: 102500,
      approvedBy: 'Conselho Administrativo',
      note: 'Liberação para contratação de equipe técnica de campo.',
      linkedExpenses: ['EXP-003', 'EXP-004'],
    },
  ],
  expenses: [
    {
      id: 'EXP-001',
      title: 'Bomba de Irrigação',
      amount: 90000,
      protocolId: 'PROT-2024-001',
    },
    {
      id: 'EXP-002',
      title: 'Rede de Tubulação',
      amount: 50000,
      protocolId: 'PROT-2024-001',
    },
    {
      id: 'EXP-003',
      title: 'Equipe de Campo',
      amount: 62500,
      protocolId: 'PROT-2024-003',
    },
    {
      id: 'EXP-004',
      title: 'Veículos Leves',
      amount: 40000,
      protocolId: 'PROT-2024-003',
    },
    {
      id: 'EXP-005',
      title: 'Adubação Orgânica',
      amount: 78000,
      protocolId: 'PROT-2024-002',
    },
  ],
  exceptions: [
    {
      id: 'EXC-001',
      date: '2024-03-30',
      type: 'Quebra de safra',
      value: 22000,
      reason: 'Redução de 18% na produtividade devido à seca prolongada.',
      action: 'Readequação imediata do planejamento de irrigação.',
    },
    {
      id: 'EXC-002',
      date: '2024-04-12',
      type: 'Emergência técnica',
      value: 14500,
      reason: 'Substituição urgente de bomba danificada em operação.',
      action: 'Liberação de aditivo em protocolo emergencial.',
    },
  ],
};

function formatCurrency(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
  });
}

export default function Transparencia() {
  const [expandedProtocol, setExpandedProtocol] = useState(null);

  const executionRate = Math.min(
    100,
    Math.round((dashboardDataModel.summary.executed / dashboardDataModel.summary.planned) * 100)
  );

  const toggleProtocol = (protocolId) => {
    setExpandedProtocol((current) => (current === protocolId ? null : protocolId));
  };

  return (
    <section className="compact-transparency">
      <header className="compact-header">
        <div>
          <h1>Dashboard de Transparência Agrícola</h1>
          <p>Visão rápida de execução, protocolos e alertas de desvio.</p>
        </div>
        <span className="compact-badge">Atualizado 2024</span>
      </header>

      <div className="compact-grid">
        <article className="compact-card summary-card">
          <div className="card-title">
            <span>Resumo de Execução</span>
            <strong>{dashboardDataModel.summary.statusLabel}</strong>
          </div>
          <div className="summary-values">
            <div>
              <small>Orçado</small>
              <strong>{formatCurrency(dashboardDataModel.summary.planned)}</strong>
            </div>
            <div>
              <small>Realizado</small>
              <strong>{formatCurrency(dashboardDataModel.summary.executed)}</strong>
            </div>
            <div>
              <small>Projeto</small>
              <strong>{dashboardDataModel.summary.status}</strong>
            </div>
          </div>
          <div className="progress-block">
            <div className="progress-label">
              <span>Execução total</span>
              <strong>{executionRate}%</strong>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${executionRate}%` }} />
            </div>
          </div>
        </article>

        <article className="compact-card protocols-card">
          <div className="card-title">
            <span>Tabela de Protocolos</span>
            <small>Toque em uma linha para ver detalhes</small>
          </div>
          <div className="table-scroll">
            <table className="protocol-table">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>ID do Protocolo</th>
                  <th>Categoria</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {dashboardDataModel.protocols.map((protocol) => (
                  <Fragment key={protocol.id}>
                    <tr
                      className="protocol-row"
                      onClick={() => toggleProtocol(protocol.id)}
                    >
                      <td>{new Date(protocol.date).toLocaleDateString('pt-BR')}</td>
                      <td>{protocol.id}</td>
                      <td>{protocol.category}</td>
                      <td>{formatCurrency(protocol.value)}</td>
                    </tr>
                    {expandedProtocol === protocol.id && (
                      <tr className="protocol-detail-row">
                        <td colSpan="4">
                          <div className="protocol-detail">
                            <div>
                              <strong>Aprovado por:</strong> {protocol.approvedBy}
                            </div>
                            <div>
                              <strong>Nota:</strong> {protocol.note}
                            </div>
                            <div>
                              <strong>Gastos vinculados:</strong>
                              <ul>
                                {dashboardDataModel.expenses
                                  .filter((expense) => expense.protocolId === protocol.id)
                                  .map((expense) => (
                                    <li key={expense.id}>
                                      {expense.id} — {expense.title} ({formatCurrency(expense.amount)})
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <aside className="compact-card exceptions-card">
          <div className="card-title">
            <span>Alertas de Desvio</span>
            <strong>{dashboardDataModel.exceptions.length} itens</strong>
          </div>
          <div className="exceptions-list">
            {dashboardDataModel.exceptions.map((item) => (
              <div key={item.id} className="exception-item">
                <div className="exception-header">
                  <span>{item.type}</span>
                  <strong>{formatCurrency(item.value)}</strong>
                </div>
                <p>{item.reason}</p>
                <small>{item.action}</small>
                <div className="exception-meta">
                  <span>{new Date(item.date).toLocaleDateString('pt-BR')}</span>
                  <span>{item.id}</span>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
