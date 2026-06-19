import get_template from "../../components/get_template.js";
import { bus } from "../../components/bus.js"; // ajuste caminho

export default {
    data: function() {
        return {
            mostrarModal: false
        };
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


    created() {

    },

    mounted() {

    },

    template: await get_template("./assets/js/components/menu/home"),
};