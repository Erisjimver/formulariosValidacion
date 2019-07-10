
	$(document).ready(function() {
		
		//$("#form_datos").validate();

		
			$("#form_datos").validate({//inicia validate

				rules:{

					nombre:"required",
          apellido:"required",
          f_nacimiento: {

            date: true,
            required: true
          },
          edad:{
            number:true,
            range:[1,105]
          },

          mail:"email",
          p_web:"url"

				},

        messages:{

          nombre:"Obligatorio",
          apellido:"Obligatorio",
          f_nacimiento:{
            required:"Obligatorio",
            date:"Formato no valido"
          },
          edad:{
            number:"Debe ser numerico",
            range: "Entre 1 y 105"
          },
          mail: "E-mail incorrecto",
          p_web: "http://....."

        }

			});//termina validate
		
		
	});