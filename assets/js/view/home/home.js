import get_template from "../../components/get_template.js";

export default {
    data: function () {
        return {
            abaAtiva: 'gestao',
            diferenciais: [
                { icone: 'fa-solid fa-chart-pie', texto: 'Modelagem de Processos' },
                { icone: 'fa-solid fa-chalkboard-user', texto: 'Mentoria Executiva Individual' },
                { icone: 'fa-solid fa-scale-balanced', texto: 'Compliance e Governança' },
                { icone: 'fa-solid fa-lightbulb', texto: 'Inovação e Engenharia de Negócios' }
            ],
                 equipe: [
                    {
                        nome: 'Joss Anderson',
                        cargo: 'Art Director',
                        foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=500',
                        socialIcon: 'fa-brands fa-facebook-f',
                        socialUser: 'Facebook/user'
                    },
                    {
                        nome: 'Joss Anderson',
                        cargo: 'Ux Designer',
                        foto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500',
                        socialIcon: 'fa-brands fa-twitter',
                        socialUser: 'Twitter/user'
                    },
                    {
                        nome: 'Joss Anderson',
                        cargo: 'Web Designer',
                        foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500',
                        socialIcon: 'fa-brands fa-linkedin-in',
                        socialUser: 'LinkedIn/user'
                    },
                    {
                        nome: 'Joss Anderson',
                        cargo: 'SEO Expert',
                        foto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500',
                        socialIcon: 'fa-brands fa-instagram',
                        socialUser: 'Instagram/user'
                    },
                    {
                        nome: 'Joss Anderson',
                        cargo: 'Developer',
                        foto: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=500',
                        socialIcon: 'fa-brands fa-github',
                        socialUser: 'Github/user'
                    }
                ],

            servicos: [
              
                {
                    id: 2, cat: 'cont', titulo: "Contabilidade Geral", icone: "bi-calculator-fill", corTexto: "text-indigo", imgId: "1554224155-8d04cb21cd6c",
                    descricao: "Classificação, registo e execução das obrigações contabilísticas diárias da sua empresa segundo as normas em vigor."
                },
                {
                    id: 3, cat: 'cont', titulo: "Contabilidade Analítica", icone: "bi-pie-chart-fill", corTexto: "text-indigo", imgId: "1460925895917-afdab827c52f",
                    descricao: "Apuramento detalhado de custos por produto, setor ou departamento, auxiliando na fixação estratégica de preços."
                },
                {
                    id: 4, cat: 'cont', titulo: "Contabilidade Pública", icone: "bi-bank2", corTexto: "text-indigo", imgId: "1526304640581-d334cdbbf45e",
                    descricao: "Gestão financeira especializada para órgãos estatais, autarquias e instituições do setor público administrativo."
                },
            
                {
                    id: 6, cat: 'legal', titulo: "Processamento Salarial", icone: "bi-wallet2", corTexto: "text-danger", imgId: "1579621970563-ebec7560ff3e",
                    descricao: "Emissão automatizada de recibos de vencimento, guias da Segurança Social e gestão integral de folhas de pagamento."
                },
             
                {
                    id: 9, cat: 'mkt', titulo: "Marketing e Publicidade", icone: "bi-megaphone-fill", corTexto: "text-info", imgId: "1460925895917-afdab827c52f",
                    descricao: "Criação de campanhas de posicionamento de marca e captação de clientes nos canais digitais e tradicionais."
                },
                {
                    id: 10, cat: 'legal', titulo: "Recursos Humanos", icone: "bi-people-fill", corTexto: "text-danger", imgId: "1600880292203-757bb62b4baf",
                    descricao: "Gestão estratégica de talento, englobando admissão, avaliação de desempenho e mediação de contratos de trabalho."
                },
                {
                    id: 11, cat: 'gestao', titulo: "Organização Administrativa", icone: "bi-layers-half", corTexto: "text-primary", imgId: "1497366216548-37526070297c",
                    descricao: "Implementação de metodologias para triagem documental, arquivo digital e fluxos organizacionais eficientes."
                },
                {
                    id: 12, cat: 'cont', titulo: "Auditoria Financeira", icone: "bi-clipboard-check-fill", corTexto: "text-indigo", imgId: "1590283603385-17ffb3a7f29f",
                    descricao: "Exame pericial independente aos seus registos contabilísticos para certificar a total transparência dos seus relatórios."
                },
                {
                    id: 13, cat: 'cont', titulo: "Orçamentos", icone: "bi-graph-down", corTexto: "text-indigo", imgId: "1559526324-4b87b5e36e44",
                    descricao: "Previsão meticulosa de receitas e despesas futuras para blindar o fluxo de caixa contra flutuações de mercado."
                },
                {
                    id: 14, cat: 'gestao', titulo: "Consultoria e Auditoria de obras", icone: "bi-building-fill", corTexto: "text-primary", imgId: "1541888946425-d81bb19240f5",
                    descricao: "Fiscalização financeira, controlo de custos de materiais e prazos de execução em projetos de engenharia e construção."
                },
              
                {
                    id: 16, cat: 'mkt', titulo: "Estudo de Viabilidade Económica", icone: "bi-briefcase", corTexto: "text-info", imgId: "1551836022-d5d88e9218df",
                    descricao: "Análise quantitativa profunda para comprovar se um novo investimento ou projeto gerará lucros sustentáveis."
                },
                {
                    id: 17, cat: 'mkt', titulo: "Plano de Negócio", icone: "bi-lightbulb-fill", corTexto: "text-info", imgId: "1507537297725-24a1c029d3ca",
                    descricao: "Desenho do roteiro estratégico e financeiro completo essencial para captar investidores ou financiamento bancário."
                },
                
              
                {
                    id: 20, cat: 'gestao', titulo: "Plano Estratégico", icone: "bi-compass-fill", corTexto: "text-primary", imgId: "1486406146926-c627a92ad1ab",
                    descricao: "Definição de metas plurianuais, visão de posicionamento de mercado e planos de ação para a sua liderança corporativa."
                },



            ],
            galeriaAbas: [
                { id: 'gestao', titulo: 'GESTÃO E FINANÇAS' },
                { id: 'lideranca', titulo: 'LIDERANÇA E RH' },
                { id: 'vendas', titulo: 'MARKETING & VENDAS' }
            ],
            galeriaImagens: {
                gestao: [
                    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=500&q=80'
                ],
                lideranca: [
                    'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1531535934027-667f687cfe5f?auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80'
                ],
                vendas: [
                    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=500&q=80'
                ]
            },

            posts: [{
                title: "A NASA responde às suas perguntas mais urgentes sobre a Artemis II",
                tag: "Tecnologia",
                readTime: "4 min",
                author: "Eugênio Nelson",
                date: "04 abr, 2026",
                authorImg: "https://ui-avatars.com/api/?name=EN&background=0d6efd&color=fff",
                excerpt: "Nota do editor: Esta matéria foi atualizada às 12h40 EDT (horário de Luanda) do domingo...",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400"
            }, {
                title: "O que é um agente de IA?",
                tag: "Tecnologia",
                readTime: "5 min",
                author: "Eugênio Nelson",
                date: "03 abr, 2026",
                authorImg: "https://ui-avatars.com/api/?name=EN&background=0d6efd&color=fff",
                excerpt: "O guia sobre agentes de IA: Uma breve explicação dos agentes de IA e como eles funcionam...",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400"
            }, {
                title: "Alerta Android 15: O Fim do setStatusBarColor",
                tag: "Tecnologia",
                readTime: "4 min",
                author: "Eugênio Nelson",
                date: "27 mar, 2026",
                authorImg: "https://ui-avatars.com/api/?name=EN&background=0d6efd&color=fff",
                excerpt: "Android 15 muda a forma como as barras de sistema funcionam. Saiba como se preparar...",
                image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&q=80&w=400"
            }]
        }
    },


    computed: {
        imagensFiltradas() {
            return this.galeriaImagens[this.abaAtiva];
        }
    },

    methods: {
        abrirContato() {
            alert('Abrindo formulário de agendamento de reuniões e diagnósticos corporativos.');
        },
        baixarApresentacao() {
            alert('Iniciando o download do Portfólio Institucional da Alliance Consultoria...');
        },
        falarConsultor() {
            alert('Redirecionando para o canal de atendimento exclusivo via WhatsApp Corporate...');
        },
        abrirHub() {
            alert('Carregando a lista de escritórios regionais e contatos locais.');
        }
    },

    mounted() {
        const progressFill = document.querySelector('.progress-bar-fill');
        const autoplayDelay = 7000; // Tempo aumentado levemente para a leitura confortável das frases

        this.$nextTick(() => {
            new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }
            });
        });

        new Swiper('.swiper-hero', {
            loop: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            speed: 1200,
            autoplay: {
                delay: autoplayDelay,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.btn-next-hero',
                prevEl: '.btn-prev-hero',
            },
            pagination: {
                el: '.swiper-pagination-custom',
                type: 'bullets',
                clickable: true
            },
            on: {
                autoplayTimeLeft(s, time, progress) {
                    if (progressFill) {
                        progressFill.style.width = (1 - progress) * 100 + '%';
                    }
                },
                slideChange() {
                    if (progressFill) progressFill.style.width = '0%';
                }
            }
        });


 this.$nextTick(() => {
                    new Swiper('.swiper-container', {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        loop: true, // Ativado para que o carrossel seja infinito e mantenha o "segundo card" ativo
                        autoplay: {
                            delay: 5000,
                            disableOnInteraction: false,
                        },
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true,
                        },
                        navigation: {
                            nextEl: '.btn-swiper-next',
                            prevEl: '.btn-swiper-prev',
                        },
                        breakpoints: {
                            576: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            }
                        }
                    });
                });





    },

    template: await get_template("./assets/js/view/home/home"),
};