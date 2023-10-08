var nome = "Anderson Otello";

function calcular() {
	var nota1Bim = parseInt(document.getElementById("nota1").value);
	var nota2Bim = parseInt(document.getElementById("nota2").value);
	var nota3Bim = parseInt(document.getElementById("nota3").value);
	var nota4Bim = parseInt(document.getElementById("nota4").value);

	var notaMedia = (nota1Bim + nota2Bim + nota3Bim + nota4Bim) / 4;
	var notaFixada = notaMedia.toFixed(1);

	console.log("Sua Nota Media Foi " + notaFixada);

	var resultado = document.getElementById("resultado");
	var impressao = "Sua nota media é " + notaFixada;
	resultado.innerHTML = impressao;

	var mediaEscolar = parseInt(document.getElementById("mediaEscola").value);

	if (notaFixada >= mediaEscolar) {
		var resultadoAprovacao = document.getElementById("aprovacao");
		var impressaoAprovacao = "você foi aprovado";
		resultadoAprovacao.innerHTML = impressaoAprovacao;
	} else {
		var resultadoAprovacao = document.getElementById("aprovacao");
		var impressaoAprovacao = "você não foi aprovado";
		resultadoAprovacao.innerHTML = impressaoAprovacao;
	}
}