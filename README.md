
# Weather Forecast App - Platform Builders

<!--ts-->
 * [Sobre](#sobre) 
 * [Telas](#telas) 
 * [Instalação](#instalacao) 
 * [Como usar](#como-usar) 
 * [Testes](#testes) 
 * [Desenvolvimento e Tecnologias](#tecnologias) 
  <!--te-->

  

### Aplicação web desenvolvida como desafio técnico no processo seletivo para Web Developer na empresa Builders.
<a id="sobre"></a>

  

### Desafio

Desenvolva um aplicativo que consuma a localização atual do usuário e exiba na interface o endereço atual os dados climáticos da região e um botão para atualizar os dados. - Para fazer essa busca, pode-se usar a [API do Open Weather](https://openweathermap.org/api) Map.

  

### Telas
<a id="telas"></a>
  

<img  src="weather_forecast_builders/src/assets/Screen_mobile.png"  alt="Screen_mobile"/>

  

<img  src="weather_forecast_builders/src/assets/Screen_web.png"  alt="Screen_web"/>

##  Instruções de instalação.
<a id="instalacao"></a>
- Faça o download utilizando **`git clone git@github.com:rodrigocdfidencio/weather_forecast_builders.git`** 
- Acesse a pasta da aplicação com o comando  **`cd weather_forecast_builders`** 
- Execute o comando **`npm install`** para instalar as dependências do projeto.

## Como rodar o projeto
- Para rodar a aplicação, utilize  **`npm start`** 

## Testes
<a id="testes"></a>
- Para rodar os testes, utilize **`npm test`** 

## Utilização
<a id="como-usar"></a>
- A aplicação utiliza a localização do usuário e define os parâmetros de latitude e longitude para realizar a consulta na API do Open Weather Map
- A localização do usuário é setada através da propriedade **`Navigator.geolocation`**  que retorna um objeto [`Geolocation`](https://developer.mozilla.org/pt-BR/docs/Web/API/Geolocation) que disponibiliza acesso de conteúdo Web à localização do dispositivo.
- Após a definição da localização do usuário, a consulta na API do Open Weather Map é realizada e retorna com os dados de cidade do usuário, clima, temperatura, sensação térmica, umidade do ar e velocidade do vento.
- Na tela é exibido também o horário da última consulta realizada.
- Para realizar uma nova consulta, o usuário deve clicar no botão atualizar.

## Sobre o desenvolvimento e tecnologias utilizadas.
<a id="tecnologias"></a>
- Para desenvolver a aplicação, foi utilizada a linguagem Javascript, através do framework React.js.
- Os testes foram escritos utilizando o Jest e React testing library. 
- Aplicação desenvolvida utilizando modo responsivo
- Deploy realizado no firebase, disponível no endereço:
- https://weather-forecast-builders.web.app/
- Por se tratar de desafio técnico, o arquivo .ENV está disponível junto do código, para facilitar a utilização.
