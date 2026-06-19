import get_template from "../../components/get_template.js";

export default {
  data: function () {
    return {
         companyName: 'Exuta',
            partners: ['LOGOPSUM', 'LOGOPSUM', 'LOGOPSUM', 'LOGOPSUM'],
            historyTimeline: [
                { year: '10/ 2023', title: 'O Início da Transformação', desc: 'Um período de reflexão e superação deu origem à visão que mais tarde se tornaria a base da FinanceWell.', active: false },
                { year: 'Início - 2024', title: ' Planeamento Estratégico', desc: 'Desenvolvimento do plano de negócios e definição da estratégia que orientaria a criação e o crescimento da empresa.', active: false },
                { year: '19/ 4/ 2024', title: 'Fundação da FinanceWell', desc: 'Criação oficial da empresa, marcando o início de uma nova jornada focada em soluções financeiras e consultoria de excelência.', active: true },
                { year: '29/ 4/ 2024', title: 'Legalização da Empresa', desc: 'Conclusão do processo de legalização e início da consolidação da marca no mercado.', active: false }
            ],
            stats: [
                { value: '50+', label: 'Empresas Impactadas' },
                { value: '1.650+', label: 'Horas de Formação' },
                { value: '98%', label: 'Taxa de Satisfação' },
                { value: '24/7', label: 'Suporte ao Cliente' }
            ]
    };
  },

  methods: {},

  template: await get_template("./assets/js/view/sobre/home"),
};
