$(document).ready(function () {
	let videos = document.querySelector("#video");
	let titulo = document.querySelector("#tituloAssistir");

	$("#btAssistir").click(function () {
		tituloAssistir.innerHTML = "Scoob Doo";
		videos.setAttribute("src", "desenhos/" + $(this).attr("data-desenho"));
		$("#modalAssistir").modal("show");
	});

	$("#btInfo").click(function () {
		$("#modalInfo").modal("show");
	});

	$(".item").on("click", ".box-filme", function () {
		let desenho = $(this).attr("data-desenho");
		if (!desenho) {
			alert("mp4 não encontrado");
			return false;
		}
		titulo.innerHTML = $(this).attr("data-titulo");
		videos.setAttribute("src", "desenhos/" + desenho);
		$("#modalAssistir").modal("show");
	});

	$("#modalAssistir").on("hide.bs.modal", function () {
		videos.pause();
	});
});
