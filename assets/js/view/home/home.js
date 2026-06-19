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
            },  {
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
    },

    template: await get_template("./assets/js/view/home/home"),
};