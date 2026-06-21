import get_template from "../../components/get_template.js";

export default {
    data: function() {
        return {
            images: [{
                thumb: './assets/img/gallery/003.jpeg',
                full: './assets/img/gallery/003.jpeg',
                title: '<h4>Imagem 2</h4>'
            }, {
                thumb: './assets/img/gallery/004.jpeg',
                full: './assets/img/gallery/004.jpeg',
                title: '<h4>Imagem 2</h4>'
            }, {
                thumb: './assets/img/gallery/005.jpeg',
                full: './assets/img/gallery/005.jpeg',
                title: '<h4>Imagem 2</h4>'
            }, {
                thumb: './assets/img/gallery/006.jpeg',
                full: './assets/img/gallery/006.jpeg',
                title: '<h4>Imagem 2</h4>'
            }, {
                thumb: './assets/img/gallery/001.jpeg',
                full: './assets/img/gallery/001.jpeg',
                title: '<h4>Imagem 2</h4>'
            }, {
                thumb: './assets/img/gallery/002.jpeg',
                full: './assets/img/gallery/002.jpeg',
                title: '<h4>Imagem 2</h4>'
            }, {
                thumb: './assets/img/gallery/0013.jpeg',
                full: './assets/img/gallery/0013.jpeg',
                title: '<h4>Imagem 3</h4>'
            }, {
                thumb: './assets/img/gallery/0014.jpeg',
                full: './assets/img/gallery/0014.jpeg',
                title: '<h4>Imagem 1</h4><p>Descrição da imagem</p>'
            }, {
                thumb: './assets/img/gallery/0015.jpeg',
                full: './assets/img/gallery/0015.jpeg',
                title: '<h4>Imagem 2</h4>'
            }, {
                thumb: './assets/img/gallery/0016.jpeg',
                full: './assets/img/gallery/0016.jpeg',
                title: '<h4>Imagem 3</h4>'
            }, {
                thumb: './assets/img/gallery/0017.jpeg',
                full: './assets/img/gallery/7001.jpeg',
                title: '<h4>Imagem 1</h4><p>Descrição da imagem</p>'
            }, {
                thumb: './assets/img/gallery/008.jpeg',
                full: './assets/img/gallery/008.jpeg',
                title: '<h4>Imagem 2</h4>'
            }, {
                thumb: './assets/img/gallery/009.jpeg',
                full: './assets/img/gallery/009.jpeg',
                title: '<h4>Imagem 3</h4>'
            }, {
                thumb: './assets/img/gallery/009.jpeg',
                full: './assets/img/gallery/009.jpeg',
                title: '<h4>Imagem 3</h4>'
            }, {
                thumb: './assets/img/gallery/0012.jpeg',
                full: './assets/img/gallery/0012.jpeg',
                title: '<h4>Imagem 3</h4>'
            }, {
                thumb: './assets/img/gallery/0010.jpeg',
                full: './assets/img/gallery/0010.jpeg',
                title: '<h4>Imagem 3</h4>'
            }, {
                thumb: './assets/img/gallery/0011.jpeg',
                full: './assets/img/gallery/0011.jpeg',
                title: '<h4>Imagem 2</h4>'
            },  {
                thumb: './assets/img/gallery/0018.jpeg',
                full: './assets/img/gallery/0018.jpeg',
                title: '<h4>Imagem 4</h4>'
            }]
        };
    },

    methods: {},

    mounted() {
        this.$nextTick(() => {
            // Inicializa o lightGallery
            lightGallery(document.getElementById('lightgallery'), {
                plugins: [lgZoom, lgThumbnail],
                speed: 500,
                // CRUCIAL: Diz ao lightGallery para tratar os links 'a' como itens da galeria
                selector: 'a'
            });
        });
    },

    template: await get_template("./assets/js/view/galeria/home"),
};