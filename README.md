const legacyButtons = document.querySelectorAll('.legacy-btn');
const legacySelection = document.getElementById('legacySelection');
const workflowList = document.getElementById('workflowList');
const agentInput = document.getElementById('agentInput');
const runAgentBtn = document.getElementById('runAgentBtn');
const sampleButtons = document.querySelectorAll('.sample-btn');
const resultBox = document.getElementById('resultBox');

const workflowSteps = [
  {
    title: '目標を整理',
    detail: '要件とゴールを明確にする',
    status: 'complete'
  },
  {
    title: '必要な情報を収集',
    detail: '顧客背景と競合情報を確認',
    status: 'active'
  },
  {
    title: '提案の構成を生成',
    detail: '3つの重要ポイントを骨子化',
    status: 'pending'
  },
  {
    title: '最終確認と出力',
    detail: '提案書のドラフトを完成',
    status: 'pending'
  }
];

function setLegacySelection(label) {
  legacyButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.label === label);
  });
  legacySelection.textContent = label;
}

function renderWorkflow(statuses) {
  workflowList.innerHTML = statuses
    .map((step) => `
      <div class="workflow-item ${step.status}">
        <span class="workflow-dot"></span>
        <div class="workflow-copy">
          <span class="workflow-title">${step.title}</span>
          <span class="workflow-meta">${step.detail}</span>
        </div>
      </div>
    `)
    .join('');
}

function simulateAgentGoal(rawGoal) {
  const goal = rawGoal.trim() || '営業提案書を作って。競合比較と投資対効果の見積もりを入れて、重要なポイントは3つにまとめて。';

  renderWorkflow([
    { title: '目標を整理', detail: 'ユーザーの意図を理解', status: 'complete' },
    { title: '必要な情報を収集', detail: '顧客背景と市場状況を確認', status: 'complete' },
    { title: '提案の構成を生成', detail: '3つの軸で価値を整理', status: 'active' },
    { title: '最終確認と出力', detail: '提案文を完成させる', status: 'pending' }
  ]);

  const resultContent = `
    <p class="result-header">提案書ドラフト</p>
    <h3>${goal.slice(0, 36)}${goal.length > 36 ? '...' : ''}</h3>
    <p>
      1. 現状の課題: 導入の意思決定を後押しする裏付けが弱く、比較材料が不足している<br />
      2. 競合比較: 価格、導入期間、ROI、運用負荷の4軸で差別化を整理<br />
      3. 提案: 最小導入から段階的に展開し、短期間で投資回収を見込む構成にまとめる
    </p>
  `;

  resultBox.innerHTML = resultContent;

  setTimeout(() => {
    renderWorkflow([
      { title: '目標を整理', detail: 'ユーザーの意図を理解', status: 'complete' },
      { title: '必要な情報を収集', detail: '顧客背景と市場状況を確認', status: 'complete' },
      { title: '提案の構成を生成', detail: '3つの軸で価値を整理', status: 'complete' },
      { title: '最終確認と出力', detail: '提案文を完成させる', status: 'active' }
    ]);
  }, 600);

  setTimeout(() => {
    resultBox.innerHTML = `
      <p class="result-header">提案書ドラフト</p>
      <h3>競合比較と導入効果を踏まえた提案を作成しました</h3>
      <p>
        顧客の現状課題を整理し、価格・導入期間・運用負荷の比較から、本提案の価値を明確にしました。<br />
        さらに、投資対効果の見積もりを含め、短期間での導入ハードルを下げる設計にしています。<br />
        重要なポイントは、競争優位、ROIの説明、導入の簡便さの3点です。
      </p>
    `;

    renderWorkflow([
      { title: '目標を整理', detail: 'ユーザーの意図を理解', status: 'complete' },
      { title: '必要な情報を収集', detail: '顧客背景と市場状況を確認', status: 'complete' },
      { title: '提案の構成を生成', detail: '3つの軸で価値を整理', status: 'complete' },
      { title: '最終確認と出力', detail: '提案文を完成させる', status: 'complete' }
    ]);
  }, 1200);
}

legacyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setLegacySelection(button.dataset.label);
  });
});

sampleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    agentInput.value = button.textContent.trim();
    simulateAgentGoal(agentInput.value);
  });
});

runAgentBtn.addEventListener('click', () => {
  simulateAgentGoal(agentInput.value);
});

setLegacySelection('新規作成');
renderWorkflow(workflowSteps);
resultBox.innerHTML = `
  <p class="result-header">提案書ドラフト</p>
  <h3>AIエージェントが目的達成に向けて作業を進めています</h3>
  <p>
    1. 顧客の背景と課題を整理<br />
    2. 競合比較で差別化ポイントを明確化<br />
    3. 投資対効果と導入ロードマップを提示
  </p>
`;
