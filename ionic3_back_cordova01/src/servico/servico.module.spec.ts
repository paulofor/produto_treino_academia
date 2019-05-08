
import { ServicoModule } from './servico.module';

describe('ServicoModule', () => {
  let servicoModule: ServicoModule;

  beforeEach(() => {
    servicoModule = new ServicoModule();
  });

  it('should create an instance', () => {
    expect(servicoModule).toBeTruthy();
  });
});

