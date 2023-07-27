// JavaScript Document
var caixa_resultado = document.getElementById('caixa_resultado');

function clica_botao(obj)
{
	var botao_clicado = obj.innerHTML;
	switch(true)
{
	/*a linha seguinte verifica se foi clicado o botão = 
	a função eval() converte e calcula uma expressão
	aritmética e converte d texto para número */
	case (botao_clicado == '='):
		caixa_resultado.innerHTML =
		eval(caixa_resultado.innerHTML);
		break;
		
	// se carregar no botão AC, no resultado aparece 0
	case (botao_clicado == 'AC'):
		caixa_resultado.innerHTML = '0';
		break;
	
	/* se no resultado tiver zero,
		resultado recebe o texto do botão clicado */
	case (caixa_resultado.innerHTML == '0'):
		caixa_resultado.innerHTML = botao_clicado;
		break;
	
	// Acrescenta o texto do botão clicado ao texto do resultado
	default:
	caixa_resultado.innerHTML = 
	caixa_resultado.innerHTML + botao_clicado;
		
	// se carregar no botão X^2, então calcula X elevado a 2 
	case (botao_clicado == 'X^2'):
		caixa_resultado.innerHTML =
		caixa_resultado.innerHTML + "**2";
		break;
	
	// se carregar no botão X^Y, então calcula X elevado a Y 
	case (botao_clicado == 'X^Y'):
		caixa_resultado.innerHTML =
		caixa_resultado.innerHTML + "**";
		break;
		
	// se carregar no botão Sqrt(X), então calcula a raiz quadrada de X 
	case (botao_clicado == 'Sqrt(X)'):
		caixa_resultado.innerHTML =
		Math.sqrt(caixa_resultado.innerHTML);
		break;
		
	// se carregar no botão DEL, apaga o último caracter 
	case (botao_clicado == 'DEL'):
		var texto = caixa_resultado.innerHTML;
		var texto2 = texto.substring(0, texto.length - 1);
		caixa_resultado.innerHTML = texto2;
		break;
		
	} //fim switch-case 
	
} //fim função