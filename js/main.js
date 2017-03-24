$( document ).ready(function() {
	//Codigo especial para esta libreria para "inicializar" el campo select
	$('[data-toggle="select"]').select2();
});

function showQuestions()
{
	$('#respuesta').fadeOut("slow",function(){

		//Se completo la animacion. Mostrar las preguntas de nuevo
		$("#preguntas").fadeIn("slow", function(){
			//no tengo que hacer nada mas en ese caso
		})
	});

}
