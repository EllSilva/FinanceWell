import get_template from "../get_template.js";
import {
    bus
} from "../bus.js"; // ajuste caminho

export default {
    data: function () {
        return {
               nome: '',
                email: '',
                telefone: '',
                provincia: '',
                categoria: '',
                curso: '',
                pacote: '',
                mensagem: '',

            categoriaSelecionada: '',
            cursoSelecionado: '',
            // Estrutura de dados baseada na tua tabela
            dados: {
                "CONTABILIDADE": [
                    "Contabilidade Aplicada", "Fecho de Contas", "Abertura de Contas",
                    "Regularizações de Contas", "Reconciliações de Contas", "Apuramento do IVA"
                ],
                "FISCALIDADE": [
                    "Fiscalidade Angolana (AGT e INSS)", "Portal do contribuinte Iniciante",
                    "Portal do Contribuinte Intermédio", "Imposto de Selo", "Imposto Sobre o Valor Acrescentado"
                ],
                "RECURSOS HUMANOS": [
                    "Recursos Humanos Aplicada", "Processamento Salarial", "Higiene e Segurança no Trabalho"
                ],
                "CONSULTORIA": [
                    "Consultoria Empresarial", "Constituição e Legalização de Empresas", "Plano de Negocio"
                ],
                "INFORMÁTICA": [
                    "Excel", "Word", "Power Point", "Optica do Utilizador"
                ]
            },

            niveis: [
                'Iniciante',
                'Intermediário',
                'Avançado',
                'Especialista'
            ],
 
 
             
       
        };
    },
    computed: {
        // Esta função roda sozinha sempre que 'categoriaSelecionada' mudar
        cursosFiltrados() {
            if (!this.categoriaSelecionada) {
                return [];
            }
            // Retorna apenas o array de cursos da categoria que o usuário escolheu
            return this.dados[this.categoriaSelecionada];
        }
    },
    methods: {
        enviarWhatsApp() {
 alert("1111");
            if (!this.nome || !this.telefone) {
                alert("Preencha Nome e Telefone!");
                return;
            }

            const texto = `*Nova Inscrição no ACADEMIA Finance Well*

*Nome:* ${this.nome}
*Email:* ${this.email}
*Telefone:* ${this.telefone}
*Província:* ${this.provincia}
*Categoria:* ${this.categoriaSelecionada}
*Curso:* ${this.cursoSelecionado}
*Pacote:* ${this.pacote}
*Mensagem:* ${this.mensagem}

Por favor, entre em contacto para confirmar minha inscrição. Obrigado!`;

            const numero = "244900000000"; // 👉 teu número

            const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

            window.open(url, '_blank');
        }

    },


    created() {

    },

    mounted() {

    },

    template: await get_template("./assets/js/components/formulario/home"),
};