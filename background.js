const WORKFLOW = [
  { id: 'attendance', path: 'diem-danh', name: 'Điểm danh' },
  { id: 'sacrifice', path: 'danh-sach-thanh-vien-tong-mon', name: 'Tế lễ' },
  { id: 'guildQuiz', path: 'van-dap-tong-mon', name: 'Vấn đáp' },
  { id: 'welfare', path: 'phuc-loi-duong', name: 'Phúc lợi' },
  { id: 'secretRealm', path: 'bi-canh', name: 'Bí cảnh' }
];

let currentStep = 0;
let runtimeDomain = null;
let isRunning = false;

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log('Background received:', msg);

  if (msg.type === 'WORKFLOW_START') {
    runtimeDomain = msg.domain;
    currentStep = 0;
    isRunning = true;
    runNextStep();
    sendResponse({ ok: true });
    return true;
  }

  if (msg.type === 'WORKFLOW_STOP') {
    isRunning = false;
    runtimeDomain = null;
    currentStep = 0;
    sendResponse({ ok: true });
    return true;
  }

  if (msg.type === 'WORKFLOW_STEP_DONE' && sender.tab) {
    console.log('Step done:', WORKFLOW[currentStep - 1]);
    chrome.tabs.remove(sender.tab.id);

    setTimeout(() => {
      runNextStep();
    }, 1000); // Delay 1s giữa các bước
  }

  return true;
});

function runNextStep() {
  if (!isRunning || !runtimeDomain || currentStep >= WORKFLOW.length) {
    chrome.runtime.sendMessage({
      type: 'WORKFLOW_FINISHED',
      totalSteps: WORKFLOW.length
    });
    isRunning = false;
    return;
  }

  const step = WORKFLOW[currentStep];
  currentStep++;

  chrome.runtime.sendMessage({
    type: 'WORKFLOW_PROGRESS',
    step: step.id,
    stepName: step.name,
    current: currentStep,
    total: WORKFLOW.length
  });

  chrome.tabs.create({
    url: `${runtimeDomain}${step.path}`,
    active: false
  }, (tab) => {
    console.log('Created tab:', tab.id, step.path);
  });
}