import get_template from "../../components/get_template.js";

export default {
  data: function () {
    return {
      formData: {
        name: '',
        company: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      },
      submitted: false
    };
  },
  methods: {
    submitForm() {
      console.log("Dados enviados:", this.formData);
      this.submitted = true;
      setTimeout(() => {
        this.submitted = false;
        this.formData = { name: '', company: '', phone: '', email: '', subject: '', message: '' };
      }, 4000);
    }
  },
  async mounted() {
    AOS.init({
      duration: 1000,
    });
  },
  template: await get_template("./assets/js/view/contato/home"),
};
