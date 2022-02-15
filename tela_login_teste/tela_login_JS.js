
const classes_css = {
    degrade: 'tela_fundo_degrade',
    imagem_fundo: 'tela_fundo_imagem',
    mudar_fundo_botao_clicado:'mudanca_selecionada'
}

function mudar_tela_fundo(efeito_fundo){

mudar_cor_fundo_botao_selecionado(efeito_fundo)

const tela_fundo = document.querySelector('.conteudo_total')
const classes_ativas = tela_fundo.classList

classes_ativas.remove(classes_ativas.item(1))

if(efeito_fundo === classes_css['degrade']){
    classes_ativas.add(classes_css['degrade'])
}
else if(efeito_fundo === classes_css['imagem_fundo']){
    classes_ativas.add(classes_css['imagem_fundo'])
}

}

function mudar_cor_fundo_botao_selecionado(botao_clicado){
    const botoes_mudar_tela_fundo = document.querySelectorAll(`button[botao_mudar_tela_fundo_imagem],button[botao_mudar_tela_fundo_degrade]`)

    botoes_mudar_tela_fundo.forEach((botao) =>{
        botao.removeAttribute('class')
    })

    if(botao_clicado === classes_css['degrade']){
        botoes_mudar_tela_fundo[1].setAttribute('class', classes_css['mudar_fundo_botao_clicado'])
    }
    else if(botao_clicado === classes_css['imagem_fundo']){
        botoes_mudar_tela_fundo[0].setAttribute('class', classes_css['mudar_fundo_botao_clicado'])
    }

}

function fazer_login(){

const email = document.querySelector('.login_usuario > input[type = "email"]')
const senha = document.querySelector('.login_usuario > input[type = "password"]')

if(email.value === '' || senha.value === ''){
    alert('Preencha todos os campos')
}
else{
    alert('Login feito com sucesso!')
}

}

function mostrar_conteudo_mudar_aparencia(){
    const conteudo_mudar_aparencia = document.querySelector('.conteudo_mudar_aparencia')
    conteudo_mudar_aparencia.setAttribute('style','display: block;')
} 