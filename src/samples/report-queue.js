const reportQueue = {
    id: 'report-queue',
    title: 'Otimização de Relatórios — Fila BullMQ',
    language: 'TypeScript',
    summary: 'Producer/consumer com BullMQ para gerar relatórios pesados de forma assíncrona, reduzindo tempo de resposta da API.',
    files: [
        {
            name: 'report-queue.service.ts',
            language: 'typescript',
            code: `@Injectable()
export class ReportQueueService {
  private queue = new Queue('reports', { connection: { host: 'redis', port: 6379 } });

  async enqueueReport(dto: CreateReportDto) {
    return this.queue.add('generate', dto, {
      attempts: 3,
      backoff: { type: 'exponential', delay: 5000 },
    });
  }
}

@Processor('reports')
export class ReportProcessor extends WorkerHost {
  async process(job: Job<CreateReportDto>) {
    const data = await this.reportRepo.aggregate(job.data.filters);
    const pdf = await this.pdfService.render('monthly-report', data);
    await this.storage.upload(\`reports/\${job.id}.pdf\`, pdf);
    return { url: \`/reports/\${job.id}.pdf\` };
  }
}`
        }
    ]
};

export default reportQueue;
