
const popup_conteudo_navegacao = document.querySelector('#popup_conteudo_navegacao')

const classes_css = {
    exibir_elemento: 'ocultar'
}

function mostrar_popup(popup_selecionado){
    
   const classes_ativas_popup_conteudo_navegacao = popup_conteudo_navegacao.classList
   const popup_mostrado =  document.querySelector(`#${popup_selecionado}`)
   const todos_popup_navegacao = document.querySelectorAll('#popup_noticias, #popup_comparar, #popup_cupons_descontos')
   
    todos_popup_navegacao.forEach((e) =>{
        e.classList.add(classes_css.exibir_elemento)
    })

    classes_ativas_popup_conteudo_navegacao.remove(classes_css.exibir_elemento)
    popup_mostrado.classList.remove(classes_css.exibir_elemento)
}

function fechar_popup(){
    popup_conteudo_navegacao.classList.add(classes_css.exibir_elemento)
}

let exibir = true
function mostrar_conteudo_navegacao(){
    const conteudo_navegacao = document.querySelector('.conteudo_navegacao')

    if(exibir === true){
        exibir = false
        conteudo_navegacao.style.display = 'block'
    }
    else if(exibir === false){
        exibir = true
        conteudo_navegacao.style.display = 'none'
    }
}