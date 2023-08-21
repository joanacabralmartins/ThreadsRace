const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

function buscarNumero(numero) {
  const iteracoes = 100000000;
  for (let i = 0; i < iteracoes; i++) {
    if (i === numero) {
      return i;
    }
  }
  return null;
}

if (isMainThread) {
  const numThreads = 4;
  const numero = 12345678; // numero que as threads vão buscar
  const threads = [];

  for (let i = 0; i < numThreads; i++) {
    const worker = new Worker(__filename, {
      workerData: { threadId: i },
    });

    threads.push(worker);
  }
} else { //WORKER
  const { threadId } = workerData;

  const result = buscarNumero(threadId);

  // envia o resultado de volta para a thread principal
  parentPort.postMessage(result);

  process.exit();
}
