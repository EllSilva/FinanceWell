import get_template from "../../components/get_template.js";

export default {
  data: function () {
    return {
            pesquisa: '',
                categoriaSelecionada: 'todos',
                instanciaModal: null, 
                categorias: [
                    { id: 'todos', nome: 'Todos os Serviços' },
                    { id: 'cont', nome: 'Contabilidade & Auditoria' },
                    { id: 'gestao', nome: 'Gestão & Estratégia' },
                    { id: 'legal', nome: 'Legal & RH' },
                    { id: 'mkt', nome: 'Mercado & Expansão' }
                ],
                formAgendamento: {
                    categoria: '',
                    servicoNome: '',
                    clienteNome: '',
                    clienteEmail: '',
                    dataPreferencia: ''
                },
                servicos: [
                    { id: 1, cat: 'gestao', nome: "Consultoria Empresarial", icone: "bi-briefcase-fill", corTexto: "text-primary", imgId: "1454157471167-7f415f903966", 
                      descricao: "Análise diagnóstica e reestruturação de processos internos para maximizar a rentabilidade e eficiência operacional." },
                    { id: 2, cat: 'cont', nome: "Contabilidade Geral", icone: "bi-calculator-fill", corTexto: "text-indigo", imgId: "1554224155-8d04cb21cd6c", 
                      descricao: "Classificação, registo e execução das obrigações contabilísticas diárias da sua empresa segundo as normas em vigor." },
                    { id: 3, cat: 'cont', nome: "Contabilidade Analítica", icone: "bi-pie-chart-fill", corTexto: "text-indigo", imgId: "1460925895917-afdab827c52f", 
                      descricao: "Apuramento detalhado de custos por produto, setor ou departamento, auxiliando na fixação estratégica de preços." },
                    { id: 4, cat: 'cont', nome: "Contabilidade Pública", icone: "bi-bank2", corTexto: "text-indigo", imgId: "1526304640581-d334cdbbf45e", 
                      descricao: "Gestão financeira especializada para órgãos estatais, autarquias e instituições do setor público administrativo." },
                    { id: 5, cat: 'cont', nome: "Fecho de Conta", icone: "bi-journal-check", corTexto: "text-success", imgId: "1543286386-7a393a1f81a1", 
                      descricao: "Apuração final do exercício anual com elaboração do Balanço, Demonstração de Resultados e Relatório de Contas." },
                    { id: 6, cat: 'legal', nome: "Processamento Salarial", icone: "bi-wallet2", corTexto: "text-danger", imgId: "1579621970563-ebec7560ff3e", 
                      descricao: "Emissão automatizada de recibos de vencimento, guias da Segurança Social e gestão integral de folhas de pagamento." },
                    { id: 7, cat: 'legal', nome: "Fiscalidade", icone: "bi-percent", corTexto: "text-warning", imgId: "1586319830536-1e43697669d5", 
                      descricao: "Apuramento rigoroso e entrega declarativa de impostos obrigatórios (IVA, IRC, IRS) mitigando riscos de coimas." },
                    { id: 8, cat: 'legal', nome: "Planeamento Fiscal", icone: "bi-shield-shaded", corTexto: "text-warning", imgId: "1450133064473-71024230f91b", 
                      descricao: "Estudo lícito e antecipado da estrutura corporativa para reduzir a carga tributária aproveitando benefícios fiscais." },
                    { id: 9, cat: 'mkt', nome: "Marketing e Publicidade", icone: "bi-megaphone-fill", corTexto: "text-info", imgId: "1460925895917-afdab827c52f", 
                      descricao: "Criação de campanhas de posicionamento de marca e captação de clientes nos canais digitais e tradicionais." },
                    { id: 10, cat: 'legal', nome: "Recursos Humanos", icone: "bi-people-fill", corTexto: "text-danger", imgId: "1600880292203-757bb62b4baf", 
                      descricao: "Gestão estratégica de talento, englobando admissão, avaliação de desempenho e mediação de contratos de trabalho." },
                    { id: 11, cat: 'gestao', nome: "Organização Administrativa", icone: "bi-layers-half", corTexto: "text-primary", imgId: "1497366216548-37526070297c", 
                      descricao: "Implementação de metodologias para triagem documental, arquivo digital e fluxos organizacionais eficientes." },
                    { id: 12, cat: 'cont', nome: "Auditoria Financeira", icone: "bi-clipboard-check-fill", corTexto: "text-indigo", imgId: "1590283603385-17ffb3a7f29f", 
                      descricao: "Exame pericial independente aos seus registos contabilísticos para certificar a total transparência dos seus relatórios." },
                    { id: 13, cat: 'cont', nome: "Orçamentos", icone: "bi-graph-down", corTexto: "text-indigo", imgId: "1559526324-4b87b5e36e44", 
                      descricao: "Previsão meticulosa de receitas e despesas futuras para blindar o fluxo de caixa contra flutuações de mercado." },
                    { id: 14, cat: 'gestao', nome: "Consultoria e Auditoria de obras", icone: "bi-building-fill", corTexto: "text-primary", imgId: "1541888946425-d81bb19240f5", 
                      descricao: "Fiscalização financeira, controlo de custos de materiais e prazos de execução em projetos de engenharia e construção." },
                    { id: 15, cat: 'gestao', nome: "Gestão de Empresas", icone: "bi-sliders", corTexto: "text-primary", imgId: "1522202176-9f61e30d52f4", 
                      descricao: "Apoio executivo na tomada de decisões com monitorização contínua de indicadores-chave de desempenho (KPIs)." },
                    { id: 16, cat: 'mkt', nome: "Estudo de Viabilidade Económica", icone: "bi-briefcase", corTexto: "text-info", imgId: "1551836022-d5d88e9218df", 
                      descricao: "Análise quantitativa profunda para comprovar se um novo investimento ou projeto gerará lucros sustentáveis." },
                    { id: 17, cat: 'mkt', nome: "Plano de Negócio", icone: "bi-lightbulb-fill", corTexto: "text-info", imgId: "1507537297725-24a1c029d3ca", 
                      descricao: "Desenho do roteiro estratégico e financeiro completo essencial para captar investidores ou financiamento bancário." },
                    { id: 18, cat: 'mkt', nome: "Estudo de Mercado", icone: "bi-globe2", corTexto: "text-info", imgId: "1531538601178-e1a1a564e88c", 
                      descricao: "Mapeamento minucioso da concorrência, do comportamento do consumidor e identificação de nichos de alta procura." },
                    { id: 19, cat: 'cont', nome: "Plano Financeiro", icone: "bi-cash-stack", corTexto: "text-indigo", imgId: "1565514020-1121162295a3", 
                      descricao: "Modelagem de necessidades de capital e planeamento de investimentos estruturais de médio e longo prazo." },
                    { id: 20, cat: 'gestao', nome: "Plano Estratégico", icone: "bi-compass-fill", corTexto: "text-primary", imgId: "1486406146926-c627a92ad1ab", 
                      descricao: "Definição de metas plurianuais, visão de posicionamento de mercado e planos de ação para a sua liderança corporativa." },
                    { id: 21, cat: 'legal', nome: "Treinamento de Equipe de Trabalho", icone: "bi-mortarboard-fill", corTexto: "text-danger", imgId: "1515187029135-18ee286d815b", 
                      descricao: "Capacitação técnica in-company focada em aumentar a produtividade e a adaptação a novos softwares e regras." },
                    { id: 22, cat: 'legal', nome: "Assessoria Jurídica", icone: "bi-file-earmark-medical-fill", corTexto: "text-warning", imgId: "1589829545856-d10d557cf95f", 
                      descricao: "Suporte consultivo em direito empresarial, análise técnica de contratos e prevenção de litígios judiciais." },
                    { id: 23, cat: 'gestao', nome: "Despachante", icone: "bi-send-fill", corTexto: "text-primary", imgId: "1578575437159-5f802f6be135", 
                      descricao: "Intermediação ágil em alfândegas, portos e ministérios para desalfandegamento e licenciamento de mercadorias." },
                    { id: 24, cat: 'cont', nome: "Assessoria Financeira", icone: "bi-safe2-fill", corTexto: "text-indigo", imgId: "1567427018-140b7a63a269", 
                      descricao: "Consultoria dedicada à renegociação de dívidas, otimização de tesouraria e escolha de melhores linhas de crédito." },
                    { id: 25, cat: 'legal', nome: "Abertura e Legalização de Empresas", icone: "bi-file-check", corTexto: "text-warning", imgId: "1454157471167-7f415f903966", 
                      descricao: "Trâmite burocrático integral na conservatória, alvarás comerciais e registos fiscais para início imediato da atividade." },
                    { id: 26, cat: 'gestao', nome: "Softwares de Facturação", icone: "bi-cpu-fill", corTexto: "text-primary", imgId: "1551434678-e21f4161ec4a", 
                      descricao: "Implementação e parametrização de sistemas ERP homologados para emissão rápida e legal de faturas." },
                    { id: 27, cat: 'legal', nome: "Formação Profissional (Estágios)", icone: "bi-person-workspace", corTexto: "text-danger", imgId: "1524178232363-1fe2b075b655", 
                      descricao: "Programas regulamentados de inserção de jovens talentos para rejuvenescimento do quadro de pessoal interno." }
                ]
    };
  },

 computed: {
                servicosFiltrados: function() {
                    var self = this;
                    return self.servicos.filter(function(servico) {
                        var termo = self.pesquisa.toLowerCase();
                        var batePesquisa = servico.nome.toLowerCase().includes(termo) || servico.descricao.toLowerCase().includes(termo);
                        var bateCategoria = self.categoriaSelecionada === 'todos' || servico.cat === self.categoriaSelecionada;
                        return batePesquisa && bateCategoria;
                    });
                }
            },
            methods: {
                encontrarNomeCategoria: function(catId) {
                    var correspondencia = this.categorias.find(function(item) { return item.id === catId; });
                    return correspondencia ? correspondencia.nome : '';
                },
                abrirAgendamento: function(servico) {
                    this.formAgendamento.categoria = this.encontrarNomeCategoria(servico.cat);
                    this.formAgendamento.servicoNome = servico.nome;
                    
                    this.formAgendamento.clienteNome = '';
                    this.formAgendamento.clienteEmail = '';
                    this.formAgendamento.dataPreferencia = '';

                    this.instanciaModal.show();
                },
                submeterFormulario: function() {
                    alert('Pedido de consultoria enviado com sucesso para: ' + this.formAgendamento.servicoNome);
                    this.instanciaModal.hide();
                }
            },
            mounted: function() {
                this.instanciaModal = new bootstrap.Modal(document.getElementById('modalAgendamento'));
            },

 
    template: await get_template("./assets/js/view/servicos/home"),
};