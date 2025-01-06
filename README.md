# Photo Gallery

Photo Gallery é uma aplicação web construída com React que consome a API do Unsplash para exibir uma galeria de fotos. Os usuários podem pesquisar por fotos utilizando uma barra de busca e clicar nas fotos para disparar um evento de download.
![image](https://github.com/user-attachments/assets/47f1e108-a3a1-4af5-a933-dcd4edd02bb7)




## Tecnologias Utilizadas

- React
- Vite
- Axios
- Unsplash API

## Funcionalidades

- Buscar fotos na API do Unsplash
- ![image](https://github.com/user-attachments/assets/e8d9fb73-4a65-44df-9667-999d3c2e7a5e)

- Exibir fotos em uma grade responsiva
- ![image](https://github.com/user-attachments/assets/fc8e3975-3eca-4bc4-8474-65bc78177383)

- Filtrar fotos com base em um termo de busca
- ![image](https://github.com/user-attachments/assets/8bcf4324-e813-4fa5-a01e-d5df783e810f)

- Disparar evento de download ao clicar em uma foto
- ![image](https://github.com/user-attachments/assets/0b8f1e75-693d-4723-b8b4-ff5a37a3a750)


## Instalação

Para rodar esta aplicação localmente, siga os passos abaixo:

- Clone o repositório:
 
   ```bash
   git clone https://github.com/teofilonicolau/photo-gallery.git
   cd photo-gallery
  ```

- Instale as dependências:

```bash
   npm install
   npm install axios dotenv


```
- Configure as variáveis de ambiente: Crie um arquivo .env na raiz do projeto e adicione sua chave de acesso do Unsplash:
    ```bash
    VITE_UNSPLASH_ACCESS_KEY=SUA_CHAVE_DE_ACESSO

  ```
 - Inicie o servidor de desenvolvimento:
   ```bash
     npm run dev


   ```
- Abra o navegador e acesse
   http://localhost:5175
  
- Estrutura do Projeto :
  ```
    photo-gallery/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Header.jsx
    │   │   ├── SearchBar.jsx
    │   │   ├── PhotoCard.jsx
    │   │   ├── PhotoGrid.jsx
    │   │   ├── Footer.jsx
    │   ├── App.jsx
    │   ├── styles.css
    ├── .env
    ├── index.html
    ├── package.json
    ├── vite.config.js

   ```
  ### Contribuindo
  - Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

 ### Feito  por Teófilo Nicolau   
   

    
  
 
