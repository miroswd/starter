import api from './api'
             // './api' -> arquivo local
             // 'api'   -> para arquivos de terceiro, no caso, o node_modules

class App{
    // Controla toda a aplicação
    constructor(){
        this.repositories = []; // Guarda toda a lista de repositórios do Github 

        this.formElement = document.querySelector('form#repo-form')
        this.inputEl = document.querySelector('input[name=repository]')
        this.listElement = document.querySelector('ul#repo-list') 

        this.registerHandlers()
    }

    registerHandlers(){
        // Registra os eventos, ex.: submitar o form
        // Vai ouvir o evento

        this.formElement.onsubmit = event => this.addRepository(event)
    }

    setLoading(loading = true){
           if(loading === true) {
               let loadingEl = document.createElement('span')
               loadingEl.appendChild(document.createTextNode('Carregando'))
               loadingEl.setAttribute('id','loading')

               this.formElement.appendChild(loadingEl)
           } else {
               document.querySelector('#loading').remove()
           }
    }

    async addRepository(event){
        event.preventDefault(); // Não deixa o form ter o funcionamento do html
                                // de recarregar a página, mandar um método get ou post
        
        const repoInput = this.inputEl.value
        
        // Verificar se tem algo no input

        

        if (repoInput.length === 0)
            return; 
        this.setLoading()
        try {
        const response = await api.get(`https://api.github.com/repos/${repoInput}`)

        const {name, description, html_url, owner:{avatar_url}} = response.data

        this.inputEl.value = '';


        this.repositories.push({
            name,
            description,
            avatar_url,
            html_url
        })                                

        this.render()
        }  catch(err) {
            this.inputEl.value = '';
            alert('O repositório non ecxiste')
        }

        this.setLoading(false)
    }

    render(){
        // Apaga o conteúdo da lista e renderizar do zero
        this.listElement.innerHTML = '';

        // Map -> retorna o valor que tem nele, faz alterações nos itens
        // forEach -> Só percorre, não faz alterações

        this.repositories.forEach(repo => {
            // Criar os elementos e renderizar em tela
            let imgEl = document.createElement('img') //  Let -> apenas no escopo
            imgEl.setAttribute('src',repo.avatar_url)

            let titleEl = document.createElement('strong')
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p')
            descriptionEl.appendChild(document.createTextNode(repo.description))

            let linkEl = document.createElement('a')
            linkEl.setAttribute('target','_blank') // Abre uma nova aba
            linkEl.setAttribute('href',repo.html_url)
            linkEl.appendChild(document.createTextNode('Acessar'))

            let listItemEl = document.createElement('li')
            listItemEl.appendChild(imgEl)
            listItemEl.appendChild(titleEl)
            listItemEl.appendChild(descriptionEl)
            listItemEl.appendChild(linkEl)
            
            this.listElement.appendChild(listItemEl)
        })
    }
}

// const MeuApp = new App() -> como essa classe não será reutilizada, não há necessidade de criar uma variável
new App();